(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{UQSp:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},Uwfb:function(t,a,s){"use strict";s.r(a);var n=s("KHd+"),e=s("UQSp"),o=s("Kw5r");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o.default.config.optionMergeStrategies;var r={VueRemarkRoot:e.a},c=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===p(r[t])&&"function"==typeof r[t].render||"function"==typeof r[t]&&"function"==typeof r[t].options.render?a[t]=r[t]:s[t]=function(){return r[t]}}))},u=o.default.config.optionMergeStrategies,l="__vueRemarkFrontMatter",v={excerpt:null,title:"Can you use data table in reports to add a data source",path:"/datasource-and-dataset/possible-to-use-data-table-in-report",description:"This section provides the information about, is it possible to use a data table in the report and how to add a data source using the data table input to the report in Bold Reports.",date:"2022-05-25T00:00:00.000Z"};var i=function(t){t.options[l]&&(t.options[l]=v),o.default.util.defineReactive(t.options,l,v),t.options.computed=u.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},_=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("h2",{attrs:{id:"is-it-possible-to-use-a-data-table-in-bold-reports"}},[s("a",{attrs:{href:"#is-it-possible-to-use-a-data-table-in-bold-reports","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("Is it possible to use a data table in Bold Reports")]),s("p",[t._v("Yes, it is possible to use data table in Bold Reports. The data source can be added as a data table using "),s("code",{pre:!0},[t._v("BoldReports.Web.ReportDataSource")]),t._v(". The steps involved in adding a sample data source using data table are provided as follows.")]),s("ul",[s("li",[s("p",[t._v("Create a SQL connection and add the data source to the report in the "),s("code",{pre:!0},[t._v("OnReportLoaded")]),t._v(" function.")]),s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",{pre:!0,attrs:{class:"language-csharp"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnReportLoaded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportViewerOptions")]),t._v(" reportOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlConnection")]),t._v(" connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Data Source=dataplatformdemodata.syncfusion.com;Initial Catalog=AdventureWorks2016;User id=demoreadonly@data-platform-demo;Password=N@c)=Y8s*1&dh;"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           reportOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReportModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataSources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("BoldReports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReportDataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),s("li",[s("p",[t._v("While adding the data source, the dataset name used in the report must be provided along with the data table as shown in the following code sample.")]),s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",{pre:!0,attrs:{class:"language-csharp"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnReportLoaded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportViewerOptions")]),t._v(" reportOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlConnection")]),t._v(" connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Data Source=dataplatformdemodata.syncfusion.com;Initial Catalog=AdventureWorks2016;User id=demoreadonly@data-platform-demo;Password=N@c)=Y8s*1&dh;"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reportOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReportModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataSources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("BoldReports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReportDataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DataSet1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      Value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetDataTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataTable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetDataTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlConnection")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataSet")]),t._v(" dataset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlDataAdapter")]),t._v(" adapter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlDataAdapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  adapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SelectCommand "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SqlCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"SELECT top 10 [HumanResources].[Department].[DepartmentID],[HumanResources].[Department].[Name], [HumanResources].[Department].[GroupName],[HumanResources].[Department].[ModifiedDate] FROM[HumanResources].[Department]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  adapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tables"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("blockquote",[s("p",[t._v("Here the "),s("code",{pre:!0},[t._v("Name")]),t._v(" is case-sensitive and it should be same as in the dataset name in the report definition.\nThe "),s("code",{pre:!0},[t._v("Value")]),t._v(" also accepts IList and DataSet inputs.")])])])])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof i&&i(_);a.default=_.exports}}]);