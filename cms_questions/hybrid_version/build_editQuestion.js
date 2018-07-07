/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
 /*--
 SnoepGames: snoepHybrid - init
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/

/*---------------------OVERRIDE THESE----------------------------------------------*/
var Hybrid={}; // this will be the SINGULAR object that holds all, we will minify this layer to _H!
Hybrid.version="1.2.0"; // this version will center web apps and uses local Storage and have a singular object.!

Hybrid.graphics_manifest = {};  // it's an object now, take care! This saves getting the refs.. You should define these yourself ALWAYS!!
Hybrid.audio_manifest = [];  // but just in case you don't we'll set this empty ones..
Hybrid.initPageFunction=null; // you need to set this, once everything is loaded, we'll go here!
Hybrid.loadingProgressFunction=null;// you don't need to set this, only if you want to give feedback about loading the manifests.
Hybrid.img_src_path = "img/"; // img path is where you put your images.
// create the hotspots and any other images we might always need HERE!
Hybrid.dataurls=[];
Hybrid.dataurls['hotspots']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAAF0Uk5TAEDm2GYAAAAQSURBVHjaYmAAAAAA//8DAAACAAEkfyTxAAAAAElFTkSuQmCC";

/*-------------------------------------------------------------------------------------
 // GLOBAL VARS
----------------------------------------------------------------------------------------*/
// create internal objects.
Hybrid.f = 1; // page size = 1 means TheoreticalPageWidthxTheoreticalPageHeight! (0.5=400x0300)
Hybrid.capabilities = {}; // will be filled by first sweep!
Hybrid.platform = {}; // will be filled by first sweep!
Hybrid.switches={}; // we might ask the user about these in options.
Hybrid.pageInterval = 0;  // reference to the current loop of active page!

Hybrid.language=navigator.language; // use in localisation later!

Hybrid.img_preload = 0; // total of img files to be preloaded, always the whole manifest!


/* CONTSTANTS -----------------------------------------------------------------------------
*/
Hybrid.helplink="http://www.makinggames.org/nl/help/"; //hybrid.php?name_of_game..


/* methods -----------------------------------------------------------------------------
*/

/*-------------------------------------------------------------------------------------
 // CORE FUNCTIONS 
----------------------------------------------------------------------------------------*/
function _hybridInit(){
	// set Hybrid Stylesheet
	// before we do ANYthing..
	
	// this function is called!
    Hybrid.setDebugEchoDiv($('#hybridDiv')); // WE SET this now.. if we erase the page to show loading, we need to RESET this!!

	// set some standard allowed and trusted domains
	
	Hybrid.debugmessage(_hybridDecodeString("4879627269642076")+Hybrid.version+" "+_hybridDecodeString("2d20496e697469616c6973696e67")); // prints Hybrid v1.2.0 - Initialising.
	Hybrid.debugmessage(_hybridDecodeString("a9207777772e736e6f65702e6174")); // writes copyright message!
	var ua=navigator.userAgent.toLowerCase();
	Hybrid.debugmessage("Raw UA: "+ua);

	//Hybrid.debugmessage("ENCODED: "+_hybridEncodeString("Hybrid v")); // writes copyright message!
	_hybridGetCapabilities(); // hidden function only (private if you will!)
   // we need to show the capabilities briefly on the initpage..
   // we also show a possibility there to do debug (if you have the password)
   // and a little branding.

   // here we do a top-domain and referer check!
   if(!_hybridLeechProtect())
   {
	// someone is trying to leech, or I just forgot to set anything....
		Hybrid.debugmessage(Hybrid.decodeString("3c666f6e7420636f6c6f723d27726564273e4552524f523a2041617464206d69736d6174636821204765742061206c6963656e736520666f722074686973206170702066726f6d207777772e736e6f65702e6174213c2f666f6e743e"));
		//Hybrid.debugmessage(Hybrid.encodeString("<font color='red'>ERROR: Aatd mismatch! Get a license for this app from www.snoep.at!</font>"));
   }else
   {
		// we also want to be able to detect a set to home screen on ipad and maybe display a little add to home popup!
		// how to: https://www.youtube.com/watch?v=dJGLdjJGTwo
		// http://www.lynda.com/CSS-tutorials/Create-iPad-Web-App/98830-2.html?utm_medium=viral&utm_source=youtube&utm_campaign=videoupload-98830-0002
		// http://mobilewebbestpractices.com/resources/
		// http://www.lucidmeetings.com/blog/your-lucid-meetings-ipad-web-application-here
		// http://mobilewebbestpractices.com/resources/
		// http://cubiq.org/add-to-home-screen
	   _hybridGetPageScale(); // we only need to call this once to get f and support values!
	   // now we setup the context menu and handles to get it with both touch and mouse.
	   _hybridSetupContextMenu();// right click is non existent on touch devices.., so top left corner 50x50 works too now!
	   Hybrid.debugEchoDiv = false; // we don't have to echo any more we can get to the debug!!
		
	   Hybrid.erasePage(); 
		// todo: set a text displaying hybrid and version..
		
		// we might want to show the user something here as a default!!
		
		// we might want to show the user something here!
		//doPreload(); // will set up the preloading.
		//pageInterval=_hybridStartLoop(hybridLoadingLoop,200); // we update every fifth of a second !
	   
		_hybridDoPreload(); // will set up the preloading.
		Hybrid.startLoop(_hybridLoadingLoop,200); // we update every fifth of a second !
	}
	
	// initialise resizing
	// for ipad orientation change!
	if(Hybrid.platform.device == 'iPad') 
	{
		// this is wrong thinking, the Hybrid adjusts to the iframe..
		// the page who has the iframe should handle this.
		// so let's not try to solve it here.
		/*
		window.onorientationchange = function() {
			// handle orientationchange event
			if(Hybrid.resizeTimeout !== false)
			{
				clearTimeout(Hybrid.resizeTimeout);
				Hybrid.resizeTimeout = setTimeout(_hybridResizeFunction, 50); //200 is time in miliseconds
			}
		} */      
	} 

	
};

// normal resizing!
$( window ).resize(function() {
		if(Hybrid.resizeTimeout !== false)
			clearTimeout(Hybrid.resizeTimeout);
			Hybrid.resizeTimeout = setTimeout(_hybridResizeFunction, 50); //200 is time in miliseconds
});  

// -----------------------------
//  looping
// -----------------------------
Hybrid.def_pageloop=-1;
Hybrid.def_pageloopFunction=null;
function _hybrid_hybridStartLoopHandler()
{
	Hybrid.def_pageloopFunction();
}
// public function to do loops
Hybrid.startLoop=_hybridStartLoop;
function _hybridStartLoop(func, interval)
{
	if(Hybrid.def_pageloop!=-1)
	{
		_hybridStopLoop();
	}
	Hybrid.def_pageloopFunction=func;
	Hybrid.def_pageloop=window.setInterval(_hybrid_hybridStartLoopHandler,interval);
}
Hybrid.stopLoop=_hybridStopLoop;
function _hybridStopLoop()
{
	if(Hybrid.def_pageloop==-1) return false;
	window.clearInterval(Hybrid.def_pageloop);
	Hybrid.def_pageloop=-1;
	Hybrid.def_pageloopFunction=null;
	return true;
} 
// -----------------------------
//  end of looping
// -----------------------------

// Platform / os / browser and version / capabilites sweep..
function _hybridGetCapabilities(){
  // start with some sniffing!!
  var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
  var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
  var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
  var is_safari = navigator.userAgent.indexOf("Safari") > -1;
  var is_android = navigator.userAgent.indexOf("Android") > -1;
  var is_Opera = navigator.userAgent.indexOf("Presto") > -1;
  if ((is_chrome)&&(is_safari)) 
  {
   // somehow chrome identifies itself as being safari!
   is_safari=false;
  }
  // report on these findings for debugging.
  Hybrid.platform.browser="unidentified";
  if(is_chrome) Hybrid.platform.browser="chrome";
  if(is_explorer) Hybrid.platform.browser="explorer";
  if(is_firefox) Hybrid.platform.browser="firefox";
  if(is_safari) Hybrid.platform.browser="safari";
  if(is_android) Hybrid.platform.browser="android";
  if(is_Opera) Hybrid.platform.browser="opera";

  // we also might want to be device specific..
  _hybridGetDevice(); // fills Hybrid.platform.device

  // and operating system specific..
  _hybridGetOS(); // fills Hybrid.platform.OS // operating system

  // show it in the default div stage object
  Hybrid.debugmessage('OS: '+Hybrid.platform.OS);
  Hybrid.debugmessage('device: '+Hybrid.platform.device);
  Hybrid.debugmessage('browser: '+Hybrid.platform.browser);

  // from now on it's capability sniffing with the above information to edit exceptions.
  _hybridTestForAudioSupport(); // comes from hybrid_AUDIO.js!
  
  Hybrid.debugmessage("Capabilities.sound="+Hybrid.capabilities.sound);
  Hybrid.debugmessage("Capabilities.audioContext="+Hybrid.capabilities.audioContext);
  Hybrid.debugmessage("Capabilities.audio_preload="+Hybrid.capabilities.audio_preload);
  
  Hybrid.capabilities.touchmode=_hybridIsTouchDevice();
  Hybrid.capabilities.maxtouches=_hybridGetMaxTouches();
  Hybrid.debugmessage("Capabilities.touch="+Hybrid.capabilities.touchmode);
  Hybrid.debugmessage("Capabilities.maxtouches="+Hybrid.capabilities.maxtouches);

  Hybrid.capabilities.canvas=_hybridIsCanvasSupported(); // resides in canvas helper functions!
  Hybrid.debugmessage("Capabilities.canvas="+Hybrid.capabilities.canvas);
  
   
   //navigator.geolocation = [object Geolocation]
   //navigator.webkitPersistentStorage = [object DeprecatedStorageQuota]
   //navigator.webkitTemporaryStorage = [object DeprecatedStorageQuota]
   //navigator.doNotTrack = null
   //navigator.onLine = true
   //navigator.product = Gecko
   //navigator.appCodeName = Mozilla
   //navigator.userAgent = Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
   //navigator.platform = Win32
   //navigator.appVersion = 5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
   //navigator.appName = Netscape
   //navigator.vendorSub = 
   //navigator.vendor = Google Inc.
   //navigator.productSub = 20030107
   //navigator.cookieEnabled = true
   //navigator.mimeTypes = [object MimeTypeArray]
   //navigator.plugins = [object PluginArray]
   //navigator.language = nl
   //navigator.javaEnabled = function javaEnabled() { [native code] }
   //navigator.getStorageUpdates = function getStorageUpdates() { [native code] }
   //navigator.vibrate = function vibrate() { [native code] }
   //navigator.webkitGetGamepads = function webkitGetGamepads() { [native code] }
   //navigator.webkitGetUserMedia = function webkitGetUserMedia() { [native code] }
   //navigator.registerProtocolHandler = function registerProtocolHandler() { [native code] }
   
   
   
   
 };
 
 function _hybridGetOS(){
	Hybrid.platform.OS=navigator.platform;
	var ua=navigator.userAgent.toLowerCase();
	/*
   * Macs
   */
  if ((ua.indexOf("macintosh") !=-1) || (ua.indexOf("mac os x") !=-1) || (ua.indexOf("mac_powerpc") !=-1) ||
             (ua.indexOf("powerpc-apple") !=-1) || (ua.indexOf("mac_ppc") !=-1) || (ua.indexOf("darwin") !=-1)) 
			 Hybrid.platform.OS="Mac";

  /*
   * Windows
   */
	if ((ua.indexOf("win95") !=-1) || (ua.indexOf("windows 95") !=-1)) Hybrid.platform.OS="Windows (95)";
    if ((ua.indexOf("win 9x 4.90") !=-1)  || (ua.indexOf("windows me") !=-1)) Hybrid.platform.OS="Windows (Me)";
    if ((ua.indexOf("windows 2000") !=-1) || (ua.indexOf("windows nt 5.0") !=-1)) Hybrid.platform.OS="Windows (2000)";
    if ((ua.indexOf("windows nt 5.1") !=-1) || (ua.indexOf("windows xp") !=-1)) Hybrid.platform.OS="Windows (XP)";
    if (ua.indexOf("windows nt 5.2 x64") !=-1) Hybrid.platform.OS="Windows (XP 64-bit)";
    if (ua.indexOf("windows nt 5.2") !=-1) Hybrid.platform.OS="Windows (Server 2003)";
    if (ua.indexOf("windows nt 6.0") !=-1) Hybrid.platform.OS="Windows (Vista)";
    if (ua.indexOf("windows nt 6.1") !=-1) Hybrid.platform.OS="Windows (7)";
    if (ua.indexOf("windows nt 6.2") !=-1) Hybrid.platform.OS="Windows (8)";
    if ((ua.indexOf("windows nt 4.0") !=-1) || (ua.indexOf("winnt") !=-1) || (ua.indexOf("windows nt") !=-1))  Hybrid.platform.OS="Windows (NT)";
    if ((ua.indexOf("windows 98") !=-1) || (ua.indexOf("win98") !=-1))  Hybrid.platform.OS="Windows (98)";
    if (ua.indexOf("windows 3.1") !=-1) Hybrid.platform.OS="Windows (3.1)";
    if (ua.indexOf("microsoft windows") !=-1)Hybrid.platform.OS="Windows (?)";
 
   if (Hybrid.platform.device=="iPhone" || Hybrid.platform.device=="iPod" || Hybrid.platform.device=="iPad")
   {
		if(ua.match(/ OS 5_/i)) Hybrid.platform.OS="iOs5";
		if(ua.match(/ OS 6_/i)) Hybrid.platform.OS="iOs6";
		if(ua.match(/ OS 7_/i)) Hybrid.platform.OS="iOs7";
   }
 };
 
 function _hybridGetDevice(){
	var ua=navigator.userAgent.toLowerCase();
   Hybrid.platform.device="unknown";
   // tentative sniff.
   if (ua.match(/windows/i)) Hybrid.platform.device="desktop";

   // device sniff. 
   if (ua.match(/iphone/i)) Hybrid.platform.device="iPhone";
   if (ua.match(/ipod/i)) Hybrid.platform.device="iPod";
   if (ua.match(/ipad/i)) Hybrid.platform.device="iPad";
   if (ua.match(/android/i)) Hybrid.platform.device="Android";
   if (ua.match(/blackberry/i)) Hybrid.platform.device="BlackBerry";
};


// Public function to check the native language (flash/js) for platform specific functionality.
Hybrid.getNativeLanguage=_hybridGetNativeLanguage;
function _hybridGetNativeLanguage(){return "js";};

// Puclib Function to allow creation of a app specific focus manager.
// default the loop will halt, but you might also want to stop audio playback on blur!
Hybrid.setFocusManager=_hybridSetFocusManager;
function _hybridSetFocusManager(pause,restart){
  $(window).blur(pause);
  $(window).focus(restart);
};
// Public Function to clear app specific focus manager.
Hybrid.clearFocusManager=_hybridClearFocusManager;
function _hybridClearFocusManager(){
  $(window).blur();
  $(window).focus();
};

// Public Function to set switches
Hybrid.setSwitch=_hybridSetSwitch;
function _hybridSetSwitch(labelname,value)
 {
  Hybrid.debugmessage("setSwitch: "+labelname+" to "+value);
  if(value=="1")
   Hybrid.switches[labelname]=true;
  else
   Hybrid.switches[labelname]=false;
 }
// Public Function to make all in page unselectable.
Hybrid.makePageUnselectable=_hybridMakePageUnselectable;
function _hybridMakePageUnselectable()
{
	Hybrid.debugmessage("makePageUnselectable()");
	_jQueryAddition_MakeUnselectable($(document));
	_jQueryAddition_MakeUnselectable($('body'));
	_jQueryAddition_MakeUnselectable($('html'));
}
Hybrid.makePageSelectable=_hybridMakePageSelectable;
function _hybridMakePageSelectable()
{
	Hybrid.debugmessage("warning: makePageSelectable()");
	_jQueryAddition_MakeSelectable($(document));
	_jQueryAddition_MakeSelectable($('body'));
	_jQueryAddition_MakeSelectable($('html'));
}

