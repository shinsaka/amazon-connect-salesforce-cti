"use strict";(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[2984],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4271:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"01-key-benefits",title:"Key Benefits and Requirements"},s=void 0,c={unversionedId:"lightning/introduction/01-key-benefits",id:"lightning/introduction/01-key-benefits",isDocsHomePage:!1,title:"Key Benefits and Requirements",description:"The key benefits of the Amazon Connect CTI Adapter are:",source:"@site/docs/lightning/01-introduction/01-key-benefits.md",sourceDirName:"lightning/01-introduction",slug:"/lightning/introduction/01-key-benefits",permalink:"/amazon-connect-salesforce-cti/docs/lightning/introduction/01-key-benefits",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/01-introduction/01-key-benefits.md",version:"current",sidebarPosition:1,frontMatter:{id:"01-key-benefits",title:"Key Benefits and Requirements"},sidebar:"lightning",previous:{title:"Release Notes",permalink:"/amazon-connect-salesforce-cti/docs/lightning/release-notes"},next:{title:"Installing the CTI Adapter and Salesforce Lambdas",permalink:"/amazon-connect-salesforce-cti/docs/lightning/installation/01-installation"}},p=[{value:"Requirements",id:"requirements",children:[{value:"Prerequisites - Amazon Connect CTI Adapter",id:"prerequisites---amazon-connect-cti-adapter",children:[]},{value:"Prerequisites - AWS Serverless Application Repository for Salesforce",id:"prerequisites---aws-serverless-application-repository-for-salesforce",children:[]},{value:"Browser Compatibility",id:"browser-compatibility",children:[]},{value:"Salesforce Lightning Support",id:"salesforce-lightning-support",children:[]}]}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The key benefits of the Amazon Connect CTI Adapter are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Amazon Connect Voice and Chat:")," ability to take voice and chat\ncalls in the salesforce agent experience and advanced screen pop on\nthe incoming phone number, case, account or contact. Agents can also\nclick to dial a number within their contacts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Single Sign-On support:")," seamless login with Connect and\nSalesforce with any standard SAML 2.0 provider.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Call disposition and activity management:")," configure post call\nworkflows to support your Agent's after call work.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Call logging and recording:")," Voice and chat interactions can be\nlogged as Salesforce activities and Amazon Connect call recordings\ncan be played within the Salesforce.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Omnichannel Presence Sync:")," enable Salesforce chat, sms and email\nto share presence with Amazon Connect. Amazon Connect will know when\nan agent is handling a Salesforce chat and make them unavailable for\na voice call, and vice versa.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CTI Flows:")," easily customize and extend behaviors within the CTI\nAdapter such as screenpop and activity management. Default flows\nalong with the API guide provide key examples.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"High-velocity sales (HVS):")," using Salesforce HVS, enable your\ninside sales team to follow a repeatable pre-define sales cadence\nfor your business. It enables sales managers and reps to work on\nprioritize list of prospects and follow best sequence of sales\noutreach activities defined by your sales process."))),(0,o.kt)("p",null,"The key benefits of the AWS Serverless Application Repository for\nSalesforce are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Access Salesforce Data:")," easily inject salesforce data into the\ncustomer experience. Businesses can offer personalized greetings and\ndynamic routing based on customer information, create new objects,\nupdate existing records, and delete items based on customer choices\nin the IVR.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Contact center real-time reports:")," display real-time contact\ncenter metrics within Salesforce from Amazon Connect.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Contact center historical reports:")," display historical contact\ncenter metrics within Salesforce from Amazon Connect.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Contact analytics:")," transcribe voice calls and perform analysis\nof the conversations using AI to surface sentiment, keywords,\nsyntax, entities, etc."))),(0,o.kt)("p",null,"We recommend that you initially install and configure the package into\nyour Salesforce sandbox. This will allow you to test the integration,\nbecome more familiar with it, and modify it to your needs prior to\ndeploying it to your production org."),(0,o.kt)("p",null,"If you are using Lighting, you can get a head start by working through\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://trailhead.salesforce.com/en/content/learn/projects/build-an-amazon-connect-integration"},"Build an Amazon Connect Integration Salesforce\nTrailhead"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To successfully deploy, configure, and implement the Amazon Connect\nintegration with Salesforce, you must ensure that the following\nrequirements and prerequisites are in place before."),(0,o.kt)("h3",{id:"prerequisites---amazon-connect-cti-adapter"},"Prerequisites - Amazon Connect CTI Adapter"),(0,o.kt)("p",null,"In order to successfully install and configure the Amazon Connect CTI\nAdapter from the AppExchange you will need:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Salesforce"),(0,o.kt)("p",{parentName:"li"},"a. Salesforce org with Lightning experience"),(0,o.kt)("p",{parentName:"li"},"b. My Domain configured and deployed to users")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"An Amazon Connect instance")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SAML Details (If using SAML)"))),(0,o.kt)("h3",{id:"prerequisites---aws-serverless-application-repository-for-salesforce"},"Prerequisites - AWS Serverless Application Repository for Salesforce"),(0,o.kt)("p",null,"In order to successfully install and configure the Salesforce functions\nfrom the Serverless Application Repository, you will also need:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A Kinesis stream configured for your Amazon Connect contact trace\nrecords (CTRs)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Salesforce:"),(0,o.kt)("p",{parentName:"li"},"a. An API user account"),(0,o.kt)("p",{parentName:"li"},"b. A new Connected App"))),(0,o.kt)("h3",{id:"browser-compatibility"},"Browser Compatibility"),(0,o.kt)("p",null,"Amazon Connect requires WebRTC to enable soft-phone voice media stream\nand Websockets to enable soft-phone signaling. Consequently, users are\nrequired to use the latest version of either Google Chrome or Mozilla\nFirefox. For more information, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/connect/resources/#Documentation"},"Amazon Connect\ndocumentation"),"."),(0,o.kt)("h3",{id:"salesforce-lightning-support"},"Salesforce Lightning Support"),(0,o.kt)("p",null,"Please note that following features are currently not supported in\nSalesforce Lightning:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Outbound Campaign Calls using Salesforce Omni can be routed to the\nagent, but the automated screen pops and the dialing of the phone\nnumber will not work. The agent will have to click on the record\nlinks to open the records and use Salesforce's Click-to-Dial feature\nto make the phone call.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Lightning Standard Navigation is not currently supported in App\nOptions for the Amazon Connect CTI Adapter."))))}m.isMDXComponent=!0}}]);