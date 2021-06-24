(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[6697],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),g=r,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||s;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return s},Z:function(){return i}});var a=n(2263),r=n(3919);function s(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var s=void 0===a?{}:a,i=s.forcePrependBaseUrl,o=void 0!==i&&i,c=s.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(s,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},5270:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),i=n(4996),o=["components"],c={id:"02-omnipresence-agent-state-sync",title:"Omnipresence Agent State Sync"},l=void 0,p={unversionedId:"classic/cti-adapter/02-omnipresence-agent-state-sync",id:"classic/cti-adapter/02-omnipresence-agent-state-sync",isDocsHomePage:!1,title:"Omnipresence Agent State Sync",description:"Amazon Connect CTI Connector supports the bidirectional synchronization",source:"@site/docs/classic/03-cti-adapter/02-omnipresence-agent-state-sync.md",sourceDirName:"classic/03-cti-adapter",slug:"/classic/cti-adapter/02-omnipresence-agent-state-sync",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/02-omnipresence-agent-state-sync",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/02-omnipresence-agent-state-sync.md",version:"current",sidebarPosition:2,frontMatter:{id:"02-omnipresence-agent-state-sync",title:"Omnipresence Agent State Sync"},sidebar:"classic",previous:{title:"CTI Adapter Configuration",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/01-cti-adapter-configuration"},next:{title:"Contact Attributes Display",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/03-contact-attributes-display"}},u=[{value:"Enable Omnichannel",id:"enable-omnichannel",children:[]},{value:"Create Presence Statuses",id:"create-presence-statuses",children:[]},{value:"Configure Enabled Service Presences Status Access",id:"configure-enabled-service-presences-status-access",children:[{value:"Amazon Connect System Statuses",id:"amazon-connect-system-statuses",children:[]}]},{value:"Configure Presence Status Synchronization Rules",id:"configure-presence-status-synchronization-rules",children:[{value:"Presence Status Configuration Rules",id:"presence-status-configuration-rules",children:[]}]}],m={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Amazon Connect CTI Connector supports the bidirectional synchronization\nof Amazon Connect agent states with Salesforce omnichannel presence\nstates."),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image90.png")}),(0,s.kt)("h2",{id:"enable-omnichannel"},"Enable Omnichannel"),(0,s.kt)("p",null,"In order to sync your Connect User status with your Omni-Channel agent\nstatus, you must configure Omni-Channel Presence Syncing. This will make\nyour Omni-Channel presence status match your Amazon Connect Agent Status\nand vice versa."),(0,s.kt)("p",null,'First, we must enable omni-channel. To do this, navigate to "Setup" and\ntype "omni" into the Quick Find box, then select "Omni-Channel Settings"\nfrom the menu.'),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image91.png")}),(0,s.kt)("p",null,'Place a check in the checkbox for "Enable Omni-Channel".'),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image92.png")}),(0,s.kt)("h2",{id:"create-presence-statuses"},"Create Presence Statuses"),(0,s.kt)("p",null,"In this step, we need to add and map Presence Statuses to what is\ndefined in Amazon Connect under Users -",">"," Agent Status."),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image93.png")}),(0,s.kt)("p",null,'Open the Setup in your Salesforce Org and type "presence", then select\n"Presence Statuses" from the menu. Click the "New" button and add\nstatuses to match what is defined in Amazon Connect.'),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image94.png")}),(0,s.kt)("p",null,"Each status is flagged as either Online or Busy. For each status that is\nmarked as Online, you will need to specify a service channel to\nassociate the presence status."),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image95.png")}),(0,s.kt)("h2",{id:"configure-enabled-service-presences-status-access"},"Configure Enabled Service Presences Status Access"),(0,s.kt)("p",null,"Next, we need to assign access to these statuses by going to Profiles in\nSalesforce Setup, and ensure that the agent will be able to access the\nstatuses that map to their Amazon Connect statuses."),(0,s.kt)("p",null,'In the Salesforce Setup, under Manage Users, select Profiles, then\nselect the user profile to edit. Scroll down the page until you find the\nsection labeled "Enabled Service Presence Status Access".'),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image96.png")}),(0,s.kt)("p",null,'Click the "Edit" button and on the next page, "Add" presence statuses\nyou want to have enabled for the user.'),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image97.png")}),(0,s.kt)("h3",{id:"amazon-connect-system-statuses"},"Amazon Connect System Statuses"),(0,s.kt)("p",null,"The following Amazon Connect CCP statuses are system statuses that can be used in presence sync.\nPlease note however that these statuses are restricted and you cannot set the Amazon Connect status\nto the below."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Busy - agent is in a call"),(0,s.kt)("li",{parentName:"ul"},"Pending - agent is receiving a request for a queue callback"),(0,s.kt)("li",{parentName:"ul"},"PendingBusy - agent is receiving call"),(0,s.kt)("li",{parentName:"ul"},"CallingCustomer - agent is calling customer"),(0,s.kt)("li",{parentName:"ul"},"AfterCallWork - agent is in the after call work screen")),(0,s.kt)("h2",{id:"configure-presence-status-synchronization-rules"},"Configure Presence Status Synchronization Rules"),(0,s.kt)("p",null,"The Amazon Connect Salesforce CTI Adapter provides a rules-based\npresence status synchronization system allowing for flexibility in\nmapping agent states between Amazon Connect and Salesforce Omnichannel."),(0,s.kt)("p",null,"Presence synchronization actions may be configured based upon manual\nagent state changes (agent goes on break), system agent state changes\n(answering a call), omnichannel agent work (agent accepts an email), and\nomnichannel workload changes (agent completes an email) as examples."),(0,s.kt)("h3",{id:"presence-status-configuration-rules"},"Presence Status Configuration Rules"),(0,s.kt)("p",null,"Presence Sync Rules are evaluated based on specific events. The\navailable events are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Connect Agent State Change:")," The Connect agent's state has\nchanged.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce Agent State Change:")," The Salesforce agent's state has\nchanged.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce Agent Logout:")," The Salesforce agent has logged out.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce Work Accepted:")," The Salesforce agent has accepted\nwork.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce Workload Changed:")," The Salesforce agent's workload has\nchanged."))),(0,s.kt)("p",null,"Once the event is triggered, the CTI adapter will evaluate the provided\ncriteria. The criteria is established by comparing Operand A, using\nstandard comparator options, against Operand B. Possible options for\nOperand A and B are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Connect Agent New State:")," The Connect agent's new state value")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Connect Agent Old State:")," The Connect agent's old (previous)\nstate value")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce Agent New State:")," The Salesforce agent's new state\nvalue")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce Service Channel:")," The service channel upon which the\nSalesforce agent has accepted work")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce Previous Workload:")," The Salesforce agent's previous\nworkload")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce Previous Workload Pct:")," The Salesforce agent's\npervious workload expressed as a percent of configured capacity")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce New Workload:")," The Salesforce agent's new workload")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce New Workload Pct:")," The Salesforce agent's new workload\nexpressed as a percent of configured capacity")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Salesforce Configured Capacity:")," The Salesforce agent's\nconfigured capacity")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Static Value:"),' The user may provide a value. For example, a\ncustom agent state name or other alphanumeric value. When Static\nValue is selected a "Value" field becomes visible to accept the\nusers static value input.'))),(0,s.kt)("p",null,"Available comparators are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Equal to:")," Are Operand A and Operand B equal")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Not equal to:")," Are Operand A and Operand B not equal")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Greater than:")," Is Operand A greater than Operand B")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Greater than or equal to:")," Is Operand A greater than or equal to\nOperand B")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Less than:")," Is Operand A less than Operand B")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Less than or equal to:")," Is Operand A less than or equal to\nOperand B"))),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image98.png")}),(0,s.kt)("p",null,"The configuration setting illustrated in the previous example, are\ndescribed below:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"source -- The triggered event. In this case, an Amazon Connect agent\nstate change is the triggering event")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"destination -- The target system on which to execute the action")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"criteria -- The values and comparator that will be evaluated to\ndetermine whether or not to trigger the action"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"operandA -- The left side of the criteria statement")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"operandB -- The right side of the criteria statement")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"comparator -- The comparison operator used to evaluate the\ncriteria statement")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"state -- The target agent state of the destination system"))),(0,s.kt)("p",null,"Example rule:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image99.png")}),(0,s.kt)("p",null,"Summary: This rule is triggered when the Connect agent's state is\nchanged (Source). If their state is changed to the static value (Operand\nB) \"Lunch\" (Operand B Value), then the Salesforce Agent's state\n(Destination) is set to Lunch (Value)."))}g.isMDXComponent=!0}}]);