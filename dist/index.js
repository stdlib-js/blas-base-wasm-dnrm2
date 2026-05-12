"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=u(function(G,p){
var b=require("path").resolve,R=require('@stdlib/fs-read-wasm/dist').sync,W=R(b(__dirname,"..","src","main.wasm"));p.exports=W
});var d=u(function(H,f){
var A=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),g=y();function n(e){if(!(this instanceof n))return new n(e);if(!A(e))throw new TypeError(S('26dH0',e));return m.call(this,g,e,{env:{memory:e}}),this}O(n,m);q(n.prototype,"main",function(r,i,t){return this._instance.exports.c_dnrm2(r,i,t)});q(n.prototype,"ndarray",function(r,i,t,o){return this._instance.exports.c_dnrm2_ndarray(r,i,t,o)});f.exports=n
});var M=u(function(I,w){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),z=require('@stdlib/strided-base-stride2offset/dist'),B=require('@stdlib/wasm-memory/dist'),E=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),v=d();function a(){return this instanceof a?(v.call(this,new B({initial:0})),this):new a}j(a,v);h(a.prototype,"main",function(r,i,t){return this.ndarray(r,i,t,z(r,t))});h(a.prototype,"ndarray",function(r,i,t,o){var l,s;return l=E(this,[T(r,i,t,o)]),s=l[0],v.prototype.ndarray.call(this,r,s.ptr,s.stride,s.offset)});w.exports=a
});var _=u(function(J,x){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=M(),C=d(),c=new k;c.initializeSync();V(c,"Module",C.bind(null));x.exports=c
});var D=_();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
