// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var r=n,e=t;var i=function(n,t,i,a){var s,u;if(!r(n))throw new TypeError(e("invalid argument. First argument must be a function. Value: `%s`.",n));if(!r(t))throw new TypeError(e("invalid argument. Second argument must be a function. Value: `%s`.",t));if(!r(i))throw new TypeError(e("invalid argument. Third argument must be a function. Value: `%s`.",i));function l(n){var r;if(n)return i(n);if(u+=1,arguments.length>1)for(s=new Array(arguments.length-1),r=1;r<arguments.length;r++)s[r-1]=arguments[r];t(u,o)}function o(t,r){return t?i(t):r?n.call(a,u,l):(s.length&&s.unshift(null),void i.apply(null,s))}s=[],u=0,n.call(a,u,l)};export{i as default};
//# sourceMappingURL=index.mjs.map
