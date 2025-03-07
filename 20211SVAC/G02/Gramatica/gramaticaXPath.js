/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramaticaXPath = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,8],$V2=[1,11],$V3=[1,27],$V4=[1,19],$V5=[1,20],$V6=[1,21],$V7=[1,22],$V8=[1,23],$V9=[1,24],$Va=[1,25],$Vb=[1,26],$Vc=[1,28],$Vd=[1,29],$Ve=[1,30],$Vf=[1,31],$Vg=[1,32],$Vh=[1,33],$Vi=[5,6],$Vj=[5,6,15],$Vk=[1,44],$Vl=[1,45],$Vm=[1,46],$Vn=[1,47],$Vo=[1,48],$Vp=[1,49],$Vq=[1,50],$Vr=[14,21],$Vs=[43,44,45,46,47,48,49];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"INSTRUCCIONES":4,"EOF":5,"or":6,"INSTRUCCION":7,"PRINT":8,"semicolon":9,"PATHEXPR":10,"print":11,"lparen":12,"EXPR":13,"rparen":14,"diagonal":15,"RELATIVEPATHEXPR":16,"STEPEXPR":17,"FILTEREXPR":18,"AXISSTEP":19,"FORWARDSTEP":20,"PREDICATELIST":21,"REVERSESTEP":22,"FORWARDAXIS":23,"ABBREVFORWARDSTEP":24,"atSign":25,"child":26,"twopoints":27,"descendant":28,"attribute":29,"self":30,"descendant-or-self":31,"following":32,"following-sibling":33,"namespace":34,"REVERSEAXIS":35,"ABBREVREVERSESTEP":36,"parent":37,"ancestor":38,"preceding-sibling":39,"preceding":40,"ancestor-or-self":41,"pointPoint":42,"IntegerLiteral":43,"DoubleLiteral":44,"StringLiteral":45,"CharLiteral":46,"null":47,"true":48,"false":49,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"or",9:"semicolon",11:"print",12:"lparen",14:"rparen",15:"diagonal",18:"FILTEREXPR",21:"PREDICATELIST",25:"atSign",26:"child",27:"twopoints",28:"descendant",29:"attribute",30:"self",31:"descendant-or-self",32:"following",33:"following-sibling",34:"namespace",37:"parent",38:"ancestor",39:"preceding-sibling",40:"preceding",41:"ancestor-or-self",42:"pointPoint",43:"IntegerLiteral",44:"DoubleLiteral",45:"StringLiteral",46:"CharLiteral",47:"null",48:"true",49:"false"},
productions_: [0,[3,2],[3,1],[4,3],[4,1],[7,2],[7,1],[8,4],[10,2],[10,3],[10,1],[16,1],[16,3],[16,4],[17,1],[17,1],[19,2],[19,2],[20,2],[20,1],[24,1],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[22,2],[22,1],[35,3],[35,3],[35,3],[35,3],[35,3],[36,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 this.$ = $$[$0-1]; return this.$; 
break;
case 3:

                                                                                                                            $$[$0-2].push($$[$0-1]);
                                                                                                                            this.$ = $$[$0-2];
                                                                                                                        
break;
case 4:

                                                                                                                            this.$ = [$$[$0]];
                                                                                                                        
break;
case 5:

                        this.$ = $$[$0-1]
                    
break;
case 6: case 11: case 14: case 15:

        this.$ = $$[$0]
    
break;
case 7:

                                     this.$ = new Print($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);
                             
break;
case 8: case 9: case 10:

        this.$=$$[$0]
    
break;
case 12: case 21:

        this.$ = $$[$0-2]
    
break;
case 13:

        this.$ = $$[$0-3]
    
break;
case 16: case 17:

        this.$ = $$[$0-1]
    
break;
case 18: case 19: case 20: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36:


    
break;
case 37: case 38:

                                                                                                                            this.$ = new Primitivo(Number($$[$0]), _$[$0].first_line, _$[$0].first_column);
                                                                                                                        
break;
case 39: case 40:

                                                                                                                            this.$ = new Primitivo($$[$0], _$[$0].first_line, _$[$0].first_column);
                                                                                                                        
break;
case 41:

                                                                                                                            this.$ = new Primitivo(null, _$[$0].first_line, _$[$0].first_column);
                                                                                                                        
break;
case 42:

                                                                                                                            this.$ = new Primitivo(true, _$[$0].first_line, _$[$0].first_column);
                                                                                                                        
break;
case 43:

                                                                                                                            this.$ = new Primitivo(false, _$[$0].first_line, _$[$0].first_column);
                                                                                                                       
break;
}
},
table: [{3:1,4:2,5:[1,3],7:4,8:5,10:6,11:$V0,15:$V1,16:9,17:10,18:$V2,19:12,20:13,22:14,23:15,24:16,25:$V3,26:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,33:$Va,34:$Vb,35:17,36:18,37:$Vc,38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh},{1:[3]},{5:[1,34],6:[1,35]},{1:[2,2]},o($Vi,[2,4]),{9:[1,36]},o($Vi,[2,6]),{12:[1,37]},{15:[1,39],16:38,17:10,18:$V2,19:12,20:13,22:14,23:15,24:16,25:$V3,26:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,33:$Va,34:$Vb,35:17,36:18,37:$Vc,38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh},o($Vi,[2,10]),o($Vi,[2,11],{15:[1,40]}),o($Vj,[2,14]),o($Vj,[2,15]),{21:[1,41]},{21:[1,42]},{13:43,43:$Vk,44:$Vl,45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq},{21:[2,19]},{13:51,43:$Vk,44:$Vl,45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq},{21:[2,30]},{27:[1,52]},{27:[1,53]},{27:[1,54]},{27:[1,55]},{27:[1,56]},{27:[1,57]},{27:[1,58]},{27:[1,59]},{21:[2,20]},{27:[1,60]},{27:[1,61]},{27:[1,62]},{27:[1,63]},{27:[1,64]},{21:[2,36]},{1:[2,1]},{7:65,8:5,10:6,11:$V0,15:$V1,16:9,17:10,18:$V2,19:12,20:13,22:14,23:15,24:16,25:$V3,26:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,33:$Va,34:$Vb,35:17,36:18,37:$Vc,38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh},o($Vi,[2,5]),{13:66,43:$Vk,44:$Vl,45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq},o($Vi,[2,8]),{16:67,17:10,18:$V2,19:12,20:13,22:14,23:15,24:16,25:$V3,26:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,33:$Va,34:$Vb,35:17,36:18,37:$Vc,38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh},{15:[1,69],17:68,18:$V2,19:12,20:13,22:14,23:15,24:16,25:$V3,26:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,33:$Va,34:$Vb,35:17,36:18,37:$Vc,38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh},o($Vj,[2,16]),o($Vj,[2,17]),{21:[2,18]},o($Vr,[2,37]),o($Vr,[2,38]),o($Vr,[2,39]),o($Vr,[2,40]),o($Vr,[2,41]),o($Vr,[2,42]),o($Vr,[2,43]),{21:[2,29]},{27:[1,70]},{27:[1,71]},{27:[1,72]},{27:[1,73]},{27:[1,74]},{27:[1,75]},{27:[1,76]},{27:[1,77]},{27:[1,78]},{27:[1,79]},{27:[1,80]},{27:[1,81]},{27:[1,82]},o($Vi,[2,3]),{14:[1,83]},o($Vi,[2,9]),o($Vi,[2,12]),{17:84,18:$V2,19:12,20:13,22:14,23:15,24:16,25:$V3,26:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,33:$Va,34:$Vb,35:17,36:18,37:$Vc,38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh},o($Vs,[2,21]),o($Vs,[2,22]),o($Vs,[2,23]),o($Vs,[2,24]),o($Vs,[2,25]),o($Vs,[2,26]),o($Vs,[2,27]),o($Vs,[2,28]),o($Vs,[2,31]),o($Vs,[2,32]),o($Vs,[2,33]),o($Vs,[2,34]),o($Vs,[2,35]),{9:[2,7]},o($Vi,[2,13])],
defaultActions: {3:[2,2],16:[2,19],18:[2,30],27:[2,20],33:[2,36],34:[2,1],43:[2,18],51:[2,29],83:[2,7]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comments */
break;
case 1:this.begin('comment');
break;
case 2:this.popState();
break;
case 3:/* skip comment content*/
break;
case 4:/* skip whitespace */
break;
case 5:return 11;
break;
case 6:return 'division'
break;
case 7:return 'mod';
break;
case 8:return 'and';
break;
case 9:return 6;
break;
case 10:return 26;
break;
case 11:return 38;
break;
case 12:return 41;
break;
case 13:return 29;
break;
case 14:return 28;
break;
case 15:return 31;
break;
case 16:return 32;
break;
case 17:return 33
break;
case 18:return 34;
break;
case 19:return 37;
break;
case 20:return 40;
break;
case 21:return 39;
break;
case 22:return 30;
break;
case 23:return 42
break;
case 24:return 'point';
break;
case 25:return 25
break;
case 26:return 'plus';
break;
case 27:return 'minus';
break;
case 28:return 'times';
break;
case 29:return 15;
break;
case 30:return 'pow';
break;
case 31:return 'minusEqual';
break;
case 32:return 'greaterEqual';
break;
case 33:return 'doubleEqual';
break;
case 34:return 'equal';
break;
case 35:return 'notEqual';
break;
case 36:return 'minusThan';
break;
case 37:return 'greaterThan';
break;
case 38:return 9;
break;
case 39:return 12;
break;
case 40:return 14;
break;
case 41:return 'lKey';
break;
case 42:return 'rKey';
break;
case 43:return 'apostrophe';
break;
case 44:return 'sAnd';
break;
case 45:return 'twoPoints'
break;
case 46:return 44;
break;
case 47:return 43;
break;
case 48:return 'identifier';
break;
case 49:return 45
break;
case 50:return 46
break;
case 51:
                                        console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
                                    
break;
case 52:return 5
break;
}
},
rules: [/^(?:\/\/.*)/i,/^(?:\/\*)/i,/^(?:\*\/)/i,/^(?:.)/i,/^(?:\s+)/i,/^(?:print\b)/i,/^(?:div\b)/i,/^(?:mod\b)/i,/^(?:and\b)/i,/^(?:or\b)/i,/^(?:child\b)/i,/^(?:ancestor\b)/i,/^(?:ancestor-or-self\b)/i,/^(?:attribute\b)/i,/^(?:descendant\b)/i,/^(?:descendant-or-self\b)/i,/^(?:following\b)/i,/^(?:following-sibling\b)/i,/^(?:namespace\b)/i,/^(?:parent\b)/i,/^(?:preceding\b)/i,/^(?:preceding-sibling\b)/i,/^(?:self\b)/i,/^(?:\.\.)/i,/^(?:\.)/i,/^(?:@)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:\^\^)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:;)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:')/i,/^(?:\|)/i,/^(?::)/i,/^(?:(([0-9]+\.[0-9]*)|(\.[0-9]+)))/i,/^(?:[0-9]+)/i,/^(?:[a-zA-Z_][a-zA-Z0-9_ñÑ]*)/i,/^(?:("((\\([\'\"\\bfnrtv]))|([^\"\\]+))*"))/i,/^(?:('((\\([\'\"\\bfnrtv]))|([^\'\\]))'))/i,/^(?:.)/i,/^(?:$)/i],
conditions: {"comment":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true},"INITIAL":{"rules":[0,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramaticaXPath;
exports.Parser = gramaticaXPath.Parser;
exports.parse = function () { return gramaticaXPath.parse.apply(gramaticaXPath, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}