Hybrid.makeSelectable=_hybridMakeSelectable;
function _hybridMakeSelectable(h,tf)
{
	if(tf)
	{
		_jQueryAddition_MakeSelectable(h.jquery);
	}else
	{
		_jQueryAddition_MakeUnselectable(h.jquery);
	}
}
function _jQueryAddition_MakeUnselectable(jQuery_elements)
 {
	// on should be live according to 
  jQuery_elements.on('dragstart selectstart touchstart touchmove', _jQueryAdditionstopEvent);
	
  jQuery_elements.attr('unselectable','on')
   .css({'-moz-user-select':'-moz-none',
   '-moz-user-select':'none',
   '-o-user-select':'none',
   '-khtml-user-select':'none', /* you could also put this in a class */
   '-webkit-user-select':'none',/* and add the CSS class here instead */
   '-ms-user-select':'none',
   'user-select':'none',
   '-webkit-touch-callout':'none'
   });
 }
 function _jQueryAdditionstopEvent(event){
	event.preventDefault(); 
	event.stopPropagation();
	//event.cancelBubble=true; // this is for if you stop using jQuery !!
    //event.returnValue=false;
	 //return false; // this one is deprecated!
 }
 function _jQueryAddition_MakeSelectable(jQuery_elements)
 {
 Hybrid.debugmessage("warning element made selectable!");
 jQuery_elements.off('dragstart selectstart touchstart touchmove', _jQueryAdditionstopEvent);
  jQuery_elements.attr('unselectable','')
   .css({'-moz-user-select':'text',
   '-moz-user-select':'text',
   '-o-user-select':'text',
   '-khtml-user-select':'text', /* you could also put this in a class */
   '-webkit-user-select':'text',/* and add the CSS class here instead */
   '-ms-user-select':'text',
   'user-select':'text'
   });
 }
Hybrid.disablePageScrolling=_hybridDisablePageScrolling;
function _hybridDisablePageScrolling()
{
	$('html, body').on('touchmove', function(e)
	{ 
		 //prevent native touch activity like scrolling
		 e.stopPropagation(); 
		 e.preventDefault(); 
	});
};

 /*-------------------------------------------------------------------------------------
 // STANDARD PAGE FUNCTIONS
 ----------------------------------------------------------------------------------------*/ 
 $(document).ready(_hybridInit); /*--
 SnoepGames: snoepHybrid - debug
---*/

Hybrid.debug = false; // you can switch it on with the url switching!
Hybrid.internalDebugWindow = false; // you can switch it on with the menu
Hybrid.debugEchoDiv = false;
Hybrid.setDebugEchoDiv=_hybridSetDebugEchoDiv;


window.onerror=_hybridGlobalErrorListener;

var hybrid_debug_message_string="";
// debugmessage relays to console, but also to internal debug-window that you might use on a tablet.
Hybrid.debugmessage=hybrid_debugmessage;
function hybrid_debugmessage(message){
  if(typeof console == "object")console.log(message);
  hybrid_debug_message_string+=message+"<br>";
  if(Hybrid.debugEchoDiv)
  {
	Hybrid.debugEchoDiv.append('<br>'+message);
  }
  if($("#internal_debug_window").length!=0){
	$("#internal_debug_window").html(hybrid_debug_message_string);
  }
};

Hybrid.throwError=hybrid_throw;
function hybrid_throw(message)
{
	hybrid_debugmessage(message);
	throw(message);
};
// this function enables Chrome to pinpoint minified errors, also you get an alert for an error on iPad and stuff!
function _hybridGlobalErrorListener(errorMsg, url, lineNumber, column, errorObj) 
{
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
    + ' Column: ' + column + ' StackTrace: ' +  errorObj);
	hybrid_debugmessage('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
    + ' Column: ' + column + ' StackTrace: ' +  errorObj);
}

// allows debugmessages to appear (during loading)
function _hybridSetDebugEchoDiv(jqo)
{
	// get's a jquery object to echo to..
	Hybrid.debugEchoDiv=jqo;
}

function _hybridSwitchInternalDebug(value){
	if(value=="1"){
	   Hybrid.internalDebugWindow=true;
		// create a top div just below the menu
	   var html_string="";
	   html_string+="<div class='hybrid-menu' id='hybrid-debug'>";
	   html_string+="<hr><h1 id='hybrid-debug-title'>Hybrid Internal Debug Window</h1><ul><hr>";
	   html_string+="<p id='internal_debug_window' style='text-align: left; word-break:break-all; word-wrap: break-word; width:300px;  height:300px; overflow: auto;'></p>";
	   html_string+="</div>";
	   $(html_string).appendTo("body");
		$("#internal_debug_window").css("background-color","#ffffff");
		_jQueryAddition_MakeSelectable($("#internal_debug_window"));
		$("#internal_debug_window").html(hybrid_debug_message_string);
		 $('#hybrid-debug-title').mousedown(_hybridDebugMenu_dragmousedown);
	}else{
		$("#hybrid-debug").remove();
		Hybrid.internalDebugWindow=false;
	}
	 _hybridHideContextMenu(); // if you selected this option from this menu, it dissapears to show you the right context next time!
};

 function _hybridDebugMenu_dragmousedown(e){
	//Hybrid.debugmessage("start drag debug menu!");
    Hybrid.dragging = {};
    Hybrid.dragging.pageX0 = e.pageX;
    Hybrid.dragging.pageY0 = e.pageY;
    Hybrid.dragging.elem = $('#hybrid-debug');
    Hybrid.dragging.offset0 = $('#hybrid-debug').offset();
	// we need to do this for touch as well!!!
    function handle_dragging(e){
        var left =  Hybrid.dragging.offset0.left + (e.pageX -  Hybrid.dragging.pageX0);
        var top =  Hybrid.dragging.offset0.top + (e.pageY -  Hybrid.dragging.pageY0);
        $( Hybrid.dragging.elem)
        .offset({top: top, left: left});
    }
    function handle_mouseup(e){
        $('body').off('mousemove', handle_dragging).off('mouseup', handle_mouseup);
    }
    $('body').on('mouseup', handle_mouseup).on('mousemove', handle_dragging);
}

function _hybridImagePreloadFailed(e)
{
	var mes="Error occured while trying to load image "+Hybrid.currentImageIndex+".";
	Hybrid.debugmessage(mes);
	_hybridReportProblem(mes);
}
function _hybridAudioLoadError(e) 
{
	if(e)
	Hybrid.debugmessage("Error " + e.target.status + " occurred while trying to load audio.");
}

function  _hybridReportProblem(errormessage){
	// set location href to making games.
	throw new Error(errormessage);
	Hybrid.debugmessage("todo: get hybrid platform games problems.");
}
 /*--
 SnoepGames: snoepHybrid - audio
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/
// initial values!
Hybrid.switches.sound = true;  // this will be set on user agent, that sucks, but that's just how it is right now.
Hybrid.switches.music = true;  // if we have a small sound on first touch, it is no longer necessary to distinguish between sound and music. 
Hybrid.audio_preloaded = 0; // progress counters!
Hybrid.nr_of_audio_files_to_preload = 0; // total of audio files to be preloaded, not always the whole manifest!

//Hybrid.audio_manifest['init_sound']={preload: true};// this is contained in the library itself it's a default.

function _hybridSwitchSound(value)
{
  Hybrid.setSwitch("sound",value);
  _hybridHideContextMenu(); // if you selected this option from this menu, it dissapears to show you the right context next time!
}
function _hybridSwitchMusic(value)
{
  Hybrid.setSwitch("music",value);
  _hybridHideContextMenu(); // if you selected this option from this menu, it dissapears to show you the right context next time!
}
// This function is private and called in hybrid_init in the _hybridGetCapabilities sweep!
function _hybridTestForAudioSupport(){

  // here we test for audio object creation support!!!
  var a = document.createElement('audio');
  // prefer mp3, but allow ogg for some!
  // assume the best situation and then eliminate
  Hybrid.capabilities.sound=true;
//  Hybrid.capabilities.sound_active=false; // this is for iPads and the like.
  Hybrid.capabilities.audio_preload=true;
  Hybrid.capabilities.music=true;
  Hybrid.switches.sound=true; // these can be overridden by a user, or for debugging!
  Hybrid.switches.music=true; // these can be overridden by a user, or for debugging!

  // try to fill it automatically!
  var ogg = !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
  if (ogg) Hybrid.capabilities.audiotype='ogg';
  // but prefer mp3, more support!
  var mp3 = !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
  if (mp3) Hybrid.capabilities.audiotype='mp3';
  else
  {
   Hybrid.capabilities.audiotype="";
  }
  
  // now we test for full on webaudio support in all possibly available flavours
  // see article:http://chimera.labs.oreilly.com/books/1234000001552/ch01.html#s01_2
  // this also includes future implementations!
  var contextClass = (window.AudioContext ||  window.webkitAudioContext ||  window.mozAudioContext ||  window.oAudioContext ||  window.msAudioContext);
  if (contextClass) 
  {
    // Web Audio API is available.
	Hybrid.audioContextReference = new contextClass();
	Hybrid.capabilities.audioContext=true; // huzza,we can do a lot now!
  } else 
  {
	Hybrid.capabilities.audioContext=false;
  }
  // webaudio support
  
  switch(Hybrid.capabilities.browser)
  {
   case "firefox":
    Hybrid.capabilities.audiotype='ogg';
   break;
   case "chrome":
    if(Hybrid.capabilities.audioContext)
    {
     Hybrid.capabilities.audiotype='mp3';
     Hybrid.capabilities.sound=true;
     Hybrid.capabilities.audio_preload=true; // and we preload everything!!
     Hybrid.switches.sound=true;
     //debugmessage("CHROME, Hybrid.capabilities.audioContext=true; ");     
    }else
    {
     Hybrid.capabilities.audiotype='mp3';
     Hybrid.capabilities.sound=true;
     Hybrid.capabilities.audio_preload=true;
     Hybrid.switches.sound=true;
    }
   break;
   case "android":
    if(Hybrid.capabilities.audioContext)
    {
     Hybrid.capabilities.sound=true; // if there is no support forwebaudio, this is an old android and you are screwed!
     Hybrid.switches.sound=true;
     Hybrid.capabilities.audiotype="mp3"; // not ogg and not mp3!
     Hybrid.capabilities.audio_preload=true; // not ogg and not mp3!
     //debugmessage("ANDROID, Hybrid.capabilities.audioContext=true; ");     
    }else
    {
     Hybrid.capabilities.sound=false; // if there is no support forwebaudio, this is an old android and you are screwed!
     Hybrid.switches.sound=false;
     Hybrid.capabilities.audiotype="mp3"; // not ogg and not mp3!
     Hybrid.capabilities.audio_preload=false; // not ogg and not mp3!
     //debugmessage("ANDROID, Hybrid.capabilities.audioContext=false; ");     
    }
   break;
   case "safari":
    if(Hybrid.capabilities.audioContext)
    {
     Hybrid.capabilities.sound=true;
     Hybrid.switches.sound=true;
     Hybrid.switches.music=true;
     Hybrid.capabilities.audiotype="mp3"; // mp3 should be supported from 3.1 
     Hybrid.capabilities.audio_preload=true; 
     //debugmessage("SAFARI, Hybrid.capabilities.audioContext=true");     
    }else
    {
     Hybrid.capabilities.sound=true;
     Hybrid.switches.sound=false;
     Hybrid.switches.music=true;
     Hybrid.capabilities.audiotype="mp3"; // not ogg and but mp3 should be supported! 
     Hybrid.capabilities.audio_preload=false; // not ogg and not mp3!
     Hybrid.debugmessage("We are on Safari so Hybrid.capabilities.sound=true, but no preload! Music on is default");
    }
   break;
  }
 }
 
 // loading functions
 
 // for more info: https://developer.mozilla.org/es/docs/XMLHttpRequest/Usar_XMLHttpRequest
 // http://chimera.labs.oreilly.com/books/1234000001552/ch01.html#s01_8
 function _hybridLoadAudioIntoContext(nr,url,setCallback)
 {
  var request = new XMLHttpRequest(); // if webaudio api available, so is this!
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() 
  { 
		Hybrid.debugmessage("Audio preloaded:"+nr);
		Hybrid.audioContextReference.decodeAudioData(request.response, function(theBuffer){
		   Hybrid.audio_manifest[nr].buffer = theBuffer;
		   Hybrid.audio_manifest[nr].hasAudioContext = true;

		   // after decode, set the progress of loading (if necessary and wanted!)..
			if(setCallback)
			{
				if(Hybrid.audio_manifest[nr].loaded==false)
				{
					 Hybrid.audio_preloaded++;
					 Hybrid.audio_manifest[nr].loaded=true;
				}
				if ( Hybrid.audio_preloaded == Hybrid.nr_of_audio_files_to_preload) 
				{
					 Hybrid.debugmessage("all audio has been preloaded");
					 _hybridDonePreloading();  
					 return;
				}
				if(Hybrid.capabilities.audio_preload==false)
				{
					 // in theory this could be called more than once, so we have a watchvariable on allAudioLoaded..
					 Hybrid.debugmessage("skip rest because we have no audio preload support!");
					 _hybridDonePreloading();  // skip audio if no support!
					 return;
				}
			} // end of set Callback
		}, _hybridAudioLoadError); // end of decode audio callback function definition
  } // end of request onload function definition
  request.send();
 }
 function _hybridLoadAudioTag(url,setLoadHandler)
 {
  var audio = new Audio();
  audio.src = url;
  audio.preload = "auto";
  audio.vol = 1; // default!
  if(setLoadHandler==true)
  {
   $(audio).on("loadeddata", audioFileLoadedHandler);  // jQuery checking
   $(audio).on("canplay canplaythrough", audioFileLoadedHandler);  //  this will give you a million hits in Chrome
   // this seems to keep on firing
  }
  return audio;
 }
 
  // Audio preloader functions
 function audioFileLoadedHandler()
 {
	Hybrid.audio_preloaded++;
//  if(audio_preload<=audio_to_preload)
//  {
//   debugmessage("AUDIO FILE "+audio_preload+"/"+audio_to_preload+" loaded" );
//   }
	if ( Hybrid.audio_preloaded == Hybrid.nr_of_audio_files_to_preload) 
	{
		Hybrid.debugmessage("all audio has been preloaded");
		_hybridDonePreloading();  
		return;
	}
	if(Hybrid.capabilities.audio_preload==false)
	{
		// in theory this could be called more than once, so we have a watchvariable on allAudioLoaded..
		Hybrid.debugmessage("skip rest because we have no audio preload support!");
		_hybridDonePreloading();  // skip audio if no support!
		return;
	}
 }
 // ---------------------------------
 // Music Loop functions! START
 // ---------------------------------
Hybrid.audioLoopKeeper="";
Hybrid.audioLoopBufferSource=-1;
Hybrid.musicLoopVolume=0.4; // this is a default value for all loops! you can change it with Hybrid.changeLoopVolume(loop_name, volume);
Hybrid.startMusicFailTryAgainSource="";
Hybrid.startMusicFailTimeOut=-1; // try again every two seconds, until it works!
  
Hybrid.startMusicLoop=_hybridStartMusicLoop;
Hybrid.stopMusicLoop=_hybridStopMusicLoop;

function _hybridStopMusicLoop(audio_id){
  if(audio_id=="") return; //this is for games, without music!
  if(Hybrid.switches.music)
  {
   if(Hybrid.capabilities.audioContext)
   {
		_hybridStopMusicLoopAudioContext(audio_id);
   }else
   {
		_hybridStopMusicLoopAudioTag(audio_id);
   }
  }
};

function _hybridStartMusicLoop(audio_id){
 if(audio_id=="") return; //this is for games, without music!
  if(Hybrid.switches.music)
  {
   if(Hybrid.capabilities.audioContext)
   {
		_hybridStartMusicLoopAudioContext(audio_id);
   }else
   {
		_hybridStartMusicLoopAudioTag(audio_id);
   }
  } 
};

 
function _hybridStartMusicLoopAudioContext(audio_id) {
   Hybrid.debugmessage("_hybridStartMusicLoopAudioContext for audio_id: "+audio_id+" - "+typeof(audio_id)+" source:"+Hybrid.startMusicFailTryAgainSource);
  if(typeof(audio_id)==="undefined" && Hybrid.startMusicFailTryAgainSource!="")
  {
   // we are probably retrying
   Hybrid.debugmessage("retrying for audio_id: "+Hybrid.startMusicFailTryAgainSource);
   audio_id=Hybrid.startMusicFailTryAgainSource;
   Hybrid.startMusicFailTimeOut=-1; // after all it's clear or this wouldn't fire
   //debugmessage(" probably a retry for "+audio_id);
  }
  var nr=audio_id;
  audioLoopKeeper=audio_id;
  if(typeof(Hybrid.audio_manifest[nr]) !== "undefined" && typeof(Hybrid.audio_manifest[nr].buffer) !== "undefined")
  {
		Hybrid.audio_manifest[nr].started=true;
		//debugmessage("set started for music loop:"+nr);
		if(1)//audioLoopBufferSource==-1) // theoretically works.
		{
			Hybrid.audioLoopBufferSource = Hybrid.audioContextReference.createBufferSource();
			// keep ref to stop it!
			Hybrid.audioLoopBufferSource.buffer = Hybrid.audio_manifest[nr].buffer;
			// set loop and volume!
			Hybrid.audioLoopBufferSource.loop=true;
			var gainNode = Hybrid.audioContextReference.createGain();
			// Connect the source to the gain node.
			Hybrid.audioLoopBufferSource.connect(gainNode);
			// Connect the gain node to the destination.
			gainNode.connect(Hybrid.audioContextReference.destination);
			gainNode.gain.value = Hybrid.musicLoopVolume;
			Hybrid.audioLoopBufferSource.start(0);
		}else
		{
			//debugmessage("buffer present, so just go:"+nr);
			Hybrid.audioLoopBufferSource.start(0);
		}
  }else
  {
	   //debugmessage(audio_id+" not loaded yet,let's try again in 2 secs..");
	   // this probably means, the preload didn't work yet..
	   // check if it's preloaded later and try again..
	   // trouble is now,we won't try that,it's just too damn risky!
	   Hybrid.startMusicFailTryAgainSource=audio_id;
	   Hybrid.debugmessage(audio_id+" buffer not ready yet, retry?");
	   if(Hybrid.startMusicFailTimeOut==-1)
	   {
			Hybrid.debugmessage(audio_id+" not ready yet, try again in 2000 ms");
			Hybrid.startMusicFailTimeOut=setTimeout(_hybridStartMusicLoopAudioContext,2000); // try again every two seconds, until it works!
		}
  }
 };
 function _hybridStartMusicLoopAudioTag(audio_id){
	var nr;
	if(audio_id=="") return; //this is for games, without music!
	if(Hybrid.audioLoopKeeper!=""){
		Hybrid.debugmessage("call stopMusicLoop first!");
		return;
	}
	Hybrid.audioLoopKeeper=audio_id;
	if(Hybrid.switches.music)
	{
		nr=audio_id;
		if(typeof(Hybrid.audio_manifest[nr]) !== "undefined")
		{
			// we need to start the music on the click!
			// if the page has embedded music, play it here!
			//music.play();
			var url="";
			if (Hybrid.capabilities.audiotype === 'ogg') {
				url="snd_ogg/"+nr+".ogg";
			} else if (Hybrid.capabilities.audiotype === 'mp3') { 
				url="snd_mp3/"+nr+".mp3";
			}
			if(url!='')
			{
				Hybrid.debugmessage("trying to start music file! '"+url+"' without preloading");
				Hybrid.audio_manifest[nr].au=new Audio(url); // IE works fine, but safari reports url is undefined!
				Hybrid.audio_manifest[nr].au.load();
				Hybrid.audio_manifest[nr].started=true;
				Hybrid.audio_manifest[nr].au.loop=Hybrid.audio_manifest[nr].loop;
				Hybrid.audio_manifest[nr].au.volume=Hybrid.musicLoopVolume; //audio_manifest[nr].vol; // standard soft for audio loops!
				
				Hybrid.audio_manifest[nr].au.play(); // safari for windows crashed here!!!
			}else
			{
				window.alert("Sorry, no sound capabilities found for this browser.");
				Hybrid.switches.music=false;
			}
		}
	}else
	{
		Hybrid.debugmessage("no music loop, because music is off!");
	}
 } 

 function _hybridStopMusicLoopAudioTag(audio_id){
   if(audio_id=="") return; //this is for games, without music!
   if(typeof(Hybrid.audio_manifest[audio_id])!=="undefined")
   {
    if(Hybrid.audio_manifest[audio_id].started)
    {
     Hybrid.audio_manifest[audio_id].au.pause();
     Hybrid.audio_manifest[audio_id].started=false;
     Hybrid.audioLoopKeeper="";
    }
   }
 };
 
function _hybridStopMusicLoopAudioContext(audio_id){
	

	if(Hybrid.startMusicFailTimeOut!=-1)
	{
		clearTimeout(Hybrid.startMusicFailTimeOut);
		Hybrid.startMusicFailTimeOut=-1;
	}
	if(typeof(Hybrid.audio_manifest[audio_id])==="undefined")
	{
		Hybrid.debugmessage("undefined audioloop:"+audio_id);
		return;
	}
	
	if(Hybrid.audio_manifest[audio_id].started)
	{
		if(Hybrid.audioLoopBufferSource)
		{
			Hybrid.audioLoopBufferSource.stop(0); // can give this a value, don't know what that is..
		}
		Hybrid.audioLoopKeeper="";
	}
	Hybrid.audioLoopKeeper="";
 };

  // ---------------------------------
 // Music Loop functions! END
 // ---------------------------------

Hybrid.playSound=_hybridPlaySound;
function _hybridPlaySound(nr)
{
	if(Hybrid.capabilities.sound==true && Hybrid.switches.sound!=false)
	{
		//Hybrid.debugmessage("playSound "+nr);
		if(Hybrid.audio_manifest[nr] !== undefined)
		{
			if(Hybrid.audio_manifest[nr].hasAudioContext)
			{
				if(Hybrid.audio_manifest[nr].buffer !== undefined)
				{
					var source = Hybrid.audioContextReference.createBufferSource();
					source.buffer = Hybrid.audio_manifest[nr].buffer;
					source.connect(Hybrid.audioContextReference.destination);
					source.start(0);
					//debugmessage("start webaudio nr "+nr);
				}else
				{
					Hybrid.debugmessage("sorry, no audio support via AudioContext of WebAudio.. Something went wrong..");
				}
			}else
			{
				if(Hybrid.audio_manifest[nr].au !== undefined)
				{
					//debugmessage("I would now play sound "+nr)
					Hybrid.audio_manifest[nr].au.currentTime=0; // if you don't do this quick sounds will be lost!
					Hybrid.audio_manifest[nr].au.play(); // it seems to be that easy!*/
				}else
				{
					Hybrid.debugmessage("sorry, no audio support");
				}
			}
		}
	}else
	{
		Hybrid.debugmessage("no sound support for this device")
	}
}
  /*--
 SnoepGames: snoepHybrid - input
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/
Hybrid.switches.support_multitouch = true; // see the touchStart handler for implementation, this is a switch rather than a support

function _hybridIsTouchDevice(){
//	if(navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i)) return true;
	// this below is not enough in iOs7, obviously, so a little browser sniffing fixes that..
//  return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;

	// this is the agnostic check from..
	// https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/
	// we should still test this for i-Pad!
	if (('ontouchstart' in window) ||
		 (navigator.maxTouchPoints > 0) ||
		 (navigator.msMaxTouchPoints > 0)){
		  /* browser with either Touch Events of Pointer Events
			 running on touch-capable device */
			 return true;
		}
	return false; 
};
 // you can call Hybrid.capabilities.maxtouches, it's set in init! If that =0 you don't need to care about touch!
