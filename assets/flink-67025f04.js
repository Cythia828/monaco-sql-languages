import{T as E}from"./index-675b8cbc.js";const A={comments:{lineComment:"--",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],folding:{markers:{start:/((EXECUTE\s+)?BEGIN\s+STATEMENT\s+SET\b)|((EXECUTE\s+)?STATEMENT\s+SET\s+BEGIN\b)/i,end:/END\b/i}}},R={defaultToken:"",tokenPostfix:".sql",ignoreCase:!0,brackets:[{open:"[",close:"]",token:E.DELIMITER_SQUARE},{open:"(",close:")",token:E.DELIMITER_PAREN},{open:"{",close:"}",token:E.DELIMITER_CURLY}],keywords:["ABS","ADA","ADD","ALL","ALTER","AND","ANY","ARRAY","AS","ASC","BEFORE","BEGIN","BETWEEN","BINARY","BOOLEAN","BY","CALL","CALLED","CASCADE","CASE","CAST","CATALOG","CHAR","COLUMN","COMMENT","CONSTRAINT","CONSTRAINTS","CREATE","CROSS","CUBE","CURRENT","CURRENT_DATE","CURRENT_TIME","CURRENT_TIMESTAMP","DATABASE","DATE","DAY","DEC","DECIMAL","DEFINE","DELETE","DESC","DESCRIBE","DISTINCT","DOUBLE","DROP","ELSE","END","EQUALS","ESCAPE","EVERY","EXCEPT","EXISTS","EXPLAIN","FALSE","FLOAT","FROM","FULL","FUNCTION","GET","GRANT","GRANTED","GROUP","GROUPING","HAVING","HOUR","IF","IMPORT","IN","INCLUDING","INCREMENT","INOUT","INPUT","INSERT","INT","INTEGER","INTERSECT","INTERVAL","INTO","INVOKER","IS","JAVA","JOIN","KEY","LANGUAGE","LAST","LATERAL","LEFT","LIKE","LIMIT","LOAD","LOCAL","MAP","MATCH","MATCHED","MAX","MAXVALUE","MEMBER","MIN","MINUTE","MODULE","MODULES","MONTH","MORE","MULTISET","NATURAL","NEXT","NONE","NOT","NULL","NULLABLE","NULLS","OF","OFFSET","ON","OPEN","OPTIONS","OR","ORDER","OUTER","OVER","PARAMETER","PARTITION","PATH","PATTERN","PERCENT_RANK","PLAN","POSITION","POWER","PRECEDING","PREPARE","PRIMARY","QUARTER","RANGE","RANK","RAW","REMOVE","RENAME","RESET","RESTRICT","RIGHT","ROLLUP","ROW","ROWS","SCHEMA","SECOND","SELECT","SESSION","SET","SETS","SHOW","SIMILAR","SIMPLE","SMALLINT","STATEMENT","STREAM","STRING","STYLE","SUBSTRING","SUM","SYMMETRIC","SYSTEM","SYSTEM_USER","TABLE","THEN","TIME","TIMESTAMP","TINYINT","TO","TRIM","TRUE","TYPE","UNION","UNIQUE","UNKNOWN","UNLOAD","UNNEST","USE","USAGE","USING","VALUE","VALUES","VARBINARY","VARCHAR","VIEW","WEEK","WHEN","WHENEVER","WHERE","WINDOW","WITH","WITHIN","WITHOUT","YEAR"],operators:["EXCEPT","INTERSECT","UNION","AND","OR","NOT","DIV","LEFT","RIGHT","FULL","INNER","CROSS","OUTER","JOIN","NATURAL","EXISTS","IS","ALL","DISTINCT","ANY","BETWEEN","IN","LIKE","RLIKE","SIMILAR","TO","ESCAPE"],builtinFunctions:["POWER","ABS","SORT","LN","LOG10","LOG2","LOG","EXP","CEIL","CEILING","FLOOR","SIN","SINH","COS","TAN","TANH","COT","ASIN","ACOS","ATAN","ATAN2","COSH","DEGREES","RADIANS","SIGN","ROUND","PI","E","RAND","RAND_INTEGER","UUID","BIN","HEX","TRUNCATE","CHAR_LENGTH","CHARACTER_LENGTH","UPPER","LOWER","POSITION","TRIM","LTRIM","RTRIM","REPEAT","REGEXP_REPLACE","OVERLAY","SUBSTRING","REPLACE","REGEXP_EXTRACT","INITCAP","CONCAT","CONCAT_WS","LPAD","RPAD","FROM_BASE64","TO_BASE64","ASCII","CHR","DECODE","ENCODE","INSTR","LOCATE","PARSE_URL","REGEXP","REVERSE","SPLIT_INDEX","STR_TO_MAP","SUBSTR","NOW","CURRENT_ROW_TIMESTAMP","EXTRACT","YEAR","QUARTER","MONTH","WEEK","DAYOFYEAR","DAYOFMONTH","DAYOFWEEK","HOUR","MINUTE","SECOND","FLOOR","DATE_FORMAT","TIMESTAMPADD","TIMESTAMPDIFF","CONVERT_TZ","FROM_UNIXTIME","UNIX_TIMESTAMP","TO_DATE","TO_TIMESTAMP_LTZ","TO_TIMESTAMP","CURRENT_WATERMARK","COALESCE","IF","IFNULL","IS_ALPHA","IS_DECIMAL","IS_DIGIT","GREATEST","LEAST","CAST","TRY_CAST","TYPEOF","CARDINALITY","ELEMENT","ARRAY_CONTAINS","JSON_EXISTS","JSON_STRING","JSON_VALUE","JSON_QUERY","JSON_OBJECT","JSON_OBJECTAGG","JSON_ARRAY","JSON_ARRAYAGG","GROUP_ID","GROUPING","MD5","SHA1","SHA224","SHA256","SHA384","SHA512","SHA2","COUNT","AVG","SUM","MAX","MIN","STDDEV_POP","STDDEV_SAMP","VAR_POP","VAR_SAMP","COLLECT","VARIANCE","RANK","DENSE_RANK","ROW_NUMBER","LEAD","LAG","FIRST_VALUE","LAST_VALUE","LISTAGG","CUME_DIST","PERCENT_RANK","NTILE"],builtinVariables:[],typeKeywords:["CHAR","VARCHAR","STRING","BOOLEAN","BINARY","VARBINARY","BYTES","DECIMAL","TINYINT","SMALLINT","INTEGER","BIGINT","FLOAT","DOUBLE","DATE","TIME","TIMESTAMP","TIMESTAMP_LTZ","INTERVAL","ARRAY","MULTISET","MAP","ROW","RAW","DEC","NUMERIC","INTERVAL"],scopeKeywords:["CASE","END","WHEN","THEN","ELSE"],pseudoColumns:[],tokenizer:{root:[{include:"@comments"},{include:"@whitespace"},{include:"@pseudoColumns"},{include:"@numbers"},{include:"@strings"},{include:"@complexIdentifiers"},{include:"@scopes"},{include:"@complexDataTypes"},[/[;,.]/,E.DELIMITER],[/[\(\)\[\]\{\}]/,"@brackets"],[/[\w@#$]+/,{cases:{"@scopeKeywords":E.KEYWORD_SCOPE,"@operators":E.OPERATOR_KEYWORD,"@typeKeywords":E.TYPE,"@builtinVariables":E.VARIABLE,"@builtinFunctions":E.PREDEFINED,"@keywords":E.KEYWORD,"@default":E.IDENTIFIER}}],[/[<>=!%&+\-*/|~^]/,E.OPERATOR_SYMBOL]],whitespace:[[/[\s\t\r\n]+/,E.WHITE]],comments:[[/--+.*/,E.COMMENT],[/\/\*/,{token:E.COMMENT_QUOTE,next:"@comment"}]],comment:[[/[^*/]+/,E.COMMENT],[/\*\//,{token:E.COMMENT_QUOTE,next:"@pop"}],[/./,E.COMMENT]],pseudoColumns:[[/[$][A-Za-z_][\w@#$]*/,{cases:{"@pseudoColumns":E.PREDEFINED,"@default":E.IDENTIFIER}}]],numbers:[[/0[xX][0-9a-fA-F]*/,E.NUMBER_HEX],[/[$][+-]*\d*(\.\d*)?/,E.NUMBER],[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/,E.NUMBER]],strings:[[/'/,{token:E.STRING,next:"@string"}]],string:[[/[^']+/,E.STRING_ESCAPE],[/''/,E.STRING],[/'/,{token:E.STRING,next:"@pop"}]],complexIdentifiers:[[/`/,{token:E.IDENTIFIER_QUOTE,next:"@quotedIdentifier"}]],quotedIdentifier:[[/[^`]+/,E.IDENTIFIER_QUOTE],[/``/,E.IDENTIFIER_QUOTE],[/`/,{token:E.IDENTIFIER_QUOTE,next:"@pop"}]],scopes:[[/(EXECUTE\s+)?BEGIN\s+STATEMENT\s+SET/i,E.KEYWORD_SCOPE],[/(EXECUTE\s+)?STATEMENT\s+SET\s+BEGIN/i,E.KEYWORD_SCOPE]],complexDataTypes:[[/DOUBLE\s+PRECISION\b/i,{token:E.TYPE}],[/WITHOUT\s+TIME\s+ZONE\b/i,{token:E.TYPE}],[/WITH\s+LOCAL\s+TIME\s+ZONE\b/i,{token:E.TYPE}]]}};export{A as conf,R as language};
