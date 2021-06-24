(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[7634],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return g},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,k=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(k,r(r({ref:t},g),{},{components:n})):a.createElement(k,r({ref:t},g))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return r}});var a=n(2263),o=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,l=void 0!==r&&r,s=i.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var g=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+g:g}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7400:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return g},toc:function(){return m},default:function(){return h}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=n(4996),l=["components"],s={id:"01-installing-package-from-appexchange",title:"Installing CTI Adapter Managed Package from AppExchange"},p=void 0,g={unversionedId:"lightning/installation/01-installing-package-from-appexchange",id:"lightning/installation/01-installing-package-from-appexchange",isDocsHomePage:!1,title:"Installing CTI Adapter Managed Package from AppExchange",description:"The Amazon Connect CTI Adapter for Salesforce provides the core",source:"@site/docs/lightning/02-installation/01-installing-package-from-appexchange.md",sourceDirName:"lightning/02-installation",slug:"/lightning/installation/01-installing-package-from-appexchange",permalink:"/amazon-connect-salesforce-cti/docs/lightning/installation/01-installing-package-from-appexchange",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/02-installation/01-installing-package-from-appexchange.md",version:"current",sidebarPosition:1,frontMatter:{id:"01-installing-package-from-appexchange",title:"Installing CTI Adapter Managed Package from AppExchange"},sidebar:"lightning",previous:{title:"Key Benefits and Requirements",permalink:"/amazon-connect-salesforce-cti/docs/lightning/introduction/01-key-benefits"},next:{title:"Installing the Amazon Connect Salesforce Lambda Package",permalink:"/amazon-connect-salesforce-cti/docs/lightning/installation/02-installing-salesforce-lambdas"}},m=[{value:"Installing the Package",id:"installing-the-package",children:[]},{value:"Set Access Permissions",id:"set-access-permissions",children:[]},{value:"Configure the Lightning Experience",id:"configure-the-lightning-experience",children:[]},{value:"Initial CTI Adapter Configuration",id:"initial-cti-adapter-configuration",children:[]}],c={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Amazon Connect CTI Adapter for Salesforce provides the core\nintegration between the two platforms. It embeds the Amazon Connect\nContact Control Panel into Salesforce which provides telephony control\nas well as access to event data coming from Amazon Connect. Using this\nadapter, you can configure screen pops based on customer data, automate\ncontact center telephony functions like click-to-dial, and establish\npresence syncing rules for integration with Salesforce Omni-Channel.\nThis is the base of the integration."),(0,i.kt)("h3",{id:"installing-the-package"},"Installing the Package"),(0,i.kt)("p",null,"The first step in the deployment of the integration is to install the\nAmazon Connect CTI Adapter managed package from the AppExchange\nMarketplace."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,i.kt)("strong",{parentName:"p"},"Setup"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Quick Find"),", type ",(0,i.kt)("strong",{parentName:"p"},"AppExchange")," (the results will\npopulate without hitting enter)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"AppExchange Marketplace")," from the links provided")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the AppExchange window, enter ",(0,i.kt)("strong",{parentName:"p"},"Amazon Connect")," into the\n",(0,i.kt)("strong",{parentName:"p"},"Search AppExchange")," field and press enter")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Search Results"),", select ",(0,i.kt)("strong",{parentName:"p"},"Amazon Connect CTI Adapter")))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image3.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Amazon Connect CTI Adapter")," detail page, select ",(0,i.kt)("strong",{parentName:"li"},"Get It\nNow"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image4.png")}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"If you are presented with the Log In to AppExchange screen, select\n",(0,i.kt)("strong",{parentName:"li"},"Open Login Screen"),". You should then be presented with an Allow\nAccess Screen. Choose ",(0,i.kt)("strong",{parentName:"li"},"Allow"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image5.png")}),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Where do you want to install\xa0Amazon Connect CTI Adapter"),"\npage, choose the ",(0,i.kt)("strong",{parentName:"li"},"Install Here")," button in the Install in This Org\nsection")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image6.png")}),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Confirm installation details")," screen, fill out the ",(0,i.kt)("strong",{parentName:"li"},"Tell\nus about yourself")," form, check the box to ",(0,i.kt)("strong",{parentName:"li"},"agree with the terms\nand conditions"),", and optionally select the box to ",(0,i.kt)("strong",{parentName:"li"},"allow the\nprovider to contact you"),". Then select ",(0,i.kt)("strong",{parentName:"li"},"Confirm and Install"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image7.png")}),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Install for Admins Only"),", then choose ",(0,i.kt)("strong",{parentName:"li"},"Install"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image8.png")}),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The CTI Adapter will take some time to install. While it installs,\nyou will be presented with the ",(0,i.kt)("strong",{parentName:"p"},"This app is taking a long time to\ninstall screen."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"Done"),"."))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image9.png")}),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once you receive confirmation that the ",(0,i.kt)("strong",{parentName:"p"},"installation has\ncompleted")," via email, return to the browser")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Close the ",(0,i.kt)("strong",{parentName:"p"},"Amazon Connect CTI Adapter")," detail page (if still open)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Quick Find, enter ",(0,i.kt)("strong",{parentName:"p"},"Installed"),", then select Installed Packages\nfrom the result"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image10.png")}),(0,i.kt)("ol",{start:16},(0,i.kt)("li",{parentName:"ol"},"Once the ",(0,i.kt)("strong",{parentName:"li"},"Installed Packages")," page opens, validate that the\n",(0,i.kt)("strong",{parentName:"li"},"Amazon Connect -- Universal Package")," is installed")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image11.png")}),(0,i.kt)("h3",{id:"set-access-permissions"},"Set Access Permissions"),(0,i.kt)("p",null,"All users must be assigned the required permission set to access\nSalesforce metadata. The Amazon Connect CTI Adapter includes two\nPermission Sets, one for agents and one for managers, that grant users\nthe appropriate access for their role. More information on assigning\nuser permissions can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=perm_sets_mass_assign.htm&type=5"},"Salesforce help\ndocumentation"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,i.kt)("strong",{parentName:"p"},"Setup"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("strong",{parentName:"p"},"Quick Find"),", enter ",(0,i.kt)("strong",{parentName:"p"},"Permission")," and select ",(0,i.kt)("strong",{parentName:"p"},"Permission\nSets")," from the results")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"AC_Administrator"),", ",(0,i.kt)("strong",{parentName:"p"},"AC_Agent")," or ",(0,i.kt)("strong",{parentName:"p"},"AC_Manager")," as\nappropriate for the user(s)"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image12.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"Manage Assignments"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"Add Assignments"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the users to assign the permissions, then choose ",(0,i.kt)("strong",{parentName:"p"},"Assign"),"."))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image13.png")}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Repeat these steps as needed for all users")),(0,i.kt)("h4",{id:"ac_administrator"},"AC_Administrator"),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image14.png")}),(0,i.kt)("h4",{id:"ac_manager"},"AC_Manager"),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image15.png")}),(0,i.kt)("h4",{id:"ac_agent"},"AC_Agent"),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image16.png")}),(0,i.kt)("h3",{id:"configure-the-lightning-experience"},"Configure the Lightning Experience"),(0,i.kt)("p",null,"In this guide, we will configure the CTI Adapter for Service Console\n(Lightning Experience). You may use the same procedure described in this\nsection for other applications."),(0,i.kt)("h4",{id:"configure-service-console"},"Configure Service Console"),(0,i.kt)("p",null,"First, you need to add the CTI softphone to your Service Console."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,i.kt)("strong",{parentName:"p"},"Setup"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Quick Find")," box, type ",(0,i.kt)("strong",{parentName:"p"},"App Manager"),", then choose ",(0,i.kt)("strong",{parentName:"p"},"App\nManager")," from the result list."))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image17.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Expand the drop-down menu associated to Service Console and select\n",(0,i.kt)("strong",{parentName:"li"},"Edit"),".")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image18.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Once the ",(0,i.kt)("strong",{parentName:"li"},"Lightning App Builder")," opens, select ",(0,i.kt)("strong",{parentName:"li"},"Utility Items"),"\nfrom the left Navigation")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image19.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Add Utility Item"),", then select ",(0,i.kt)("strong",{parentName:"li"},"Open CTI Softphone"),".")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image20.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Change the Label, if desired, then choose ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("h4",{id:"allowlist-your-salesforce-org-with-amazon-connect"},"Allowlist Your Salesforce Org with Amazon Connect"),(0,i.kt)("p",null,"In order to embed the Amazon Connect Contact Control Panel (CCP) into\nyour Service Console, you need to allowlist two (2) domains for your org\nwith Amazon Connect. This allows for cross domain access to the\nunderlying resources required for the CCP to function."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,i.kt)("strong",{parentName:"p"},"Setup"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the entire URL of this page and past it to a text document."))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image21.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Quick Find")," field, type ",(0,i.kt)("strong",{parentName:"li"},"visual"),", then select ",(0,i.kt)("strong",{parentName:"li"},"Visual\nForce Pages")," from the results")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image22.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Choose the ",(0,i.kt)("strong",{parentName:"li"},"AC_LightningAdapter")," Visualforce page")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image23.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"On the Visualforce detail page, select the ",(0,i.kt)("strong",{parentName:"li"},"Preview")," button. This\nwill open a new browser tab showing the page content, which should\nonly be a button labelled Sign in to CCP. Copy the entire URL of\nthis page and past it to a text document.")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image24.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In a new browser tab, login to the ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/"},(0,i.kt)("strong",{parentName:"a"},"AWS\nconsole")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/connect/home"},"Amazon Connect\nConsole"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Validate that you are in the correct ",(0,i.kt)("strong",{parentName:"p"},"AWS region")," for your\ninstance, then select your instance alias from the list of\ninstances"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image25.png")}),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"Application Integration")," from the left navigation")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select + Add origin")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Enter origin URL field, enter the URL of the page that you\ncopied in step 2. Only enter the url through the .com, for example:"),(0,i.kt)("pre",null,"https://XXXXXXXX-dev-ed-.lightning.force.com")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select Add. You should see your org domain listed in the Approved\norigins section."))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image26.png")}),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select + Add origin")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Enter origin URL field, enter the URL of the visualforce page\nthat you copied in step 5. Only enter the url through the .com, for\nexample:"),(0,i.kt)("pre",null,"https://XXXXXXXX-dev-ed--amazonconnect.visualforce.com")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select Add. You should see your org domain listed in the Approved\norigins section"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image27.png")}),(0,i.kt)("h4",{id:"modify-the-call-center"},"Modify the Call Center"),(0,i.kt)("p",null,"Now that you have allowlisted the org in the Amazon Connect Console, you\nwill need to modify the Call Center that was configured in Salesforce\nwhen the AppExchange package was installed. Once you complete the\nconfiguration, you add users to the Call Center to provide access to it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,i.kt)("strong",{parentName:"p"},"Setup"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Quick Find")," field, enter ",(0,i.kt)("strong",{parentName:"p"},"Call Center"),", then select\n",(0,i.kt)("strong",{parentName:"p"},"Call Centers")," from the result list"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image28.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you see the ",(0,i.kt)("strong",{parentName:"p"},"Say Hello to Salesforce Call Center")," page, select\n",(0,i.kt)("strong",{parentName:"p"},"Continue"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"AC Lightning Adapter")))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image29.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"AC Lightning Adapter")," detail page, select ",(0,i.kt)("strong",{parentName:"p"},"Edit"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace the ",(0,i.kt)("strong",{parentName:"p"},"CTI Adapter URL")," with the AC Lightning Adapter visualforce page url you copied in the previous section.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next, change the values for ",(0,i.kt)("strong",{parentName:"p"},"Softphone Height")," ",(0,i.kt)("strong",{parentName:"p"},"to 570")," and the\n",(0,i.kt)("strong",{parentName:"p"},"Softphone Width to 330"),", and choose ",(0,i.kt)("strong",{parentName:"p"},"Save."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once you return to the AC Lightning Adapter detail page, choose\n",(0,i.kt)("strong",{parentName:"p"},"Manage Call Center Users")," in the Call Center Users section")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"AC Lightning Adapter: Manage Users")," page, select ",(0,i.kt)("strong",{parentName:"p"},"Add\nMore Users"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set filters (if desired) and then choose ",(0,i.kt)("strong",{parentName:"p"},"Find"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the checkbox next to the user to add, then choose ",(0,i.kt)("strong",{parentName:"p"},"Add to\nCall Center"),"."))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image30.png")}),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},"Repeat the steps to add more users.")),(0,i.kt)("h4",{id:"configure-the-toolkit-settings"},"Configure the Toolkit settings"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("strong",{parentName:"li"},"Setup")," then in type ",(0,i.kt)("strong",{parentName:"li"},"Custom Settings")," in Quick\nFind")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image31.png")}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Next to the Toolkit for Amazon Connect custom setting, choose\n",(0,i.kt)("strong",{parentName:"li"},"Manage"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image32.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"New"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image33.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"On the following page, provide the URL to your Amazon Connect\ninstance. This value can be found in your Amazon Connect console.")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/amazonconnectconsoleaccessurl.png")}),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image34.png")}),(0,i.kt)("p",null,"You will also see the option to enable and disable certain\ntriggers in the package, which you can configure to meet your needs. You\ncan change these whenever you would like to. For more details, see the troubleshooting section. "),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Save"))),(0,i.kt)("h4",{id:"create-the-softphone-layout"},"Create the Softphone Layout"),(0,i.kt)("p",null,"Next, we need to create a softphone layout for the solution. The\nsoftphone layout settings will tell the console what resources are\navailable for screenpop by default and what to do under different match\nconditions."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,i.kt)("strong",{parentName:"p"},"Setup"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Quick Find")," box, type ",(0,i.kt)("strong",{parentName:"p"},"Softphone"),", then choose\n",(0,i.kt)("strong",{parentName:"p"},"Softphone Layouts")," from the results")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are presented with the Get Started message, choose\n",(0,i.kt)("strong",{parentName:"p"},"Continue"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the Softphone Layouts page, choose ",(0,i.kt)("strong",{parentName:"p"},"New")))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image35.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Enter a name for the layout, such as ",(0,i.kt)("strong",{parentName:"li"},"AmazonConnectDefault"),", then\nselect the ",(0,i.kt)("strong",{parentName:"li"},"Is Default Layout")," checkbox.")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image36.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Expand ",(0,i.kt)("strong",{parentName:"li"},"Display these salesforce.com objects")," and select objects\nthat CTI Connector should be able to search, for a screen-pop query.\nIn this example, Case has been added to the default selection,\nallowing search and screen-pop by CaseID.")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image37.png")}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"If desired, configure the search behavior to your requirements")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image38.png")}),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Additionally, validate the Screen Pop settings. Please note that the\ndefault behavior is to not pop a screen if there is more than one\nresult")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image39.png")}),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Once you have configured the search behavior, choose ",(0,i.kt)("strong",{parentName:"li"},"Save"))),(0,i.kt)("h3",{id:"initial-cti-adapter-configuration"},"Initial CTI Adapter Configuration"),(0,i.kt)("p",null,"Once we have setup the Call Center, we need to do a final configuration\nof the CTI Adapter before we can test the basic configuration. This will\ntie the Lightning CTI adapter settings to the Call Center."),(0,i.kt)("h4",{id:"add-the-cti-adapter-console-app"},"Add the CTI Adapter Console App"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to the ",(0,i.kt)("strong",{parentName:"p"},"Service Console"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Expand the ",(0,i.kt)("strong",{parentName:"p"},"navigation menu")," by selecting the down arrow and\nchoose ",(0,i.kt)("strong",{parentName:"p"},"Edit"),"."))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image40.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"On the Edit Service Console App Navigation Items page, select ",(0,i.kt)("strong",{parentName:"li"},"Add\nMore Items"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image41.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"+")," next to ",(0,i.kt)("strong",{parentName:"li"},"AC CTI Adapters")," and select the ",(0,i.kt)("strong",{parentName:"li"},"Add 1\nNav Item")," button")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image42.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If desired, move the ",(0,i.kt)("strong",{parentName:"p"},"AC CTI Adapters")," button up in the navigation\nItems menu by dragging it up or down the list, then choose ",(0,i.kt)("strong",{parentName:"p"},"Save"),"\nto save changes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"AC CTI Adapters")," from navigation menu")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If Recently Viewed is selected, select the drop-down and select\n",(0,i.kt)("strong",{parentName:"p"},"All")," from the List Views menu."))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image43.png")}),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If no ACLightningAdapter entry exists, then select the new button to\nconfigure your AC CTI adapters, otherwise select the\n",(0,i.kt)("strong",{parentName:"p"},"ACLightningAdapter"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out or confirm the Details as follows:")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"CTI Adapter Name: ",(0,i.kt)("strong",{parentName:"p"},"ACLightningAdapter"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Amazon Connect Instance: The url of your Amazon Connect\nInstance. You can find this in the Amazon Connect Console as shown\nbelow (remove everything after ".com"):'))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image44.png")}),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Amazon Connect Instance Region: This is the region that your Amazon\nConnect instance is deployed in. For this field, you will enter the\nregion code. For example, if you have deployed your Amazon Connect\ninstance in US East (N. Virginia), you would enter us-east-1. For a\nlist of region codes, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"AWS Service\nEndpoints"),"\nreference")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Call Center Definition Name: ",(0,i.kt)("strong",{parentName:"p"},"ACLightningAdapter\nNote:")," This is the value of the Internal Name in the call center in\nthe Call Center definition")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Leave all other settings at the default for now, and choose Save"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image45.png")}),(0,i.kt)("ol",{start:15},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Refresh")," the browser")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the bottom left corner of the Service Console, select the CTI\nSoftphone icon"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image46.png")}),(0,i.kt)("ol",{start:17},(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Sign in to CCP")," button. A new window will pop up.\nEnter your Amazon Connect login credentials and select ",(0,i.kt)("strong",{parentName:"li"},"Sign In"),".\nMake sure to allow Microphone access (if asked by browser)\n",(0,i.kt)("strong",{parentName:"li"},"NOTE:")," At this point, this process will only work for Amazon\nConnect instances configured for local user storage. If you are\nconfiguring SAML, please follow the SAML setup process in the\n",(0,i.kt)("a",{parentName:"li",href:"/docs/lightning/03-cti-adapter/01-cti-adapter-configuration#single-sign-on-settings"},"Single Sign On Settings")," section before\ncontinuing.")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image47.png")}),(0,i.kt)("ol",{start:18},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once Login is successful, the pop-up window will automatically\nclose.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Expand the status menu and choose Available"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image48.png")}),(0,i.kt)("ol",{start:20},(0,i.kt)("li",{parentName:"ol"},"Make an inbound phone call to your Amazon Connect instance. The CCP\nwill alert you to the incoming call and allow you to accept it. Once\nyou do, the call will be connected")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image49.png")}),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image50.png")}),(0,i.kt)("ol",{start:21},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"End the call")," and clear the contact")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set your agent back to ",(0,i.kt)("strong",{parentName:"p"},"Available")))),(0,i.kt)("h4",{id:"enhanced-agent-logout"},"Enhanced Agent Logout"),(0,i.kt)("p",null,'You can configure an agent status within "Manage agent status" with\n"Logout" (case-sensitive) in the status name to enable enhanced agent\nlogout. When the agent selects that logout status in the Contact Control\nPanel, it will first set the agent in an offline status. It will then\nlogout the agent in Connect and the AWS Console. Here is an example of\nthe agent status configured within Connect:'),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image51.png")}),(0,i.kt)("p",null,'Here is an example of an agent selecting the "Logout" status within the\nContact Control Panel:'),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image52.png")}),(0,i.kt)("h4",{id:"validate-basic-screenpop"},"Validate Basic Screenpop"),(0,i.kt)("p",null,"Next, we will add a contact to Salesforce that has your phone number\nassigned to it. This will allow us to validate the basic screenpop\nfunctionality that is provided with the CTI adapter."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Contacts")," from the dropdown menu")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image53.png")}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"New")," from top-right corner")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the required fields. Make sure that your phone number is\nentered for the Phone field."))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image54.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Save"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Close the Contact tab by selecting the X next to the name of the\ncontact that you just created"))),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/image55.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Refresh")," your browser")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Place another phone ",(0,i.kt)("strong",{parentName:"p"},"call")," into your instance")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The new contact should automatically pop-up as it has been\nrecognized by incoming phone number."))))}h.isMDXComponent=!0}}]);