function _hybridGetMaxTouches(){

	if(Hybrid.capabilities.touchmode)
	{
		if(navigator.maxTouchPoints > 1)return navigator.maxTouchPoints;
		if(navigator.msMaxTouchPoints > 1)return navigator.msMaxTouchPoints; // windows 8 and the like
		return 1;
	}
	return 0;
 }

 // BUTTONS Various kinds :)
Hybrid.standardButtonCallback=null;
 
 
Hybrid.standardButtonCallback=null;
function _hybridStandardiseButtonClick(e)
{
	// this can be called by a touch or a mouse event, it doesn't matter, we only use the label!
	Hybrid.debugmessage("_hybridStandardiseButtonClick: "+$(this).attr("label"));
	e.stopPropagation();
	e.preventDefault();
//	if(e.handled !== true) 
//	{
		Hybrid.standardButtonCallback($(this).attr("label"));
//    } else 
//	{
//		return false;
//	}
 }
 Hybrid.standardButtonOverCallback=null;
  function _hybridStandardiseButtonOver(e)
 {
	// this can be called by a touch or a mouse event, it doesn't matter, we only use the label!
	Hybrid.debugmessage("_hybridStandardiseButtonOver: "+$(this).attr("label"));
	e.stopPropagation();
	e.preventDefault();
	if(e.type==="mouseover")
	{
		Hybrid.standardButtonOverCallback($(this).attr("label"),"over");
	}else
	{
		Hybrid.standardButtonOverCallback($(this).attr("label"),"out");
	}
 }
 
 
Hybrid.makeButton=_hybridMakeButton;
function _hybridMakeButton(box, label, cb, cb_over)
{
  if(box.kind!="hybridLayer" && box.kind!="hybridBox" && box.kind!="hybridCanvas")
  {
   Hybrid.debugmessage("makeButton reports: not the right kind of object: "+box.kind);
   return null;
  }
  // keep it in the Hybrid standardButtonCallback!
  if(Hybrid.standardButtonCallback==null || Hybrid.standardButtonCallback==cb)
  {
	Hybrid.standardButtonCallback=cb;
  }else
  {
	Hybrid.debugmessage("_hybridMakeButton reports: May be a callback conflict!!");
  }
  // maybe the box is empty, then we add a transparent image.
  if(box.jquery.html()=="") box.jquery.html("<img width='100%' height='100%' src='"+Hybrid.dataurls['hotspots']+"' />");
  
  // if you are unsure if hotspots are being made, the next is a handy debug rule!
  var hotspot=box.jquery;
  hotspot.attr("label",label);
  
  //Hybrid.debugmessage("makeButton of: "+box.jquery.attr("id"));
  hotspot.on('click',_hybridStandardiseButtonClick);
  
  if(Hybrid.capabilities.maxtouches>0)
  {
    hotspot.on('touchstart', _hybridStandardiseButtonClick);
    hotspot.on('touchend', _hybridStandardiseButtonClick);
    hotspot.on('touchmove', _hybridStandardiseButtonClick); // bind all to get better responses!
  }else
  {
	if(cb_over!=undefined)
	{
		Hybrid.standardButtonOverCallback=cb_over;
		// we also need to here about mouse in and out!
		hotspot.on('mouseover', _hybridStandardiseButtonOver);
		hotspot.on('mouseout', _hybridStandardiseButtonOver);
	}
  }
  
  hotspot.bind('dragstart',_jQueryAdditionstopEvent); // this ACTUALLY stops selecting the stuff.
};

Hybrid.listenToKeys=_hybridListenToKeys;
function _hybridListenToKeys(tf,ukh)
{
	if(typeof(Hybrid.input)==="undefined")
		Hybrid.input={};

	Hybrid.input.keys=[];// no key down!
	Hybrid.input.key_modifiers={};// no modifiers down.
		
	if(tf)
	{
		$(document).keydown(_hybridKeyHandler);
		$(document).keyup(_hybridKeyHandler);
		Hybrid.debugmessage("Hybrid is now listening to Keys.");
		Hybrid._userKeyHandler=ukh;
	}
	else
	{
		$(document).keydown();
		$(document).keyup();
		Hybrid._userKeyHandler=null;
	}
}
function _hybridKeyHandler(ev)
{
	var down=(ev.type=="keydown");
	if(Hybrid.input.keys[ev.keyCode]!=down)
	{
		if(typeof(Hybrid._userKeyHandler)!="undefined")
		{
			Hybrid._userKeyHandler(ev.keyCode,down);
		}
	}
	Hybrid.input.keys[ev.keyCode]=down; // record it for checking later!
//	Hybrid.debugmessage(ev.keyCode+ "." +down);
}

Hybrid.createHotspot=_hybridCreateHotspot;
function _hybridCreateHotspot(o,handler)
{
	if(o.jquery.html()=="")
	{
//		o.jquery.html("<img width='100%' height='100%' src='"+Hybrid.dataurls['hotspots']+"' />");
		o.jquery.html("<img width='100%' height='100%' src='"+Hybrid.dataurls['hotspots']+"' />");
		// self contained hybrid!
		//
		
	}
	
	
	// if you are unsure if hotspots are being made, the next is a handy debug rule!
	// layer.jquery.html("<img src='../static/img/show_ho_old_tspots.png' width='100%' height='100%'>");
	var hotspot=o.jquery;
	Hybrid.debugmessage("makeHotSpot of: "+o.jquery.attr("id"));

	//jQueryAddition_MakeUnselectable(hotspot);
	// bind mouse and touch to this hotspot
	$(window).mouseup(handler); // this is reported to even catches mouse up outside window!
	if(Hybrid.capabilities.touchmode)
	{
		//disablePageScrolling(); // no more pagescrolling for duration of game
		//alert("READY! in support.touchmode!");
		hotspot.on('touchstart touchend touchcancel touchmove', handler);
		$("body").on("touchend", handler); 
		$(document).on("touchend", handler); 
		$(document).on("mouseup", handler); 
		$('html').on("touchend", handler); 
		hotspot.mouseover(handler); 
		hotspot.mouseup(handler); 
		// this works on an iPad, but buttons will no longer work, so we need to fix that!
	}else
	{
		//alert("READY! in desktopmode!");
		// add handler to support clicking on background in user_agent_iOs!
		hotspot.mouseover(handler); // makes it possible to detect when you are outside a hotspot!
		hotspot.mouseleave(handler); // makes it possible to detect when you are outside a hotspot!
		hotspot.click(handler);
		hotspot.mousedown(handler);
		$("body").mouseup(handler); // should's this be $document and or $body, like touchend?
		$(document).mouseup(handler); // this even catches mouse up outside pane!
		$('html').mouseup(handler);
		hotspot.mousemove(handler);
	}
	// prevent default behaviour on dragstart events to be able to handle gestures over hotspots and images yourself!
	hotspot.on('dragstart', function (e) {  e.preventDefault(); console.log("dragstart");});
}

Hybrid.unifyMouseCoords=_hybridUnifyMouseCoords;
function _hybridUnifyMouseCoords(obj)
{
	//debugmessage("hybridUnifyMouseCoords from: "+obj.x+","+obj.y);
	obj.x=(obj.x-Hybrid.ox)/Hybrid.f;
	obj.y=(obj.y-Hybrid.oy)/Hybrid.f;
	//debugmessage("hybridUnifyMouseCoords to: "+obj.x+","+obj.y);
	return obj;
}


Hybrid.spriteButtonSelected=_hybridSpriteButtonSelected; //layer,x,y,w,h,image,anim,label,cb)
function _hybridSpriteButtonSelected(o,tf) 
{
	if(o.kind!="hybridSpriteButton")
	{
		Hybrid.debugmessage("spriteButtonSelected: sorry, you can only set selected of sprite buttons, not: "+l.kind);
		return;
	}
	if(typeof(Hybrid.graphics_manifest[o.image].ss[o.anim][2])==="undefined")
	{
		Hybrid.debugmessage("spriteButtonSelected: No third frame for sprite button"+l.kind);
		return;
	}
    var x1=Hybrid.graphics_manifest[o.image].ss[o.anim][0][0];
    var y1=Hybrid.graphics_manifest[o.image].ss[o.anim][0][1];
    var w1=Hybrid.graphics_manifest[o.image].ss[o.anim][0][2];
    var h1=Hybrid.graphics_manifest[o.image].ss[o.anim][0][3];
    var x2=Hybrid.graphics_manifest[o.image].ss[o.anim][2][0];
    var y2=Hybrid.graphics_manifest[o.image].ss[o.anim][2][1];
    var w2=Hybrid.graphics_manifest[o.image].ss[o.anim][2][2];
    var h2=Hybrid.graphics_manifest[o.image].ss[o.anim][2][3];
    var ii=Hybrid.graphics_manifest[o.image].img;
	// 
	if(tf==false)
	{
		o.context.drawImage(ii,x1,y1,w1,h1,0,0,w1,h1);// restore first image
	}else
	{
		o.context.drawImage(ii,x2,y2,w2,h2,0,0,w2,h2);// set third image as first image
	}
	// the ipad doesn't automatically release, so let's do that NOW and maybe break the active state...
	o.link_to_in.css("top","0");
}

