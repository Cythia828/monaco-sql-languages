import { LanguageServiceDefaults } from './_.contribution';
import {
	editor,
	Uri,
	IDisposable,
	MarkerSeverity,
	Range,
	languages,
	Position,
	CancellationToken
} from './fillers/monaco-editor-core';
import { debounce } from './common/utils';

export interface WorkerAccessor<T> {
	(first: Uri, ...more: Uri[]): Promise<T>;
}

export interface IWorker extends ILanguageWorkerWithCompletions {
	doValidation(uri: string): Promise<any>;
	valid(code: string): Promise<any>;
	parserTreeToString(code: string): Promise<any>;
}

export interface ILanguageWorkerWithCompletions {
	doComplete(uri: string, position: Position): Promise<languages.CompletionItem[] | null>;
}

export class DiagnosticsAdapter<T extends IWorker> {
	private _disposables: IDisposable[] = [];
	private _listener: { [uri: string]: IDisposable } = Object.create(null);

	constructor(
		private _languageId: string,
		private _worker: WorkerAccessor<T>,
		defaults: LanguageServiceDefaults
	) {
		const onModelAdd = (model: editor.IModel): void => {
			let modeId = model.getLanguageId();
			if (modeId !== this._languageId) {
				return;
			}

			this._listener[model.uri.toString()] = model.onDidChangeContent(
				debounce(() => {
					this._doValidate(model.uri, modeId);
				}, 600)
			);

			this._doValidate(model.uri, modeId);
		};

		const onModelRemoved = (model: editor.IModel): void => {
			editor.setModelMarkers(model, this._languageId, []);

			let uriStr = model.uri.toString();
			let listener = this._listener[uriStr];
			if (listener) {
				listener.dispose();
				delete this._listener[uriStr];
			}
		};

		this._disposables.push(editor.onDidCreateModel(onModelAdd));
		this._disposables.push(editor.onWillDisposeModel(onModelRemoved));
		this._disposables.push(
			editor.onDidChangeModelLanguage((event) => {
				onModelRemoved(event.model);
				onModelAdd(event.model);
			})
		);

		defaults.onDidChange((_) => {
			editor.getModels().forEach((model) => {
				if (model.getLanguageId() === this._languageId) {
					onModelRemoved(model);
					onModelAdd(model);
				}
			});
		});

		this._disposables.push({
			dispose: () => {
				for (let key in this._listener) {
					this._listener[key].dispose();
				}
			}
		});

		editor.getModels().forEach(onModelAdd);
	}

	public dispose(): void {
		this._disposables.forEach((d) => d && d.dispose());
		this._disposables = [];
	}

	private _doValidate(resource: Uri, languageId: string): void {
		this._worker(resource)
			.then((worker) => {
				return worker.doValidation(editor.getModel(resource)?.getValue() || '');
			})
			.then((diagnostics) => {
				const markers = diagnostics.map((d: any) => toDiagnostics(resource, d));
				let model = editor.getModel(resource);
				if (model && model.getLanguageId() === languageId) {
					editor.setModelMarkers(model, languageId, markers);
				}
			})
			.then(undefined, (err) => {
				console.error(err);
			});
	}
}

function toSeverity(lsSeverity: number): MarkerSeverity {
	switch (lsSeverity) {
		default:
			return MarkerSeverity.Error;
	}
}

function toDiagnostics(resource: Uri, diag: any): editor.IMarkerData {
	let code = typeof diag.code === 'number' ? String(diag.code) : <string>diag.code;

	return {
		severity: toSeverity(diag.severity),
		startLineNumber: diag.startLine,
		startColumn: diag.startCol,
		endLineNumber: diag.endLine,
		endColumn: diag.endCol,
		message: diag.message,
		code: code,
		source: diag.source
	};
}

export class CompletionAdapter<T extends IWorker> implements languages.CompletionItemProvider {
	constructor(private readonly _worker: WorkerAccessor<T>) {}

	provideCompletionItems(
		model: editor.IReadOnlyModel,
		position: Position,
		context: languages.CompletionContext,
		token: CancellationToken
	): Promise<languages.CompletionList | undefined> {
		const resource = model.uri;

		return this._worker(resource)
			.then((worker) => {
				return worker.doComplete(editor.getModel(resource)?.getValue() || '', position);
			})
			.then((info) => {
				console.log('info:', info);
				if (!info) {
					return;
				}
				const wordInfo = model.getWordUntilPosition(position);
				const wordRange = new Range(
					position.lineNumber,
					wordInfo.startColumn,
					position.lineNumber,
					wordInfo.endColumn
				);

				const items: languages.CompletionItem[] = info.map((entry: any) => {
					const item: languages.CompletionItem = {
						label: entry.label,
						insertText: entry.insertText || entry.label,
						range: wordRange,
						kind: entry.kind
					};
					return item;
				});

				return {
					suggestions: items
				};
			});
	}
}
