"use strict";(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[2418],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3919:function(e,t,n){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var i=n(2263),r=n(3919);function a(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,l=void 0!==o&&o,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4974:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=n(4996),l=["components"],c={id:"05-localization",title:"Localization"},s=void 0,u={unversionedId:"lightning/cti-adapter/05-localization",id:"lightning/cti-adapter/05-localization",isDocsHomePage:!1,title:"Localization",description:"Prerequisites",source:"@site/docs/lightning/03-cti-adapter/05-localization.md",sourceDirName:"lightning/03-cti-adapter",slug:"/lightning/cti-adapter/05-localization",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/05-localization",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/05-localization.md",version:"current",sidebarPosition:5,frontMatter:{id:"05-localization",title:"Localization"},sidebar:"lightning",previous:{title:"Presence Sync Rules",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/04-presence-sync-rules"},next:{title:"Set Agent Status on Session End",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/06-set-agent-status-on-session-end"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setting you preferred language",id:"setting-you-preferred-language",children:[]},{value:"Additional Notes",id:"additional-notes",children:[]}],g={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"CTI Adapter will use Translation Workbench to maintain translated values for metadata and data labels in your Salesforce org. In order for that to work, you need to enable Translation Workbench in your org. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From Setup, in the Quick Find box, enter Translation Language Settings, and then select Translation Language Settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the welcome page, click Enable."))),(0,a.kt)("h2",{id:"setting-you-preferred-language"},"Setting you preferred language"),(0,a.kt)("p",null,"Starting from v5.6, Amazon Connect Salesforce CTI adapter is localized in nine new languages: Spanish, French, Brazilian Portuguese, Korean, Italian, German, (Simplified/Traditional) Chinese, and Japanese. "),(0,a.kt)("p",null,'Change the language by selecting the username in the top right corner, then click on "My Settings".'),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/localization-1.png")}),(0,a.kt)("p",null,'On the setting page on the left panel go to "Personal" and then select "Language & Time Zone".'),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/localization-2.png")}),(0,a.kt)("p",null,"You can then select your preferred language. Note that CTI adapter only have nine languages built within the package. "),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/localization-3.png")}),(0,a.kt)("p",null,"Click save and the page will reload. That's it. You can check in other pages to see if it actually applies your change. For example here is a screenshot of CTI Flow Editor in Spanish."),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/localization-4.png")}),(0,a.kt)("p",null,"Click on Phone pannel on the bottom to see if CCP has been localized. If not right click on CCP and reload."),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/localization-5.png")}),(0,a.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,a.kt)("p",null,"Please note that not all fields can be localized to different languages due to a couple reasons. Here are places that cannot be localized:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dashboard. Salesforce dashboards do not support localization.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Flexipages. This means the page with tabs that you can find in AC CTI Adapter page in lightning. "))),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/localization-6.png")}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reports. This is a missing functionality in Salesforce.")))}d.isMDXComponent=!0}}]);