Hybrid.createSpriteButton=_hybridSpriteButton; //layer,x,y,w,h,image,anim,label,cb)
function _hybridSpriteButton(l,x,y,w,h,image,anim,label,cb) 
{
  if(l.kind!="hybridLayer" && l.kind!="hybridBox")
  {
   Hybrid.debugmessage("createImageButton reports: not the right kind of object: "+l.kind);
   return null;
  }
  if(Hybrid.standardButtonCallback==null || Hybrid.standardButtonCallback==cb)
  {
	Hybrid.standardButtonCallback=cb;
  }else
  {
	Hybrid.debugmessage("_hybridSpriteButton reports: May be a callback conflict!!");
  }
  var o={};
  o.id="hybridSpriteButton"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  o.kind="hybridSpriteButton";
  o.label=label;
//  o.callback=cb; // this is unneccessary
  o.container=Hybrid.createBox(l,x,y,w,h);
   o.container.jquery.attr("label",label);
  o.jquery=o.container.jquery; // must have this to be able to hide it.
//  o.container.jquery.html('<a class="btn" style="width: '+toPx(w)+'; height: '+toPx(h)+';" href="#"><span class="btn-content" style="padding: '+toPx((h-14)/2.2)+'; font-size: '+toPx(14)+';">'+tekst+'</span></a>');
  // create a canvas inside this l!
  
  var canvas_w,canvas_h;
  o.image=image;
  o.anim=anim;
  o.container.jquery.html('<div class="image_button" id="'+o.id+'_in" style="width: 100%; height: 200%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;" href="#"><canvas id="'+o.id+'_canv"></canvas></div>');
  o.link_to_in=$("#"+o.id+"_in");
  var html_string="<canvas id='"+o.id+"'></canvas>";
  o.canvas=$("#"+o.id+"_canv")[0];
  
  var x1=Hybrid.graphics_manifest[image].ss[anim][0][0];
  var y1=Hybrid.graphics_manifest[image].ss[anim][0][1];
  var w1=Hybrid.graphics_manifest[image].ss[anim][0][2];
  var h1=Hybrid.graphics_manifest[image].ss[anim][0][3];
  var x2=Hybrid.graphics_manifest[image].ss[anim][1][0];
  var y2=Hybrid.graphics_manifest[image].ss[anim][1][1];
  var w2=Hybrid.graphics_manifest[image].ss[anim][1][2];
  var h2=Hybrid.graphics_manifest[image].ss[anim][1][3];
  var ii=Hybrid.graphics_manifest[image].img;
  canvas_w=w1; // frame 0 width (of max!)
  if(w2>canvas_w)canvas_w=w2; // frame 1 width
  canvas_h=h1+h2; // frame 0 height + frame 1 height
  
  o.canvas.width = canvas_w; 
  o.canvas.height = canvas_h; 
  $("#"+o.id+"_canv").width(toPx(w))
					 .height(toPx(h*2)); // css scale to be determined by containing div.
  o.context = o.canvas.getContext('2d'); 
  // draw the sprites now on that canvas..
  
  o.context.drawImage(ii,x1,y1,w1,h1,0,0,w1,h1);// i think this will set the first image nicely!
  o.context.drawImage(ii,x2,y2,w2,h2,0,h1,w2,h2);// i think this will set the first image nicely!
   
  o.container.jquery.on('click',_hybridStandardiseButtonClick);
  if(Hybrid.capabilities.maxtouches>0)
  {
    o.container.jquery.on('touchstart', _hybridStandardiseButtonClick);
    o.container.jquery.on('touchend', _hybridStandardiseButtonClick);
    o.container.jquery.on('touchmove', _hybridStandardiseButtonClick); // bind all to get better responses!
  }
  o.container.jquery.bind('dragstart',_jQueryAdditionstopEvent ); // this ACTUALLY stops selecting the stuff.
  // allthough calling hybridMakePageUnselectable does it for everything in the page, all at once.
  l.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global element counter!
  return o; // return the object!
 }


Hybrid.createImageButton=_hybridCreateImageButton;
function _hybridCreateImageButton(layer,x,y,w,h,image,label,cb)
{
  if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
  {
   Hybrid.debugmessage("createImageButton reports: not the right kind of object: "+layer.kind);
   return null;
  }
  if(Hybrid.standardButtonCallback==null || Hybrid.standardButtonCallback==cb)
  {
	Hybrid.standardButtonCallback=cb;
  }else
  {
	Hybrid.debugmessage("createImageButton reports: May be a callback conflict!!");
  }
  var o={};
  o.id="hybridImageButton"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  o.kind="hybridImageButton";
  o.label=label;
//  o.callback=cb; // this is unneccessary
  o.container=Hybrid.createBox(layer,x,y,w,h);
   o.container.jquery.attr("label",label);
  o.jquery=o.container.jquery; // must have this to be able to hide it.
//  o.container.jquery.html('<a class="btn" style="width: '+toPx(w)+'; height: '+toPx(h)+';" href="#"><span class="btn-content" style="padding: '+toPx((h-14)/2.2)+'; font-size: '+toPx(14)+';">'+tekst+'</span></a>');
  o.container.jquery.html('<div class="image_button" style="width: 100%; height: 200%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;" href="#"><img src="'+Hybrid.img_src_path+Hybrid.graphics_manifest[image].src+'" width="100%" height="100%"></div>');
  
  o.container.jquery.on('click',_hybridStandardiseButtonClick);
  if(Hybrid.capabilities.maxtouches>0)
  {
    o.container.jquery.on('touchstart', _hybridStandardiseButtonClick);
    o.container.jquery.on('touchend', _hybridStandardiseButtonClick);
    o.container.jquery.on('touchmove', _hybridStandardiseButtonClick); // bind all to get better responses!
  }
  o.container.jquery.bind('dragstart',_jQueryAdditionstopEvent ); // this ACTUALLY stops selecting the stuff.
  // allthough calling hybridMakePageUnselectable does it for everything in the page, all at once.
  layer.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global element counter!
  return o; // return the object!
 }
Hybrid.createTextButton=_hybridCreateStandardButton;
function _hybridCreateStandardButton(layer,x,y,w,h,tekst,label,cb,fontsz)
{
	// if it weren't for IE 9 and 10, we'd use border-image: css property..
	// This really sucks bigtime, but hey..
	if(fontsz==undefined)fontsz=16; // default.
  if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
  {
   Hybrid.debugmessage("createStandardButton reports: not the right kind of object: "+layer.kind);
   return null;
  }
  if(Hybrid.standardButtonCallback==null || Hybrid.standardButtonCallback==cb)
  {
	Hybrid.standardButtonCallback=cb;
  }else
  {
	Hybrid.debugmessage("createStandardButton reports: May be a callback conflict!!");
  }
  var o={};
  o.id="hybridStandardButton"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  o.kind="hybridStandardButton";
  o.label=label;
//  o.callback=cb; // this is unneccessary
  o.container=Hybrid.createBox(layer,x,y,w+5,h+5);
   o.container.jquery.attr("label",label);
  o.jquery=o.container.jquery; // must have this to be able to hide it.
  o.container.jquery.html('<a class="btn" style="width: '+toPx(w)+'; height: '+toPx(h)+'; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;" href="#"><span class="btn-content" unselectable="on" style="padding: '+toPx((h-fontsz)/2.2)+'; font-size: '+toPx(fontsz)+';">'+tekst+'</span></a>');

  o.container.jquery.on('click',_hybridStandardiseButtonClick);
  if(Hybrid.capabilities.maxtouches>0)
  {
    o.container.jquery.on('touchstart', _hybridStandardiseButtonClick);
    o.container.jquery.on('touchend', _hybridStandardiseButtonClick);
    o.container.jquery.on('touchmove', _hybridStandardiseButtonClick); // bind all to get better responses!
  }
  o.container.jquery.bind('dragstart',_jQueryAdditionstopEvent ); // this ACTUALLY stops selecting the stuff.
  // allthough calling hybridMakePageUnselectable does it for everything in the page, all at once.
  layer.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global element counter!
  return o; // return the object!
 } /*--
 SnoepGames: snoepHybrid - canvas
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/
 
function _hybridIsCanvasSupported(){
 return !!document.createElement('canvas').getContext;
};

Hybrid.createCanvas=_hybridCreateCanvas;
function _hybridCreateCanvas(layer,x,y,w,h){
  var o={};
  o.id="canv"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  var html_string="<canvas id='"+o.id+"'></canvas>"
  $(html_string).appendTo(layer.jquery);
  
  o.jquery=$("#"+o.id).css("z-index",layer.dynamic_element_counter).css({left: toPx(x), top: toPx(y)});
  o.kind="hybridCanvas";
  
  // setup canvas for use
  o.canvas=$("#"+o.id)[0];
  o.w=w;
  o.h=h;
  o.canvas.width = w; 
  o.canvas.height = h; 
  o.jquery.width(toPx(w))
    .height(toPx(h));
  o.context = o.canvas.getContext('2d'); 
  
  _jQueryAddition_MakeUnselectable(o.jquery); // make canvas unselectable as a default, else you get the copy thing on iPad and you can't cancel that..
  
  layer.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global counter.
  return o; // return the object!
};

// sprite functions!

// that's all nice, but you'll need to support it in Flash too, use a canvas!
//Hybrid.setBoxGradient=_hybridCSSGra;


// this is an attempt to fix a bug in chrome and ipad now, it's a bit slow though..
Hybrid.cleanCanvasAcc=_hybridCleanCanvasAcc;
function _hybridCleanCanvasAcc(o)
{
	// convert to data string and put it back, this clear accumulation buffer.
	/* basic image manipulation!!
	var output =  ctx.getImageData(0, 0, game.w, game.h);
    var outputData = output.data;
    var pixel = 0;
	var px,py;
    for (var y = 0; y < h; ++y) {
        for (var x = 0; x < w; ++x) {
				px=x+550*Math.sin(x/190*Math.sin(x/35)+y/200*Math.sin(y/37))+350*Math.sin(x/160*Math.sin(x/350)+y/20*Math.sin(y/370));
				py=y+550*Math.cos(y/200*Math.sin(y/33)+x/170*Math.sin(x/32));
                outputData[pixel]   = outputData[pixel]+2*Math.sin((px*py)/2000);
                outputData[++pixel] = outputData[pixel]+2*Math.sin((px*py)/2000);
                outputData[++pixel] = outputData[pixel]+2*Math.sin((py*py)/2000);
                outputData[++pixel] = outputData[pixel];
                ++pixel;
        }
    }
    ctx.putImageData(output, 0, 0);      */
	
//	var id=o.context.createImageData(o.w, o.h); // it's a pointer..
//	// now just put it back...
//	o.context.clearRect ( 0,0 ,o.w , o.h ); // so this doesn't do anything.
//	o.context.putImageData(id,o.w,o.h); returns a clear canvas.. damn!

// we need to physically create a NEW canvas, paint on that and return it.	
	
	//var id=o.context.createImageData(o.w, o.h); 
	// create a temporary invisible canvas to copy on to and from!!!
	
	// create a temp layer
/*	var temp=Hybrid.createLayer();
	var temp_canvas=Hybrid.createCanvas(temp,0,0 ,o.w , o.h ); // now we have new and clean data!
	temp_canvas.context.drawImage(o.canvas, 0, 0);
	Hybrid.clearCanvas(o);
	o.context.drawImage(temp_canvas.canvas, 0, 0); // somehow, drawing this back doesn't work, we need to isolate this problem..
	// NOW remember to remove the extra layer!!!
	Hybrid.removeElement(temp);*/
	
	// let's try the same thing, but without the hybrid.
/*	var canvas2 = document.createElement('canvas');
	canvas2.width = o.w;
	canvas2.height = o.h
	var context2 = canvas2.getContext('2d');
	context2.drawImage(o.canvas, 0, 0); // we copy the canvas onto this!
	
	// create something on the canvas
		context2.beginPath();
		context2.moveTo(0,0);
		context2.lineTo(o.w,o.h); // o.w might be faulty!
		context2.stroke();
	//render the buffered canvas onto the original canvas element
	Hybrid.clearCanvas(o);
	o.context.drawImage(canvas2, 0, 0);*/
	
	// my last approach, the data url
	// it works but does not clear up the issue..
	/*
	var temp=o.canvas.toDataURL();  
	Hybrid.clearCanvas(o);
	// now to draw temp back!
	var img = new Image;
	img.onload = function(){
	  o.context.drawImage(img,0,0); // Or at whatever offset you like
	};
	img.src = temp;*/
	Hybrid.debugmessage("no way found of clearing acc buffer.");
		
}

Hybrid.drawRoundedRect=_hybridRRH; // rounded rect helper function!
function _hybridRRH(ctx,x, y, w, h, radius)
{
  var r = x + w;
  var b = y + h;
//  context.beginPath();
  ctx.moveTo(x+radius, y);
  ctx.lineTo(r-radius, y);
  ctx.quadraticCurveTo(r, y, r, y+radius);
  ctx.lineTo(r, y+h-radius);
  ctx.quadraticCurveTo(r, b, r-radius, b);
  ctx.lineTo(x+radius, b);
  ctx.quadraticCurveTo(x, b, x, b-radius);
  ctx.lineTo(x, y+radius);
  ctx.quadraticCurveTo(x, y, x+radius, y);
//  context.stroke();
//you do the stroking!
}

Hybrid.drawSprite=_hybridDrawBitmapSprite;

function _hybridDrawBitmapSprite(hbc,img_nr,label,x,y,f,r,sx,sy)
{
   if(r===undefined) r=0;
   if(sx===undefined) sx=1;
   if(sy===undefined) sy=sx;
   if(f===undefined) f=0;
   if(x===undefined) x=0;
   if(y===undefined) y=0;
   var bw,bh;
   var px,py;
   var rx,ry;
   var image;
   if(label===undefined)
   {
		Hybrid.debugmessage("WARNING: drawBitmapSprite: '"+img_nr+"' no label given");
		return;
   }
   if(typeof(Hybrid.graphics_manifest[img_nr])==="undefined")
   {
		Hybrid.debugmessage("WARNING: '"+img_nr+"' not in image manifest");
		return;
   }
   if(!Hybrid.graphics_manifest[img_nr].kind=="sprite")
   {
		Hybrid.debugmessage("WARNING: "+img_nr+" not a sprite");
		return;
   }else
   {
    // get the numbers from the graphics_manifest and ss data for the sprite!!
	if(typeof(Hybrid.graphics_manifest[img_nr].ss[label])==="undefined")
	{
		Hybrid.debugmessage("WARNING: label "+label+" not a known frame for sprite "+img_nr);
		return;
	}
	if(typeof(Hybrid.graphics_manifest[img_nr].ss[label][f])==="undefined")
	{
		Hybrid.debugmessage("WARNING: frame "+f+" not a known frame for sprite "+img_nr+","+label);
		return;
	}
    px=Hybrid.graphics_manifest[img_nr].ss[label][f][0];
    py=Hybrid.graphics_manifest[img_nr].ss[label][f][1];
    bw=Hybrid.graphics_manifest[img_nr].ss[label][f][2];
    bh=Hybrid.graphics_manifest[img_nr].ss[label][f][3];
	// 4 is in easel.js a listing of the sheet!
	if(typeof(Hybrid.graphics_manifest[img_nr].ss[label][f][5])!=="undefined")
	    rx=Hybrid.graphics_manifest[img_nr].ss[label][f][5];
	else 
	    rx=bw/2;
	if(typeof(Hybrid.graphics_manifest[img_nr].ss[label][f][6])!=="undefined")
	    ry=Hybrid.graphics_manifest[img_nr].ss[label][f][6];
	else 
	    ry=bh/2;
    image=Hybrid.graphics_manifest[img_nr].img;
   }
   // before we screw with it up
   hbc.context.save(); 
   // move to the middle of where we want to draw our image
   // scale the HyBridCanvas.context;
   hbc.context.translate(x, y);
   // scale it
   hbc.context.scale(sx, sy);
   // rotate around that point, converting our 
   // angle from degrees to radians 
   hbc.context.rotate(r * Hybrid.TO_RADIANS);
   // draw it up and to the left by half the width
   // and height of the image 
   //image,sx,sy,sw,sh,dx,dy,dw,dh) source dest!
   hbc.context.drawImage(image, px,py,bw,bh,-rx,-ry,bw,bh);
   // and restore the co-ords to how they were when we began
   hbc.context.restore(); 
}


Hybrid.clearCanvas=_hybridClearCanvas;
function _hybridClearCanvas(hbc)
{
	hbc.context.clearRect(0,0,hbc.canvas.width, hbc.canvas.height); 
}

Hybrid.drawImage=_hybridDrawImage;
function _hybridDrawImage(hbc,img_nr,x,y,r,s)
{
	if(r===undefined) r=0;
	if(s===undefined) s=1;
	if(x===undefined) x=0;
	if(y===undefined) y=0;
	var bw,bh;
	var sw,sh;
	var image;
	if(typeof(Hybrid.graphics_manifest[img_nr])==="undefined")
	{
			Hybrid.debugmessage("WARNING: drawImage '"+img_nr+"' not in image manifest");
			return;
	}
    image=Hybrid.graphics_manifest[img_nr].img;
    // get the numbers from the graphics_manifest and ss data for the blocksprite!!
    bw=Hybrid.graphics_manifest[img_nr].w;
    bh=Hybrid.graphics_manifest[img_nr].h;
	// before we screw with it
	hbc.context.save(); 
	// move to the middle of where we want to draw our image
	// scale the hybrid canvas (hbc) context;
	hbc.context.translate(x, y);
	// scale it
	hbc.context.scale(s, s);
	// rotate around that point, converting our 
	// angle from degrees to radians 
	hbc.context.rotate(r * Hybrid.TO_RADIANS);
    // draw it up and to the left by half the width
    // and height of the image 
    //image,sx,sy,sw,sh,dx,dy,dw,dh) source dest!
	hbc.context.drawImage(image,0,0,bw,bh,-bw/2,-bh/2,bw,bh);
	// and restore the co-ords to how they were when we began
	hbc.context.restore(); 	
}
Hybrid.canvasToImageManifest=_hybridCanvasToImageManifest;
function _hybridCanvasToImageManifest(hbc,label)
{
	if(typeof(Hybrid.graphics_manifest[label])!=="undefined")
	{
		Hybrid.debugmessage("canvasToImageManifest replacing:"+label);
	}
	Hybrid.graphics_manifest[label].preload=true;// this will be able to function asif it were preloaded..
	Hybrid.graphics_manifest[label].img= new Image(); // we DON't Use jquery, it's broken for loading images and this works fine cross browser.
	Hybrid.graphics_manifest[label].img.src=hbc.canvas.toDataUrl();
	Hybrid.debugmessage("saved a new image to manifest:"+label);
}

