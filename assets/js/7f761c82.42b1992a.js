(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[5254],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(2263),i=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4328:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=n(4996),s=["components"],l={id:"02-configure-salesforce-omnichannel",title:"Configure Salesforce Omnichannel for Testing"},c=void 0,p={unversionedId:"lightning/appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel",id:"lightning/appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel",isDocsHomePage:!1,title:"Configure Salesforce Omnichannel for Testing",description:"In order to sync your Connect User status with your Omni-Channel agent",source:"@site/docs/lightning/05-appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel.md",sourceDirName:"lightning/05-appendices/appendix-a-required-salesforce-configurations",slug:"/lightning/appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel",permalink:"/amazon-connect-salesforce-cti/docs/lightning/appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/05-appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel.md",version:"current",sidebarPosition:2,frontMatter:{id:"02-configure-salesforce-omnichannel",title:"Configure Salesforce Omnichannel for Testing"},sidebar:"lightning",previous:{title:"Configuring My Domain in Salesforce",permalink:"/amazon-connect-salesforce-cti/docs/lightning/appendices/appendix-a-required-salesforce-configurations/01-configuring-my-domain"},next:{title:"Appendix B: Configuring Salesforce as Your Identity Provider",permalink:"/amazon-connect-salesforce-cti/docs/lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration"}},u=[{value:"Enable Omnichannel",id:"enable-omnichannel",children:[]},{value:"Configure Presence Statuses",id:"configure-presence-statuses",children:[]},{value:"Configure Profiles to Use the New Statuses",id:"configure-profiles-to-use-the-new-statuses",children:[]},{value:"Add Omni-Channel to the Utility Bar",id:"add-omni-channel-to-the-utility-bar",children:[]}],m={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to sync your Connect User status with your Omni-Channel agent\nstatus, you must configure Omni-Channel Presence Syncing. This will make\nyour Omni-Channel presence status match your Amazon Connect Agent Status\nand vice versa."),(0,a.kt)("h3",{id:"enable-omnichannel"},"Enable Omnichannel"),(0,a.kt)("p",null,"First, we must enable omni-channel. Once you enable Omni-Channel, you\nwill have access to the other components in Salesforce that will be\nrequired for Omni-Channel setup."),(0,a.kt)("h4",{id:"enable-omnichannel-in-your-salesforce-org"},"Enable Omnichannel in Your Salesforce Org"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,a.kt)("strong",{parentName:"p"},"Setup"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Quick Find")," field, enter omni and choose ",(0,a.kt)("strong",{parentName:"p"},"Omni-Channel\nSettings")," from the results"))),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image230.png")}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Select the checkbox for Enable Omni-Channel and choose Save")),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image231.png")}),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Omni-Channel is now enabled.")),(0,a.kt)("h3",{id:"configure-presence-statuses"},"Configure Presence Statuses"),(0,a.kt)("p",null,"Once you have enabled Omni-Channel, you will need to configure presence\nstatuses to reflect the different presence states that you wish your\nOmni-Channel agents to enter. These do not need to match agent statuses\nin Amazon Connect exactly, but it does make it easier to track what you\nare doing."),(0,a.kt)("h4",{id:"add-a-presence-status"},"Add a Presence Status"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,a.kt)("strong",{parentName:"p"},"Setup"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Quick Find")," field, enter presence and choose ",(0,a.kt)("strong",{parentName:"p"},"Presence\nStatuses")," from the results"))),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image147.png")}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Presence Statuses page, choose New")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provide a status name, for example Lunch")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the Status options appropriately, for example, Busy")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For Online statuses, you will need to provide a channel. Please\nreference the ",(0,a.kt)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5"},"Omni-Channel\ndocumentation"),"\nfor details")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose Save"))),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image148.png")}),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Repeat as necessary for all desired statuses")),(0,a.kt)("h3",{id:"configure-profiles-to-use-the-new-statuses"},"Configure Profiles to Use the New Statuses"),(0,a.kt)("p",null,"Before agents can use the statuses that have been configured, you will\nneed to make sure that they have been provided rights to them. This is\ndone by modifying the profiles assigned to your agents."),(0,a.kt)("h4",{id:"modify-profiles-to-use-new-statuses"},"Modify Profiles to Use New Statuses"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,a.kt)("strong",{parentName:"p"},"Setup"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Quick Find")," field, enter profiles and choose ",(0,a.kt)("strong",{parentName:"p"},"Profiles"),"\nfrom the results"))),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image149.png")}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the profile assigned to your users")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Hover over the Enabled Service Presence Status link and choose Edit"))),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image150.png")}),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Select the available status from the left, then choose the Add\nbutton to add it the Enabled Service Presence Statuses field")),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image151.png")}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select Save")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Repeat as necessary for other statuses or profiles."))),(0,a.kt)("h3",{id:"add-omni-channel-to-the-utility-bar"},"Add Omni-Channel to the Utility Bar"),(0,a.kt)("p",null,"To provide agents access to the Omni-Channel tool, you will need to add\nit to the Service Console."),(0,a.kt)("h4",{id:"add-the-omni-channel-utility-item"},"Add the Omni-Channel Utility Item"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,a.kt)("strong",{parentName:"p"},"Setup"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Quick Find")," box, type ",(0,a.kt)("strong",{parentName:"p"},"App Manager"),", then choose ",(0,a.kt)("strong",{parentName:"p"},"App\nManager")," from the result list."))),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image17.png")}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Expand the drop-down menu associated to Service Console and select\n",(0,a.kt)("strong",{parentName:"li"},"Edit"),".")),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image18.png")}),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Once the ",(0,a.kt)("strong",{parentName:"li"},"Lightning App Builder")," opens, select ",(0,a.kt)("strong",{parentName:"li"},"Utility Items"),"\nfrom the left Navigation")),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image19.png")}),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Choose Add Utility Item, then select Omni-Channel")),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image232.png")}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Adjust the order of the utility items as desired and select Save.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Return to the Service Console and refresh your browser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You should now see the Omni-Channel utility item."))),(0,a.kt)("img",{src:(0,o.Z)("/img/lightning/image233.png")}))}g.isMDXComponent=!0}}]);