/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type { languages } from '../fillers/monaco-editor-core';
import { TokenClassConsts } from '../common/constants';

export const conf: languages.LanguageConfiguration = {
	comments: {
		lineComment: '--',
		blockComment: ['/*', '*/']
	},
	brackets: [
		['{', '}'],
		['[', ']'],

		['(', ')']
	],
	autoClosingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" }
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" }
	],
	folding: {
		markers: {
			start: /((EXECUTE\s+)?BEGIN\s+STATEMENT\b)|((EXECUTE\s+)?STATEMENT\s+BEGIN\b)/i,
			end: /(ROLLBACK\b)|(COMMIT\b)|(DEALLOCATE\b)|(END\b)/i
		}
	}
};

export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.sql',
	ignoreCase: true,

	brackets: [
		{ open: '[', close: ']', token: TokenClassConsts.DELIMITER_SQUARE },
		{ open: '(', close: ')', token: TokenClassConsts.DELIMITER_PAREN }
	],

	keywords: [
		'ALL',
		'ANALYSE',
		'ANALYZE',
		'AND',
		'ANY',
		'ARRAY',
		'AS',
		'ASC',
		'ASYMMETRIC',
		'BOTH',
		'CASE',
		'CAST',
		'CHECK',
		'COLLATE',
		'COLUMN',
		'CONSTRAINT',
		'CREATE',
		'CURRENT_CATALOG',
		'CURRENT_DATE',
		'CURRENT_ROLE',
		'CURRENT_TIME',
		'CURRENT_TIMESTAMP',
		'CURRENT_USER',
		'DEFAULT',
		'DEFERRABLE',
		'DESC',
		'DISTINCT',
		'DO',
		'ELSE',
		'EXCEPT',
		'FALSE',
		'FETCH',
		'FOR',
		'FOREIGN',
		'FROM',
		'GRANT',
		'GROUP',
		'HAVING',
		'IN',
		'INITIALLY',
		'INTERSECT',
		'INTO',
		'LATERAL',
		'LEADING',
		'LIMIT',
		'LOCALTIME',
		'LOCALTIMESTAMP',
		'NOT',
		'NULL',
		'OFFSET',
		'ON',
		'ONLY',
		'OR',
		'ORDER',
		'PLACING',
		'PRIMARY',
		'REFERENCES',
		'RETURNING',
		'SELECT',
		'SESSION_USER',
		'SOME',
		'SYMMETRIC',
		'TABLE',
		'THEN',
		'TO',
		'TRAILING',
		'TRUE',
		'UNION',
		'UNIQUE',
		'USER',
		'USING',
		'VARIADIC',
		'WHEN',
		'WHERE',
		'WINDOW',
		'WITH',
		'AUTHORIZATION',
		'BINARY',
		'COLLATION',
		'CONCURRENTLY',
		'CROSS',
		'CURRENT_SCHEMA',
		'FREEZE',
		'FULL',
		'ILIKE',
		'INNER',
		'IS',
		'ISNULL',
		'JOIN',
		'LEFT',
		'LIKE',
		'NATURAL',
		'NOTNULL',
		'OUTER',
		'OVER',
		'OVERLAPS',
		'RIGHT',
		'SIMILAR',
		'VERBOSE',
		'ABORT',
		'ABSOLUTE',
		'ACCESS',
		'ACTION',
		'ADD',
		'ADMIN',
		'AFTER',
		'AGGREGATE',
		'ALSO',
		'ALTER',
		'ALWAYS',
		'ASSERTION',
		'ASSIGNMENT',
		'AT',
		'ATTRIBUTE',
		'BACKWARD',
		'BEFORE',
		'BEGIN',
		'BY',
		'CACHE',
		'CALLED',
		'CASCADE',
		'CASCADED',
		'CATALOG',
		'CHAIN',
		'CHARACTERISTICS',
		'CHECKPOINT',
		'CLASS',
		'CLOSE',
		'CLUSTER',
		'COMMENT',
		'COMMENTS',
		'COMMIT',
		'COMMITTED',
		'CONFIGURATION',
		'CONNECTION',
		'CONSTRAINTS',
		'CONTENT',
		'CONTINUE',
		'CONVERSION',
		'COPY',
		'COST',
		'CSV',
		'CURSOR',
		'CYCLE',
		'DATA',
		'DATABASE',
		'DAY',
		'DEALLOCATE',
		'DECLARE',
		'DEFAULTS',
		'DEFERRED',
		'DEFINER',
		'DELETE',
		'DELIMITER',
		'DELIMITERS',
		'DICTIONARY',
		'DISABLE',
		'DISCARD',
		'DOCUMENT',
		'DOMAIN',
		'DOUBLE',
		'DROP',
		'EACH',
		'ENABLE',
		'ENCODING',
		'ENCRYPTED',
		'ENUM',
		'ESCAPE',
		'EVENT',
		'EXCLUDE',
		'EXCLUDING',
		'EXCLUSIVE',
		'EXECUTE',
		'EXPLAIN',
		'EXTENSION',
		'EXTERNAL',
		'FAMILY',
		'FIRST',
		'FOLLOWING',
		'FORCE',
		'FORWARD',
		'FUNCTION',
		'FUNCTIONS',
		'GLOBAL',
		'GRANTED',
		'HANDLER',
		'HEADER',
		'HOLD',
		'HOUR',
		'IDENTITY',
		'IF',
		'IMMEDIATE',
		'IMMUTABLE',
		'IMPLICIT',
		'INCLUDING',
		'INCREMENT',
		'INDEX',
		'INDEXES',
		'INHERIT',
		'NOINHERIT',
		'SUPERUSER',
		'NOSUPERUSER',
		'CREATEDB',
		'NOCREATEDB',
		'CREATEROLE',
		'NOCREATEROLE',
		'CREATEUSER',
		'NOCREATEUSER',
		'INHERITS',
		'INLINE',
		'INSENSITIVE',
		'INSERT',
		'INSTEAD',
		'INVOKER',
		'ISOLATION',
		'KEY',
		'LABEL',
		'LANGUAGE',
		'LARGE',
		'LAST',
		'LEAKPROOF',
		'LEVEL',
		'LISTEN',
		'LOAD',
		'LOCAL',
		'LOCATION',
		'LOCK',
		'MAPPING',
		'MATCH',
		'MATERIALIZED',
		'MAXVALUE',
		'MINUTE',
		'MINVALUE',
		'MODE',
		'MONTH',
		'MOVE',
		'NAME',
		'NAMES',
		'NEXT',
		'NO',
		'NOTHING',
		'NOTIFY',
		'NOWAIT',
		'NULLS',
		'OBJECT',
		'OF',
		'OFF',
		'OIDS',
		'OPERATOR',
		'OPTION',
		'OPTIONS',
		'OWNED',
		'OWNER',
		'PARSER',
		'PARTIAL',
		'PARTITION',
		'PASSING',
		'PASSWORD',
		'PLANS',
		'PRECEDING',
		'PREPARE',
		'PREPARED',
		'PRESERVE',
		'PRIOR',
		'PRIVILEGES',
		'PROCEDURAL',
		'PROCEDURE',
		'PROGRAM',
		'QUOTE',
		'RANGE',
		'READ',
		'REASSIGN',
		'RECHECK',
		'RECURSIVE',
		'REF',
		'REFRESH',
		'REINDEX',
		'RELATIVE',
		'RELEASE',
		'RENAME',
		'REPEATABLE',
		'REPLACE',
		'REPLICA',
		'RESET',
		'RESTART',
		'RESTRICT',
		'RETURNS',
		'REVOKE',
		'ROLE',
		'ROLLBACK',
		'ROWS',
		'RULE',
		'SAVEPOINT',
		'SCHEMA',
		'SCROLL',
		'SEARCH',
		'SECOND',
		'SECURITY',
		'SEQUENCE',
		'SEQUENCES',
		'SERIALIZABLE',
		'SERVER',
		'SESSION',
		'SET',
		'SHARE',
		'SHOW',
		'SIMPLE',
		'SNAPSHOT',
		'STABLE',
		'STANDALONE',
		'START',
		'STATEMENT',
		'STATISTICS',
		'STDIN',
		'STDOUT',
		'STORAGE',
		'STRICT',
		'STRIP',
		'SYSID',
		'SYSTEM',
		'TABLES',
		'TABLESPACE',
		'TEMP',
		'TEMPLATE',
		'TEMPORARY',
		'TEXT',
		'TRANSACTION',
		'TRIGGER',
		'TRUNCATE',
		'TRUSTED',
		'TYPE',
		'TYPES',
		'UNBOUNDED',
		'UNCOMMITTED',
		'UNENCRYPTED',
		'UNKNOWN',
		'UNLISTEN',
		'UNLOGGED',
		'UNTIL',
		'UPDATE',
		'VACUUM',
		'VALID',
		'VALIDATE',
		'VALIDATOR',
		'VARYING',
		'VERSION',
		'VIEW',
		'VOLATILE',
		'WHITESPACE',
		'WITHOUT',
		'WORK',
		'WRAPPER',
		'WRITE',
		'XML',
		'YEAR',
		'YES',
		'ZONE',
		'BETWEEN',
		'BIGINT',
		'BIT',
		'BOOLEAN',
		'CHAR',
		'CHARACTER',
		'COALESCE',
		'DEC',
		'DECIMAL',
		'EXISTS',
		'EXTRACT',
		'FLOAT',
		'GREATEST',
		'INOUT',
		'INT',
		'INTEGER',
		'INTERVAL',
		'LEAST',
		'NATIONAL',
		'NCHAR',
		'NONE',
		'NULLIF',
		'NUMERIC',
		'OVERLAY',
		'POSITION',
		'PRECISION',
		'REAL',
		'ROW',
		'SETOF',
		'SMALLINT',
		'SUBSTRING',
		'TIME',
		'TIMESTAMP',
		'TREAT',
		'TRIM',
		'VALUES',
		'VARCHAR',
		'XMLATTRIBUTES',
		'XMLCONCAT',
		'XMLELEMENT',
		'XMLEXISTS',
		'XMLFOREST',
		'XMLPARSE',
		'XMLPI',
		'XMLROOT',
		'XMLSERIALIZE',
		'CALL',
		'CURRENT',
		'ATTACH',
		'DETACH',
		'EXPRESSION',
		'GENERATED',
		'LOGGED',
		'STORED',
		'INCLUDE',
		'ROUTINE',
		'TRANSFORM',
		'IMPORT',
		'POLICY',
		'METHOD',
		'REFERENCING',
		'NEW',
		'OLD',
		'VALUE',
		'SUBSCRIPTION',
		'PUBLICATION',
		'OUT',
		'END',
		'ROUTINES',
		'SCHEMAS',
		'PROCEDURES',
		'INPUT',
		'SUPPORT',
		'PARALLEL',
		'SQL',
		'DEPENDS',
		'OVERRIDING',
		'CONFLICT',
		'SKIP',
		'LOCKED',
		'TIES',
		'ROLLUP',
		'CUBE',
		'GROUPING',
		'SETS',
		'TABLESAMPLE',
		'ORDINALITY',
		'XMLTABLE',
		'COLUMNS',
		'XMLNAMESPACES',
		'ROWTYPE',
		'NORMALIZED',
		'WITHIN',
		'FILTER',
		'GROUPS',
		'OTHERS',
		'NFC',
		'NFD',
		'NFKC',
		'NFKD',
		'UESCAPE',
		'VIEWS',
		'NORMALIZE',
		'DUMP',
		'PRINT_STRICT_PARAMS',
		'VARIABLE_CONFLICT',
		'ERROR',
		'USE_VARIABLE',
		'USE_COLUMN',
		'ALIAS',
		'CONSTANT',
		'PERFORM',
		'GET',
		'DIAGNOSTICS',
		'STACKED',
		'ELSIF',
		'WHILE',
		'REVERSE',
		'FOREACH',
		'SLICE',
		'EXIT',
		'RETURN',
		'QUERY',
		'RAISE',
		'SQLSTATE',
		'DEBUG',
		'LOG',
		'INFO',
		'NOTICE',
		'WARNING',
		'EXCEPTION',
		'ASSERT',
		'LOOP',
		'OPEN',
		'PEFERENCES',
		'USAGE',
		'CONNECT',
		'PUBLIC',
		'MERGE',
		'MATCHED',
		'BREADTH',
		'DEPTH',
		'UNSAFE',
		'RESTRICTED',
		'SAFE',
		'FINALIZE',
		'MODULUS',
		'REMAINDER',
		'LOGIN',
		'NOLOGIN',
		'REPLICATION',
		'NOREPLICATION',
		'BYPASSRLS',
		'NOBYPASSRLS',
		'PERMISSIVE',
		'RESTRICTIVE',
		'COMPRESSION',
		'PLAIN',
		'EXTENDED',
		'MAIN'
	],
	operators: [
		// Logical Operators： https://www.postgresql.org/docs/16/functions-logical.html
		'AND',
		'OR',
		'NOT',
		// Comparison Predicates： https://www.postgresql.org/docs/16/functions-comparison.html
		'BETWEEN',
		'NOT',
		'IS',
		'ISNULL',
		'NOTNULL',
		'NULL',
		'TRUE',
		'FALSE',
		// Pattern Matching: https://www.postgresql.org/docs/16/functions-matching.html
		'LIKE',
		'SIMILAR',
		'TO',
		// https://www.postgresql.org/docs/16/functions-datetime.html
		'OVERLAPS',
		// Grouping Operations:https://www.postgresql.org/docs/16/functions-aggregate.html
		'GROUPING',
		// Subquery Expressions: https://www.postgresql.org/docs/16/functions-subquery.html
		'EXISTS',
		'IN',
		'ANY',
		'SOME',
		'ALL',
		'DISTINCT'
	],
	builtinFunctions: [
		// Comparison Functions： https://www.postgresql.org/docs/16/functions-comparison.html
		'NUM_NONNULLS',
		'NUM_NULLS',
		// Mathematical Functions：https://www.postgresql.org/docs/16/functions-math.html
		'ABS',
		'CBRT',
		'CEIL',
		'CEILING',
		'DEGREES',
		'DIV',
		'ERF',
		'ERFC',
		'EXP',
		'FACTORIAL',
		'FLOOR',
		'GCD',
		'LCM',
		'LN',
		'LOG',
		'LOG10',
		'MIN_SCALE',
		'MOD',
		'PI',
		'POWER',
		'RADIANS',
		'ROUND',
		'SCALE',
		'SIGN',
		'SQRT',
		'TRIM_SCALE',
		'TRUNC',
		'WIDTH_BUCKET',
		// Random Functions
		'RANDOM',
		'RANDOM_NORMAL',
		'SETSEED',
		// Trigonometric Functions
		'ACOS',
		'ACOSD',
		'ASIN',
		'ASIND',
		'ATAN',
		'ATAND',
		'ATAN2',
		'ATAN2D',
		'COS',
		'COSD',
		'COT',
		'COTD',
		'SIN',
		'SIND',
		'TAN',
		'TAND',
		// Hyperbolic Functions
		'SINH',
		'COSH',
		'TANH',
		'ASINH',
		'ACOSH',
		'ATANH',
		// SQL String Functions: https://www.postgresql.org/docs/16/functions-string.html
		'BTRIM',
		'BIT_LENGTH',
		'CHAR_LENGTH',
		'CHARACTER_LENGTH',
		'LOWER',
		'LPAD',
		'LTRIM',
		'NORMALIZE',
		'OCTET_LENGTH',
		'OVERLAY',
		'POSITION',
		'RPAD',
		'RTRIM',
		'SUBSTRING',
		'TRIM',
		'UPPER',
		// Other String Functions
		'ASCII',
		'CHR',
		'CONCAT',
		'CONCAT_WS',
		'FORMAT',
		'INITCAP',
		'LEFT',
		'LENGTH',
		'MD5',
		'PARSE_IDENT',
		'PG_CLIENT_ENCODING',
		'QUOTE_IDENT',
		'QUOTE_LITERAL',
		'QUOTE_NULLABLE',
		'REGEXP_COUNT',
		'REGEXP_INSTR',
		'REGEXP_LIKE',
		'REGEXP_MATCH',
		'REGEXP_MATCHS',
		'REGEXP_REPLACE',
		'REGEXP_SPLIT_TO_ARRAY',
		'REGEXP_SPLIT_TO_TABLE',
		'REGEXP_SUBSTR',
		'REPEAT',
		'REPLACE',
		'REVERSE',
		'RIGHT',
		'SPLIT_PART',
		'STARTS_WITH',
		'STRING_TO_ARRAY',
		'STRING_TO_TABLE',
		'STRPOS',
		'SUBSTR',
		'TO_ASCII',
		'TO_HEX',
		'TRANSLATE',
		'UNISTR',
		// format
		'FORMAT',
		// Binary String Functions：https://www.postgresql.org/docs/16/functions-binarystring.html
		'BIT_COUNT',
		'GET_BIT',
		'GET_BYTE',
		'SET_BIT',
		'SET_BYTE',
		'SHA224',
		'SHA256',
		'SHA384',
		'SHA512',
		// Text/Binary String Conversion Functions
		'CONVERT',
		'CONVERT_FROM',
		'CONVERT_TO',
		'ENCODE',
		'DECODE',
		// Data Type Formatting Functions ：https://www.postgresql.org/docs/16/functions-formatting.html
		'TO_CHAR',
		'TO_DATE',
		'TO_NUMBER',
		'TO_TIMESTAMP',
		// Date/Time Functions: https://postgresql.org/docs/16/functions-datetime.html
		'AGE',
		'CLOCK_TIMESTAMP',
		'CURRENT_DATE',
		'CURRENT_TIME',
		'CURRENT_TIMESTAMP',
		'DATE_ADD',
		'DATE_BIN',
		'DATE_PART',
		'DATE_SUBTRACT',
		'DATE_TRUNC',
		'EXTRACT',
		'ISFINITE',
		'JUSTIFY_DAYS',
		'JUSTIFY_HOURS',
		'JUSTIFY_INTERVAL',
		'LOCALTIME',
		'LOCALTIMESTAMP',
		'MAKE_DATE',
		'MAKE_INTERVAL',
		'MAKE_TIME',
		'MAKE_TIMESTAMP',
		'MAKE_TIMESTAMPTZ',
		'NOW',
		'STATEMENT_TIMESTAMP',
		'TIMEOFDAY',
		'TRANSACTION_TIMESTAMP',
		'TO_TIMESTAMP',
		// Delaying Execution
		'PG_SLEEP',
		'PG_SLEEP_FOR',
		'PG_SLEEP_UNTIL',
		// Enum Support Functions: https://www.postgresql.org/docs/16/functions-enum.html
		'ENUM_FIRST',
		'ENUM_LAST',
		'ENUM_RANGE',
		// Geometric Functions: https://www.postgresql.org/docs/16/functions-geometry.html
		'AREA',
		'CENTER',
		'DIAGONAL',
		'DIAMETER',
		'HEIGHT',
		'ISCLOSED',
		'ISOPEN',
		'NPOINTS',
		'PCLOSE',
		'POPEN',
		'RADIUS',
		'SLOPE',
		'WIDTH',
		// Geometric Type Conversion Functions
		'BOX',
		'BOUND_BOX',
		'CIRCLE',
		'LINE',
		'LSEG',
		'PATH',
		'POINT',
		'POLYGON',
		// IP Address Functions: https://www.postgresql.org/docs/16/functions-net.html
		'ABBREV',
		'BROADCAST',
		'FAMILY',
		'HOST',
		'HOSTMASK',
		'INET_MERGE',
		'INET_SAME_FAMILY',
		'MASKLEN',
		'NETMASK',
		'NETWORK',
		'SET_MASKLEN',
		'TEXT',
		// MAC Address Functions
		'MACADDR8_SET7BIT',
		// Text Search Functions:https://www.postgresql.org/docs/16/functions-textsearch.html
		'ARRAY_TO_TSVECTOR',
		'GET_CURRENT_TS_CONFIG',
		'NUMNODE',
		'PLAINTO_TSQUERY',
		'PHRASETO_TSQURY',
		'WEBSEARCH_TO_TSQUERY',
		'QUERYTREE',
		'SETWEIGHT',
		'STRIP',
		'TO_TSQUERY',
		'TO_TSVECTOR',
		'JSON_TO_TSVECTOR',
		'TS_DELETE',
		'TS_FILTER',
		'TS_HEADLINE',
		'TS_RANK',
		'TS_RANK_CD',
		'TS_REWRITE',
		'TSQUERY_PHRASE',
		'TSVECTOR_TO_ARRAY',
		'UNNEST',
		// Text Search Debugging Functions
		'TS_DEBUG',
		'TS_LEXIZE',
		'TS_PARSE',
		'TS_TOKEN_TYPE',
		'TS_STAT',
		// UUID Functions: https://www.postgresql.org/docs/16/functions-uuid.html
		'GEN_RANDOM_UUID',
		// XML Functions: https://www.postgresql.org/docs/16/functions-xml.html
		'XMLCOMMENT',
		'XMLCONCAT',
		'XMLELEMENT',
		'XMLFOREST',
		'XMLPI',
		'XMLROOT',
		'XMLAGG',
		'XMLEXISTS',
		'XML_IS_WELL_FORMED',
		'XPATH',
		'XPATH_EXISTS',
		'XMLTABLE',
		'TABLE_TO_XML',
		'QUERY_TO_XML',
		'CURSOR_TO_XML',
		'TABLE_TO_XMLSCHEMA',
		'QUERY_TO_XMLSCHEMA',
		'CURSOR_TO_XMLSCHEMA',
		'TABLE_TO_XML_AND_XMLSCHEMA',
		'QUERY_TO_XML_AND_XMLSCHEMA',
		'CURSOR_TO_XML_AND_XMLSCHEMA',
		'SCHEMA_TO_XML',
		'SCHEMA_TO_XMLSCHEMA',
		'SCHEMA_TO_XML_AND_XMLSCHEMA',
		'DATABSE_TO_XML',
		'DATABSE_TO_XMLSCHEMA',
		'DATABSE_TO_XML_AND_XMLSCHEMA',
		'XMLPARSE',
		// JSON Functions and Operators: https://www.postgresql.org/docs/16/functions-json.html
		'TO_JSON',
		'TO_JSONB',
		'ARRAY_TO_JSON',
		'JSON_ARRAY',
		'ROW_TO_JSON',
		'JSON_BUILD_ARRAY',
		'JSONB_BUILD_ARRAY',
		'JSON_OBJECT',
		'JSONB_OBJECT',
		'JSON_ARRAY_ELEMENTS',
		'JSONB_ARRAY_ELEMENTS',
		'JSON_ARRAY_ELEMENTS_TEXT',
		'JSONB_ARRAY_ELEMENTS_TEXT',
		'JSON_ARRAY_LENGTH',
		'JSONB_ARRAY_LENGTH',
		'JSON_EACH',
		'JSONB_EACH',
		'JSON_EACH_TEXT',
		'JSONB_EACH_TEXT',
		'JSON_EXTRACT_PATH',
		'JSONB_EXTRACT_PATH',
		'JSON_EXTRACT_PATH_TEXT',
		'JSONB_EXTRACT_PATH_TEXT',
		'JSON_OBJECT_KEYS',
		'JSONB_OBJECT_KEYS',
		'JSON_POPULATE_RECORD',
		'JSONB_POPULATE_RECORD',
		'JSON_POPULATE_RECORDSET',
		'JSONB_POPULATE_RECORDSET',
		'JSON_TO_RECORD',
		'JSONB_TO_RECORD',
		'JSON_TO_RECORDSET',
		'JSONB_TO_RECORDSET',
		'JSONB_SET',
		'JSONB_SET_LAX',
		'JSONB_INSERT',
		'JSON_STRIP_NULLS',
		'JSONB_STRIP_NULLS',
		'JSONB_PATH_EXISTS',
		'JSONB_PATH_MATCH',
		'JSONB_PATH_QUERY',
		'JSONB_PATH_QUERY_ARRAY',
		'JSONB_PATH_QUERY_FIRST',
		'JSONB_PATH_EXISTS_TZ',
		'JSONB_PATH_MATCH_TZ',
		'JSONB_PATH_QUERY_TZ',
		'JSONB_PATH_QUERY_ARRAY_TZ',
		'JSONB_PATH_QUERY_FIRST_TZ',
		'JSONB_PRETTY',
		'JSONB_TYPEOF',
		'JSON_TYPEOF',
		'TYPE',
		'SIZE',
		'DOUBLE',
		'DATETIME',
		'KEYVALUE',
		// Sequence Manipulation Functions:https://www.postgresql.org/docs/16/functions-sequence.html
		'NEXTVAL',
		'SETVAL',
		'CURRVAL',
		'LASTVAL',
		// https://www.postgresql.org/docs/16/functions-conditional.html
		'COALESCE',
		'NULLIF',
		'GREATEST',
		'LEAST',
		// https://www.postgresql.org/docs/16/functions-array.html
		'ARRAY_APPEND',
		'ARRAY_CAT',
		'ARRAY_DIMS',
		'ARRAY_FILL',
		'ARRAY_LENGTH',
		'ARRAY_LOWER',
		'ARRAY_NDIMS',
		'ARRAY_POSITION',
		'ARRAY_POSITIONS',
		'ARRAY_PREPEND',
		'ARRAY_REMOVE',
		'ARRAY_REPLACE',
		'ARRAY_SAMPLE',
		'ARRAY_SHUFFLE',
		'ARRAY_TO_STRING',
		'ARRAY_UPPER',
		'CARDINALITY',
		'TRIM_ARRAY',
		'UNNEST',
		// Range Functions: https://www.postgresql.org/docs/16/functions-range.html
		'ISEMPTY',
		'LOWER_INC',
		'UPPER_INC',
		'LOWER_INF',
		'UPPER_INF',
		'RANGE_MERGE',
		'MULTIRANGE',
		// Aggregate Functions: https://www.postgresql.org/docs/16/functions-aggregate.html
		'ANY_VALUE',
		'ARRAY_AGG',
		'AVG',
		'BIT_AND',
		'BIT_OR',
		'BIT_XOR',
		'BOOL_AND',
		'BOOL_OR',
		'EVERY',
		'JSON_AGG',
		'JSONB_AGG',
		'JSON_OBJECT_AGG',
		'JSONB_OBJECT_AGG',
		'JSON_OBJECT_AGG_STRICT',
		'JSONB_OBJECT_AGG_STRICT',
		'JSON_OBJECT_AGG_UNIQUE',
		'JSONB_OBJECT_AGG_UNIQUE',
		'JSON_OBJECT_AGG_UNIQUE_STRICT',
		'JSONB_OBJECT_AGG_UNIQUE_STRICT',
		'MAX',
		'MIN',
		'RANGE_AGG',
		'RANGE_INTERSECT_AGG',
		'JSON_AGG_STRICT',
		'JSONB_AGG_STRICT',
		'STRING_AGG',
		'SUM',
		'XMLAGG',
		'CORR',
		'COVAR_POP',
		'COVAR_SAMP',
		'REGR_AVGX',
		'REGR_AVGY',
		'REGR_COUNT',
		'REGR_INTERCEPT',
		'REGR_R2',
		'REGR_SLOPE',
		'REGR_SXX',
		'REGR_SXY',
		'REGR_SYY',
		'STDDEV',
		'STDDEV_POP',
		'STDDEV_SAMP',
		'VARIANCE',
		'VAR_POP',
		'VAR_SAMP',
		'PERCENTILE_CONT',
		'PERCENTILE_DISC',
		'RANK',
		'SENSE_RANK',
		'PERCENT_RANK',
		'CUME_DIST',
		// Window Functions: https://www.postgresql.org/docs/16/functions-window.html
		'ROW_NUMBER',
		'DENSE_RANK',
		'NTILE',
		'LAG',
		'LEAD',
		'FIRST_VALUE',
		'LAST_VALUE',
		'NTH_VALUE',
		// Set Returning Functions:https://www.postgresql.org/docs/16/functions-srf.html
		'GENERATE_SERIES',
		'GENERATE_SUBSCRIPTS',
		// Session Information Functions:https://www.postgresql.org/docs/16/functions-info.html
		'CURRENT_CATALOG',
		'CURRENT_DATABASE',
		'CURRENT_QUERY',
		'CURRENT_ROLE',
		'CURRENT_SCHEMA',
		'CURRENT_SCHEMAS',
		'CURRENT_USER',
		'INET_CLIENT_ADDR',
		'INET_CLIENT_PORT',
		'INET_SERVER_ADDR',
		'INET_SERVER_PORT',
		'PG_BACKEND_PID',
		'PG_BLOCKING_PIDS',
		'PG_CONF_LOAD_TIME',
		'PG_CURRENT_LOGFILE',
		'PG_MY_TEMP_SCHEMA',
		'PG_IS_OTHER_TEMP_SCHEMA',
		'PG_JIT_AVAILABLE',
		'PG_LISTENING_CHANNELS',
		'PG_NOTIFICATION_QUEUE_USAGE',
		'PG_POSTMASTER_START_TIME',
		'PG_SAFE_SNAPSHOT_BLOCKING_PIDS',
		'PG_TRIGGER_DEPTH',
		'SESSION_USER',
		'SYSTEM_USER',
		'USER',
		'VERSION',
		'HAS_TABLE_PRIVILEGE',
		'HAS_ANY_COLUMN_PRIVILEGE',
		'HAS_COLUMN_PRIVILEGE',
		'HAS_DATABASE_PRIVILEGE',
		'HAS_FOREIGN_DATA_WRAPPER_PRIVILEGE',
		'HAS_FUNCTION_PRIVILEGE',
		'HAS_LANGUAGE_PRIVILEGE',
		'HAS_PARAMETER_PRIVILEGE',
		'HAS_SCHEMA_PRIVILEGE',
		'HAS_SEQUENCE_PRIVILEGE',
		'HAS_SERVER_PRIVILEGE',
		'HAS_TABLE_PRIVILEGE',
		'HAS_TABLESPACE_PRIVILEGE',
		'HAS_TYPE_PRIVILEGE',
		'PG_HAS_ROLE',
		'ROW_SECURITY_ACTIVE',
		// aclitem Functions
		'ACLDEFAULT',
		'ACLEXPLODE',
		'MAKEACLITEM',
		// Schema Visibility Inquiry Functions
		'PG_COLLACTION_IS_VISIBLE',
		'PG_CONVERSION_IS_VISIBLE',
		'PG_FUNCTION_IS_VISIBLE',
		'PG_OPCLASS_IS_VISIBLE',
		'PG_OPERATOR_IS_VISIBLE',
		'PG_OPFAMILY_IS_VISIBLE',
		'PG_STATISTICS_OBJ_IS_VISIBLE',
		'PG_TABLE_IS_VISIBLE',
		'PG_TS_CONFIG_IS_VISIBLE',
		'PG_TS_DICT_IS_VISIBLE',
		'PG_TS_PARSER_IS_VISIBLE',
		'PG_TS_TEMPLATE_IS_VISIBLE',
		'PG_TYPE_IS_VISIBLE',
		'FORMAT_TYPE',
		'PG_CHAR_TO_ENCODING',
		'PG_ENCODING_TO_CHAR',
		'PG_GET_CATALOG_FOREIGN_KEYS',
		'PG_GET_CONSTRAINTDEF',
		'PG_GET_EXPR',
		'PG_GET_FUNCTIONDEF',
		'PG_GET_FUNCTION_ARGUMENTS',
		'PG_GET_FUNCTION_IDENTIFY_ARGUMENTS',
		'PG_GET_FUNCTION_RESULT',
		'PG_GET_KEYWORDS',
		'PG_GET_PARTKEYDEF',
		'PG_GET_RULEDEF',
		'PG_GET_SERIAL_SEQUENCE',
		'PG_GET_STATISTICSOBJDEF',
		'PG_GET_TRIGGERDEF',
		'PG_GET_USERBYID',
		'PG_GET_VIEWDEF',
		'PG_INDEX_COLUMN_HAS_PROPERTY',
		'PG_INDEX_HAS_PROPERTY',
		'PG_INDEXAM_HAS_PROPERTY',
		'PG_OPTIONS_TO_TABLE',
		'PG_SETTINGS_GET_FLAGS',
		'PG_TABLESPACE_DATABASES',
		'PG_TABLESPACE_LOCATION',
		'PG_TYPEOF',
		'TO_REGCLASS',
		'TO_REGCOLLATION',
		'TO_REGNAMESPACE',
		'TO_REGOPER',
		'TO_REGOPERATOR',
		'TO_REGPROC',
		'TO_REGPROCEDURE',
		'TO_REGROLE',
		'TO_REGTYPE',
		// Object Information and Addressing Functions
		'PG_DESCRIBE_OBJECT',
		'PG_IDENTIFY_OBJECT',
		'PG_IDENTIFY_OBJECT_AS_ADDRESS',
		'PG_GET_OBJECT_ADDRESS',
		//  Comment Information Functions
		'COL_DESCRIPTION',
		'OBJ_DESCRIPTION',
		'SHOBJ_DESCRIPTION',
		// Data Validity Checking Functions
		'PG_INPUT_IS_VALID',
		'PG_INPUT_ERROR_INFO',
		// Transaction ID and Snapshot Information Functions
		'PG_CURRENT_XACT_ID',
		'PG_CURRENT_XACT_ID_IF_ASSIGNED',
		'PG_XACT_STATUS',
		'PG_SNAPSHOT_XIP',
		'PG_CURRENT_SNAPSHOT',
		'PG_SNAPSHOT_XMAX',
		'PG_SNAPSHOT_XMIN',
		'PG_VISIBLE_IN_SNAPSHOT',
		// Deprecated Transaction ID and Snapshot Information Functions
		'TXID_CURRENT',
		'TXID_CURRENT_IF_ASSIGNED',
		'TXID_CURRENT_SNAPSHOT',
		'TXID_SNAPSHOT_XIP',
		'TXID_SNAPSHOT_XMAX',
		'TXID_SNAPSHOT_XMIN',
		'TXID_VISIBLE_IN_SNAPSHOT',
		'TXID_STATUS',
		// Committed Transaction Information Functions
		'PG_XACT_COMMIT_TIMESTAMP',
		'PG_XACT_COMMIT_TIMESTAMP_ORIGIN',
		'PG_LAST_COMMITED_XACT',
		// Control Data Functions
		'PG_CONTROL_CHECKPOINT',
		'PG_CONTROL_SYSTEM',
		'PG_CONTROL_INIT',
		'PG_CONTROL_RECOVERY',
		// System Administration Functions:https://www.postgresql.org/docs/16/functions-admin.html
		'CURRENT_SETTING',
		'SET_CONFIG',
		'PG_CANCEL_BACKEND',
		'PG_LOG_BACKEND_MEMORY_CONTEXTS',
		'PG_RELOAD_CONF',
		'PG_ROTATE_LOGFILE',
		'PG_TERMINATE_BACKEND',
		// Backup Control Functions
		'PG_CREATE_RESTORE_POINT',
		'PG_CURRENT_WAL_FLUSH_LSN',
		'PG_CURRENT_WAL_LSN',
		'PG_BACKUP_START',
		'PG_BACKUP_STOP',
		'PG_SWITCH_WAL',
		'PG_WALFILE_NAME',
		'PG_WALFILE_NAME_OFFSET',
		'PG_SPLIT_WALFILE_NAME',
		'PG_WAL_LSN_DIFF',
		// Recovery Control Functions
		'PG_IS_IN_RECOVERY',
		'PG_LAST_WAL_REPLAY_LSN',
		'PG_LAST_XACT_REPLAY_TIMESTAMP',
		'PG_GET_WAL_RESOURCE_MANAGERS',
		'PG_IS_WAL_REPLAY_PAUSED',
		'PG_GET_WAL_REPLAY_PAUSE_STATE',
		'PG_PROMOTE',
		'PG_WAL_REPLAY_PAUSE',
		'PG_WAL_REPLAY_RESUME',
		// Snapshot Synchronization Functions
		'PG_EXPORT_SNAPSHOT',
		'PG_LOG_STANDBY_SNAPSHOT',
		// Replication Management Functions
		'PG_CREATE_PHYSICAL_REPLICATION_SLOT',
		'PG_DROP_REPLICATION_SLOT',
		'PG_CREATE_LOGICAL_REPLICATION_SLOT',
		'PG_COPY_PHYSICAL_REPLICATION_SLOT',
		'PG_COPY_LOGICAL_REPLICATION_SLOT',
		'PG_LOGICAL_SLOT_GET_CHANGES',
		'PG_LOGICAL_SLOT_PEEK_CHANGES',
		'PG_LOGICAL_SLOT_GET_BINARY_CHANGES',
		'PG_LOGICAL_SLOT_PEEK_BINARY_CHANGES',
		'PG_REPLICATION_SLOT_ADVANCE',
		'PG_REPLICATION_ORIGIN_CREATE',
		'PG_REPLICATION_ORIGIN_DROP',
		'PG_REPLICATION_ORIGIN_OID',
		'PG_REPLICATION_ORIGIN_SESSION_SETUP',
		'PG_REPLICATION_ORIGIN_SESSION_RESET',
		'PG_REPLICATION_ORIGIN_SESSION_IS_SETUP',
		'PG_REPLICATION_ORIGIN_SESSION_PROGRESS',
		'PG_REPLICATION_ORIGIN_XACT_SETUP',
		'PG_REPLICATION_ORIGIN_XACT_RESET',
		'PG_REPLICATION_ORIGIN_ADVANCE',
		'PG_REPLICATION_ORIGIN_PROGRESS',
		'PG_LOGICAL_EMIT_MESSAGE',
		// Database Object Management Functions
		'PG_COLUMN_SIZE',
		'PG_COLUMN_COMPRESSION',
		'PG_DATABASE_SIZE',
		'PG_INDEXES_SIZE',
		'PG_RELATION_SIZE',
		'PG_SIZE_BYTES',
		'PG_SIZE_PRETTY',
		'PG_TABLE_SIZE',
		'PG_TABLESPACE_SIZE',
		'PG_TOTAL_RELATION_SIZE',
		// Database Object Location Functions
		'PG_RELATION_FILENODE',
		'PG_RELATION_FILEPATH',
		'PG_FILENODE_RELATION',
		// Collation Management Functions
		'PG_COLLATION_ACTUAL_VERSION',
		'PG_DATABASE_COLLATION_ACTUAL_VERSION',
		'PG_IMPORT_SYSTEM_COLLATIONS',
		// Partitioning Information Functions
		'PG_PARTITION_TREE',
		'PG_PARTITION_ANCESTORS',
		'PG_PARTITION_ROOT',
		// Index Maintenance Functions
		'BRIN_SUMMARIZE_NEW_VALUES',
		'BRIN_SUMMARIZE_RANGE',
		'BRIN_DESUMMARIZE_RANGE',
		'GIN_CLEAN_PENDING_LIST',
		// Generic File Access Functions
		'PG_LS_DIR',
		'PG_LS_LOGDIR',
		'PG_LS_WALDIR',
		'PG_LS_LOGICALSNAPDIR',
		'PG_LS_REPLSLOTDIR',
		'PG_LS_ARCHIVE_STATUSDIR',
		'PG_LS_TMPDIR',
		'PG_READ_FILE',
		'PG_READ_BINARY_FILE',
		'PG_STAT_FILE',
		// Advisory Lock Functions
		'PG_ADVISORY_LOCK',
		'PG_ADVISORY_LOCK_SHARED',
		'PG_ADVISORY_UNLOCK',
		'PG_ADVISORY_UNLOCK_SHARED',
		'PG_ADVISORY_UNLOCK_ALL',
		'PG_ADVISORY_XACT_LOCK',
		'PG_ADVISORY_XACT_LOCK_SHARED',
		'PG_TRY_ADVISORY_LOCK',
		'PG_TRY_ADVISORY_LOCK_SHARED',
		'PG_TRY_ADVISORY_XACT_LOCK',
		'PG_TRY_ADVISORY_XACT_LOCK_SHARED',
		// Trigger Functions:https://www.postgresql.org/docs/16/functions-trigger.html
		'SUPPRESS_REDUNDANT_UPDATES_TRIGGER',
		'TSVECTOR_UPDATE_TRIGGER',
		'TSVECTOR_UPDATE_TRIGGER_COLUMN',
		// Event Trigger Functions:https://www.postgresql.org/docs/16/functions-event-triggers.html
		'PG_EVENT_TRIGGER_DDL_COMMANDS',
		'PG_EVENT_TRIGGER_DROPPED_OBJECTS',
		'PG_EVENT_TRIGGER_TABLE_REWRITE_OID',
		'PG_EVENT_TRIGGER_TABLE_REWRITE_REASON',
		// Statistics Information Functions:https://www.postgresql.org/docs/16/functions-statistics.html
		'PG_MCV_LIST_ITEMS'
	],
	builtinVariables: [
		// NOT SUPPORTED
	],
	typeKeywords: [
		// monaco-sql-language 自定义属性
		// https://www.postgresql.org/docs/16/datatype.html
		'SMALLINT',
		'INTEGER',
		'BIGINT',
		'DECIMAL',
		'NUMERIC',
		'REAL',
		'DOUBLE',
		'PRECISION',
		'SMALLSERIAL',
		'SERIAL',
		'BIGSERIAL',
		'CHARACTER',
		'VARYING',
		'VARCHAR',
		'CHARACTER',
		'CAHR',
		'BPCHAR',
		'TEXT',
		'TIMESTAMP',
		'DATE',
		'INTERVAL',
		'TIME',
		'BOOLEAN',
		'ENUM',
		'NONE',
		'INT4RANGE',
		'INT8RANGE',
		'NUMRANGE',
		'TSRANGE',
		'TSTZRANGE',
		'DATERANGE',
		'ANY',
		'INTERNAL',
		'UNKNOWN'
	],
	scopeKeywords: ['COMMIT', 'END', 'ROLLBACK', 'THEN', 'ELSE'],
	pseudoColumns: [
		// Not support
	],
	tokenizer: {
		root: [
			{ include: '@comments' },
			{ include: '@whitespace' },
			{ include: '@pseudoColumns' },
			{ include: '@numbers' },
			{ include: '@strings' },
			{ include: '@complexIdentifiers' },
			{ include: '@scopes' },
			{ include: '@complexDataTypes' },
			[/[;,.]/, TokenClassConsts.DELIMITER],
			[/[\(\)\[\]]/, '@brackets'],
			[
				/[\w@#$]+/,
				{
					cases: {
						'@scopeKeywords': TokenClassConsts.KEYWORD_SCOPE,
						'@operators': TokenClassConsts.OPERATOR_KEYWORD,
						'@typeKeywords': TokenClassConsts.TYPE,
						'@builtinVariables': TokenClassConsts.VARIABLE,
						'@builtinFunctions': TokenClassConsts.PREDEFINED,
						'@keywords': TokenClassConsts.KEYWORD,
						'@default': TokenClassConsts.IDENTIFIER
					}
				}
			],
			[/[<>=!%&+\-*/|~^]/, TokenClassConsts.OPERATOR_SYMBOL]
		],
		whitespace: [[/\s+/, TokenClassConsts.WHITE]],
		comments: [
			[/--+.*/, TokenClassConsts.COMMENT],
			[/\/\*/, { token: TokenClassConsts.COMMENT_QUOTE, next: '@comment' }]
		],
		comment: [
			[/[^*/]+/, TokenClassConsts.COMMENT],
			// Not supporting nested comments, as nested comments seem to not be standard?
			// [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
			[/\*\//, { token: TokenClassConsts.COMMENT_QUOTE, next: '@pop' }],
			[/./, TokenClassConsts.COMMENT]
		],
		pseudoColumns: [
			// Not support
		],
		numbers: [
			[/0[xX][0-9a-fA-F]*/, TokenClassConsts.NUMBER_HEX],
			[/[$][+-]*\d*(\.\d*)?/, TokenClassConsts.NUMBER],
			[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, TokenClassConsts.NUMBER]
		],
		strings: [
			[/'/, { token: TokenClassConsts.STRING, next: '@string' }],
			[/"/, { token: TokenClassConsts.STRING, next: '@stringDouble' }]
		],
		string: [
			[/[^']+/, TokenClassConsts.STRING_ESCAPE],
			[/''/, TokenClassConsts.STRING],
			[/'/, { token: TokenClassConsts.STRING, next: '@pop' }]
		],
		stringDouble: [
			[/[^"]+/, TokenClassConsts.STRING_ESCAPE],
			[/""/, TokenClassConsts.STRING],
			[/"/, { token: TokenClassConsts.STRING, next: '@pop' }]
		],
		complexIdentifiers: [
			[/`/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@quotedIdentifier' }]
		],
		quotedIdentifier: [
			[/[^`]+/, TokenClassConsts.IDENTIFIER_QUOTE],
			[/``/, TokenClassConsts.IDENTIFIER_QUOTE],
			[/`/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@pop' }]
		],
		scopes: [
			[/(EXECUTE\s+)?BEGIN\s+STATEMENT/i, TokenClassConsts.KEYWORD_SCOPE],
			[/(EXECUTE\s+)?STATEMENT\s+BEGIN/i, TokenClassConsts.KEYWORD_SCOPE]
		],
		complexDataTypes: [
			[/DOUBLE\s+PRECISION\b/i, { token: TokenClassConsts.TYPE }],
			[/REFERENCES\b/i, { token: TokenClassConsts.TYPE }]
		]
	}
};