Hybrid.canvasToCanvas=_hybridCanvasToCanvas;
function _hybridCanvasToCanvas(hbc,hbc_source,x,y,r,s)
{
	if(r===undefined) r=0;
	if(s===undefined) s=1;
	if(x===undefined) x=0;
	if(y===undefined) y=0;
	var bw,bh;
	var sw,sh;
	var image;
	if(hbc_source.kind!=="hybridCanvas")
	{
			Hybrid.debugmessage("WARNING: canvasToCanvas '"+hbc_source.id+"' not a valid canvas");
			return;
	}
    image=hbc_source.canvas;
    // get the numbers from the canvas
    bw=hbc_source.w;
    bh=hbc_source.h;
	// before we screw with it
	hbc.context.save(); 
	// move to the middle of where we want to draw our image
	// scale the hybrid canvas (hbc) context;
	hbc.context.translate(x, y);
	// scale it
	hbc.context.scale(s, s);
	// rotate around that point, converting our 
	// angle from degrees to radians 
	hbc.context.rotate(r * Hybrid.TO_RADIANS);
    // draw it up and to the left by half the width
    // and height of the image 
    //image,sx,sy,sw,sh,dx,dy,dw,dh) source dest!
	hbc.context.drawImage(image,0,0,bw,bh,-bw/2,-bh/2,bw,bh);
	// and restore the co-ords to how they were when we began
	hbc.context.restore(); 	
}

Hybrid.drawBlockSprite=_hybridDrawBitmapBlockSprite;

function _hybridDrawBitmapBlockSprite(hbc,img_nr,x,y,f,r,sx,sy)
{
   if(r===undefined) r=0;
   if(sx===undefined) sx=1;
   if(sy===undefined) sy=sx;
   if(f===undefined) f=0;
   if(x===undefined) x=0;
   if(y===undefined) y=0;
   var bw,bh;
   var sw,sh;
   var image;
   if(typeof(Hybrid.graphics_manifest[img_nr])==="undefined")
   {
		Hybrid.debugmessage("WARNING: '"+img_nr+"' not in image manifest");
		return;
   }
   if(!Hybrid.graphics_manifest[img_nr].kind=="blocksprite")
   {
		Hybrid.debugmessage("WARNING: "+img_nr+" not a blocksprite");
		return;
   }else
   {
    // get the numbers from the graphics_manifest and ss data for the blocksprite!!
    bw=Hybrid.graphics_manifest[img_nr].ss.bw;
    bh=Hybrid.graphics_manifest[img_nr].ss.bh;
    sw=Hybrid.graphics_manifest[img_nr].ss.sw;
    sh=Hybrid.graphics_manifest[img_nr].ss.sh;
    image=Hybrid.graphics_manifest[img_nr].img;
   }
   // before we screw with it
   hbc.context.save(); 
   // move to the middle of where we want to draw our image
   // scale the hybrid canvas (hbc) context;
   hbc.context.translate(x, y);
   // scale it
   hbc.context.scale(sx, sy);
   // rotate around that point, converting our 
   // angle from degrees to radians 
   hbc.context.rotate(r * Hybrid.TO_RADIANS);
   // draw it up and to the left by half the width
   // and height of the image 
   //image,sx,sy,sw,sh,dx,dy,dw,dh) source dest!
   var px=(f%sw)*bw;
   var py=Math.floor(f/sw)*bh;
   hbc.context.drawImage(image, px,py,bw,bh,-bw/2,-bh/2,bw,bh);
   // and restore the co-ords to how they were when we began
   hbc.context.restore(); 
}
// end canvas sprite
 /*--
 SnoepGames: snoepHybrid - canvas
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/
 
 // USE &#x2716; as standard close sign! (fat cross strak) Or you might try: &#x2715; (slim) or &#x2718; or &#x2717; (fat and slim cartoon)
 
 
function _hybridSetupContextMenu(){
  //_hybridMakePageUnselectable();

  $(document).on("contextmenu", _hybridShowContextMenu);
//  $(document).click(_hybridHideContextMenu); // not mousedown, because then the mouseup in the 
  $(document).mouseup(_hybridCheckContextMenuClick);
  
  // if we are in a touch environment..
  if(Hybrid.maxtouches>0)
  {
	$(document).on("touchend", _hybridCheckContextMenuClick); // check if it was a clickable thing...
	$(document).on("touchstart", _hybridHideContextMenu); 
  }
};

function _hybridCheckContextMenuClick(event){
	if(event.pageX<50 && event.pageY<50)
	{
		_hybridShowContextMenu({type:"other",pageX:event.pageX,pageY:event.pageY});
	}else
	{
		//Hybrid.debugmessage("CHECKING IF WE WANT TO SEE THE CONTEXT MENU");
	}
};

function _hybridHideContextMenu(event){ 
 $("#context-menu").remove();
};
function _hybridShowContextMenu(event) 
 { 
 // bind to right click by jQuery..
 // in the case of a touch platform (so no right mouse), we might want to set up a listenener and check for a right corner click or something..
  
  if(event.stopPropagation) event.stopPropagation(); // it's usually some kind of user event!
  if(event.preventDefault) event.preventDefault();
  
  //Hybrid.debugmessage("Show the context menu!"+event.type);
  var top_window=100,left_window=100;
  switch(event.type)
  {
	case "mouseup":
		left_window=event.pageX-160;
		top_window=event.pageY-75;
	break;
	case "contextmenu":
		left_window=event.pageX-160;
		top_window=event.pageY-75;
	break;
   }
   if(left_window<0) left_window=0;
   if(top_window<0) top_window=0;
  
  if($("#context-menu").length == 0 )
  {
   var html_string="";
   html_string+="<div class='hybrid-menu' id='context-menu'>";
   html_string+="<hr><h1 id='context-menu-title' style='cursor:default;'>Hybrid Game engine v"+Hybrid.version+"</h1><ul><li><li><h2>Opties</h2></li>";
   if(Hybrid.switches.sound)
   {
    html_string+="<li><a href='javascript: _hybridSwitchSound(0);' title='Geluidseffecten uit'>&#8738;<b>&#9587;</b>  Geluid uit</a></li>";
   }else
   {
    html_string+="<li><a href='javascript: _hybridSwitchSound(1);' title='Geluidseffecten aan'>&#8738; Geluid aan</a></li>";
   }
   if(Hybrid.switches.music)
   {
    html_string+="<li><a href='javascript: _hybridSwitchMusic(0);' title='Muziek uit'>&#9836;<b>&#9587;</b>  Muziek uit</a></li>";
   }else
   {
    html_string+="<li><a href='javascript: _hybridSwitchMusic(1);' title='Muziek aan'>&#9836; Muziek aan</a></li>";
   }
   if(Hybrid.internalDebugWindow)
   {
    html_string+="<li><a href='javascript: _hybridSwitchInternalDebug(0);' title='Debug uit'>Debug uit</a></li>";
   }else
   {
    html_string+="<li><a href='javascript: _hybridSwitchInternalDebug(1);' title='Debug aan'>Debug aan</a></li>";
   }
   html_string+="<li><a href='javascript: _hybridReportProblem;' title='Debug aan'>Meld een probleem</a></li>";
   html_string+="<li><i>...</i></li>";
   html_string+="<li><h2>GameEngine + Audio</h2></li><li><a href='http://www.snoep.at/games/?language=nl' target=_top title='HTML5 gameEngine by www.SnoepGames.nl'>&copy; 2014 SnoepGames</a></li>";
   html_string+="<li><hr></li>";
   html_string+="</ul></div>";
   // might be a touch event, a mouse event or a NON-event.
   // determin the right place to show the menu!
  
   
   $(html_string)
    .appendTo("body")
    .css({top: top_window + "px", left: left_window + "px"});
    //Hybrid.debugmessage("Show the context menu!"+event.type);

	
   $('#context-menu-title').mousedown(_hybridContextMenu_dragmousedown);
  }else
  {
	// we repeated the creation event, so destroy it!
    // Hybrid.debugmessage("destroy context menu!"+event.type);
	 _hybridHideContextMenu();
	 // old code
     // just show and set the position!
     //$("div.context-menu").css({top: top_window + "px", left: left_window + "px"});
     //$("div.context-menu").toggle();
  }
 }
 
 function _hybridContextMenu_dragmousedown(e){
	Hybrid.debugmessage("start drag context menu!");
    Hybrid.dragging = {};
    Hybrid.dragging.pageX0 = e.pageX;
    Hybrid.dragging.pageY0 = e.pageY;
    Hybrid.dragging.elem = $('#context-menu');
    Hybrid.dragging.offset0 = $('#context-menu').offset();
	// we need to do this for touch as well!!!
    function handle_dragging(e){
        var left =  Hybrid.dragging.offset0.left + (e.pageX -  Hybrid.dragging.pageX0);
        var top =  Hybrid.dragging.offset0.top + (e.pageY -  Hybrid.dragging.pageY0);
        $( Hybrid.dragging.elem)
        .offset({top: top, left: left});
    }
    function handle_mouseup(e){
        $('body').off('mousemove', handle_dragging).off('mouseup', handle_mouseup);
    }
    $('body').on('mouseup', handle_mouseup).on('mousemove', handle_dragging);
}
 /*--
 SnoepGames: snoepHybrid - math
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/

 /*-------------------------------------------------------------------------------------
 // Math constants
 ----------------------------------------------------------------------------------------*/

Hybrid.TO_RADIANS = Math.PI/180; 
Hybrid.TO_DEG = 180/Math.PI; 
Hybrid.PI2 = Math.PI*2; 
 /*-------------------------------------------------------------------------------------
 // GENERIC AND HELPER TYPE FUNCTIONS
 ----------------------------------------------------------------------------------------*/
// cheap, seeded, random number generation!
Hybrid.random_seed=14;
Hybrid.random_nrs_asked=0;
 
Hybrid.seededRandomInt=_hybridSeededRandomInt;
function _hybridSeededRandomInt(){
	var r1=(Hybrid.random_seed+197)%2048+(Hybrid.random_nrs_asked); // primes and powers of two
	var r2=(Hybrid.random_seed+709)%1024+Math.floor(Hybrid.random_nrs_asked/2+15*Math.cos(r1));;
	var r3=(Hybrid.random_seed+2239)%512+Math.floor(Hybrid.random_nrs_asked/2+15*Math.sin(r2));
	var rand=(r1+r2+r3)%1000;
	Hybrid.random_seed+=(rand+r3)%(r1+r2);
	Hybrid.random_seed+=r3+r2;
	Hybrid.random_nrs_asked++;
	if(Hybrid.random_nrs_asked>15000) Hybrid.random_nrs_asked=0;
	return rand;
};
Hybrid.seedRandomInt=_hybridSeedRandomInt;
function _hybridSeedRandomInt(nr){
	Hybrid.random_seed=Math.floor(nr);
	Hybrid.random_nrs_asked=Math.floor(nr);
 	//debugmessage("seed random:"+Hybrid.random_seed);
 };
  /*--
 SnoepGames: snoepHybrid - layout
 V1.2.0 
---*/
 
Hybrid.resizeTimeout=false;
function _hybridGetPageScale()
{
 // this fills the data with information about the page and user-agent.
  //debugmessage("getPageScale!");
  // first display the content in the right size and place!
  var wh,ww,f;
  ww=$(window).innerWidth();
  wh=$(window).innerHeight();
  if(!Hybrid.width)Hybrid.width=800; // default square!! for those times there hasn't been an init!
  if(!Hybrid.height)Hybrid.height=800;
  if(!Hybrid.stageAlign)Hybrid.stageAlign="center";// possible values are center and top-left
  if(!Hybrid.stageScale)Hybrid.stageScale="lineair"; // possible values are none and lineair
  // android gives us the wrong innerHeight, so..
  if(Hybrid.platform.browser=="android")
  {
	//fixed innerheight bug on android!");
	wh=$(window).outerHeight();
  }
  // Ios7 has a little bug (confirmed) in landscape, where the last 20 pixels disappear..
  // http://stackoverflow.com/questions/19012135/ios-7-ipad-safari-landscape-innerheight-outerheight-layout-issue
  // if(Hybrid.platform.OS=="iOs7")
  // {
  //  this is confirmed on iPad, height is a bit too big!
  //  window.alert(ww+"x"+wh);
  //  wh-=1;
  // }
  // we now KNOW the right window-size.
  if(Hybrid.platform.OS=="iOs7")
  {
	// this is a true BUG, bit only of window in portrait..
	// there is no easy work around, it needs to be in the page around this!
//	if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && !window.navigator.standalone) 
//	{
//		// if we are in web mode!
//		wh-=20;
//	}
  }
  
  switch(Hybrid.stageScale)
  {
	case "lineair":
		  var fx=ww/Hybrid.width;
		  var fy=wh/Hybrid.height;
		   
		  Hybrid.debugmessage("Window width: "+ww+", hybrid width: "+Hybrid.width+" factor: "+Math.floor(fx*100)+"%");
		  Hybrid.debugmessage("Window height: "+wh+", hybrid height: "+Hybrid.height+" factor: "+Math.floor(fy*100)+"%");
		  Hybrid.debugmessage("centering content");
		   
		  Hybrid.f=fy;
		  if(fx<fy)Hybrid.f=fx;
		  // keep it safe!
		  Hybrid.debugmessage("--lineair scalefactor: "+Math.floor(Hybrid.f*100)+"%");
		  // calculate top and left offset, to keep it centered!
		  Hybrid.ox=(ww-Hybrid.width*Hybrid.f)/2;
		  Hybrid.oy=(wh-Hybrid.height*Hybrid.f)/2;
		  Hybrid.debugmessage("--offset: x"+Hybrid.ox);
		  Hybrid.debugmessage("--offset: y"+Hybrid.oy);
		  
		  if($("#hybridStage").length!=0)
		  {
			$("#hybridStage").css("left",Hybrid.ox+"px")
						.css("top",Hybrid.oy+"px")
						.css("width",toPx(Hybrid.width))
						.css("height",toPx(Hybrid.height));
		  }
	break;
	case "responsive-width":
		// ok, we scale everything to fit the HEIGHT, then we make the sides responsive.
		 Hybrid.debugmessage("Window width: "+ww+", hybrid width: "+Hybrid.width+" factor: "+Math.floor(fx*100)+"%");
		 Hybrid.debugmessage("Window height: "+wh+", hybrid height: "+Hybrid.height+" factor: "+Math.floor(fy*100)+"%");
		 Hybrid.debugmessage("responsive mode.");
		   
		  Hybrid.f=wh/Hybrid.height;
		  // calculate top and left offset, to keep it centered!
		  Hybrid.ox=0;
		  Hybrid.oy=0;
		  Hybrid.width=Hybrid.height*(ww/wh);
		  Hybrid.height=Hybrid.height;
		  if($("#hybridStage").length!=0)
		  {
			$("#hybridStage").css("left",Hybrid.ox+"px")
						.css("top",Hybrid.oy+"px")
						.css("width",toPx(Hybrid.width))
						.css("height",toPx(Hybrid.height));
		  }
	break;
	case "responsive":
		 Hybrid.debugmessage("Window width: "+ww+", hybrid width: "+Hybrid.width+" factor: "+Math.floor(fx*100)+"%");
		 Hybrid.debugmessage("Window height: "+wh+", hybrid height: "+Hybrid.height+" factor: "+Math.floor(fy*100)+"%");
		 Hybrid.debugmessage("responsive mode.");
		   
		  Hybrid.f=1;
		  // calculate top and left offset, to keep it centered!
		  Hybrid.ox=0;
		  Hybrid.oy=0;
		  Hybrid.width=ww;
		  Hybrid.height=wh;
		  if($("#hybridStage").length!=0)
		  {
			$("#hybridStage").css("left",Hybrid.ox+"px")
						.css("top",Hybrid.oy+"px")
						.css("width",toPx(Hybrid.width))
						.css("height",toPx(Hybrid.height));
		  }
	break;
	default:
		Hybrid.throwError("Not a known scalemode for hybrid stage: '"+Hybrid.stageScale+"'\n");
	break;
  }
};
// getting the scrollbar width for this browser
Hybrid.getScrollbarWidth=_hybridGetScrollbarWidth;
function _hybridGetScrollbarWidth() 
{
  var box1=$('<div style="width:100px;height:100px;overflow:auto;"></div>').appendTo('body');
  var box2=$('<div style="width:200px;height:200px;background-color:#aaa;"></div>').appendTo(box1);
  var box3=$('<div style="width:100%"></div>').appendTo(box1);
  // the idea is to have a box width a known with, with a bigger box inside, than to add a third div which will obtain all available width!
  // and then throw it all away. You can only call this on document ready.. Sorry..
  var width=100-box3.width();
  box1.remove();
 return width;
};


