"use strict";var h=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var g=h(function(y,o){
var s=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function v(t,r,n,f){var u,i;if(!s(t))throw new TypeError(l('1R13c',t));if(!s(r))throw new TypeError(l('1R12H',r));if(!s(n))throw new TypeError(l('1R13N',n));u=[],i=0,t.call(f,i,m);function m(a){var e;if(a)return n(a);if(i+=1,arguments.length>1)for(u=[],e=1;e<arguments.length;e++)u.push(arguments[e]);r(i,c)}function c(a,e){if(a)return n(a);if(e)return t.call(f,i,m);u.length&&u.unshift(null),n.apply(null,u)}}o.exports=v
});var p=g();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
