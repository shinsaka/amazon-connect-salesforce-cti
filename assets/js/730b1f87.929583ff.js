(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[3077],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),g=r,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||i;return a?n.createElement(d,c(c({ref:t},u),{},{components:a})):n.createElement(d,c({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return i},Z:function(){return c}});var n=a(2263),r=a(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(o)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+u:u}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8504:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),c=a(4996),o=["components"],l={id:"05-call-display-account-page",title:"Call Display on the Account Page"},s=void 0,u={unversionedId:"classic/cti-adapter/05-call-display-account-page",id:"classic/cti-adapter/05-call-display-account-page",isDocsHomePage:!1,title:"Call Display on the Account Page",description:"The Adapter comes with a Visualforce Page that displays all phone calls",source:"@site/docs/classic/03-cti-adapter/05-call-display-account-page.md",sourceDirName:"classic/03-cti-adapter",slug:"/classic/cti-adapter/05-call-display-account-page",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/05-call-display-account-page",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/05-call-display-account-page.md",version:"current",sidebarPosition:5,frontMatter:{id:"05-call-display-account-page",title:"Call Display on the Account Page"},sidebar:"classic",previous:{title:"Call Recording Link for Task",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/04-call-recording-link-for-task"},next:{title:"Outbound Campaign Calls",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/06-outbound-campaign-calls"}},p=[],m={toc:p};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Adapter comes with a Visualforce Page that displays all phone calls\nmade using Amazon Connect for an Account. It differs from thee standard\nActivity Related List because if filters all other activities out and\nfocuses on the phone calls only."),(0,i.kt)("p",null,'To show the recent calls on the Account details page, add the\n"ACSFCCP_CallLogging_View" Visualforce Page to the Account Page layout.\nIt is recommended to create a dedicated section with a 1-Column layout\nfor this purpose, and to make the Visualforce Page scrollable.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in to your Salesforce Org")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Setup")," then in type ",(0,i.kt)("em",{parentName:"p"},"Object Manager")," in Quick Find"))),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image203.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},'Click on the "Account" object')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image208.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'Click on the "Page Layouts"')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image209.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'Click on the "Account layout" and the layout designer will open')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image210.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},'From the left-hand side menu, select "Fields"')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image211.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},'Drag and Drop "Section" item to add a new section on the layout')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image212.png")}),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image213.png")}),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},'On the pop-up form, set Section Name ("Call Logging View") and 1-Column Layout')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image214.png")}),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},'Click "OK"')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image215.png")}),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"From the left-hand side menu, select Visualforce Pages:")),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image216.png")}),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},'Drag and drop "ACSFCCP_CallLogging_View" item to the "Call Logging View" section')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image217.png")}),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image218.png")}),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image219.png")}),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},'Hover the newly added component and click on the "Setting" icon')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image220.png")}),(0,i.kt)("p",null,'Check "Show scrollbars" and click "OK"'),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image221.png")}),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},'Click the "Save" button in the top-left corner')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image222.png")}),(0,i.kt)("ol",{start:14},(0,i.kt)("li",{parentName:"ol"},'Make some phone calls, ask to speak with an agent. Open the Account, then select "Details" tab')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image223.png")}),(0,i.kt)("ol",{start:15},(0,i.kt)("li",{parentName:"ol"},'Scroll down the Details page until you see the "Call Logging View" section')),(0,i.kt)("img",{src:(0,c.Z)("/img/classic/image224.png")}),(0,i.kt)("p",null,"For more information on how to add a Visualforce Page to a Page layout,\nplease visit:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://trailhead.salesforce.com/en/modules/visualforce_mobile_salesforce1/units/visualforce_mobile%20_salesforce1_layouts_cards"},"https://trailhead.salesforce.com/en/modules/visualforce_mobile_salesforce1/units/visualforce_mobile_salesforce1_layouts_cards")))}g.isMDXComponent=!0}}]);