Hybrid.setVisible=_hybridSetHybridElementVisible;
function _hybridSetHybridElementVisible(e,v)
{
	if(e.kind.indexOf("hybrid")!=-1)
	{
		//debugmessage("v: "+e.kind+"="+v);
		if(v)
			e.jquery.show();
		else
			e.jquery.hide();
	}
	else
	{
		Hybrid.debugmessage("WARNING: setBoxVisible reports: not the right kind of object: "+e.kind);
	}
}

// private function!
function _hybridResizeFunction()
{
	_hybridGetPageScale();
	// rebuild the page from dynamic elements!
	if(typeof(Hybrid.resizeFunction)!=="undefined")
	{
		Hybrid.debugmessage("Custom resize function has been defined!");
		Hybrid.resizeFunction();
	}
	Hybrid.debugmessage("window just resized!");
}
Hybrid.removeElement=_destroyHybridElement;
function _destroyHybridElement(layer)
 {
    layer.jquery.remove();			
 }
Hybrid.clearElement=_hybridClearElement;
function _hybridClearElement(layer)
 {
    layer.jquery.html("");			
 }
 Hybrid.setBorder=_hybridSetBorder;
 function _hybridSetBorder(layer,bs,bt,bc)
 {
	layer.jquery.css("border-style",bs);
	layer.jquery.css("border-width",toPx(bt));
	layer.jquery.css("border-color",bc);
 }
 
 
// private function!
function toPx(x)
{
  return ((Hybrid.f*x)+"px");
}
// function to start a NEW page afresh!
Hybrid.erasePage=_hybridErasePage;
function _hybridErasePage()
{
	var $body = $('body');
	var html_string="<div id='hybridStage' style='left: "+Hybrid.ox+"px; top: "+Hybrid.oy+"px;width: "+toPx(Hybrid.width)+"; height: "+toPx(Hybrid.height)+";'></div>"; // deletes all layers accept top one
	if(Hybrid.stageColor)
	{
		html_string="<div id='hybridStage' style='background-color: "+Hybrid.stageColor+"; left: "+Hybrid.ox+"px; top: "+Hybrid.oy+"px;width: "+toPx(Hybrid.width)+"; height: "+toPx(Hybrid.height)+";'></div>"; // deletes all layers accept top one	
	}
	$body.html(html_string);
	// erase all elements we have created and stop the loop
	Hybrid.standardButtonCallback=null;
	Hybrid.hybridButtonKeeper=[];
	Hybrid.elements={};
	Hybrid.dynamic_element_counter=0;
	Hybrid.stopLoop();
}

  /*--
 SnoepGames: snoepHybrid - anti-leeching
---*/

Hybrid.aatd=[]; 
Hybrid.aatd.push("687474703a2f2f6c6f63616c686f73742f"); //http://localhost/");
//Hybrid.aatd.push("687474703a2f2f7777772e736e6f65702e61742f");//http://www.snoep.at/");
//Hybrid.aatd.push("687474703a2f2f7777772e6d616b696e6767616d65732e6f72672f"); //http://www.makinggames.org/");

function _hybridLeechProtect(){
	// we do any number of referer checks here!
	if(Hybrid.aatd)
	{
		//allowed and trusted domains has been set!
		var rf1=eval(Hybrid.decodeString("646f63756d656e742e7265666572726572")); //document.referrer 
		// referer turns out to work perfectly.. (Jeee!)
		//var rf2="";
		//try
		//{
			//rf2=eval(Hybrid.decodeString("77696e646f772e746f702e6c6f636174696f6e2e68726566")); //"window.top.location.href"
			// this doesn't work. Checking document.href werkt ook niet, want je kunt gewoon mijn index in zijn geheel iframen.
			// met een try catch zou ik de error moeten kunnen opvangen. Werkt het WEL dan zitten we in een
			// oude browser.
		//}catch(err) 
		//{
			// this is probably just the 
			//window.alert("just caught an error: "+err.message);
			// we ignore the error!
		//}
		// this causes an error on the ipad and is not really something we want anyway..
		
		
		//Hybrid.debugmessage("encoded "+Hybrid.encodeString("window.top.location.href"));
		Hybrid.debugmessage("CHECKING REFS: "+rf1);
		//Hybrid.debugmessage("CHECKING REFS: "+rf2);
		var i,a=false;
		for(i=0;i<Hybrid.aatd.length;i++)
		{
			Hybrid.debugmessage("Checking aatd");
			Hybrid.debugmessage(rf1.substr(0,Hybrid.decodeString(Hybrid.aatd[i]).length)+"==='"+Hybrid.decodeString(Hybrid.aatd[i])+"'");
			//Hybrid.debugmessage(rf2.substr(0,Hybrid.decodeString(Hybrid.aatd[i]).length)+"==='"+Hybrid.decodeString(Hybrid.aatd[i])+"'");
			//Hybrid.debugmessage("encoded aatd:"+Hybrid.encodeString(Hybrid.aatd[i]));
			if(rf1.substr(0,Hybrid.decodeString(Hybrid.aatd[i]).length)==Hybrid.decodeString(Hybrid.aatd[i])) 
			 {
				Hybrid.debugmessage("Found a matching aatd");
				a=true;
			 }
			 //if(rf2.substr(0,Hybrid.decodeString(Hybrid.aatd[i]).length)==Hybrid.decodeString(Hybrid.aatd[i])
		}
		return a; // cannot run in direct mode!
	}else
	{
		return false;
	}
};
 /*-------------------------------------------------------------------------------------
 // obscuring
 ----------------------------------------------------------------------------------------*/ 
// Functions to hide strings that will not be obscure, for instance if you want to SAy "Hybrid" in debug.
// there are private and public versions. Both are equal.

Hybrid.encodeString=_hybridEncodeString;
Hybrid.decodeString=_hybridDecodeString;
function _hybridEncodeString(ins){
	var o="";
	var i;
	for(i=0;i<ins.length;i++)o+=ins.charCodeAt(i).toString(16);
	return o;
};
function _hybridDecodeString(ins){
	var o="";
	var i;
	for(i=0;i<ins.length;i+=2)o+=String.fromCharCode(parseInt("0x"+ins.substr(i,2)));
	return o;
};
 /*--
 SnoepGames: snoepHybrid loading
V1.2.0 
---*/
 

function _hybridDoPreload(){
 // this fills the data with information
 var i;
 Hybrid.debugmessage("start Hybrid Preload");
 if(Hybrid.loadingProgressFunction!=null) Hybrid.loadingProgressFunction(0,true);
 
 // record the start time, to see if there is a timeout!
 Hybrid.preloadInitiationTime=new Date().getTime();


   Hybrid.images_preloaded=0;
   Hybrid.nr_of_image_files_to_preload=0;
  Hybrid.debugmessage("graphics_manifest: "+Hybrid.graphics_manifest);
   // now count all images that are to be preloaded.
   for(var all in Hybrid.graphics_manifest)
   {
		Hybrid.debugmessage("graphics_manifest: "+all+" preload: "+Hybrid.graphics_manifest[all].preload);
		if(Hybrid.graphics_manifest[all].preload)Hybrid.nr_of_image_files_to_preload++;
   }
	// now we know all about the images.
 
 // prepare how many audio files we actually have to preload!
 Hybrid.audio_preloaded=0;
 if(Hybrid.capabilities.audio_preload==true)
 {
   Hybrid.debugmessage("--preloading of audio supported!");
   Hybrid.audio_preloaded=0;
   Hybrid.nr_of_audio_files_to_preload=0;
 
   // now count all audo that is to be preloaded.
   
   // prepare the manifest with default values!
   for(i in Hybrid.audio_manifest)
   {
		Hybrid.audio_manifest[i].au={}; // create an au object, which will hold the actual audio!
		Hybrid.audio_manifest[i].loaded=false; // this is to have it work, even with a double event!  

		// if there is a audioContext, we HAVE to preload everything, including music!
		if(Hybrid.capabilities.audioContext==true)
		{
			 // have to preload ALL audio except music loops, they take a bit too long! 
			 Hybrid.audio_manifest[i].preload=true;     
		}
		// if there is NO audioContext and user forgets to set the preload attribute, default to true.
		// count undefined as true and set them!
		if(Hybrid.audio_manifest[i].preload===undefined)
		{
			 Hybrid.audio_manifest[i].preload=true;
		}
		// if no src given, default to the key!
		if(Hybrid.audio_manifest[i].src===undefined) Hybrid.audio_manifest[i].src=i; 
		// if no volume given, default to 1
		if(Hybrid.audio_manifest[i].vol===undefined) Hybrid.audio_manifest[i].vol=1; 
   }
   // now count all that is to be preloaded.
   for(i in Hybrid.audio_manifest)
   {
		if(Hybrid.audio_manifest[i].preload)Hybrid.nr_of_audio_files_to_preload++;
   }
  }else
  {
	  // no support for preload, don't even try it!
		Hybrid.nr_of_audio_files_to_preload=0;
  }
  // now we have made the audio manifest a little bit better,
  // we preload the images, after these are done, the audio will be preloaded.
   Hybrid.debugmessage("starting preload of: "+Hybrid.nr_of_image_files_to_preload+", images");

   _hybridPreloadImages();
};

function _hybridPreloadImages(){
	//Hybrid.debugmessage("-preloading images");
	Hybrid.indexedPreload=[];
	for(var all in Hybrid.graphics_manifest)
    {
		if(Hybrid.graphics_manifest[all].preload)
		{
			Hybrid.indexedPreload.push(all);
		}
    }
	_hybridPreloadNextImage();
};
function _hybridPreloadNextImage()
{
	if(Hybrid.indexedPreload.length==0)
	{
	 // we are done preloading images.
	 Hybrid.debugmessage("--all images preloaded.");
	_hybridPreloadSounds(true); // with callback, this is the normal loop!
	}else
	{
		var i=Hybrid.indexedPreload.shift(); // gets the first image!
		Hybrid.currentImageIndex=i;
		Hybrid.debugmessage("--initiating preload of: "+i);
	  //Hybrid.debugmessage("preloading images");
	  // take an image from the stack and preload it!
	//  for(var i in Hybrid.graphics_manifest){
		if(Hybrid.graphics_manifest[i].preload){
			Hybrid.graphics_manifest[i].img= new Image(); // we DON't Use jquery, it's broken for loading images and this works fine cross browser.
			Hybrid.graphics_manifest[i].img.onerror=_hybridImagePreloadFailed;
			Hybrid.graphics_manifest[i].img.src=Hybrid.img_src_path+Hybrid.graphics_manifest[i].src; // keep a ref tot the img, to use with canvas.
			Hybrid.currentImageUrl=Hybrid.img_src_path+Hybrid.graphics_manifest[i].src; // keep a ref tot the img, to use with canvas.
			Hybrid.graphics_manifest[i].img.onload=_hybridPreloadNextImage;
		}
		// daisy chaining means we minimise the amount of requests at the same time!
	}
 };

// -------------------------------------------
// Pre loading sound!
// -------------------------------------------

 function _hybridPreloadSounds(setCallback){
	Hybrid.debugmessage("-preloading sounds");
	var i;
	if(Hybrid.nr_of_audio_files_to_preload==0)
	{
		Hybrid.debugmessage("--no sound to preload");
		//_hybridDonePreloading(); called by loop!
	}else
	{
		if (Hybrid.capabilities.audiotype === 'ogg') {
			for(i in Hybrid.audio_manifest)
			{
				if(Hybrid.audio_manifest[i].preload)
				{
					if(Hybrid.capabilities.audioContext)
					{
						_hybridLoadAudioIntoContext(i,"snd_ogg/"+Hybrid.audio_manifest[i].src+".ogg",setCallback); 
					}else
					{
						Hybrid.audio_manifest[i].au  = _hybridLoadAudioTag("snd_ogg/"+Hybrid.audio_manifest[i].src+".ogg",setCallback); 
					}
				}
			}
		}
		if (Hybrid.capabilities.audiotype === 'mp3')
		{ 
			for(i in Hybrid.audio_manifest)
			{
				Hybrid.debugmessage("we'll preload mp3 "+i);
				if(Hybrid.audio_manifest[i].preload)
				{
					if(Hybrid.capabilities.audioContext)
					{
						_hybridLoadAudioIntoContext(i,"snd_mp3/"+Hybrid.audio_manifest[i].src+".mp3",setCallback);
					}else
					{
						Hybrid.audio_manifest[i].au = _hybridLoadAudioTag("snd_mp3/"+Hybrid.audio_manifest[i].src+".mp3",setCallback);
					}      
				}
			}
		}
	}
};
 
 // private function to shut everything off.
function _hybridDonePreloading(){
	Hybrid.debugmessage("--done preloading has been called!");
	if(Hybrid.stopLoop()) // if there is still a loop to stop!!
	{
		// this will be done ONLY once!
		Hybrid.debugmessage("--Done Preloading");
		if(Hybrid.initPageFunction) Hybrid.initPageFunction();
		else Hybrid.debugmessage("'initPageFunction' not Defined");
	}
};
// -------------------------------------------
// Loading loop and feedback.
// -------------------------------------------
 function _hybridLoadingLoop(){
  Hybrid.loading_time=new Date().getTime()-Hybrid.preloadInitiationTime;
  Hybrid.debugmessage("--loading time: "+ Hybrid.loading_time);
  
  // allow for empty manifests, 0/0 is undefined :)
  var img_factor;
  if(Hybrid.nr_of_image_files_to_preload==0) 
	img_factor=1; 
  else
	img_factor=(Hybrid.nr_of_image_files_to_preload-Hybrid.indexedPreload.length)/Hybrid.nr_of_image_files_to_preload;
  
  var audio_factor;
  if(Hybrid.nr_of_audio_files_to_preload==0)
	audio_factor=1; // allow for empty manifests, 0/0 is undefined :)
  else
	audio_factor=Hybrid.audio_preloaded/Hybrid.nr_of_audio_files_to_preload; 
    
  Hybrid.debugmessage("---img_factor: "+img_factor+" = "+(Hybrid.nr_of_image_files_to_preload-Hybrid.indexedPreload.length)+"/"+Hybrid.nr_of_image_files_to_preload);
  Hybrid.debugmessage("---audio_factor: "+audio_factor+" = "+Hybrid.audio_preloaded+"/"+Hybrid.nr_of_audio_files_to_preload);
  
  var loading_percentage=(img_factor+audio_factor)/2; // the generation sweep will start after loading!
  // show what is going on!
  if(Hybrid.loadingProgressFunction!=null) Hybrid.loadingProgressFunction(loading_percentage,false);
  
  if(Hybrid.loading_time>15000)
  {
   //debugmessage("preloading more than 5 seconds, probably stuck, try to force a start!");
     loading_percentage=1;
  }
  if(loading_percentage>=1 && Hybrid.loading_time>1000) // must preload for at least one second!
  {
	Hybrid.debugmessage("loading_percentage: "+loading_percentage);
	_hybridDonePreloading();
  }
 }; /*--
 SnoepGames: snoepHybrid - box
 V1.2.0 
---*/
 
  // a box is 
  Hybrid.createBox=_hybridCreateBox;
 function _hybridCreateBox(layer,x,y,w,h)
 {
  if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
  {
   Hybrid.debugmessage("createBox reports: not the right kind of object: "+layer.kind);
   return null;
  }
  var o={};
  o.dynamic_element_counter=0; // they may be nested!
  
  o.id="box"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  //Hybrid.debugmessage("create new box: "+o.id);
  var html_string="<div id='"+o.id+"'></div>"
  //Hybrid.debugmessage("create new textbox: "+html_string);
  $(html_string).appendTo(layer.jquery);
  
  o.jquery=$("#"+o.id).css("z-index",layer.dynamic_element_counter);
  o.kind="hybridBox";
  // keep ref of w and h!
  o.w=w;
  o.h=h;
  o.jquery.width(toPx(w)).height(toPx(h))
   .css("left",toPx(x)).css("top",toPx(y));
  layer.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global element counter!
  return o; // return the object!
 }
 // a layer is just a box, but at 100% and connected to the stage!
Hybrid.createLayer=_hybridCreateLayer;
function _hybridCreateLayer(bx)
 {
  var o={};
  o.dynamic_element_counter=0;
  o.id="bx"+Hybrid.dynamic_element_counter;
  var html_string="<div id='"+o.id+"'></div>";
  $("#hybridStage").append(html_string);
  o.jquery=$("#"+o.id).css("z-index",Hybrid.dynamic_element_counter);
  o.kind="hybridBox";
  // set bx to cover whole page!
  _hybridSetDivScaledRect(o.jquery,0,0,Hybrid.width,Hybrid.height);
  Hybrid.dynamic_element_counter++;
  return o; // return the object!
 }
 
