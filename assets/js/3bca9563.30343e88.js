"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[868],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),b=a,m=f["".concat(s,".").concat(b)]||f[b]||p[b]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"globalstatus",title:"Disable Global Statusbar"},s=void 0,u={unversionedId:"recipes/globalstatus",id:"recipes/globalstatus",title:"Disable Global Statusbar",description:"By default AstroNvim enables the new global statusbar that comes with Neovim v0.7+. Some users may not like this behavior and prefer the traditional per-buffer status bar. The following code block is a minimal user/init.lua that will disable the global statusbar with lualine. If you are using Dashboard.nvim as well you will also need to override the autocommands that we include with this plugin as well which are the changes made to the polish() function. If you have disabled or removed the Dashboard.nvim plugin then you can ignore the polish function changes below.",source:"@site/docs/recipes/globalstatus.md",sourceDirName:"recipes",slug:"/recipes/globalstatus",permalink:"/recipes/globalstatus",tags:[],version:"current",frontMatter:{id:"globalstatus",title:"Disable Global Statusbar"},sidebar:"docs",previous:{title:"Dashboard Customizations",permalink:"/recipes/alpha"},next:{title:"Manually Add LSP",permalink:"/recipes/manual_lsp"}},c={},p=[],f={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default AstroNvim enables the new global statusbar that comes with Neovim v0.7+. Some users may not like this behavior and prefer the traditional per-buffer status bar. The following code block is a minimal ",(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua")," that will disable the global statusbar with lualine. If you are using Dashboard.nvim as well you will also need to override the autocommands that we include with this plugin as well which are the changes made to the ",(0,o.kt)("inlineCode",{parentName:"p"},"polish()")," function. If you have disabled or removed the Dashboard.nvim plugin then you can ignore the ",(0,o.kt)("inlineCode",{parentName:"p"},"polish")," function changes below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  options = { opt = { laststatus = 2 } }\n}\n")))}b.isMDXComponent=!0}}]);