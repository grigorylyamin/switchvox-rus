switchvox.lang={get:function(b,a){return this._translate(b,0,a)},getp:function(d,c,a){var b=this._myPlural(c);return this._translate(d,b,a)},_set_keys:function(a){if(this.initialLangLoaded){var b=this._LANG.keys;this._LANG.keys=Object.extend(b,a)}else{this._LANG.keys=a;this.initialLangLoaded=true}},_set_plural:function(a){if(Object.isUndefined(this._LANG.plurals)){this._LANG.plural=a}},_pre_init:function(){this.initialLangLoaded=false;this._LANG={};this._LANG.keys={}},_init:function(a){this._myKeys=this._LANG.keys;this._myPlural=this._LANG.plural;this._debug=false},_translate:function(f,d,c){if(isUndef(c)){c=[]}var a=this._myKeys[f];if(isUndef(a)){return f}var b=a[d];if(isUndef(b)){return f}var e=b.match(/%s/g);if(e!=null&&e.length!=0){if(e.length!=c.length){throw (new Error("Your string has more %s tokens ("+e.length+") than variables ("+c.length+") passed in."))}c.each(function(g){b=b.replace(/%s/,g)})}return b}};$T=switchvox.lang.get.bind(switchvox.lang);switchvox.lang._pre_init();