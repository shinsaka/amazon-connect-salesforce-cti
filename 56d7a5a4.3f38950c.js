(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{133:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return t?r.a.createElement(d,c(c({ref:n},l),{},{components:t})):r.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(133)),i={id:"01-key-benefits-and-requirements",title:"Key Benefits and Requirements"},c={unversionedId:"classic/01-introduction/01-key-benefits-and-requirements",id:"classic/01-introduction/01-key-benefits-and-requirements",isDocsHomePage:!1,title:"Key Benefits and Requirements",description:"Key Benefits",source:"@site/docs/classic/01-introduction/01-key-benefits-and-requirements.md",slug:"/classic/01-introduction/01-key-benefits-and-requirements",permalink:"/docs/classic/01-introduction/01-key-benefits-and-requirements",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/01-introduction/01-key-benefits-and-requirements.md",version:"current",sidebar:"classic",previous:{title:"Release Notes",permalink:"/docs/classic/release-notes"},next:{title:"Installing the Amazon Connect CTI Adapter for Salesforce Package",permalink:"/docs/classic/02-installation/01-installing-the-amazon-connect-cti-adapter"}},s=[{value:"Key Benefits",id:"key-benefits",children:[]},{value:"Requirements",id:"requirements",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Browser Compatibility",id:"browser-compatibility",children:[]},{value:"Salesforce Lightning Support",id:"salesforce-lightning-support",children:[]}]}],l={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"key-benefits"},"Key Benefits"),Object(o.b)("p",null,"The key benefits of the adapter include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Amazon Connect Voice and Chat:")," ability to take voice and chat\ncalls in the salesforce agent experience and advanced screen pop on\nthe incoming phone number, case, account or contact. Agents can also\nclick to dial a number within their contacts.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Single Sign-On support:")," seamless login with Connect and\nSalesforce with any standard SAML 2.0 provider.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"IVR data dips:")," easily inject salesforce data into the customer\nexperience. Businesses can offer personalized greetings and dynamic\nrouting based on customer information.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Call disposition and activity management:")," configure post call\nworkflows to support your Agent's after call work.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Omnichannel Presence Sync:")," enable Salesforce chat, sms and email\nto share presence with Amazon Connect. Amazon Connect will know when\nan agent is handling a Salesforce chat and make them unavailable for\na voice call, and vice versa.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Call logging and recording:")," Voice and chat interactions can be\nlogged as Salesforce activities and Amazon Connect call recordings\ncan be played within the Salesforce.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Contact center real-time reports:")," display real-time contact\ncenter metrics within Salesforce from Amazon Connect.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Contact center historical reports:")," display historical contact\ncenter metrics within Salesforce from Amazon Connect.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Lightning CCP extensions:")," easily customize and extend behaviors\nwithin the CTI Adapter such as screenpop and activity management.\nDefault scripts along with the API guide provide key examples.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"High-velocity sales (HVS):")," using Salesforce HVS, enable your\ninside sales team to follow a repeatable pre-define sales cadence\nfor your business. It enables sales managers and reps to work on\nprioritize list of prospects and follow best sequence of sales\noutreach activities defined by your sales process."))),Object(o.b)("p",null,"We recommend that you initially install the package into your Salesforce\nsandbox. After the package is installed, you can configure your\nSalesforce Call Center configuration within Salesforce."),Object(o.b)("p",null,"The next step is to allowlist your Salesforce Visualforce domain within\nyour Amazon Connect Application integration. This allows cross-domain\naccess to your Amazon Connect instance."),Object(o.b)("p",null,"If you want to quickly get setup with basic CTI capabilities in\nLightning, we suggest you walk through our Salesforce trailhead\navailable at ",Object(o.b)("a",{parentName:"p",href:"https://sfdc.co/Amazon-Connect"},"https://sfdc.co/Amazon-Connect"),"."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("p",null,"To successfully create, configure, and implement the Amazon Connect CTI\nAdapter for Salesforce, you must ensure that the requirements and\nprerequisites described in this section are in place before you start."),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"To install the Amazon Connect CTI package, you must:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Have a running instance of Salesforce Classic, Salesforce Console,\nor Lightning Experience")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create an Amazon Connect instance\n(",Object(o.b)("a",{parentName:"p",href:"https://aws.amazon.com/connect/"},"https://aws.amazon.com/connect/"),")"))),Object(o.b)("h3",{id:"browser-compatibility"},"Browser Compatibility"),Object(o.b)("p",null,"Amazon Connect requires WebRTC to enable soft-phone voice media stream\nand Websockets to enable soft-phone signaling. Consequently, users are\nrequired to use the latest version of either Google Chrome or Mozilla\nFirefox. For more information, please see the Amazon Connect\ndocumentation\n(",Object(o.b)("a",{parentName:"p",href:"https://aws.amazon.com/connect/resources/#Documentation"},"https://aws.amazon.com/connect/resources/#Documentation"),")"),Object(o.b)("h3",{id:"salesforce-lightning-support"},"Salesforce Lightning Support"),Object(o.b)("p",null,"Please note that following features are currently not supported in\nSalesforce Lightning:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Outbound Campaign Calls using Salesforce Omni can be routed to the\nagent, but the automated screen pops and the dialing of the phone\nnumber will not work. The agent will have to click on the record\nlinks to open the records and use Salesforce's Click-to-Dial feature\nto make the phone call.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Lightning Standard Navigation is not currently supported in App\nOptions for the Amazon Connect CTI Adapter. Console navigation is\nfully supported."))))}p.isMDXComponent=!0}}]);