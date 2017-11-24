/*!
 * Copyright (c) 2017 NAVER Corp.
 * @egjs/infinitegrid project is licensed under the MIT license
 * 
 * @egjs/infinitegrid JavaScript library
 * https://github.com/naver/egjs-infinitegrid
 * 
 * @version 3.0.0-rc
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Parallax=t():(e.eg=e.eg||{},e.eg.Parallax=t())}(this,function(){return function(e){function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=navigator.userAgent,o=-1!==i.indexOf("Mobi")||/ios|android/.test(i),_=function(e){return e===window},a={vertical:{position:"top",size:"height",cammelSize:"Height",coordinate:"Y"},horizontal:{position:"left",size:"width",cammelSize:"Width",coordinate:"X"}},s="start",c=function(){for(var e=(document.head||document.getElementsByTagName("head")[0]).style,t=["transform","webkitTransform","msTransform","mozTransform"],n=0,r=t.length;n<r;n++)if(t[n]in e)return t[n];return""}(),l=function(){function Parallax(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window,t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,Parallax),this.options=r({container:null,selector:"img",strength:1,center:0,range:[-1,1],align:s,horizontal:!1,threshold:50},t),this._root=e,this._rootSize=0,this._containerPosition=0,this._style=a[this.options.horizontal?"horizontal":"vertical"],this.resize()}return Parallax.prototype._checkParallaxItem=function(e){if(e){var t=this.options.selector;if(!e.__IMAGE__){var n=e.querySelector(t);if(e.__IMAGE__=n||-1,-1===e.__IMAGE__)return;e.__BOX__=n.parentNode}if(-1!==e.__IMAGE__){var r=this._style.cammelSize;e.__IMAGE__.__SIZE__=e.__IMAGE__["offset"+r],e.__BOX__.__SIZE__=e.__BOX__["offset"+r]}}},Parallax.prototype.resize=function(){var e=this,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],n=this._root,r=this.options.container,i=this._style.position,a=this._style.cammelSize;if(r&&n!==r){var s=(_(n)?document.body:n).getBoundingClientRect(),c=r.getBoundingClientRect();this._containerPosition=c[i]-s[i]}else this._containerPosition=0;if(this._rootSize=_(n)?window["inner"+a]||document.documentElement["client"+a]:n["client"+a],o&_(n)){var l=document.body.offsetWidth||document.documentElement.offsetWidth,u=window.innerWidth;this._rootSize=this._rootSize/(l/u)}t.forEach(function(t){e._checkParallaxItem(t.el)})},Parallax.prototype.refresh=function(){var e=this,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0,r=this._style,i=r.position,o=r.coordinate,_=r.size,a=this.options,s=a.strength,l=a.center,u=a.range,f=a.align,h=a.threshold,d=this._rootSize,p=n+d,m=this._containerPosition;t.forEach(function(t){if(t.rect&&t.size&&t.el){var r=m+t.rect[i],a=t.rect[_]||t.size[_];if(!(n>r+a+h||p<r-h)){var g=t.el;if(g.__IMAGE__||e._checkParallaxItem(g),-1!==g.__IMAGE__){var w=g.__IMAGE__,b=g.__BOX__.__SIZE__,y=w.__SIZE__;if(b>=y)w.style[c]="";else{var x=(n+d/2-(d+b)/2*l-(r+b/2))/(d+b)*2*s,v=(b-y)/2,z=v*(1-(x=Math.max(Math.min(x,u[1]),u[0])));"center"===f&&(z-=v),w.__TRANSLATE__=z,w.__RATIO__=x,w.style[c]="translate"+o+"("+z+"px)"}}}}})},Parallax}();e.exports=l}])});
//# sourceMappingURL=parallax.js.map