Hybrid.setBoxAlpha=_hybridSetBoxAlpha;
function _hybridSetBoxAlpha(o,a){
  /* IE 8 */
	o.jquery=$("#"+o.id).css("-ms-filter","progid:DXImageTransform.Microsoft.Alpha(Opacity="+Math.floor(a*100)+")");
	  /* IE 5-7 */
	o.jquery=$("#"+o.id).css("filter","alpha(opacity="+Math.floor(a*100)+");");
  /* Netscape */
	o.jquery=$("#"+o.id).css("-moz-opacity",a);
  /* Safari 1.x */
	o.jquery=$("#"+o.id).css("-khtml-opacity",a);
  /* Good browsers */
	o.jquery=$("#"+o.id).css("opacity",a);
};
 
 
 Hybrid.setBoxScrollable=_hybridSetBoxScrollable;
 function _hybridSetBoxScrollable(box,x,y)
  {
	if(box.kind!="hybridLayer" && box.kind!="hybridBox" && box.kind!="hybridTextBox")
	{
	   Hybrid.debugmessage("setBoxScrollable reports: not the right kind of object: "+box.kind);
	   return null;
	} 
	if(x)
		box.jquery.css("overflow-x","scroll");
	else
		box.jquery.css("overflow-x","hidden");
	if(y)
		box.jquery.css("overflow-y","scroll");
	else
		box.jquery.css("overflow-y","hidden");
 }

 
 // jquery helper functions

 Hybrid.moveBox=_hybridMB;
function _hybridMB(box,x,y)
 {
  if(box.kind!="hybridLayer" && box.kind!="hybridBox" && box.kind!="hybridTextBox")
  {
   Hybrid.debugmessage("moveBox  reports: not the right kind of object: "+box.kind);
   return null;
  }
  box.jquery.css("left",toPx(x));
  box.jquery.css("top",toPx(y))
 }
 
 
 Hybrid.sizeBox=_hybridSizeBox;
function _hybridSizeBox(box,w,h)
 {
  if(box.kind=="hybridWebview")
  {
	// guide him to outer box!
	Hybrid.debugmessage("Yes we can! Just resize the box!");
	_hybridSizeBox(box.box,w,h);
	return;
  }
  if(box.kind!="hybridLayer" && box.kind!="hybridBox")
  {
   Hybrid.debugmessage("sizeBox reports: not the right kind of object: "+box.kind);
   return null;
  }
  Hybrid.debugmessage(box.jquery.html());
  box.jquery.width(toPx(w)).height(toPx(h));
 }
 function _hybridSetDivScaledRect(jQueryElement,x,y,w,h)
 {
  jQueryElement.width(toPx(w))
   .height(toPx(h))
   .css("left",toPx(x))
   .css("top",toPx(y));
 }
   
 // box and bx manipulation functions!
 // set a standardised shadow!
 Hybrid.setBoxShadow=_hybridSetBoxShadow;
 function _hybridSetBoxShadow(bx)
 {
  if(bx.kind=="hybridBox" || bx.kind=="hybridBox" )
  {
   bx.jquery.css("-webkit-box-shadow","7px 7px 5px rgba(0, 0, 0, 0.30)")
				.css("-moz-box-shadow","7px 7px 5px rgba(50, 50, 50, 0.30)")
				.css("box-shadow","7px 7px 5px rgba(50, 50, 50, 0.30)");				
  }
  else
  {
   Hybrid.debugmessage("WARNING: setBoxShadow reports: not the right kind of object: "+bx.kind);
  }
 }
 // set a standardised shadow!
 Hybrid.setBoxImage=_hybridBoxBackgroundImage;
 function _hybridBoxBackgroundImage(layer,index)
 {
   var src=Hybrid.img_src_path+Hybrid.graphics_manifest[index].src;
  if(layer.kind=="hybridLayer" || layer.kind=="hybridBox" )
  {
   var html_string="<img src='"+src+"' width='100%' height='100%'>";
   //Hybrid.debugmessage("set background of "+layer.id+" to "+src);
   layer.jquery.html(html_string);
  }
  else
  {
   Hybrid.debugmessage("WARNING: set Box Image reports: not the right kind of object: "+layer.kind);
  }
 }
 
 Hybrid.setBoxRounded=_hybridSetBoxRounded;
 function _hybridSetBoxRounded(bx,px){
  if(bx.kind=="hybridBox" || bx.kind=="hybridBox" )
  {
   bx.jquery.css("-moz-border-radius",toPx(px))
				.css("-webkit-border-radius",toPx(px))
				.css("border-radius",toPx(px));				
  }
  else
  {
   Hybrid.debugmessage("WARNING: set Box Rounded reports: not the right kind of object: "+bx.kind);
  }
 };
// box - COLOR
Hybrid.setBoxColor=_hybridSetBoxBackgroundColor;
function _hybridSetBoxBackgroundColor(layer,colorString)
{
 if(layer.kind=="hybridLayer" || layer.kind=="hybridBox" || layer.kind=="hybridTextBox" )
  {
   layer.jquery.css("background-color",colorString);
  }
  else
  {
    Hybrid.debugmessage("WARNING: set Box Color reports: not the right kind of object: "+layer.kind);
  }
 }


Hybrid.setSprite=_hybridSetSprite;
function _hybridSetSprite(layer,img_nr,label,f)
{
	// must be valid sprite! This is for ease of use only, don't expect much performance.
	// it does allow you to for instance use 3D transforms on sprites. That's kind of cool!
   if(typeof(Hybrid.graphics_manifest[img_nr])==="undefined")
   {
		Hybrid.debugmessage("set Sprite WARNING : '"+img_nr+"' not in image manifest");
		return;
   }
   if(!Hybrid.graphics_manifest[img_nr].kind=="sprite")
   {
		Hybrid.debugmessage("set Sprite WARNING: "+img_nr+" not a sprite");
		return;
   }else
   {
		// get the numbers from the graphics_manifest and ss data for the sprite!!
		if(typeof(Hybrid.graphics_manifest[img_nr].ss[label])==="undefined")
		{
			Hybrid.debugmessage("set Sprite WARNING: label "+label+" not a known frame for sprite "+img_nr);
			return;
		}
		if(typeof(Hybrid.graphics_manifest[img_nr].ss[label][f])==="undefined")
		{
			Hybrid.debugmessage("set Sprite WARNING: frame "+f+" not a known frame for sprite "+img_nr+","+label);
			return;
		}
	}
	if(layer.kind=="hybridLayer" || layer.kind=="hybridBox")
	{	
		_jQueryAddition_MakeUnselectable(layer.jquery);
		// first set the box to the right size!
		var px=Hybrid.graphics_manifest[img_nr].ss[label][f][0];
		var py=Hybrid.graphics_manifest[img_nr].ss[label][f][1];
		var bw=Hybrid.graphics_manifest[img_nr].ss[label][f][2];
		var bh=Hybrid.graphics_manifest[img_nr].ss[label][f][3];
		var f=1;
		if(layer.w!=bw)
		{
			f=layer.w/bw;
		}
		//Hybrid.debugmessage("show setsprite:"+label+" "+px+","+py+","+bw+","+bh);
		layer.jquery.width=bw;
		layer.jquery.height=bh;
		var html_string="<div><img src='img/"+Hybrid.graphics_manifest[img_nr].src+"' width='100%' height='100%'></div>";
		//Hybrid.debugmessage("set background of "+layer.id+" to img/"+Hybrid.graphics_manifest[img_nr].src);
		layer.jquery.html("");// erase all!
		layer.in_div=$(html_string).appendTo(layer.jquery);
		layer.in_div.width(toPx(Hybrid.graphics_manifest[img_nr].w*f));
		layer.in_div.height(toPx(Hybrid.graphics_manifest[img_nr].h*f));
		layer.in_div.css("left",toPx(-px*f));
		layer.in_div.css("top",toPx(-py*f));
	}
	else
	{
		Hybrid.debugmessage("WARNING: setSprite reports: not the right kind of object: "+layer.kind);
	}
 }
 
  /*--
 SnoepGames: snoepHybrid - textbox
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/

Hybrid.getTextboxHeight=_hybridGTBH;
function _hybridGTBH(tb) // width not supported yet
{
	// the purpose of this function is to figure out the height after we strip that from the div..
	// so it becomes a stretchable div!!!
	tb.jquery.css("height","auto");
	return (tb.jquery.height()/Hybrid.f);
}

Hybrid.setTextBorder=_hybridSetTextBorder
function _hybridSetTextBorder(tb,color,width) // width not supported in all browsers yet, but we expect HTML5 to grow up!
{
	// if we have webkit, this will do the trick, if not, we have NO width!
	if(width===undefined)
	{	
		width=2;
	}
	if(tb===undefined)
	{	
		Hybrid.debugmessage("---WARNING: setTextBoxContent reports unknown textbox! Request ignored..");
		return;
	}
	if(tb.kind!="hybridTextBox")
	{
	   Hybrid.debugmessage("setTextBoxContent reports: not the right kind of object: "+tb.kind);
	   return null;
	}
	tb.jquery.css("text-shadow","4px 0 0 "+color+", -2px 0 0 "+color+", 0 2px 0 "+color+", 0 -2px 0 "+color+", 3px 1px 0 "+color+", -1px 1px 0 "+color+", -1px 1px 0 "+color+", -1px -1px 0 "+color);
	// oh lets be ready for the future..
	tb.jquery.css("-webkit-stroke-fill-color",color);
	tb.jquery.css("-webkit-stroke-fill-width",toPx(width));
 }
 
 
 Hybrid.getTextboxContent=_hybridGetTextBoxContent;
 function _hybridGetTextBoxContent(tb)
 {
	if(tb===undefined)
	{	
		 Hybrid.debugmessage("---WARNING: getTextboxContent reports unknown textbox! Request ignored..");
		return;
	}

	if(tb.kind!="hybridTextBox")
	{
	    Hybrid.debugmessage("getTextboxContent reports: not the right kind of object: "+tb.kind);
	   return null;
	}
	return tb.jquery.html();
}


 Hybrid.setTextboxContent=_hybridSetTextBoxContent;
 function _hybridSetTextBoxContent(tb,content)
 {
	if(tb===undefined)
	{	
		 Hybrid.debugmessage("---WARNING: setTextBoxContent reports unknown textbox! Request ignored..");
		return;
	}

	if(tb.kind!="hybridTextBox")
	{
	    Hybrid.debugmessage("setTextBoxContent reports: not the right kind of object: "+tb.kind);
	   return null;
	}
	tb.jquery.html(content);
}

Hybrid.setTextEditable=_hybridSetEditable;
function _hybridSetEditable(tb,tf,optblrfnc)
{
 if(tb.kind!="hybridTextBox")
 {
  Hybrid.debugmessage("_hybridSetEditable reports: not the right kind of object: "+tb.kind);
  return null;
 }
 if(tf)
 {
	tb.jquery.attr('contenteditable','true');
	//tb.jquery.css('position','relative'); // back to the default!
//	position: relative;
	_jQueryAddition_MakeSelectable(tb.jquery);
	tb.jquery.css("cursor","text"); 
	 /*if(optblrfnc)
	 {
		Hybrid.editableTextBlurFunction=optblrfnc;
		tb.jquery.blur(_hybridEditableTextBlurFunction);
	 }*/
	Hybrid.debugmessage("setEditable: "+tf);
 }
 else
 {
	tb.jquery.attr('contenteditable','false');
	tb.jquery.attr('overflow','hidden'); // back to the default!
	_jQueryAddition_MakeUnselectable(tb.jquery);
	tb.jquery.css("cursor","default"); 
	//tb.jquery.blur(null); // no action on blur anymore!
	//Hybrid.debugmessage("setEditable: "+tf);
 }
}
Hybrid.editableTextBlurFunction=null; //
function _hybridEditableTextBlurFunction()
{
	if(Hybrid.editableTextBlurFunction!=null)
	{
		Hybrid.editableTextBlurFunction();
	}
}
Hybrid.setTextBoxColor=_hybridsTxtBxC;
function _hybridsTxtBxC(o,cs)
{
	o.jquery.css("color",cs);
}

Hybrid.createTextBox=_hybridCreateTextBox;
function _hybridCreateTextBox(layer,x,y,w,h,fontStyle,colorString,alignString,fontSize,initialText)
{
 if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
 {
  Hybrid.debugmessage("createTextBox reports: not the right kind of object: "+layer.kind);
  return null;
 }
 var o={};
 o.dynamic_element_counter=0; // they may be nested!
 o.id="textb"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
 //Hybrid.debugmessage("create new textbox: "+o.id);
 var html_string="<div id='"+o.id+"'></div>"
 //Hybrid.debugmessage("create new textbox: "+html_string);
 $(html_string).appendTo(layer.jquery);
  
 o.jquery=$("#"+o.id).css("z-index",layer.dynamic_element_counter);
 o.kind="hybridTextBox";
  // keep ref
 o.jquery.width(toPx(w)).height(toPx(h))
   .css("left",toPx(x)).css("top",toPx(y))
   .css("color",colorString) 
   .css("cursor","default") 
   .css("text-align",alignString) 
   .css("font-size",toPx(fontSize))
   .css("font-family",fontStyle)
   .html(initialText);
   
  Hybrid.setTextEditable(o,false);  // default it's NOT editable!
 layer.dynamic_element_counter++;
 Hybrid.dynamic_element_counter++; // also increase the global counter.
 return o; // return the object!
}
 /*--
 SnoepGames: snoepHybrid cookie
V1.2.0 
---*/
 
Hybrid.setCookie=_hybridSetCookieValue
 function _hybridSetCookieValue(id,val){
  if(typeof(Storage)!=="undefined")
  {
  // Code for localStorage/sessionStorage.
	// Store
	localStorage.setItem(id, val);
  }
 };
 
Hybrid.getCookie=_hybridGetCookieValue
function _hybridGetCookieValue(id){
	if(typeof(Storage)!=="undefined")
	{
	  // Code for localStorage/sessionStorage.
		// Store
		return localStorage.getItem(id);
	}
	else
	{
		// Sorry! No Web Storage support..
		return null;
	}
 };
Hybrid.getAllCookieKeys=_hybridGetAllCookieKeys;
function _hybridGetAllCookieKeys(){
	if(typeof(Storage)!=="undefined")
	{
		var list=[];
	  for(var i=0, len=localStorage.length; i<len; i++) 
	  {
			list.push(localStorage.key(i));
	  }
	  return list;
	}else
	{
		return [];
	}
 };
