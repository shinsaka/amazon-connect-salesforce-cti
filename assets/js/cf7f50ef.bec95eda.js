(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[7338],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=o,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return r}});var a=n(2263),o=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,l=void 0!==r&&r,s=i.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+c:c}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},4022:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=n(4996),l=["components"],s={id:"01-cti-adapter-configuration",title:"CTI Adapter Details"},p=void 0,c={unversionedId:"lightning/cti-adapter/01-cti-adapter-configuration",id:"lightning/cti-adapter/01-cti-adapter-configuration",isDocsHomePage:!1,title:"CTI Adapter Details",description:"The CTI Adapter configuration begins with the adapter details. These",source:"@site/docs/lightning/03-cti-adapter/01-cti-adapter-configuration.md",sourceDirName:"lightning/03-cti-adapter",slug:"/lightning/cti-adapter/01-cti-adapter-configuration",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/01-cti-adapter-configuration",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/01-cti-adapter-configuration.md",version:"current",sidebarPosition:1,frontMatter:{id:"01-cti-adapter-configuration",title:"CTI Adapter Details"},sidebar:"lightning",previous:{title:"CTI Adapter Installation Troubleshooting and Common Issues",permalink:"/amazon-connect-salesforce-cti/docs/lightning/installation/04-adapter-installation-troubleshooting"},next:{title:"CTI Attributes",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/02-cti-attributes"}},u=[{value:"Single Sign On Settings",id:"single-sign-on-settings",children:[]}],g={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The CTI Adapter configuration begins with the adapter details. These\nfields provide the basic information needed to relate the Adapter to the\ncall center configuration in Salesforce and, ultimately, to the agents\nand supervisors that will be using the platform."),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image113.png")}),(0,i.kt)("h4",{id:"update-the-cti-adapter-details"},"Update the CTI Adapter Details"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CTI Adapter Name:")," provide a unique name for this CTI adapter\ndefinition")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Amazon Connect Instance:")," This was configured in a previous\nsection. This is the instance url for your Amazon Connect\ninstance.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Amazon Connect Instance Region:")," This is the code for the region\nthat you have deployed your Amazon Connect instance to. This is\nrequired for the Amazon Connect chat APIs to work correctly. If you\ndo not use the chat feature of Amazon Connect, this field is not\nnecessary")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Custom Ringtone:")," This allows for overriding the built-in\nringtone with any browser-supported audio file accessible by the\nuser.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Call Center Definition Name:")," This was configured in a previous\nsection. This is the internal name of the Call Center configured in\nSalesforce setup. This value links the CTI Adapter to the Call\nCenter, and ultimately to the agents.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Softphone Popout Enabled:")," Salesforce supports softphone pop out\nin Console and Lightning Experience modes. When the softphone is\npopped out, it opens in a new browser window external to the\nSalesforce UI. This is helpful in use cases where the call controls\nare regularly needed but the agent also needs full access to the\nentire console.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Debug Level:")," For future use")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Medialess:")," Amazon Connect supports running in VDI environments,\nhowever best practice is to send the actual audio stream via a\nseparate CCP. Selecting the medialess option will configure the\nSalesforce CCP to run in medialess mode, which provides the data\nthat Salesforce needs for screenpop while the audio is streamed to a\nlocal CCP.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Presence Sync Enabled:")," This setting allows the adapter to use\nthe presence rules to sync state from Amazon Connect to Salesforce\nOmni-Channel.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Audio Device Settings")," Turning this setting on allows the Agent\nto setup a custom audio device for their speaker, microphone and\nringer in the adapter (Speaker and Ringer settings not available on Firefox).\nYou may have to add this field to the layout manually. ",(0,i.kt)("a",{parentName:"p",href:"/docs/lightning/02-installation/04-adapter-installation-troubleshooting"},"See troubleshooting"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Phone Type Settings")," Turning this setting on allows the Agent to\nchange their Phone Type in the CCP. You may have to add this field to\nthe layout manually. ",(0,i.kt)("a",{parentName:"p",href:"/docs/lightning/02-installation/04-adapter-installation-troubleshooting"},"See troubleshooting"),"."))),(0,i.kt)("h3",{id:"single-sign-on-settings"},"Single Sign On Settings"),(0,i.kt)("p",null,"The Amazon Connect CTI Adapter supports single sign on(SSO) via SAML\nintegration. This allows customers that use a SAML provider for\nauthentication into Amazon Connect. You will need the SSO URL for your\nprovider and the Relay State settings for your Amazon Connect instance."),(0,i.kt)("p",null,"For general information on configuring SAML for Amazon Connect, please\nrefer to: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/connect/latest/adminguide/configure-saml"},"Amazon Connect Administrator Guide: Configure SAML for\nIdentity Management in Amazon\nConnect"),"."),(0,i.kt)("p",null,"If you wish to use ",(0,i.kt)("strong",{parentName:"p"},"Salesforce")," as your identity provider for Single\nSign On, please follow the setup instructions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration"},"Appendix B - Configuring Salesforce as Your Identity Provider"),"."),(0,i.kt)("p",null,"For information about configuring specific SAML providers to work with\nAmazon Connect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/contact-center/enabling-federation-with-aws-single-sign-on-and-amazon-connect/"},"AWS Single\nSign-On"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/contact-center/configure-single-sign-on-for-amazon-connect-using-okta/"},"Okta")))),(0,i.kt)("p",null,"Once you have your SAML integration working with Amazon Connect, you\nwill need to create the Amazon Connect Single Sign On URL and validate\nthat it works correctly, then configure the Lightning CTI adapter and\nlogin the agent."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note: With the new Amazon Connect instance urls (",(0,i.kt)("inlineCode",{parentName:"strong"},"*.my.connect.aws"),") you must put the full URL into the ",(0,i.kt)("inlineCode",{parentName:"strong"},"Amazon Connect Instance")," field in the AC CTI Adapter record for SSO to work. Ex: using ",(0,i.kt)("inlineCode",{parentName:"strong"},"https://myinstance.my.connect.aws")," instead of ",(0,i.kt)("inlineCode",{parentName:"strong"},"my instance"),"."))),(0,i.kt)("h4",{id:"identify-the-sso-url-components"},"Identify the SSO URL components"),(0,i.kt)("p",null,"In order to authenticate with Amazon Connect, you need your IdP login\nURL from your SAML provider and a relay state URL that will redirect the\nauthenticated user to your Amazon Connect instance."),(0,i.kt)("p",null,"Your IdP Login URL will resemble the following (Salesforce is shown):"),(0,i.kt)("pre",null,"https://m******run-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid"),(0,i.kt)("p",null,"The 'RelayState' will be in the following format:"),(0,i.kt)("pre",null,"https://console.aws.amazon.com/connect/federate/",(0,i.kt)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),(0,i.kt)("p",null,'Please note that "console.aws.amazon.com" refers to US-East-1 region (N.\nVirginia). If your Amazon Connect instance is in a different region,\nplease use the region Console URL. For example:'),(0,i.kt)("pre",null,"https://us-west-2.console.aws.amazon.com/connect/federate/",(0,i.kt)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),(0,i.kt)("h4",{id:"configure-the-cti-lightning-adapter-in-salesforce"},"Configure the CTI Lightning Adapter in Salesforce"),(0,i.kt)("p",null,"Now we are ready to complete the last step in the configuration process:\nAdding the SSO settings to the Lightning Adapter. This will configure\nthe adapter to authenticate via SSO and redirect to the Amazon Connect\nContact Control Panel once authentication completes."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to the ",(0,i.kt)("strong",{parentName:"p"},"Service Console"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Expand the ",(0,i.kt)("strong",{parentName:"p"},"navigation menu")," by selecting the down arrow and\nchoose ",(0,i.kt)("strong",{parentName:"p"},"AC CTI Adapters"),"."))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image114.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"ACLightningAdapter"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll down to the Single SignOn (SSO) section and choose the pencil\nicon of either field to edit"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image115.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the SSO Url, paste your IdP login URL up to the first question\nmark (if one exists). A couple of examples are provided:\nSalesforce:"),(0,i.kt)("pre",null,"https://m******run-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid"),(0,i.kt)("p",{parentName:"li"},"Microsoft ADFS:"),(0,i.kt)("pre",null,"https://sts.yourcorp.com/adfs/ls/idpinitiatedsignon.aspx")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Paste this portion of the URL into the ",(0,i.kt)("strong",{parentName:"p"},"SSO Url")," field"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image116.png")}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the SSO Relay State:\nIF you had a question mark in your login URL, paste everything AFTER\nthe question mar into the SSO Relay state field, then add\n&RelayState= to the end, and append your relay state URL.\nFor example:"),(0,i.kt)("pre",null,"app=0sp0N000000Caid&RelayState=https://console.aws.amazon.com/connect/federate/",(0,i.kt)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),(0,i.kt)("p",{parentName:"li"},"IF you did not have a Question Mark, then enter &RelayState= into\nthe SSO Relay State field and append your relay statue URL to it.\nFor example:"),(0,i.kt)("pre",null,"&RelayState=https://console.aws.amazon.com/connect/federate/",(0,i.kt)("b",null,"instanceId"),"?destination=%2Fconnect%2Fccp")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Example of a completed SSO section (Salesforce is shown)"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image117.png")}),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"Save"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Refresh")," your browser to make the changes take effect"),(0,i.kt)("p",{parentName:"li"},"a.  ",(0,i.kt)("strong",{parentName:"p"},"NOTE:")," If you receive a blocked popup warning, select the\nwarning and change the setting to always allow popups from your\nSalesforce org, then refresh the browser again"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image118.png")}),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},"After a few seconds, a new window should pop up for a moment. This\nwindow is performing the authentication and setting your session\ncookie. Once it does this, it will close automatically.")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image119.png")}),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the authentication window closes, select the ",(0,i.kt)("strong",{parentName:"p"},"phone icon")," in\nthe console toolbar to open the CCP\nNote: You may also receive popups to allow notifications and\nmicrophone access. Please accept both.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You should now see the authenticated and logged in CCP"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image120.png")}),(0,i.kt)("ol",{start:14},(0,i.kt)("li",{parentName:"ol"},"SSO Configuration is complete")))}d.isMDXComponent=!0}}]);