(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[2558],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,d=m["".concat(l,".").concat(u)]||m[u]||g[u]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return o},Z:function(){return i}});var n=a(2263),r=a(3919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(c)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+p:p}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},3334:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return g},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=a(4996),c=["components"],l={id:"04-call-recording-playback",title:"Call Recording Playback"},s=void 0,p={unversionedId:"classic/cti-adapter/04-call-recording-playback",id:"classic/cti-adapter/04-call-recording-playback",isDocsHomePage:!1,title:"Call Recording Playback",description:"The Adapter comes with a Visualforce component that provides users with",source:"@site/docs/classic/03-cti-adapter/04-call-recording-playback.md",sourceDirName:"classic/03-cti-adapter",slug:"/classic/cti-adapter/04-call-recording-playback",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/04-call-recording-playback",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/04-call-recording-playback.md",version:"current",sidebarPosition:4,frontMatter:{id:"04-call-recording-playback",title:"Call Recording Playback"},sidebar:"classic",previous:{title:"Contact Attributes Display",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/03-contact-attributes-display"},next:{title:"Call Display on the Account Page",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/05-call-display-account-page"}},g=[{value:"Cloudformation Template",id:"cloudformation-template",children:[]},{value:"Enabling call recording streaming",id:"enabling-call-recording-streaming",children:[]},{value:"Adding users to the AC_CallRecording permission set",id:"adding-users-to-the-ac_callrecording-permission-set",children:[]},{value:"Enable call recording streaming on the Contact Channel Analytics page",id:"enable-call-recording-streaming-on-the-contact-channel-analytics-page",children:[]},{value:"Enable call recording streaming on the Task page",id:"enable-call-recording-streaming-on-the-task-page",children:[]}],m={toc:g};function u(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Adapter comes with a Visualforce component that provides users with\nthe ability to download a call recording created within Amazon Connect\nfrom a Salesforce page. You can play the call recordings on either the\nContact Channel Analytics page or the Task page."),(0,o.kt)("h3",{id:"cloudformation-template"},"Cloudformation Template"),(0,o.kt)("p",null,"To make sure that the AWS resources are set up, make sure that the\n",(0,o.kt)("em",{parentName:"p"},"PostcallRecordingImportEnabled")," parameter is set to true in your\nCloudformation stack:"),(0,o.kt)("img",{src:(0,i.Z)("/img/lightning/image266.png")}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you are expecting more than 1000 concurrent calls, you may have to increase the timeout for the ",(0,o.kt)("inlineCode",{parentName:"p"},"sfCTRTrigger")," lambda.")),(0,o.kt)("h3",{id:"enabling-call-recording-streaming"},"Enabling call recording streaming"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to your Amazon Connect instance as an Administrator")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the left navigation, choose ",(0,o.kt)("strong",{parentName:"p"},"Routing")," then select ",(0,o.kt)("strong",{parentName:"p"},"Contact\nflows")))),(0,o.kt)("img",{src:(0,i.Z)("/img/lightning/image201.png")}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the contact flow that you want to use to enable call recording\nimport. This contact flow must have Amazon Connect's native\nrecording turned on.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In you contact flow, before you transfer to queue, add a new ",(0,o.kt)("strong",{parentName:"p"},"Set\ncontact attributes")," block")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the block to set a contact attribute as follows:"),(0,o.kt)("p",{parentName:"li"},"a. ",(0,o.kt)("strong",{parentName:"p"},"Destination key:")," postcallRecordingImportEnabled"),(0,o.kt)("p",{parentName:"li"},"b. ",(0,o.kt)("strong",{parentName:"p"},"Value:")," true"))),(0,o.kt)("img",{src:(0,i.Z)("/img/lightning/image202.png")}),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Save")," the Set contact attributes block. Make sure it is\nappropriately connected to your contact flow, and ",(0,o.kt)("strong",{parentName:"p"},"Publish")," the\nflow.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait approximately 2 minutes to give the contact flow time to\npublish.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Place a call, connect to your agent, speak for a few moments to test\nthe audio, then end the call. Make sure the agent exits after call\nwork")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After a minute or so, the recording should import."))),(0,o.kt)("h3",{id:"adding-users-to-the-ac_callrecording-permission-set"},"Adding users to the AC_CallRecording permission set"),(0,o.kt)("p",null,"This step is only necessary for non admin user accounts."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'In the setup search box, search for "Permission sets". Select the "AC_CallRecording" permission set. Select "Manage Assignments".')),(0,o.kt)("img",{src:(0,i.Z)("/img/lightning/image278.png")}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'Select "Add Assignments". Add the users that should have access to the audio recordings and select "assign".')),(0,o.kt)("img",{src:(0,i.Z)("/img/lightning/image279.png")}),(0,o.kt)("h3",{id:"enable-call-recording-streaming-on-the-contact-channel-analytics-page"},"Enable call recording streaming on the Contact Channel Analytics page"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the Sales Console, and select the ",(0,o.kt)("strong",{parentName:"li"},"+")," button on the top bar.")),(0,o.kt)("img",{src:(0,i.Z)("/img/classic/ccacallrecording0.png")}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"AC Contact Channel Analytics"),".")),(0,o.kt)("img",{src:(0,i.Z)("/img/classic/ccacallrecording1.png")}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select into a record and then select ",(0,o.kt)("strong",{parentName:"li"},"Edit Layout"),".")),(0,o.kt)("img",{src:(0,i.Z)("/img/classic/ccacallrecording2.png")}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Visualforce Pages")," and then drag ",(0,o.kt)("strong",{parentName:"li"},"AC_RecordingViewer")," into your desired location.")),(0,o.kt)("img",{src:(0,i.Z)("/img/classic/ccacallrecording3.png")}),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Save"),", and observe that the audio recording component in the Contact Channel Analytics page.")),(0,o.kt)("img",{src:(0,i.Z)("/img/classic/ccacallrecording4.png")}),(0,o.kt)("h3",{id:"enable-call-recording-streaming-on-the-task-page"},"Enable call recording streaming on the Task page"),(0,o.kt)("p",null,"The below steps will add an audio recording component to tasks created from ",(0,o.kt)("a",{parentName:"p",href:"/docs/classic/appendices/appendix-c-cti-flow-examples/01-cti-flow-examples#create-a-task-call-activity-and-pop-that-task"},"this CTI flow")," (or any tasks with the CallObject field set to the contactId of the call)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click into a task in your Salesforce org")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "Edit Layout"'))),(0,o.kt)("img",{src:(0,i.Z)("/img/classic/taskcallrecording1.png")}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'Drag the "ACSFCCP_CallRecordingTask" item to the desired are of the layout to have that information appear on the agent\'s screen.')),(0,o.kt)("img",{src:(0,i.Z)("/img/classic/taskcallrecording2.png")}),(0,o.kt)("img",{src:(0,i.Z)("/img/classic/taskcallrecording3.png")}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"To have access to the recording, the user must have an active session with Amazon Connect. This can be achieved by either logging in to the CCP softphone, or by logging in to Amazon Connect outside of Salesforce. After the session is established, a page refresh should make the player appear.")))}u.isMDXComponent=!0}}]);