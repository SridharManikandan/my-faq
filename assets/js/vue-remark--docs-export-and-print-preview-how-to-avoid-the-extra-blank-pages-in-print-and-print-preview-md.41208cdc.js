(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"/9nF":function(t,e,a){"use strict";a.r(e);var r=a("KHd+"),s=a("UQSp"),n=a("Kw5r");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.default.config.optionMergeStrategies;var p={VueRemarkRoot:s.a},i=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?e[t]=p[t]:a[t]=function(){return p[t]}}))},l=n.default.config.optionMergeStrategies,c="__vueRemarkFrontMatter",u={excerpt:null,title:"Avoid the extra blank pages in print and print preview",path:"/export-and-print-preview/how-to-avoid-the-extra-blank-pages-in-print-and-print-preview",description:"This section briefly describes about to avoiding the extra blank pages in print and print preview using Report Viewer.",date:"2022-05-25T00:00:00.000Z"};var d=function(t){t.options[c]&&(t.options[c]=u),n.default.util.defineReactive(t.options,c,u),t.options.computed=l.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},v=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VueRemarkRoot",[r("h2",{attrs:{id:"how-to-avoid-the-extra-blank-pages-in-print-and-print-preview"}},[r("a",{attrs:{href:"#how-to-avoid-the-extra-blank-pages-in-print-and-print-preview","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("How to avoid the extra blank pages in print and print preview")]),r("p",[t._v("The paper size that you specify for the report in the "),r("strong",[t._v("Report Properties")]),t._v(" will define the pagination for the report while printing and rendering report in the print layout. The extra blank page is created when the body of your report is too wide for your page. If you want the report to appear on a single page, all the content within the report body must fit on the physical page and the body width should be lesser or equal to the following formula:")]),r("pre",{pre:!0,attrs:{class:"language-csharp"}},[r("code",{pre:!0,attrs:{class:"language-csharp"}},[t._v("Body Width "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" Page Width "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Left Margin "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Right")]),t._v(" Margin"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),r("p",[t._v("For physical page renders, the concept of Usable Area should be important to keep in mind. The area of the physical page that remains after the space is allocated for margins, column spacing, and page header and footer is called the usable page area. Margins are applied only when you render the report in the print layout and print reports. The following image indicates the margin and usable page area of a physical page.")]),r("p",[r("g-image",{attrs:{src:a("fUPy"),alt:"Indicates margin and usable page area"}})],1),r("p",[t._v("The following formula is used to calculate the usable area of the report rendering:")]),r("h3",{attrs:{id:"horizontal-usable-area"}},[r("a",{attrs:{href:"#horizontal-usable-area","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("Horizontal usable area")]),r("pre",{pre:!0,attrs:{class:"language-csharp"}},[r("code",{pre:!0,attrs:{class:"language-csharp"}},[t._v("X "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Page"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Width "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Left Margin "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Right Margin "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Column")]),t._v(" Spacing"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),r("h3",{attrs:{id:"vertical-usable-area"}},[r("a",{attrs:{href:"#vertical-usable-area","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("Vertical usable area")]),r("pre",{pre:!0,attrs:{class:"language-csharp"}},[r("code",{pre:!0,attrs:{class:"language-csharp"}},[t._v("Y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Page"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Top Margin "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Bottom Margin "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Header Height "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Footer")]),t._v(" Height"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),r("p",[t._v("Consider the report width is 21 cm, the left margin of the report is 0.5 cm, and the right margin of the report is 0.5 cm. To avoid an extra printed page in the exported PDF file, the following formula is used:")]),r("pre",{pre:!0,attrs:{class:"language-csharp"}},[r("code",{pre:!0,attrs:{class:"language-csharp"}},[t._v("width "),r("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("of")]),t._v(" body "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("left")]),t._v(" margin "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("right")]),t._v(" margin "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("report")]),t._v(" width "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),r("p",[t._v("If the width of body is 20 or lesser, it will be rendered without extra pages. When it uses greater than 20, it will add extra pages.")])])}),[],!1,null,null,null);"function"==typeof i&&i(v),"function"==typeof d&&d(v);e.default=v.exports},UQSp:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},fUPy:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/indicates-margin-and-usable-page-area.590901e.08f6a9f14021ec0b62fb34af8ee684b6.png",size:{width:710,height:749},sizes:"(max-width: 710px) 100vw, 710px",srcset:["/assets/static/indicates-margin-and-usable-page-area.590901e.08f6a9f14021ec0b62fb34af8ee684b6.png 710w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 710 749' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-bd6b97d044b9dc313f85f28f9a1807bd'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-bd6b97d044b9dc313f85f28f9a1807bd)' width='710' height='749' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABECAYAAAAx%2bDPIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAHBElEQVR42u1b%2b08TSxT2//8DzE1MjImJPxiNQAG5aMVSFCzibREB20Lpu6WF8ux799zvG3bJsha6DwoFd5KTfc%2be%2bea8Zs7ME7EVXdcVmefWommaopveuYti/aeVFy88PrnuB9aPVaX9/o2M3HXj%2bzZ%2bFM/g0y2PT677oF6vy9evX2Xi3TvZ2tqS%2bY8fZWFhQRYXF%2bXTp09SLpfvBQTNaOTm5qbMz8/L3NycLC0tya9fv%2bQ9rsnf58%2bfFR0eHrqXAPPlVqsl1WpVDg4O5Oz0VCo7O1KpVCSdTkuhUFDP7wMAK3/FYlF%2b//4tjUZDms2mFHFeLpUkmUwqXjudjncVuII6flYBouOgAjf9twQJuDUVsOpU9%2bxMigBAHwMjeIU/0z4ZfOYBQK/dvnzm2AjaK7X/TOv1pAAbYDeS40QsOdiDQUANlYDr3Ii67nYlGwpJ%2btUrKYXD0js5kXEslS9fZOuffyT//r30IQWqXQO8wh8ADELS%2bnHn6EiysPqVREKSk5NS392VNiSieX6uDM99UwuNPYW13wOPLXRWHh6hHI2KbrhJVxKwi8atrKzIDiy%2bWXqgH7GYLD99Kjvfv0s2k5G9vb3xomxWcnCLORx/wh2mZmaktrrqSAqUBJhBRQ89u7GxceFaUGEVYOQgWt9fvJDa8jL144LGscAVKlVA/FJJpaSOznIEABsdiUTkI4wce38ZDSUAzf19OYe/r6PHE0C0jHfgfJVN0D0aQs0g6/Wgc9dEW4V4BRdSROxSghQ4BoAG7wSGjZEdVWB7e1sFFmZp4fkuAovd16%2blub4uCK9Ex89I4oLU%2b6zX%2bF7dZ6RGsp17qVtHUKRiAXRcCdLrGIBh/pZRYBa6peJvoAt98eymzmE4zeiMwLchUZRA9hzvUxV1S5zhiPg%2b%2bTUkwDUAf4ipLdA5QxBkAqB6yEfgwzEFY/cJeJNVGKk4PMv09LTMzs7KxMSEUkUFiJdi8OZJAgYFQoMA6KHyFnqxDdfjlhi7021xgEIvcwT3Songda1WU2MO3nNdN%2bptQXq64G00KmABoA07cQSGj4%2bPFbNuid%2bdQqUIBO2OeW0S77muE9RAPS0MgkYOgBjDy7EsflTAKQA6fKzu0QiOlPwYQVcA8CfmTMw9DYUHMBoAEAAQABAAEAAwlgDYI0y3Ywf7JM2DlACvk6aOv3sIEsABFkNdxu5mCMxzJl84Cux2u%2bpo3rfO5z9oCbAmMZixYWYpFAqpkR9nnlTmCeczMzNqpBgOhy%2bzT44l4aHYAPYqgSCxx81hLydf2PPmbDTfaxuzug8egGENGPbMkR1wCMB1RnasvcBtScB16fSRA3CfccDB2trFY3NuE6o3CNhHC8D%2b8rJqQ/f8XHTYlUQ8rtLpnIJjKt30To8SgPL2tiSfP5dSNCoFeJZSJCKH1apKoHBdAdP%2bnI573KGwqQKGEeSaAU6%2bclJ2ampKTcr%2bNWMBq%2b6bc5KP3gjaAbjOu/x1ANgpGA4HAAQABAAEAAQABAAEAAQABAA4BEClx0X%2b4vT4mK4TvBMA%2brWa9DodNaPrlTgjfBN5qhdSSd5YRgpAs1SSw3pdGlyX02i4Jq7p4VicdZI4NufMDM/No5d6D1nvXawR0oiyDxXgxGQqlVKLMrmjYx/McnEmrzM4VnFP81i/LxWwbjywkh0AMebRdA%2bkZmPw/eramszOzcm/Hz5INp%2bXGBiNra7KQiQi/yUSYrLr%2bh9eF0kNm3c/PTmRXC4nfQCRf/NGOtwsBTugEwynBLFX73OfEd0op6RIzAFC768czXddkM4pb65i9aoC1CMukma%2bbn19Xa0XzqLRSmzBcPn4WOlY8e3bCwYBCglK7Ih084hvNNQllutBZP1mKPEbvm/sYvMEAHNzsVhMrRLntDGPWejk0daW5AHMZjgseYht3dg4pZm%2b1wNpFrJfax7rvFwtjsa6Xi1uJggoAd%2b%2bfZME9HDtxw9JJ5NylslIEeeplRXZX1yUxtKSjG2BJ2CpAohqOu0OAK7SZrIggwZTAqgKNcOvcnvMBu7vApj4s2dSgCrkIW55Hv1Qsei/DpPgPQqQ2iL4%2bskNH5OTUoNE34oRPOJeAVjsGtxXempKygQHgNR2dnxRHZ6lBjXzW88lodcPYLdSoZBUIcmakX53vGfI7govN03BPlSiUYXoQTyujvtUCfzEE%2bFbZm1SL19KaWFB7e3xVZ%2btbjMn6KTxVwKhm5bMj6Iwb9elFR/ZINHFvsFhFeiGRPgl7kDvG6JZRO83ufiaRhj3tVv6hzUV5koCbgTA547OQYxU4VF0BFeD/im3tJPUFwC3LYpc%2b8MMLb1NlSlsGMAULDd3ozPw4ooxuwreRbkzADgQisOIMj09Mz0tGXiBKKSAq8K4ZY%2bDpEcJgBtjeh/b8f8HhByCha1/PacAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}}}]);