Hybrid.removeCookie=_hybridRemoveCookie;
function _hybridRemoveCookie(key){
	if(typeof(Storage)!=="undefined")
	{
		localStorage.removeItem(key);
	}
 };

 /*
	init.js (inits all hybrid settings)
*/
	/*---------------------Overriding basic things like manifests etc!----------------------------------------------*/
	Hybrid.stageScale="responsive-width"; // this could also be lineair...?
	Hybrid.mustBeLandscape=true;
	Hybrid.portraitModeCatchImage; // we can put a picture here, telling the user to reorient..
	//Hybrid.width=2048; // 1024 
	Hybrid.height=1360; // 691  // aim width for interface elements, width will be set by mode responsive-width!
	// experiments with size
	// we have to put the headers on index.php, as THIS has the browsers attention.
	// for good measure we also put the headers on the game.php!
	// // <meta name="viewport" content="user-scalable=no,width=device-width"> 768x519 
	//<meta name="viewport" content="user-scalable=no,width=device-width, initial-scale=1">  1024 x 691
	// via home screen: 1024x748!

	Hybrid.aatd.push("687474703a2f2f7777772e736e6f65702e6174"); //http://www.snoep.at
	//Hybrid.debugmessage("new domain: "+Hybrid.encodeString("http://spel.kijkopsteenbergen.nl"));
	Hybrid.aatd.push("687474703a2f2f7370656c2e6b696a6b6f70737465656e62657267656e2e6e6c");//http://spel.kijkopsteenbergen.nl
	
	//Hybrid.stageColor="#ff0000"; // transparent if you don't set this.
	Hybrid.initPageFunction=initPage;
	Hybrid.loadingProgressFunction=showLoadingProgress;
	
	var colorPalet=[];
	colorPalet.loading_bar="#22aaee";

	var custom_switches=["selectable"]; 
	// these will be gotten in loadInitPage from the url, you can set the to a default, but they WILL be overridden!!

	// AUDIO MANIFEST
	
	// GRAPHICS MANIFEST
	var a;
	Hybrid.graphics_manifest['loading_anim']={src:"loading_anim.gif",w:265,h:200,preload: false}; // we don't preload the loading anim, that would be dumb!
	Hybrid.graphics_manifest['buttons']={src:"buttons.png",w:2048,h:2048,preload: true,kind:"sprite",ss:{}}; // we don't preload the loading anim, that would be dumb!
	a=[[0,0,398,72,0,0,0],[398,0,398,72,0,0,0],[0,72,287,72,0,0,0],[287,72,287,72,0,0,0],[574,72,236,72,0,0,0],[0,144,236,72,0,0,0],[236,144,236,72,0,0,0],[472,144,236,72,0,0,0],[0,216,645,182,0,0,0],[0,398,645,182,0,0,0],[0,580,855,182,0,0,0],[0,762,855,182,0,0,0],[0,944,435,182,0,0,0],[435,944,435,182,0,0,0],[870,944,146,145,0,0,0],[0,1126,146,145,0,0,0],[146,1126,515,182,0,0,0],[0,1308,515,182,0,0,0],[515,1308,435,182,0,0,0],[0,1490,435,182,0,0,0],[435,1490,435,182,0,0,0],[0,1672,435,182,0,0,0],[435,1672,103,95,0,0,0],[538,1672,103,95,0,0,0],[641,1672,8,25,0,0,0]];
		Hybrid.graphics_manifest['buttons'].ss['city']=[a[0],a[1]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['high']=[a[2],a[3]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['stop']=[a[4],a[5]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['contact']=[a[6],a[7]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['new_game']=[a[8],a[9]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['continue_game']=[a[10],a[11]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['back']=[a[12],a[13]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['hint']=[a[14],a[15]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['answer']=[a[16],a[17]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['continue']=[a[18],a[19]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['play']=[a[20],a[21]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['dropdown']=[a[22],a[23]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['dropdown_back']=[a[24]];// reg x and y =0 for buttons!

	
	// TEXT/Language MANIFEST
	//Hybrid.disablePageScrolling(); // as a default, we want this to act as a webapp on iPad and other tablets!
	
	/*-------------------------------------------------------------------------------------
	// Show loading page here.
	----------------------------------------------------------------------------------------*/	
	var loading_bar;
	function showLoadingProgress(perc,first_time)
	{
		Hybrid.debugmessage("loading progress is being called.!");
		if(first_time)
		{
			// build up the loading graphics
			Hybrid.erasePage();
			var bg=Hybrid.createLayer();
			
			// set Content
			var loading_anim=Hybrid.createBox(bg,Hybrid.width/2-265/2,Hybrid.height/2-200/2,265,200);
			Hybrid.setBoxImage(loading_anim, "loading_anim"); // index, you get it from the graphics manifest!
			Hybrid.createTextBox(bg,0,Hybrid.height/2-30,Hybrid.width,75,'Luckiest Guy',colorPalet.loading_bar,"center",50,"Laden..");
			var loading_back=Hybrid.createBox(bg,Hybrid.width/2-200,Hybrid.height-100,400,25);
			Hybrid.debugmessage("loading_back: "+loading_back);
			Hybrid.setBoxColor(loading_back,"#ffffff");
			Hybrid.createTextBox(bg,0,Hybrid.height-130,Hybrid.width,75,'Luckiest Guy',"#999999","center",20,"<a href='"+Hybrid.helplink+"'>(Meld een probleem)</a>");
			loading_bar=Hybrid.createBox(loading_back,1,1,10,10); // initial size doesn't matter
			Hybrid.setBoxColor(loading_bar,colorPalet.loading_bar);
		}
		// always:	
		Hybrid.sizeBox(loading_bar,perc*(400-2),23);
	}

	/*-------------------------------------------------------------------------------------
	// Splash Functions
	----------------------------------------------------------------------------------------*/	
	function initPage(str)
	{
		Hybrid.debugmessage("all is loaded, initPage function called."+Hybrid.width+"x"+Hybrid.height);
		// we could check if we are in landscape mode really easy:
		if(Hybrid.width>Hybrid.height)
		{
			// work out where to go!
			// we have ONLY one place to go right now.. Multipage editing might be a bit much right now.!
			var goto_what="quiz";
/*			if(Hybrid.getCookie("lastpage")!=null)
			{
				goto_what=Hybrid.getCookie("lastpage");
				
				user.last_visit=new Date().getTime()-parseInt(Hybrid.getCookie("lastvisittime"));
				Hybrid.setCookie("lastvisittime",new Date().getTime());
				Hybrid.debugmessage("last visit was: "+user.last_visit+" ago");
				if(user.last_visit>(30*60*1000)) // 30 minutes then you have to start again.
				{
					goto_what="start";
					Hybrid.debugmessage("last visit was: "+user.last_visit+" ago, so we override the start page.");
				}
			}*/
			// and go there
			switch(goto_what)
			{
				case "quiz":
					quiz.init();
				break;
//				case "contact":
//					contact.init();
//				break;
				default:
					start.init();
			}

			
		}
		else
		{
			Hybrid.debugmessage("apparently w x h="+Hybrid.width+","+Hybrid.height+" you need to rotate your device");
			ori_mm.init();
		}
	}
	

	
	//HELPER FUNCTIONS AND GLOBALS----------------------------------
	var layout={}; // will be set by each page.
	var palet={};
	palet.dark_blue="#01286f";
	palet.pale_blue="#5594bf";
	palet.pale_green="#c9e5b6";
	palet.body="#2f2f2f";
	palet.head=palet.dark_blue
	palet.pale_yellow="#ffec96";
	palet.back_green="#98c475";
	
	var fonts={body:"Tahoma, Verdana, Segoe, sans-serif", head: "Luckiest Guy"};
	var fontsz={};
	fontsz.head=42;
	fontsz.menu=30;
	fontsz.body=26.5;
	function helpers_createStartSchermBack()
	{
		// must be the first function you call.
		// positions the background, work OVER it on a new layer.
		// now create and set the layer
		layout.back=Hybrid.createLayer();
		var w,h,x,y,f;
		f=2048/w;
		w=2048*f;
		h=1536*f;
		x=0;
		y=h-Hybrid.width;
		layout.back_image=Hybrid.createBox(layout.back,x,y,w,h);
		Hybrid.setBoxColor(layout.back,"#98c475"); // this should be set to cover all, but that's for later!
		
		Hybrid.setBoxImage(layout.back_image,"start_background"); // this should be set to cover all, but that's for later!
	}

	
	//quiz----------------------------------
	var quiz={};
	quiz.init=initquiz;
	quiz.framecounter=0;
	quiz.bar_height=80;
	quiz.selected_answer=-1;// right now nothing is selected
	quiz.button_height=194;
	
	// these should be loaded, I think.. Or pushed as extrenal javascript??
	
	// question can have:
	// question title
	// question body
	// question media
	// answer body
	// answer right body
	// answer wrong body
	// hint body
	// hint title
	// user used hint
	// user answer time!
	
	quiz.questions=[{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}];
	quiz.current_question=0;
	quiz.state="just_started";
	
	function initquiz()
	{
		Hybrid.debugmessage("START Quiz called!");
		Hybrid.setCookie("lastpage","quiz");

		Hybrid.resizeFunction=handleResizeQuiz;
		handleResizeQuiz(); // this builds the page 
		
	}
	

	
	function handleResizeQuiz()
	{
		Hybrid.debugmessage("page Quiz build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		layout.back=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.back,palet.pale_green); // this should be set to cover all, but that's for later!
		
		var w,h,x,y,f,tx,ty,string;
		w=Hybrid.width;
		h=quiz.bar_height;
		x=0;
		y=0;
		layout.bar=Hybrid.createBox(layout.back,x,y,w,h);
		Hybrid.setBoxColor(layout.bar,palet.pale_blue); // this should be set to cover all, but that's for later!

		// create the extra (standard) buttons and controls
		Hybrid.createTextButton(layout.bar,100,0,200,h,"Opslaan","button_save",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		Hybrid.createTextButton(layout.bar,300,0,200,h,"Annuleren","button_cancel",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		Hybrid.createTextButton(layout.bar,500,0,200,h,"Hint","button_hint",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		Hybrid.createTextButton(layout.bar,700,0,400,h,"Antwoord Goed","button_right",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		Hybrid.createTextButton(layout.bar,1100,0,400,h,"Antwoord Fout","button_wrong",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		
		Hybrid.createTextButton(layout.back,1100,0,400,h,"Antwoord Fout","button_wrong",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		
	
		// it's imperative that layout stays the same, so apart from the bar, we need to set a box in the middle of exactly 2048..
		// UNLESS it's smaller, than we need to scale it down... but smaller than 4x3?? I think not.
		
		w=2048;
		h=1361;
		x=(Hybrid.width-2048)/2;
		y=0;
		layout.quiz=Hybrid.createBox(layout.back,x,y,w,h);

		// set the snap to aim for!
		//Hybrid.setBoxColor(layout.quiz,"rgba(255,255,255,0.1)"); // this should be set to cover all, but that's for later!
		//Hybrid.setBoxImage(layout.quiz,"snap"); // this should be set to cover all, but that's for later!


		// stuff in the bar
//		layout.user_name=Hybrid.createTextBox(layout.quiz,60,20,450,100,fonts.head,"#fff","left",fontsz.head,"Erik-Jan Pullens");
//		layout.vraag_nr=Hybrid.createTextBox(layout.quiz,440,25,350,100,fonts.body,"#fff","right",fontsz.menu,"Vraag 12/30");
//		layout.score_label=Hybrid.createTextBox(layout.quiz,1340,25,600,100,fonts.body,"#fff","right",fontsz.menu,"Score <em>1200</em> punten / <em>600</em> stenen");

/*		// Question Progress
		w=412;
		h=30;
		x=(2048-w)/2;
		y=(quiz.bar_height-h)/2+5;
		layout.progress_total=Hybrid.createBox(layout.quiz,x,y,w,h);
		Hybrid.setBoxColor(layout.progress_total,"#fff"); 
		layout.progress=Hybrid.createBox(layout.quiz,x,y,w*(12/30),h);
		Hybrid.setBoxColor(layout.progress,palet.pale_yellow); */

		
		// Question Title
		w=854;
		h=86;
		x=104;
		y=264;
		string="Twee meerminnen";
		layout.title=Hybrid.createTextBox(layout.quiz,x,y,w,h,fonts.head,palet.head,"left",fontsz.head,string);
		Hybrid.setTextEditable(layout.title,true); 
		// TIP: make sure it's big enough, to handle <br> efficiently.
		
		// Question Body
		w=854;
		h=174;
		x=104;
		y=310;
		string="Naast het gemeentewapen van Steenbergen staan twee meerminnen. Deze herinneren aan een Middeleeuwse legende (een soort sprookje). Volgens die legende:";
		layout.question_body=Hybrid.createTextBox(layout.quiz,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,string);
		// if this is the editor, make it selectable!
		Hybrid.setTextEditable(layout.question_body,true);
		
		// create media box
		w=854;
		h=557;
		x=104;
		y=488;
		layout.media=Hybrid.createBox(layout.quiz,x,y,w,h);
		Hybrid.setBoxColor(layout.media,"#fff"); 
		Hybrid.makeButton(layout.media,"add_media",handleButtonsQuiz);
		
		// create answers buttons!
		var i,letter=["A","B","C","D"];
		var answers=["Beschermden de meerminnen Steenbergen tegen vijanden.","Brachten de meerminnen vis naar Steenbergen.","Legden de meerminnen half Steenbergen in de as.","Redden de meerminnen een Steenbergse visser van de verdrinkingsdood"]
		
		for(i=0;i<4;i++)
		{
			w=900;
			h=quiz.button_height;
			x=1046;
			y=315+(quiz.button_height-16)*i; // 172 is inner, so  thickness =8
			// create the outer box (rounded)
			layout["a"+i]=Hybrid.createBox(layout.quiz,x,y,w,h);
			//Hybrid.setBoxColor(layout["a"+i],"#fff"); 
			
			// because the sprite way is not very handy in this case!!!
			// THIS IS THE WAY TO DO IT WITH A CANVAS!
			layout["a"+i+"_canvas"]=Hybrid.createCanvas(layout["a"+i],0,0,w,h);
			layout["a"+i+"_canvas"].over=false; // this is false.
			
			// now create the texts
			layout["a"+i+"_letter"]=Hybrid.createTextBox(layout["a"+i],-5,60,150,150,fonts.head,palet.head,"center",60,letter[i]);
			string="";
			layout["a"+i+"_text"]=Hybrid.createTextBox(layout["a"+i],128,10,720,h-30,fonts.body,palet.body,"left",fontsz.body,answers[i]);
			//var th=Hybrid.getTextboxHeight(layout["a"+i+"_text"]);
			//Hybrid.debugmessage(h +" answer "+(i+1)+" height");
			//Hybrid.moveBox(layout["a"+i+"_text"],124,90-th/2);
			Hybrid.setTextEditable(layout["a"+i+"_text"],true);  // ,checkLayout optional blur function!
			
			// set a button box over this all.
//			layout["a"+i+"hit"]=Hybrid.createBox(layout["a"+i],0,0,w,h);
			//Hybrid.makeButton(layout["a"+i+"hit"],"answer|"+i,handleButtonsQuiz,handleOverButtonsQuiz);
			
		}
		quizHelperDrawAnswerCanvasses();
		
				/*
		// create button answer
		w=Hybrid.graphics_manifest['buttons'].ss['answer'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['answer'][0][3];
		x=2048-60-755;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"answer","button_answer",handleButtonsQuiz);
	
		// create button hint
		w=Hybrid.graphics_manifest['buttons'].ss['hint'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['hint'][0][3];
		x=2048-60-192;
		y=Hybrid.height-h-80;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"hint","button_hint",handleButtonsQuiz);
		
		// overlay snap!

		{
			w=2048;
			h=1361;
			x=(Hybrid.width-2048)/2;
			y=0;
			layout.snap=Hybrid.createBox(layout.back,x,y,w,h);
	//		Hybrid.setBoxColor(layout.quiz,"rgba(255,255,255,0.1)"); // this should be set to cover all, but that's for later!
			Hybrid.setBoxImage(layout.snap,"snap"); // this should be set to cover all, but that's for later!
			Hybrid.setBoxAlpha(layout.snap,0.5); // this should be set to cover all, but that's for later!
		*/
	
	}
	
	//Hybrid._userKeyHandler(ev.keyCode,down);
	//function quiz_EditListener(keyCode,down_up)
	function checkLayout()
	{
		Hybrid.debugmessage("checkLayout");
//		Hybrid.debugmessage("quiz_EditListener: "+keyCode+","+down_up);

		/*if(keyCode==13 && down_up==true)
		{
			Hybrid.debugmessage("Check edits.. and relayout for convenience.");
			
			var i;
			for(i=0;i<4;i++)
			{
				// now create the texts
				var th=Hybrid.getTextboxHeight(layout["a"+i+"_text"]);
				Hybrid.debugmessage(h +" answer "+(i+1)+" height");
				Hybrid.moveBox(layout["a"+i+"_text"],124,90-th/2);
				// we should stop and restart editing!
				//Hybrid.setTextEditable(layout["a"+i+"_text"],false);
				//Hybrid.setTextEditable(layout["a"+i+"_text"],true);
			}
		}*/
	}	
	function quizHelperDrawAnswerCanvasses()
	{
		var i;
		for(i=0;i<4;i++)
		{
			w=900;
			h=quiz.button_height;
			var rounding=8;
			var ctx=layout["a"+i+"_canvas"].context;
			var grd=ctx.createLinearGradient(0,0,0,h);
			if(i==quiz.selected_answer)
			{
				//rounding=20;
				Hybrid.setTextBoxColor(layout["a"+i+"_text"],"#fff");
				Hybrid.setTextBoxColor(layout["a"+i+"_letter"],"#9cd2f7");
				grd.addColorStop(0,"#255192");
				grd.addColorStop(1,"#3a75bc");
			}else
			{
				//rounding=8;
				Hybrid.setTextBoxColor(layout["a"+i+"_text"],palet.body);
				Hybrid.setTextBoxColor(layout["a"+i+"_letter"],palet.head);
				if(layout["a"+i+"_canvas"].over===false)
				{
					grd.addColorStop(0,"#9cd2f7");
					grd.addColorStop(1,"#88bfe8");
				}else
				{
					grd.addColorStop(0,"#6cbcff");
					grd.addColorStop(1,"#5aaaf2");
				}
			}
			ctx.fillStyle=grd;
			ctx.strokeStyle="#FFF";
			ctx.lineWidth=rounding;
			ctx.beginPath();
			Hybrid.drawRoundedRect(ctx,4,4,w-8,h-8,rounding);
			ctx.fill();
			ctx.stroke();
		}
	}
	
	function handleOverButtonsQuiz(label,overout)
	{
		Hybrid.debugmessage("handleButtonsQuiz: "+label+","+overout);
		if(label.indexOf("answer|")!=-1)
		{
			var nr=parseInt(label.substr(7,15));
			Hybrid.debugmessage("button nummer: "+nr);
			if(overout=="out")
			{
				// restore
				layout["a"+nr+"_canvas"].over=false;
			}else
			{
				// show over!
				layout["a"+nr+"_canvas"].over=true;
			}
			quizHelperDrawAnswerCanvasses();
		}
		
		
	}
	function handleButtonsQuiz(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		if(label.indexOf("answer|")!=-1)
		{
			var nr=parseInt(label.substr(7,15));
			quiz.selected_answer=nr;
			quizHelperDrawAnswerCanvasses();
			
		}
		switch(label)
		{
			case "button_answer":
				//start.init();
				// show popup
				// layer zwart 60%
				// grijs #dddddd
				// succes!
			break;				
			case "button_stop":
				start.init();
			break;				
			default:
				Hybrid.debugmessage("handleButtonsQuiz: "+label);
		}
	}
	

