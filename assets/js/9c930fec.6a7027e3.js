"use strict";(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[8404],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,h=d["".concat(p,".").concat(g)]||d[g]||m[g]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return i}});var a=n(2263),o=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,l=void 0!==i&&i,p=r.absolute,s=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},4777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return g}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(4996),l=["components"],p={id:"01-configuration",title:"Appendix B: Configuring Salesforce as Your Identity Provider"},s=void 0,c={unversionedId:"lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration",id:"lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration",isDocsHomePage:!1,title:"Appendix B: Configuring Salesforce as Your Identity Provider",description:"Prerequisites",source:"@site/docs/lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration.md",sourceDirName:"lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider",slug:"/lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration",permalink:"/amazon-connect-salesforce-cti/docs/lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration.md",version:"current",sidebarPosition:1,frontMatter:{id:"01-configuration",title:"Appendix B: Configuring Salesforce as Your Identity Provider"},sidebar:"lightning",previous:{title:"Configure Salesforce Omnichannel for Testing",permalink:"/amazon-connect-salesforce-cti/docs/lightning/appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel"},next:{title:"Appendix C: CTI Flow Sources and Events",permalink:"/amazon-connect-salesforce-cti/docs/lightning/appendices/appendix-c-cti-flow-sources-and-events/01-cti-flow-sources-and-events"}},m=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuring Salesforce as an Identity Provider",id:"configuring-salesforce-as-an-identity-provider",children:[]},{value:"Configure the Identity Provider, Policy, and Role in the AWS Console",id:"configure-the-identity-provider-policy-and-role-in-the-aws-console",children:[]},{value:"Complete the Base Salesforce Configuration",id:"complete-the-base-salesforce-configuration",children:[]},{value:"Complete the Amazon Connect Configuration",id:"complete-the-amazon-connect-configuration",children:[]},{value:"Final Configuration for the Lightning Experience",id:"final-configuration-for-the-lightning-experience",children:[]}],d={toc:m};function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To complete the SSO integration between Salesforce and Amazon Connect,\nyou need:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An Amazon Connect Instance configured for SAML authentication")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Appropriate AWS permissions to create Identity and Access Management\n(IAM) roles and policies")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Administrator permissions for your Salesforce Org")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Amazon Connect CTI Adapter AppExchange package installed and\nconfigured"))),(0,r.kt)("h3",{id:"configuring-salesforce-as-an-identity-provider"},"Configuring Salesforce as an Identity Provider"),(0,r.kt)("p",null,"First, we need to enable Salesforce to act as an identity provider\n(IdP). An IdP performs end user authentication and provides the\ncredentials to the requesting service provider. In this case, Salesforce\nserver as the IdP and Amazon Connect the service provider, while being\nembedded in Salesforce."),(0,r.kt)("h4",{id:"setup-identity-provider--download-metadata"},"Setup Identity Provider & Download Metadata"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,r.kt)("strong",{parentName:"p"},"Setup"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Quick Find")," field, type ",(0,r.kt)("strong",{parentName:"p"},"Identity Provider,")," then select\n",(0,r.kt)("strong",{parentName:"p"},"Identity Provider")," from the result list")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Identity Provider may be enabled by default. If not, choose ",(0,r.kt)("strong",{parentName:"p"},"Enable\nIdentity Provider"),", then select the appropriate certificate and\nselect Save."))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image234.png")}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("strong",{parentName:"li"},"Download Metadata")," and save the file to your computer.")),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image235.png")}),(0,r.kt)("h3",{id:"configure-the-identity-provider-policy-and-role-in-the-aws-console"},"Configure the Identity Provider, Policy, and Role in the AWS Console"),(0,r.kt)("p",null,"Next, you need to configure the identity provider (Salesforce) in the\nAWS console and provide access to Amazon Connect via IAM policies and\nroles. This allows AWS to acknowledge Salesforce as the identity\nprovider and to provide users authenticated through Salesforce with the\naccess required to login to Amazon Connect."),(0,r.kt)("h4",{id:"configure-the-identity-provider"},"Configure the Identity Provider"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/"},(0,r.kt)("strong",{parentName:"a"},"AWS console")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home"},"AWS identity and Access Management (IAM)\nConsole"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Identity providers")))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image236.png")}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Create Provider"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Configure Provider screen, select ",(0,r.kt)("strong",{parentName:"p"},"SAML")," as the Provider\nType"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image237.png")}),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the Provider Name to ",(0,r.kt)("strong",{parentName:"p"},"SalesforceConnect"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the metadata file you downloaded previously by selecting\nChoose File and navigating to the downloaded metadata file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select Next Step")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Create")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Identity provider has been created"))),(0,r.kt)("h4",{id:"create-the-iam-role-and-policy"},"Create the IAM Role and Policy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/"},(0,r.kt)("strong",{parentName:"a"},"AWS console")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home"},"AWS identity and Access Management (IAM)\nConsole"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Roles,")," then choose ",(0,r.kt)("strong",{parentName:"p"},"Create role"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"SAML 2.0 federation"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the SAML provider dropdown, select the provider you just created,\nwhich should be named ",(0,r.kt)("strong",{parentName:"p"},"SalesforceConnect"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the radio button for ",(0,r.kt)("strong",{parentName:"p"},"Allow programmatic and AWS Management\nConsole access"),". The Attribute and Value fields should\nauto-populate"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image238.png")}),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Next: Permissions"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Attach permissions policies page, select ",(0,r.kt)("strong",{parentName:"p"},"Create policy."),"\nThis will open a new browser tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the ",(0,r.kt)("strong",{parentName:"p"},"JSON")," tab to switch to the JSON editor")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the existing JSON with the following:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "Statement1",\n            "Effect": "Allow",\n            "Action": "connect:GetFederationToken",\n            "Resource": [\n                "**YOUR ARN**/user/${aws:userid}"\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("strong",{parentName:"p"},"YOUR ARN")," with the ARN of your Amazon Connect\ninstance. To find your Amazon Connect instance ARN:")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a new tab in your browser and navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/connect/home"},"Amazon Connect\nConsole"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the name (alias) of your Amazon Connect instance")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the Instance ARN and paste it to your computer's notepad (you\nwill use it in a few places)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Review policy"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the Name to ",(0,r.kt)("strong",{parentName:"p"},"SalesforceConnectPolicy"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Create Policy"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the Policy has been created, close the tab, go back to the\noriginal (Role) tab in your browser and select the ",(0,r.kt)("strong",{parentName:"p"},"Refresh"),"\nbutton (do not refresh the browser)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the search field, enter ",(0,r.kt)("strong",{parentName:"p"},"SalesforceConnectPolicy")," and select\nthe box to attach the policy."))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image239.png")}),(0,r.kt)("ol",{start:20},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Next: Tags")," and set tags if desired, then choose ",(0,r.kt)("strong",{parentName:"p"},"Next:\nReview"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Name the Role ",(0,r.kt)("strong",{parentName:"p"},"SalesforceConnectRole")," and provide a description if\nyou like")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select Create role"))),(0,r.kt)("h3",{id:"complete-the-base-salesforce-configuration"},"Complete the Base Salesforce Configuration"),(0,r.kt)("p",null,"Next, you need to configure a Connect App in Salesforce and provide\nfurther configuration to complete the SAML integration."),(0,r.kt)("h4",{id:"create-the-connected-app-in-salesforce"},"Create the Connected App in Salesforce"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,r.kt)("strong",{parentName:"p"},"Setup"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Quick Find")," field, type ",(0,r.kt)("strong",{parentName:"p"},"App Manager,")," then select ",(0,r.kt)("strong",{parentName:"p"},"App\nManager")," from the result list")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select New Connected App"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image240.png")}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide a name for the Connected App, such as ",(0,r.kt)("strong",{parentName:"p"},"AmazonConnectSAML,"),"\nthen press tab and the API Name should auto-populate")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide an email contact address"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image241.png")}),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Web App Settings section, choose ",(0,r.kt)("strong",{parentName:"p"},"Enable SAML"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Leave Start URL empty")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set Entity Id to the same name that you gave the Identity Provider\nin the IAM console, which should be ",(0,r.kt)("strong",{parentName:"p"},"SalesforceConnect"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set ACS URL as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://signin.aws.amazon.com/saml"},"https://signin.aws.amazon.com/saml")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set Subject Type as ",(0,r.kt)("strong",{parentName:"p"},"Persistent ID")))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image242.png")}),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Save"),". The screen should refresh and the new Connected App\nshould be displayed")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to the ",(0,r.kt)("strong",{parentName:"p"},"Custom Attributes")," section and select ",(0,r.kt)("strong",{parentName:"p"},"New"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set Key as\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://aws.amazon.com/SAML/Attributes/RoleSessionName"},"https://aws.amazon.com/SAML/Attributes/RoleSessionName")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set Value as ",(0,r.kt)("strong",{parentName:"p"},"$User.Email"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Save")))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image243.png")}),(0,r.kt)("ol",{start:16},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select New again to configure another custom attribute")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set Key as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://aws.amazon.com/SAML/Attributes/Role"},"https://aws.amazon.com/SAML/Attributes/Role")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Value is going to be a combination of the Indentity Provider and\nIAM Role ARNs."),(0,r.kt)("p",{parentName:"li"},"a.  In a new tab, open the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home"},"AWS identity and Access Management (IAM)\nConsole")),(0,r.kt)("p",{parentName:"li"},"b.  On the left navigation, select ",(0,r.kt)("strong",{parentName:"p"},"Identity providers")),(0,r.kt)("p",{parentName:"li"},"c.  Select the Identity provider you created earlier, which should\nbe named ",(0,r.kt)("strong",{parentName:"p"},"SalesforceConnect")),(0,r.kt)("p",{parentName:"li"},"d.  Copy the ",(0,r.kt)("strong",{parentName:"p"},"Provider ARN")," to your computer's notepad"),(0,r.kt)("p",{parentName:"li"},"e.  Return to the IAM console and select ",(0,r.kt)("strong",{parentName:"p"},"Roles")),(0,r.kt)("p",{parentName:"li"},"f.  Select the Role you created earlier, which should be\n",(0,r.kt)("strong",{parentName:"p"},"SalesforceConnectRole")),(0,r.kt)("p",{parentName:"li"},"g.  Copy the ",(0,r.kt)("strong",{parentName:"p"},"Role ARN")," to your computer's notepad"),(0,r.kt)("p",{parentName:"li"},"h.  Format the combined value as follows:\n'Identity Provider ARN' & ',' & 'Role ARN'"),(0,r.kt)("p",{parentName:"li"},"i.  Paste the formatted value into the Custom Attribute Value")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Save")))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image244.png")}),(0,r.kt)("ol",{start:20},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the top of the Connected App description, select ",(0,r.kt)("strong",{parentName:"p"},"Manage"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to the ",(0,r.kt)("strong",{parentName:"p"},"SAML login Information")," section")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("strong",{parentName:"p"},"IdP-Initiated Login URL")," to your computer's notepad")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to find the Profiles section, then select ",(0,r.kt)("strong",{parentName:"p"},"Manage\nProfiles"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a profile from the list, for example System Administrator for\ntesting purposes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Save"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a new tab in your browser and navigate to IdP-Initiated Login\nURL that you copied in an earlier step")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The browser will redirect to AWS Console and log you in\nautomatically as a federated user\n",(0,r.kt)("strong",{parentName:"p"},"Note:")," you may be able to see AWS services, but you should have\nno configuration rights."))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image245.png")}),(0,r.kt)("ol",{start:28},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Federated Login consists of the Role name and your Salesforce\nemail address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initial validation is complete"))),(0,r.kt)("h3",{id:"complete-the-amazon-connect-configuration"},"Complete the Amazon Connect Configuration"),(0,r.kt)("p",null,"The last step in the SAML setup is to add users to Amazon Connect that\nexist in your Salesforce org, then validate login. It is critical that\nthe usernames for both platforms match exactly."),(0,r.kt)("h4",{id:"add-users-to-amazon-connect"},"Add Users to Amazon Connect"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In a new browser tab, login to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/"},"AWS\nconsole"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/connect/home"},"Amazon Connect\nConsole"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the name (alias) of your Amazon Connect instance")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Login as administrator")))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image246.png")}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Within the Amazon Connect administration portal, select ",(0,r.kt)("strong",{parentName:"p"},"Users"),"\nthen choose ",(0,r.kt)("strong",{parentName:"p"},"User Management"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Leave ",(0,r.kt)("strong",{parentName:"p"},"Create and setup a new user")," selected and choose ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete the First and Last name fields as appropriate")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the login name to match the ",(0,r.kt)("strong",{parentName:"p"},"Email Address")," of your Salesforce\nuser")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("strong",{parentName:"p"},"Routing Profile"),". In this example, the default Basic\nRouting Profile is shown")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("strong",{parentName:"p"},"Security Profile"),". In this example, ",(0,r.kt)("em",{parentName:"p"},"Admin")," is shown"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image247.png")}),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Save"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Create Users"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat this process as required for your staff"))),(0,r.kt)("h3",{id:"final-configuration-for-the-lightning-experience"},"Final Configuration for the Lightning Experience"),(0,r.kt)("p",null,"Now that all of the underlying pieces are in place, the last steps are\nto create the Amazon Connect Single Sign On URL and validate that it\nworks correctly, then configure the Lightning CTI adapter and login the\nagent."),(0,r.kt)("h4",{id:"create-the-amazon-connect-sso-url"},"Create the Amazon Connect SSO URL"),(0,r.kt)("p",null,"You create the Amazon Connect SSO URL by combining the IdP-Initiated\nLogin URL that you copied earlier, and a relay state URL that will\nredirect the authenticated user to your Amazon Connect instance."),(0,r.kt)("p",null,"The 'RelayState' will be in the following format:"),(0,r.kt)("pre",null,"https://console.aws.amazon.com/connect/federate/",(0,r.kt)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),(0,r.kt)("p",null,'Please note that "console.aws.amazon.com" refers to US-East-1 region (N.\nVirginia). If your Amazon Connect instance is in a different region,\nplease use the region Console URL. For example:'),(0,r.kt)("pre",null,"https://us-west-2.console.aws.amazon.com/connect/federate/",(0,r.kt)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To begin, format the relay state URL by replacing ",(0,r.kt)("strong",{parentName:"p"},"InstanceId"),"\nwith your Instance Id. To find your Amazon Connect Instance Id:"),(0,r.kt)("p",{parentName:"li"},"a.  Open a new tab in your browser and navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/connect/home"},"Amazon\nConnect Console")),(0,r.kt)("p",{parentName:"li"},"b.  Click on the name (alias) of your Amazon Connect"),(0,r.kt)("p",{parentName:"li"},"c.  From the Instance ARN, copy the portion after the '/'. This is\nthe Instance Id"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image248.png")}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Concatenate the 'IdP-Initiated Login URL' and the 'RelayState', by\ncombining the two with \"&RelayState=\" in between, for example:")),(0,r.kt)("pre",null,"https://mXXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid&RelayState=https://console.aws.amazon.com/connect/federate/",(0,r.kt)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This is the Final SSO URL, needed for the Amazon Connect Lightning\nCTI Adapter Configuration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To validate this URL:"),(0,r.kt)("p",{parentName:"li"},"a.  Open a new tab in the same browser that you are logged into\nSalesforce"),(0,r.kt)("p",{parentName:"li"},"b.  Paste the fully concatenated URL into the new browser and press\nenter"),(0,r.kt)("p",{parentName:"li"},"c.  You should automatically login and be redirected to the Amazon\nConnect Contact Control Panel.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you validate the full URL, you are ready to add it to the\nLightning Adapter"))),(0,r.kt)("h4",{id:"configure-the-cti-lightning-adapter-in-salesforce-for-sso"},"Configure the CTI Lightning Adapter in Salesforce For SSO"),(0,r.kt)("p",null,"Now we are ready to complete the last step in the configuration process:\nAdding the SSO settings for Salesforce to the Lightning Adapter. This\nwill configure the adapter to authenticate via SSO and redirect to the\nAmazon Connect Contact Control Panel once authentication completes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to the ",(0,r.kt)("strong",{parentName:"p"},"Service Console"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Expand the ",(0,r.kt)("strong",{parentName:"p"},"navigation menu")," by selecting the down arrow and\nchoose ",(0,r.kt)("strong",{parentName:"p"},"AC CTI Adapters"),"."))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image114.png")}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"ACLightningAdapter"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to the Single SignOn (SSO) section and choose the pencil\nicon of either field to edit"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image115.png")}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the SSO Url, copy the first part of the SSO URL that you created\npreviously, up to the first question mark (do not copy the question\nmark), for example:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"https://mXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid&RelayState=https://console.aws.amazon.com/connect/federate/<b>InstanceId</b>?destination=%2Fconnect%2Fccp"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste this portion of the URL into the ",(0,r.kt)("strong",{parentName:"p"},"SSO Url")," field"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image116.png")}),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the SSO Relay State, copy everything AFTER the question mark (do\nnot copy the question mark), for example:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"https://mXXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid&RelayState=https://console.aws.amazon.com/connect/federate/<b>InstanceId</b>?destination=%2Fconnect%2Fccp"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste this portion of the URL into the ",(0,r.kt)("strong",{parentName:"p"},"SSO Relay State")," field"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image117.png")}),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("strong",{parentName:"li"},"Save"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note: With the new Amazon Connect instance urls (",(0,r.kt)("inlineCode",{parentName:"strong"},"*.my.connect.aws"),") you must put the full URL into the ",(0,r.kt)("inlineCode",{parentName:"strong"},"Amazon Connect Instance")," field in the AC CTI Adapter record for SSO to work. Ex: using ",(0,r.kt)("inlineCode",{parentName:"strong"},"https://myinstance.my.connect.aws")," instead of ",(0,r.kt)("inlineCode",{parentName:"strong"},"my instance"),"."))),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Refresh")," your browser to make the changes take effect"),(0,r.kt)("p",{parentName:"li"},"a.  ",(0,r.kt)("strong",{parentName:"p"},"NOTE:")," If you receive a blocked popup warning, select the\nwarning and change the setting to always allow popups from your\nSalesforce org, then refresh the browser again"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image118.png")}),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"After a few seconds, a new window should pop up for a moment. This\nwindow is performing the authentication and setting your session\ncookie. Once it does this, it will close automatically.")),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image119.png")}),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the authentication window closes, select the ",(0,r.kt)("strong",{parentName:"p"},"phone icon")," in\nthe console toolbar to open the CCP\nNote: You may also receive popups to allow notifications and\nmicrophone access. Please accept both.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should now see the authenticated and logged in CCP"))),(0,r.kt)("img",{src:(0,i.Z)("/img/lightning/image120.png")}),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},"Configuration is complete")))}g.isMDXComponent=!0}}]);