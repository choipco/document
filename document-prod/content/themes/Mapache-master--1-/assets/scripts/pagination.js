!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/",n(n.s=26)}({0:function(e,t){e.exports=jQuery},26:function(e,t,n){(function(e){!function(t,n){var r=e(".load-more"),o=e(".story-feed"),a=t.location.pathname,c=1;maxPages>=2&&r.removeClass("u-hide"),r.on("click",function(t){var r,u,i=this;if(t.preventDefault(),u=/(?:page\/)(\d)(?:\/)$/i,(r=(r=a).replace(/#(.*)$/g,"").replace("////g","/")).match(u)&&(c=parseInt(r.match(u)[1]),r=r.replace(u,"")),a=r,c>=maxPages)e(this).remove();else{var l=a+"page/"+(c+=1)+"/";e.get(l,function(e){var t=n.createRange().createContextualFragment(e).querySelector(".story-feed-content");o[0].appendChild(t)}).fail(function(t){404===t.status&&e(i).remove()})}})}(window,document)}).call(t,n(0))}});