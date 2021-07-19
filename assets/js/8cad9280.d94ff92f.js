(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[3747],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),f=r,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||s;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return s},Z:function(){return i}});var n=a(2263),r=a(3919);function s(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var s=void 0===n?{}:n,i=s.forcePrependBaseUrl,o=void 0!==i&&i,l=s.absolute,c=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(o)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+p:p}(s,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},3028:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=a(2122),r=a(9756),s=(a(7294),a(3905)),i=a(4996),o=["components"],l={id:"01-contact-flow-salesforce-lambdas",title:"Invoking the Amazon Connect Salesforce Lambda in a Contact Flow"},c=void 0,p={unversionedId:"classic/salesforce-lambdas/01-contact-flow-salesforce-lambdas",id:"classic/salesforce-lambdas/01-contact-flow-salesforce-lambdas",isDocsHomePage:!1,title:"Invoking the Amazon Connect Salesforce Lambda in a Contact Flow",description:"The Amazon Connect Contact Flow defines the routing behaviour within",source:"@site/docs/classic/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas.md",sourceDirName:"classic/04-salesforce-lambdas",slug:"/classic/salesforce-lambdas/01-contact-flow-salesforce-lambdas",permalink:"/amazon-connect-salesforce-cti/docs/classic/salesforce-lambdas/01-contact-flow-salesforce-lambdas",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas.md",version:"current",sidebarPosition:1,frontMatter:{id:"01-contact-flow-salesforce-lambdas",title:"Invoking the Amazon Connect Salesforce Lambda in a Contact Flow"},sidebar:"classic",previous:{title:"Chat Widget Integration",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/12-chat-widget-integration"},next:{title:"Appendix A: CTI Flow Sources and Events",permalink:"/amazon-connect-salesforce-cti/docs/classic/appendices/appendix-a-cti-flow-sources-and-events/01-cti-flow-sources-and-events"}},m=[{value:"Salesforce Lookup",id:"salesforce-lookup",children:[]},{value:"Salesforce Create",id:"salesforce-create",children:[]},{value:"Salesforce Update",id:"salesforce-update",children:[]},{value:"Salesforce Phone Lookup",id:"salesforce-phone-lookup",children:[]},{value:"Salesforce query",id:"salesforce-query",children:[]},{value:"Salesforce queryOne",id:"salesforce-queryone",children:[]},{value:"Salesforce createChatterPost",id:"salesforce-createchatterpost",children:[]},{value:"Salesforce createChatterComment",id:"salesforce-createchattercomment",children:[]},{value:"Salesforce search",id:"salesforce-search",children:[]},{value:"Salesforce searchOne",id:"salesforce-searchone",children:[]}],u={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Amazon Connect Contact Flow defines the routing behaviour within\nAmazon Connect, allowing contact center administrators to customize call\nflow behaviour such as playing prompts, invoking Lambda functions for\ndata lookup, and sending the call to different queues based on various\nconditions. As a result, Contact Flows are expected to be highly\ncustomized for each organization. While the Adapter package does not\nprovide any Contact Flows, there are some best practices that are worth\nhighlighting when utilizing the Adapter."),(0,s.kt)("p",null,"The key element that enables Contact Flow integration is the AWS Lambda\nfunction. A Lambda function is a serverless piece of code that is\ninvoked by the Contact Flow. Typically, Lambda functions are used to\nupdate or retrieve information from databases or APIs, as well as\nintegrating with other systems. Lambda function can return any data\nprocessed to the Contact Flow where it can be used for decision making."),(0,s.kt)("p",null,"Since Salesforce is highly customizable, the same Salesforce object in a\ndifferent environment may have different fields associated with it. As a\nresult, we can expect objects to have different requirements for how\nthey are retrieved, updated and created. The CTI Adapter was built to be\nable to query Salesforce objects regardless of how they have been\ncustomized. The user of the Adapter must therefore ensure they are\npassing the appropriate parameters to the Lambda functions provided as\npart of the Adapter."),(0,s.kt)("p",null,'The Lambda function supports different operations, based on the\nmandatory input parameter "sf_operation".'),(0,s.kt)("h2",{id:"salesforce-lookup"},"Salesforce Lookup"),(0,s.kt)("p",null,'This operation is invoked by setting "sf_operation" to "lookup". In this\ncase, the Lambda function queries Salesforce for objects based on the\nparameters passed to it.'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'"',(0,s.kt)("strong",{parentName:"p"},"sf_object"),'" parameter contains Salesforce Object, like Case, Contact etc.')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'"',(0,s.kt)("strong",{parentName:"p"},"sf_fields"),'" parameter contains a set of fields to be returned in a result. For example, if we are querying Case, we might specify "Id, IsClosed, Subject", or if we are querying Contact, we might specify "Id, Name, Email"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'Specify a conditional parameter, for example "CaseNumber" or "homephone". Multiple values may be sent and they will be applied with "AND" operator.'))),(0,s.kt)("p",null,"In the Amazon Connect Contact Flow Designer, add ",(0,s.kt)("em",{parentName:"p"},"Integrate ",">"," Invoke\nAWS Lambda function")," block. Set 'sfInvokeAPI' Lambda ARN and make sure\nyou have granted Amazon Connect to invoke the Lambda Function."),(0,s.kt)("p",null,"Example for phone number lookup:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image154.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image155.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image156.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image157.png")}),(0,s.kt)("p",null,"A result example:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image158.png")}),(0,s.kt)("p",null,"Example for Case lookup:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image159.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image160.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image161.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image162.png")}),(0,s.kt)("p",null,"A result example:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image163.png")}),(0,s.kt)("h2",{id:"salesforce-create"},"Salesforce Create"),(0,s.kt)("p",null,'This operation is invoked by setting "sf_operation" to "create". In this\ncase, the Lambda function creates a Salesforce object based on the\nparameters passed to it.'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'"',(0,s.kt)("strong",{parentName:"p"},"sf_object"),'" parameter contains Salesforce to be created, like Case.')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Specify additional parameters for the Salesforce object to be created. Please be sure to include all parameters required to create the Salesforce object."))),(0,s.kt)("p",null,"In the Amazon Connect Contact Flow Designer, add ",(0,s.kt)("em",{parentName:"p"},"Integrate ",">"," Invoke\nAWS Lambda function")," block. Set 'sfInvokeAPI' Lambda ARN and make sure\nyou have granted Amazon Connect to invoke the Lambda Function."),(0,s.kt)("p",null,"An example for Case creation:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image164.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image165.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image166.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image167.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image168.png")}),(0,s.kt)("p",null,"Contact Id is usually received as a result of a previous phone lookup,\nbut it can be also stored as an Attribute (i.e. sf_contact_id)"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image169.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image170.png")}),(0,s.kt)("p",null,"A result example (providing the newly created Case Id):"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image171.png")}),(0,s.kt)("h2",{id:"salesforce-update"},"Salesforce Update"),(0,s.kt)("p",null,'This operation is invoked by setting "sf_operation" to "update". In this\ncase, the Lambda function updates a Salesforce object based on the\nparameters passed to it.'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'"',(0,s.kt)("strong",{parentName:"p"},"sf_object"),'" parameter contains Salesforce to be updated, like Case.')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Specify additional parameters for the Salesforce object to be created. Parameters must include ",(0,s.kt)("inlineCode",{parentName:"p"},"sf_object")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"sf_id"),"."))),(0,s.kt)("p",null,"In the Amazon Connect Contact Flow Designer, add ",(0,s.kt)("em",{parentName:"p"},"Integrate ",">"," Invoke\nAWS Lambda function")," block. Set 'sfInvokeAPI' Lambda ARN and make sure\nyou have granted Amazon Connect to invoke the Lambda Function."),(0,s.kt)("p",null,"An example for Case update:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image172.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image173.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image174.png")}),(0,s.kt)("p",null,"Case Id is usually received as a result of a previous case lookup, but\nit can be also stored as an Attribute (i.e. sf_case_id)"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image175.png")}),(0,s.kt)("p",null,"A result example (HTTP Status Code):"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image176.png")}),(0,s.kt)("p",null,'204 is "No Content" success code'),(0,s.kt)("h2",{id:"salesforce-phone-lookup"},"Salesforce Phone Lookup"),(0,s.kt)("p",null,'This operation is invoked by setting "sf_operation" to "phoneLookup". In\nthis case, the Lambda function queries Salesforce for Contacts based on\nthe parameter passed to it.'),(0,s.kt)("p",null,"It uses the Salesforce Object Search Language (SOLS) to construct\ntext-based search queries against the search index, which gives\nsignificant performance improvement when searching phone number fields."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'"',(0,s.kt)("strong",{parentName:"p"},"sf_phone"),'" parameter contains the phone number to search.')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'"',(0,s.kt)("strong",{parentName:"p"},"sf_fields"),'" parameter contains a set of fields to be returned in a result. As it searches for Contacts, we might specify "Id, Name, Email"'))),(0,s.kt)("p",null,"In the Amazon Connect Contact Flow Designer, add ",(0,s.kt)("em",{parentName:"p"},"Integrate ",">"," Invoke\nAWS Lambda function")," block. Set 'sfInvokeAPI' Lambda ARN and make sure\nyou have granted Amazon Connect to invoke the Lambda Function."),(0,s.kt)("p",null,"Example for phone number lookup:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image177.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image156.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image178.png")}),(0,s.kt)("p",null,"A result example:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image158.png")}),(0,s.kt)("h2",{id:"salesforce-query"},"Salesforce query"),(0,s.kt)("p",null,'This operation is invoked by setting "sf_operation" to "query". In this\ncase, the Lambda function uses Salesforce Object Query Language (SOQL)\nto conduct a query against the Salesforce instance.'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"',(0,s.kt)("strong",{parentName:"li"},"query"),'" parameter contains the query.')),(0,s.kt)("p",null,"Any additional parameters will replace text values in the original query\nso that queries can be dynamic based on values stored within the contact\nflow. For example, the parameter set:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'query: "select field from object"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'field: "Id"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'object: "Task"'))),(0,s.kt)("p",null,'Will result in the query: "select Id from Task".'),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image179.png")}),(0,s.kt)("p",null,"In the contact flow example below, we look for a customer by phone number."),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image180.png")}),(0,s.kt)("p",null,"(full text of the value is \"select Id from Contact where Phone LIKE \\'%number%\\'\")"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image181.png")}),(0,s.kt)("p",null,"This operation returns a response of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sf_records": [\n        {\n            "Id": "00303000001RZfIAAW"\n        }\n    ],\n    "sf_count": "1"\n}\n')),(0,s.kt)("h2",{id:"salesforce-queryone"},"Salesforce queryOne"),(0,s.kt)("p",null,'This operation is invoked by setting "sf_operation" to "queryOne" (case\nsensitive). In this case, the Lambda function uses Salesforce Object\nQuery Language (SOQL) to conduct a query against the Salesforce\ninstance, returning a result only when one record is returned from the\nquery. For query, the following parameter is required:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"',(0,s.kt)("strong",{parentName:"li"},"query"),'" parameter contains the query.')),(0,s.kt)("p",null,"Any additional parameters will replace text values in the original query\nso that queries can be dynamic based on values stored within the contact\nflow. For example, the parameter set:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'query: "select field from object"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'field: "Id"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'object: "Task"'))),(0,s.kt)("p",null,'Will result in the query: "select Id from Task".'),(0,s.kt)("p",null,"In the contact flow example below, we look for a customer by phone number."),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image179.png")}),(0,s.kt)("p",null,"(full text of the value is \"select Id from Contact where Phone LIKE\n\\'%number%\\'\")"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image181.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image180.png")}),(0,s.kt)("p",null,"This operation returns a response of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sf_records": [\n        {\n            "Id": "00303000001RZfIAAW"\n        }\n    ],\n    "sf_count": "1"\n}\n')),(0,s.kt)("h2",{id:"salesforce-createchatterpost"},"Salesforce createChatterPost"),(0,s.kt)("p",null,'This operation is invoked by setting "sf_operation" to\n"createChatterPost" (case sensitive). In this case, the Lambda function\nuses the Salesforce Connect REST API to create a chatter post (see\n',(0,s.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_item.htm"},"here"),").\nFor createChatterPost, the following parameters are required:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_feedElementType")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_subjectId")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_messageType")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_message"))),(0,s.kt)("p",null,"The following parameter is optional:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"sf_mention")),(0,s.kt)("p",null,"(refer to the api reference for value types)"),(0,s.kt)("p",null,"Any additional parameters will replace text values in the sf_message so\nthat messages can be dynamic based on values stored within the contact\nflow. For example, the parameter set:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'sf_message: "Please help me with case {{caseId}}"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"caseId: 1234"))),(0,s.kt)("p",null,'Will result in the message: "Please help me with case 1234".'),(0,s.kt)("p",null,"In the contact flow example below, we leave a chatter post on a contact."),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image182.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image183.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image184.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image185.png")}),(0,s.kt)("p",null,'(full text of the value is "I had a problem during the call. My contact id is {{contactId}}.")'),(0,s.kt)("p",null,"The operation returns a response of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Id": "0D503000000ILY5CAO"\n}\n')),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image186.png")}),"the Subject:",(0,s.kt)("h2",{id:"salesforce-createchattercomment"},"Salesforce createChatterComment"),(0,s.kt)("p",null,'This operation is invoked by setting "sf_operation" to\n"createChatterComment" (case sensitive). In this case, the Lambda\nfunction uses the Salesforce Connect REST to create a chatter comment\n(see ',(0,s.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm"},"here"),").\nFor createChatterComment, the following parameters are required:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_feedElementId")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_commentType")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_commentMessage"))),(0,s.kt)("p",null,"(refer to the api reference for value types)"),(0,s.kt)("p",null,"Any additional parameters will replace text values in the\nsf_commentMessage so that messages can be dynamic based on values stored\nwithin the contact flow. For example, the parameter set:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'sf_commentMessage: "Please help me with case {{ caseId }}"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"caseId: 1234"))),(0,s.kt)("p",null,"In the contact flow example below, we leave a comment on a chatter post."),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image187.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image188.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image189.png")}),(0,s.kt)("p",null,"The operation returns a response of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Id": "0D703000000ChhNCAS"\n}\n')),(0,s.kt)("p",null,"See the chatter post appear attached to the Subject:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image190.png")}),(0,s.kt)("h2",{id:"salesforce-search"},"Salesforce search"),(0,s.kt)("p",null,'This operation is invoked by setting "sf_operation" to\n"search" (case sensitive). In this case, the Lambda\nfunction uses the Salesforce REST to perform a parameterized search\n(see\n',(0,s.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm"},"here"),").\nFor search, the following parameters are required:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"q")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_fields")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_object"))),(0,s.kt)("p",null,"The following parameters are optional:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"where")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"overallLimit"))),(0,s.kt)("p",null,"See the below example:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image320.png")})," 58",(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image321.png")})," 59",(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image322.png")})," 60",(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image323.png")})," 61",(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image324.png")})," 62",(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image325.png")})," 63",(0,s.kt)("p",null,"The operation returns a response of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sf_records": [\n        {\n            "Id": "50001000001B9e6AAG", \n            "Subject": "test subject", \n            "Status": "New"\n        }, \n        {\n            "Id": "50001000001B9eWAAS", \n            "Subject": "test subject", \n            "Status": "New"\n        }, \n        {\n            "Id": "50001000001BDgiAAG", \n            "Subject": "test subject", \n            "Status": "New"\n        }\n    ], \n    "sf_count": 3\n}\n')),(0,s.kt)("h2",{id:"salesforce-searchone"},"Salesforce searchOne"),(0,s.kt)("p",null,'This operation is invoked by setting "sf_operation" to\n"searchOne" (case sensitive). In this case, the Lambda\nfunction uses the Salesforce REST to perform a parameterized search\n(see\n',(0,s.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm"},"here"),").\nFor search, the following parameters are required:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"q")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_fields")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"sf_object"))),(0,s.kt)("p",null,"The following parameter is optional:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"where")),(0,s.kt)("p",null,"See the below example:"),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image326.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image327.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image322.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image323.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image324.png")}),(0,s.kt)("img",{src:(0,i.Z)("/img/classic/image325.png")}),(0,s.kt)("p",null,"The operation returns a response of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Id": "50001000001BIn6AAG",\n    "Subject": "test subject unique", \n    "Status": "New", \n    "sf_count": 1\n}\n')))}f.isMDXComponent=!0}}]);