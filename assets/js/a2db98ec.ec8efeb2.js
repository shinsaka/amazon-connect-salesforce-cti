(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[6081],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},5997:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return f},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(4996),c=["components"],s={id:"notices",title:"Notices",hide_title:!0},l=void 0,u={unversionedId:"classic/notices",id:"classic/notices",isDocsHomePage:!1,title:"Notices",description:"Setup and Installation Guide",source:"@site/docs/classic/notices.md",sourceDirName:"classic",slug:"/classic/notices",permalink:"/amazon-connect-salesforce-cti/docs/classic/notices",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/notices.md",version:"current",frontMatter:{id:"notices",title:"Notices",hide_title:!0},sidebar:"classic",next:{title:"Release Notes",permalink:"/amazon-connect-salesforce-cti/docs/classic/release-notes"}},f=[{value:"License Summary",id:"license-summary",children:[]}],p={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{align:"center"},"Setup and Installation Guide"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,a.Z)("/img/lightning/image1.png")})),(0,i.kt)("h3",{align:"center"},"March, 2021"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\xa9 Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. SPDX-License-Identifier: CC-BY-SA-4.0")),(0,i.kt)("h4",{id:"notices"},"Notices"),(0,i.kt)("p",null,"This document is provided for informational purposes only. It represents\nAWS's current product offerings and practices as of the date of issue of\nthis document, which are subject to change without notice. Customers are\nresponsible for making their own independent assessment of the\ninformation in this document and any use of AWS's products or services,\neach of which is provided \"as is\" without warranty of any kind, whether\nexpress or implied. This document does not create any warranties,\nrepresentations, contractual commitments, conditions or assurances from\nAWS, its affiliates, suppliers or licensors. The responsibilities and\nliabilities of AWS to its customers are controlled by AWS agreements,\nand this document is not part of, nor does it modify, any agreement\nbetween AWS and its customers."),(0,i.kt)("h4",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"This guide details the integration between Amazon Connect and Salesforce\nLightning. It covers the installation, configuration, and operation of\nthe two primary components of the integration: the Amazon Connect CTI\nAdapter for Salesforce and the AWS Serverless Application Repository for\nAmazon Connect Salesforce integration."),(0,i.kt)("h2",{id:"license-summary"},"License Summary"),(0,i.kt)("p",null,"The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/blob/main/LICENSE"},"LICENSE file"),"."),(0,i.kt)("p",null,"The sample code within this documentation is made available under the MIT-0 license. See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/blob/main/LICENSE-SAMPLECODE"},"LICENSE-SAMPLECODE file"),"."),(0,i.kt)("toc",null))}m.isMDXComponent=!0}}]);