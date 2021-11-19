"use strict";(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[4855],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var o=n(2263),r=n(3919);function a(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},5186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(4996),c=["components"],l={id:"08-cti-actions",title:"CTI Actions"},s=void 0,u={unversionedId:"lightning/cti-adapter/08-cti-actions",id:"lightning/cti-adapter/08-cti-actions",isDocsHomePage:!1,title:"CTI Actions",description:"Customers can now extend their Contact Control Panel (CCP) with customizable buttons called CTI Actions. These buttons can be configured in Salesforce and used to simplify common agent actions. For example, you can add a button that transfers calls to a manager, start and stop recordings, automate case creation, or start a customer refund process. CTI Actions are configured in the CTI Adapter\u2019s Actions Admin panel to execute CTI Flows which are process blocks that enable you to easily design agent workflows within our Salesforce integration.",source:"@site/docs/lightning/03-cti-adapter/08-cti-actions.md",sourceDirName:"lightning/03-cti-adapter",slug:"/lightning/cti-adapter/08-cti-actions",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/08-cti-actions",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/08-cti-actions.md",version:"current",sidebarPosition:8,frontMatter:{id:"08-cti-actions",title:"CTI Actions"},sidebar:"lightning",previous:{title:"Contact Lens",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/07-contact-lens"},next:{title:"Recording Controls",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/09-recording-controls"}},d=[{value:"CCP Overlay",id:"ccp-overlay",children:[]},{value:"Receiving Data from CTI Flows",id:"receiving-data-from-cti-flows",children:[]},{value:"Upgrading from an earlier version",id:"upgrading-from-an-earlier-version",children:[]}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Customers can now extend their Contact Control Panel (CCP) with customizable buttons called CTI Actions. These buttons can be configured in Salesforce and used to simplify common agent actions. For example, you can add a button that transfers calls to a manager, start and stop recordings, automate case creation, or start a customer refund process. CTI Actions are configured in the CTI Adapter\u2019s Actions Admin panel to execute ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/contact-center/automate-agent-workflows-with-salesforce-cti-adapter/"},"CTI Flows")," which are process blocks that enable you to easily design agent workflows within our Salesforce integration."),(0,a.kt)("p",null,"You can configure a CTI Action in the CCP Element Editor page."),(0,a.kt)("img",{src:(0,i.Z)("/img/classic/ccp-element-editor-02.png")}),(0,a.kt)("p",null,'Make sure that you have created a CTI Flow and it uses the source "CTI Action." Only these CTI Flows will be displayed in the dropdown field.'),(0,a.kt)("p",null,"You can optionally specify a payload to pass to the CTI Flow. This allows your agents to enter additional data about the customer or information about the call to pass into the CTI Flow. The CCP Element Editor gives you the ability to add input fields into your form."),(0,a.kt)("img",{src:(0,i.Z)("/img/classic/ccp-element-editor-03.png")}),(0,a.kt)("img",{src:(0,i.Z)("/img/classic/ccp-element-editor-04.png")}),(0,a.kt)("h3",{id:"ccp-overlay"},"CCP Overlay"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Actions")," panel in the CCP overlay drawer displays the CTI Action buttons where your agents have easy access to them as they are interacting with customers."),(0,a.kt)("img",{src:(0,i.Z)("/img/classic/ccp-overlay-01.png")}),(0,a.kt)("p",null,'If a CTI Action requires additional input by the agent, its name will be followed by an arrow and when the agent clicks on this button, it will open the configured form. Otherwise, it will be shown with an "Execute" button next to its name.'),(0,a.kt)("img",{src:(0,i.Z)("/img/classic/ccp-overlay-02-detail.png")}),(0,a.kt)("h3",{id:"receiving-data-from-cti-flows"},"Receiving Data from CTI Flows"),(0,a.kt)("p",null,"In addition to agents sending data to the CTI Flow, they can also receive data from a CTI Flow.. When a CTI Flow sends some information to the CCP overlay, it will be displayed in the Data panel."),(0,a.kt)("img",{src:(0,i.Z)("/img/classic/ccp-overlay-04-data.png")}),(0,a.kt)("p",null,"Here is how you would configure your CTI Flow to send data back to the CCP overlay."),(0,a.kt)("img",{src:(0,i.Z)("/img/classic/ccp-overlay-6-data.png")}),(0,a.kt)("h2",{id:"upgrading-from-an-earlier-version"},"Upgrading from an earlier version"),(0,a.kt)("p",null,"If you are upgrading the Salesforce package from an earlier version of CTI Adapter, there are a few additional steps to follow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Setup"),(0,a.kt)("li",{parentName:"ol"},'In "Quick Find," search for "Picklist Value Sets" and click on the result.'),(0,a.kt)("li",{parentName:"ol"},'Select "AC_CtiScriptSource" on "Picklist Value Sets" page.'),(0,a.kt)("li",{parentName:"ol"},'Scroll down to "Values" section'),(0,a.kt)("li",{parentName:"ol"},'Click "New" to add a new value.'),(0,a.kt)("li",{parentName:"ol"},'In the textarea, enter "ctiAction" and save'),(0,a.kt)("li",{parentName:"ol"},'Scroll down to the new field you added, "ctiAction," and click "Edit."'),(0,a.kt)("li",{parentName:"ol"},'Update the label to "CTI Action" and save.')))}f.isMDXComponent=!0}}]);