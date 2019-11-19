(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{216:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"code-coverage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-coverage"}},[e._v("#")]),e._v(" Code Coverage")]),e._v(" "),a("p",[e._v("Wasabi Wallet is built using dotnet core. Given there is no cross-platform Profiling API like the one available on Windows, we use "),a("a",{attrs:{href:"https://github.com/SteveGilham/altcover",target:"_blank",rel:"noopener noreferrer"}},[e._v("AltCover"),a("OutboundLink")],1),e._v(" package for instrumenting the assemblies and recording the execution\ncoverage.")]),e._v(" "),a("p",[e._v("So, first of all we need to install the package in the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("WalletWasabi.Tests"),a("OutboundLink")],1),e._v(" project as follow:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("dotnet "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" WalletWasabi.Tests/WalletWasabi.Tests.csproj package AltCover\n")])])]),a("p",[e._v("Next, run:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("dotnet "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" /p:AltCover"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true /p:AltCoverLcovReport"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("lcov.info\n")])])]),a("p",[e._v("As a result we get a "),a("code",[e._v("lcov.info")]),e._v(" file containing the covered lines.\nIn order to be able to see what lines\nare covered we need to install a "),a("code",[e._v("vscode extension")]),e._v(" called  "),a("a",{attrs:{href:"https://github.com/ryanluker/vscode-coverage-gutters",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coverage Gutters"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Run vscode and click on "),a("code",[e._v("Watch")]),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/W4hXXda.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);