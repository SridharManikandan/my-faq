(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+TL6":function(t,a,s){"use strict";s.r(a);var n=s("KHd+"),e=s("UQSp"),r=s("Kw5r");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default.config.optionMergeStrategies;var o={VueRemarkRoot:e.a},c=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===p(o[t])&&"function"==typeof o[t].render||"function"==typeof o[t]&&"function"==typeof o[t].options.render?a[t]=o[t]:s[t]=function(){return o[t]}}))},v=r.default.config.optionMergeStrategies,_="__vueRemarkFrontMatter",u={excerpt:null,title:"How to use a frame border-image for PDF documentation",path:"/export-and-print-preview/how-to-use-a-frame-border-image-for-pdf-document",description:"This section explains about how to How to use a frame border-image for PDF exported documentation when using the Report Writer.",date:"2022-05-25T00:00:00.000Z"};var l=function(t){t.options[_]&&(t.options[_]=u),r.default.util.defineReactive(t.options,_,u),t.options.computed=v.computed({$frontmatter:function(){return t.options[_]}},t.options.computed)},i=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("h2",{attrs:{id:"how-to-use-a-frame-border-image-for-pdf-exported-documentation"}},[s("a",{attrs:{href:"#how-to-use-a-frame-border-image-for-pdf-exported-documentation","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("How to use a frame border-image for PDF exported documentation")]),s("p",[t._v("This articles explains to use the frame border-image for PDF exported documentation using Bold Report Report Writer component with Syncfusion PDF libraries.")]),s("p",[t._v("You can refer the "),s("a",{attrs:{href:"../../aspnet-core-reporting/report-writer/export-ssrs-rdl-report/"}},[t._v("Report Writer documentation")]),t._v(" for getting the PDF document from Report.")]),s("p",[t._v("You have to use "),s("strong",[t._v("Syncfusion.Pdf")]),t._v(" for use the frame border-image for PDF exported documentation. You can refer the following code snippet for how to use the frame border-image for PDF exported documentation.")]),s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",{pre:!0,attrs:{class:"language-csharp"}},[t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpPost")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("IActionResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RDLPDF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Export the RDL To PDF.")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileStream")]),t._v(" mainReportStream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("FileStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_hostingEnvironment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebRootPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"\\Reports\\SampleReport.rdl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Open"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileAccess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BoldReports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReportWriter")]),t._v(" writer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("BoldReports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReportWriter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadReport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mainReportStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryStream")]),t._v(" memoryStream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("MemoryStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("memoryStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BoldReports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriterFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Download the generated export document to the client side.")]),t._v("\n            memoryStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileStreamResult")]),t._v(" fileStreamResult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("FileStreamResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("memoryStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/pdf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" fileStream1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fileStreamResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FileStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Combine the Exported PDF and templatecombine")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfDocument")]),t._v(" finalDoc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("PdfDocument")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileStream")]),t._v(" fileStream2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("FileStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_hostingEnvironment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebRootPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"\\PDF\\Template.pdf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Open"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileAccess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates a PDF stream for merging")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" streams "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fileStream1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fileStream2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Merges the PDF Document.")]),t._v("\n\n            PdfDocumentBase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Merge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finalDoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" streams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Save the document into the stream")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryStream")]),t._v(" combinestream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("MemoryStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            finalDoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("combinestream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            combinestream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileStreamResult")]),t._v(" fileStreamResult1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("FileStreamResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("combinestream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/pdf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" pagenumber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fileStreamResult1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FileStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add a Page number for combined PDF")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfLoadedDocument")]),t._v(" loadedDoc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("PdfLoadedDocument")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pagenumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a new PDF document")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfDocument")]),t._v(" doc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("PdfDocument")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            doc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PageSettings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Margins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("All "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Add a page to the document")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfPage")]),t._v(" page "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Create PDF graphics for the page")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfGraphics")]),t._v(" graphics "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileStream")]),t._v(" fileStream3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("FileStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_hostingEnvironment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebRootPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"\\f25e9269edfa67ef53e840eea0a98c30.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Open"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileAccess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Load the image from the disk")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfBitmap")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("PdfBitmap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileStream3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Draw the image")]),t._v("\n            graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DrawImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetClientSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetClientSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Save the document")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryStream")]),t._v(" ms "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("MemoryStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            doc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Close the document")]),t._v("\n            doc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Load the border design PDF document")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfLoadedDocument")]),t._v(" loadedDocument1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("PdfLoadedDocument")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Create a new document")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfDocument")]),t._v(" document "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("PdfDocument")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PageSettings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Margins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("All "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Add the border design in each page of an existing PDF document")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" loadedDoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Add a PDF page")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfPage")]),t._v(" pdfPage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Create a template from the first document")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfPageBase")]),t._v(" loadedPage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loadedDocument1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PdfTemplate")]),t._v(" template "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loadedPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Draw the loaded template into a new document")]),t._v("\n                pdfPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DrawPdfTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PointF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetClientSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Create a template from the second document")]),t._v("\n                loadedPage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loadedDoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                template "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loadedPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Draw the loaded template into a new document")]),t._v("\n                pdfPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DrawPdfTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PointF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetClientSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryStream")]),t._v(" pagenumberstream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("MemoryStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pagenumberstream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Close the PDF documents")]),t._v("\n            document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            loadedDocument1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            loadedDoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" contentType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/pdf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Define the file name")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" fileName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Combinewithpagenumber.pdf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Creates a FileContentResult object by using the file contents, content type, and file name")]),t._v("\n            pagenumberstream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pagenumberstream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contentType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[s("a",{attrs:{href:"https://www.syncfusion.com/downloads/support/directtrac/general/ze/DrawingBorderwithPDF-716231327.zip",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("PDF document with the frame border sample")])])])}),[],!1,null,null,null);"function"==typeof c&&c(i),"function"==typeof l&&l(i);a.default=i.exports},UQSp:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);