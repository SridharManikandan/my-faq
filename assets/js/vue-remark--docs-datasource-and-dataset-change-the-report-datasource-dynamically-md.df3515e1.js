(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{UQSp:function(t,a,e){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},i2an:function(t,a,e){"use strict";e.r(a);var n=e("KHd+"),s=e("UQSp"),o=e("Kw5r");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o.default.config.optionMergeStrategies;var p={VueRemarkRoot:s.a},c=function(t){var a=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===r(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?a[t]=p[t]:e[t]=function(){return p[t]}}))},i=o.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"Change the Datasource dynamically | Bold Reports",path:"/datasource-and-dataset/change-the-report-datasource-dynamically",description:"This section explains how to change the Report data source dynamically in Bold Reports Embedded Reporting Tools.",date:"2022-05-25T00:00:00.000Z"};var v=function(t){t.options[u]&&(t.options[u]=l),o.default.util.defineReactive(t.options,u,l),t.options.computed=i.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},d=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("VueRemarkRoot",[e("h2",{attrs:{id:"how-to-change-the-data-source-dynamically"}},[e("a",{attrs:{href:"#how-to-change-the-data-source-dynamically","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("How to change the data source dynamically")]),e("p",[t._v("You have to use the "),e("code",{pre:!0},[t._v("reportOption.ReportModel.DataSourceCredentials")]),t._v(" available with the "),e("code",{pre:!0},[t._v("OnInitReportOptions")]),t._v(" method to dynamically change the data source in the web API controller. The following code sample shows how to change the connection string of the "),e("code",{pre:!0},[t._v("AdventureWorks")]),t._v(" data source in the report.")]),e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",{pre:!0,attrs:{class:"language-csharp"}},[t._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token attribute"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NonAction")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnInitReportOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportViewerOptions")]),t._v(" reportOption"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSourceCredentials")]),t._v(" dataSourceCredentials "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("DataSourceCredentials")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" connectionString "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Data Source = dataplatformdemodata.syncfusion.com; Initial Catalog = AdventureWorks; User ID = 'demoreadonly@data-platform-demo'; Password = 'N@c)=Y8s*1&dh'\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//You have to provide the shared data source name used with the report or the data source name available with the report.")]),t._v("\n        dataSourceCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AdventureWorks"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dataSourceCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConnectionString "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connectionString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        reportOption"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReportModel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataSourceCredentials "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DataSourceCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dataSourceCredentials "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),e("p",[t._v("You can find the following help documentation for how to change data sources based on the application parameters in various platforms.")]),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"../../angular-reporting/report-viewer/handle-post-actions/#pass-custom-data-in-ajax-request"}},[t._v("Angular")])])]),e("li",[e("p",[e("a",{attrs:{href:"../../react-reporting/report-viewer/handle-post-actions/#pass-custom-data-in-ajax-request"}},[t._v("React")])])]),e("li",[e("p",[e("a",{attrs:{href:"../../javascript-reporting/report-viewer/handle-post-actions/#pass-custom-data-in-ajax-request"}},[t._v("Java Script")])])]),e("li",[e("p",[e("a",{attrs:{href:"../../aspnet-core-reporting/report-viewer/handle-post-actions/#pass-custom-data-in-ajax-request"}},[t._v("ASP.NET Core")])])]),e("li",[e("p",[e("a",{attrs:{href:"../../aspnet-mvc-reporting/report-viewer/handle-post-actions/#pass-custom-data-in-ajax-request"}},[t._v("ASP.NET MVC")])])]),e("li",[e("p",[e("a",{attrs:{href:"../../aspnet-web-forms-reporting/report-viewer/handle-post-actions/#pass-custom-data-in-ajax-request"}},[t._v("ASP.NET Webforms")])])])])])}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof v&&v(d);a.default=d.exports}}]);