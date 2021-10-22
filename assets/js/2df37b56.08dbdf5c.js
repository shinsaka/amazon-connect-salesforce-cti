(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[7064],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8321:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(4996),l=["components"],c={id:"09-localization",title:"Localization"},s=void 0,u={unversionedId:"classic/cti-adapter/09-localization",id:"classic/cti-adapter/09-localization",isDocsHomePage:!1,title:"Localization",description:"Prerequisites",source:"@site/docs/classic/03-cti-adapter/09-localization.md",sourceDirName:"classic/03-cti-adapter",slug:"/classic/cti-adapter/09-localization",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/09-localization",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/09-localization.md",version:"current",sidebarPosition:9,frontMatter:{id:"09-localization",title:"Localization"},sidebar:"classic",previous:{title:"CTI Flows",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/08-cti-flows"},next:{title:"CTI Actions",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/10-cti-actions"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setting you preferred language",id:"setting-you-preferred-language",children:[]},{value:"Additional Notes",id:"additional-notes",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"CTI Adapter will use Translation Workbench to maintain translated values for metadata and data labels in your Salesforce org. In order for that to work, you need to enable Translation Workbench in your org."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From Setup, in the Quick Find box, enter Translation Language Settings, and then select Translation Language Settings.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the welcome page, click Enable."))),(0,i.kt)("h2",{id:"setting-you-preferred-language"},"Setting you preferred language"),(0,i.kt)("p",null,"Starting from v5.6, Amazon Connect Salesforce CTI adapter is localized in nine new languages: Spanish, French, Brazilian Portuguese, Korean, Italian, German, (Simplified/Traditional) Chinese, and Japanese."),(0,i.kt)("p",null,'Change the language by selecting the username in the top right corner, then click on "My Settings".'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/localization-1.png")}),(0,i.kt)("p",null,'On the setting page on the left panel go to "Personal" and then select "Language & Time Zone".'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/localization-2.png")}),(0,i.kt)("p",null,"You can then select your preferred language. Note that CTI adapter only have nine languages built within the package."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/localization-3.png")}),(0,i.kt)("p",null,"Click save and the page will reload. That's it. You can check in other pages to see if it actually applies your change. For example here is a screenshot of CTI Flow Editor in Spanish."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/localization-4.png")}),(0,i.kt)("p",null,"Click on Phone pannel on the bottom to see if CCP has been localized. If not right click on CCP and reload."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/localization-5.png")}),(0,i.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,i.kt)("p",null,"Please note that not all fields can be localized to different languages due to a couple reasons. Here are places that cannot be localized:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dashboard. Salesforce dashboards do not support localization.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Flexipages. This means the page with tabs that you can find in AC CTI Adapter page in lightning."))),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/localization-6.png")}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reports. This is a missing functionality in Salesforce.")))}f.isMDXComponent=!0}}]);