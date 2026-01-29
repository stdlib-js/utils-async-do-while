"use strict";var h=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var g=h(function(y,o){
var s=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function v(n,r,e,f){var t,i;if(!s(n))throw new TypeError(l('1R13c',n));if(!s(r))throw new TypeError(l('1R12H',r));if(!s(e))throw new TypeError(l('1R13N',e));t=[],i=0,n.call(f,i,m);function m(a){var u;if(a)return e(a);if(i+=1,arguments.length>1)for(t=[],u=1;u<arguments.length;u++)t.push(arguments[u]);r(i,c)}function c(a,u){if(a)return e(a);if(u)return n.call(f,i,m);t.length&&t.unshift(null),e.apply(null,t)}}o.exports=v
});var p=g();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
