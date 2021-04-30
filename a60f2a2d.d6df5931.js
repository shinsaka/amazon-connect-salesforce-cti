(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(133)),i={id:"03-cti-flows",title:"CTI Flow"},c={unversionedId:"lightning/03-cti-adapter/03-cti-flows",id:"lightning/03-cti-adapter/03-cti-flows",isDocsHomePage:!1,title:"CTI Flow",description:"The CTI Adapter provides a mechanism to customize the behavior of the",source:"@site/docs/lightning/03-cti-adapter/03-cti-flows.md",slug:"/lightning/03-cti-adapter/03-cti-flows",permalink:"/docs/lightning/03-cti-adapter/03-cti-flows",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/03-cti-flows.md",version:"current",sidebar:"lightning",previous:{title:"CTI Attributes",permalink:"/docs/lightning/03-cti-adapter/02-cti-attributes"},next:{title:"Presence Sync Rules",permalink:"/docs/lightning/03-cti-adapter/04-presence-sync-rules"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The CTI Adapter provides a mechanism to customize the behavior of the\nadapter based on your business needs without needing to edit the\nunderlying Visualforce pages, which could negatively impact overall\nadapter function. This is accomplished through CTI Flows."),Object(r.b)("p",null,'A CTI Flow consist of "actions" that represent an API call to parts of\nSalesforce or Amazon Connect API. Like a JavaScript function, each\naction can take inputs and provide outputs, or returns values, that you\ncan use from other actions.'),Object(r.b)("p",null,"To create a new CTI Flow, log in into your Salesforce org and go to the\n",Object(r.b)("strong",{parentName:"p"},"Service Console.")," Expand the ",Object(r.b)("strong",{parentName:"p"},"navigation menu")," by selecting the\ndown arrow and choose ",Object(r.b)("strong",{parentName:"p"},"AC CTI Adapters"),"."),Object(r.b)("img",{src:"/img/lightning/image114.png"}),Object(r.b)("p",null,"Select ",Object(r.b)("strong",{parentName:"p"},"ACLightningAdapter.")," Scroll down to the ",Object(r.b)("strong",{parentName:"p"},"CTI Flows")," section\nand select New to create a new CTI Script."),Object(r.b)("img",{src:"/img/lightning/image133.png"}),Object(r.b)("p",null,"Provide a user-friendly name in the ",Object(r.b)("strong",{parentName:"p"},"CTI Flow Name")," field. And click\n",Object(r.b)("strong",{parentName:"p"},"Save"),"."),Object(r.b)("img",{src:"/img/lightning/image134.png"}),Object(r.b)("p",null,"This will take you to a form where you can fill in name and adapter of\nthe CTI Flow. There are a couple of fields that you may be unfamiliar\nwith: ",Object(r.b)("strong",{parentName:"p"},"Source")," and ",Object(r.b)("strong",{parentName:"p"},"Event"),"."),Object(r.b)("p",null,"Let's look at ",Object(r.b)("strong",{parentName:"p"},"Source")," field first."),Object(r.b)("img",{src:"/img/lightning/image135.png"}),Object(r.b)("p",null,'You can think of Source as the "origin" of the CTI Flow. There are\ncurrently 7 sources: Initialization, an Agent on Connect, Voice Contact\non Connect, Queue Callback Contact on Connect, Chat on Connect,\nSalesforce Agent or Salesforce UI.'),Object(r.b)("p",null,"Each source comes with a set of events that you can hook into, i.e. your\nCTI Flow will be executed when one of these events fire. Typically, you\nwill have only one flow for a combination of a source and an event. (You\ncan find out more about sources and events in ",Object(r.b)("a",{parentName:"p",href:"/docs/lightning/05-appendices/appendix-c-cti-flow-sources-and-events/01-cti-flow-sources-and-events"},"Appendix C - CTI Flow Sources and Events"),".)"),Object(r.b)("p",null,"For the purposes of this example, we selected ",Object(r.b)("strong",{parentName:"p"},"Amazon Connect Voice\nContact")," source and ",Object(r.b)("strong",{parentName:"p"},"onConnecting")," event. Now click Save and on the\nnext page scroll down till you find the ",Object(r.b)("strong",{parentName:"p"},"CTI Flow")," section."),Object(r.b)("img",{src:"/img/lightning/image136.png"}),Object(r.b)("p",null,"Let's build a CTI Flow that opens a screenpop in Salesforce when a voice\ncall comes."),Object(r.b)("img",{src:"/img/lightning/image137.png"}),Object(r.b)("p",null,"You can start using by dragging the item called ",Object(r.b)("strong",{parentName:"p"},"CTI Block")," from the sidebar in the Main Menu over the stage,\nwhich is marked by a grid pattern."),Object(r.b)("p",null,"When you drop the block, you will see a modal titled ",Object(r.b)("strong",{parentName:"p"},"Explorer"),". This\nmodal contains a list of actions you can choose from."),Object(r.b)("img",{src:"/img/lightning/image138.png"}),Object(r.b)("p",null,"In the ",Object(r.b)("strong",{parentName:"p"},"Search")," field, search for ",Object(r.b)("strong",{parentName:"p"},"Phone")," and Select the action\ncalled ",Object(r.b)("strong",{parentName:"p"},"Get Customer Phone Number")," from the results on the right."),Object(r.b)("img",{src:"/img/lightning/image139.png"}),"You should now see a block on the stage for the action you selected, and the sidebar will display some information about this action, including its return value.",Object(r.b)("p",null,"(Note: If you'd like to change the label of the action, doubleclick on\nit. This will open a text editor. Make your changes and when you're\nfinished click outside the node to save your label.)"),Object(r.b)("p",null,"Some actions can be configured using input fields to provide arguments\nto function calls, as well. This action does not have any input fields,\nand returns two values ---- ",Object(r.b)("strong",{parentName:"p"},"phone")," and ",Object(r.b)("strong",{parentName:"p"},"country"),"."),Object(r.b)("p",null,"Now let's drag another CTI Block over the stage and find an action\ncalled ",Object(r.b)("strong",{parentName:"p"},"Search and Screenpop"),"."),Object(r.b)("img",{src:"/img/lightning/image140.png"}),Object(r.b)("p",null,'Connect these blocks by clicking the green socket (green means "done")\non ',Object(r.b)("strong",{parentName:"p"},"Get Customer Phone"),", which will display a blue line that tracks\nyour mouse cursor around the stage."),Object(r.b)("p",null,"Now, click on the pink socket, i.e. the ",Object(r.b)("strong",{parentName:"p"},"input")," socket, which is to\nthe left of the ",Object(r.b)("strong",{parentName:"p"},"Search and Screenpop")," block. If the connection is\nsuccessful, the sockets fill turn into a solid color and the blue line\nwill connect them. (There are some restrictions on which sockets you can\nconnect together. For example, you cannot connect output of an action to\nits own input socket or connect two inputs.) If you are not happy with\nthis connection, you can hover over it and double click to remove."),Object(r.b)("img",{src:"/img/lightning/image141.png"}),Object(r.b)("p",null,"Now we'd like to get the phone number of the customer and use it in\n",Object(r.b)("strong",{parentName:"p"},"Search and Screenpop"),". Here is a tip: if two actions are connected,\nyou can use the return values of the first action in the input fields of\nthe next action. (You can even use the return values of actions\nconnected to the last action, and the ones connected to that, and so\non.)"),Object(r.b)("p",null,'This action has only two options, and we want to use the one called\n"phone" for this field.'),Object(r.b)("img",{src:"/img/lightning/image142.png"}),Object(r.b)("img",{src:"/img/lightning/image143.png"}),"If you want to enter a custom input value, you can type that, and select **Add New Value** from the dropdown.",Object(r.b)("p",null,"And make sure to set ",Object(r.b)("strong",{parentName:"p"},"callType"),' to "inbound." Finally, add the\n',Object(r.b)("strong",{parentName:"p"},"Start")," and ",Object(r.b)("strong",{parentName:"p"},"End")," nodes and connect everything together."),Object(r.b)("img",{src:"/img/lightning/image144.png"}),Object(r.b)("p",null,"When you're finished, click ",Object(r.b)("strong",{parentName:"p"},"Save")," in the sidebar. That's it. You\ncreated your first CTI Flow."),Object(r.b)("p",null,"To test your flow, go to your ",Object(r.b)("strong",{parentName:"p"},"Service Console"),", and make a call from\na number that is in the profile of a Contact. As the call is displayed\nin your CCP dashboard, Salesforce will pop open the contact of the\ncaller in a separate tab."))}p.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,h=u["".concat(i,".").concat(g)]||u[g]||b[g]||r;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);