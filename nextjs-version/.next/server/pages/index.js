"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ronald/Projects/metamask-login/nextjs-version/pages/index.js\";\n\n\n\n\nfunction Home() {\n  const {\n    0: accountInfo,\n    1: setAccountInfo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n\n  async function getAccount() {\n    const accounts = await ethereum.request({\n      method: \"eth_requestAccounts\"\n    });\n    const account = accounts[0];\n    console.log(\"account:\", account);\n    setAccountInfo(account);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"jsx-2793405192\" + \" \" + \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"title\", {\n        className: \"jsx-2793405192\",\n        children: \"Metamask Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/MetaMask_Fox.svg\",\n        className: \"jsx-2793405192\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n      className: \"jsx-2793405192\" + \" \" + \"p-6\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: getAccount,\n        className: \"jsx-2793405192\" + \" \" + \"enableEthereumButton block py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700\",\n        children: \"Enable Ethereum\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), accountInfo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"jsx-2793405192\" + \" \" + \"inline-flex box-border p-4 mt-4 border-4 border-green-400\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n          className: \"jsx-2793405192\",\n          children: [\"Account: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n            className: \"jsx-2793405192\" + \" \" + \"showAccount\",\n            children: accountInfo\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 24\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"jsx-2793405192\" + \" \" + \"inline-flex box-border p-4 mt-4 border-4 border-red-400\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n          className: \"jsx-2793405192\",\n          children: \"Not yet sign in\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"footer\", {\n      className: \"jsx-2793405192\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {\n      id: \"2085888330\",\n      children: \"\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25hbGQvUHJvamVjdHMvbWV0YW1hc2stbG9naW4vbmV4dGpzLXZlcnNpb24vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQiIsImZpbGUiOiIvVXNlcnMvcm9uYWxkL1Byb2plY3RzL21ldGFtYXNrLWxvZ2luL25leHRqcy12ZXJzaW9uL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FjY291bnRJbmZvLCBzZXRBY2NvdW50SW5mb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRBY2NvdW50KCkge1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudDpcIiwgYWNjb3VudCk7XG4gICAgc2V0QWNjb3VudEluZm8oYWNjb3VudCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1ldGFtYXNrIExvZ2luPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTWV0YU1hc2tfRm94LnN2Z1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZW5hYmxlRXRoZXJldW1CdXR0b24gYmxvY2sgcHktMiBweC00IGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbWQgdGV4dC13aGl0ZSBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwXCJcbiAgICAgICAgICBvbkNsaWNrPXtnZXRBY2NvdW50fVxuICAgICAgICA+XG4gICAgICAgICAgRW5hYmxlIEV0aGVyZXVtXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7YWNjb3VudEluZm8gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBib3gtYm9yZGVyIHAtNCBtdC00IGJvcmRlci00IGJvcmRlci1ncmVlbi00MDBcIj5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgQWNjb3VudDogPHNwYW4gY2xhc3NOYW1lPVwic2hvd0FjY291bnRcIj57YWNjb3VudEluZm99PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGJveC1ib3JkZXIgcC00IG10LTQgYm9yZGVyLTQgYm9yZGVyLXJlZC00MDBcIj5cbiAgICAgICAgICAgIDxoMj5Ob3QgeWV0IHNpZ24gaW48L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ronald/Projects/metamask-login/nextjs-version/pages/index.js */\"\n    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {\n      id: \"3379920139\",\n      children: \"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25hbGQvUHJvamVjdHMvbWV0YW1hc2stbG9naW4vbmV4dGpzLXZlcnNpb24vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEN5QixBQUlxQixBQVFZLFVBUGIsU0FHRyxHQUtkLG1JQUpBIiwiZmlsZSI6Ii9Vc2Vycy9yb25hbGQvUHJvamVjdHMvbWV0YW1hc2stbG9naW4vbmV4dGpzLXZlcnNpb24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWNjb3VudEluZm8sIHNldEFjY291bnRJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnQoKSB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgY29uc29sZS5sb2coXCJhY2NvdW50OlwiLCBhY2NvdW50KTtcbiAgICBzZXRBY2NvdW50SW5mbyhhY2NvdW50KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWV0YW1hc2sgTG9naW48L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9NZXRhTWFza19Gb3guc3ZnXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJlbmFibGVFdGhlcmV1bUJ1dHRvbiBibG9jayBweS0yIHB4LTQgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2dldEFjY291bnR9XG4gICAgICAgID5cbiAgICAgICAgICBFbmFibGUgRXRoZXJldW1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHthY2NvdW50SW5mbyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGJveC1ib3JkZXIgcC00IG10LTQgYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTQwMFwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICBBY2NvdW50OiA8c3BhbiBjbGFzc05hbWU9XCJzaG93QWNjb3VudFwiPnthY2NvdW50SW5mb308L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggYm94LWJvcmRlciBwLTQgbXQtNCBib3JkZXItNCBib3JkZXItcmVkLTQwMFwiPlxuICAgICAgICAgICAgPGgyPk5vdCB5ZXQgc2lnbiBpbjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+PC9mb290ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/ronald/Projects/metamask-login/nextjs-version/pages/index.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0UsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NILCtDQUFRLENBQUMsSUFBRCxDQUE5Qzs7QUFFQSxpQkFBZUksVUFBZixHQUE0QjtBQUMxQixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsUUFBUSxDQUFDQyxPQUFULENBQWlCO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBQWpCLENBQXZCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHSixRQUFRLENBQUMsQ0FBRCxDQUF4QjtBQUNBSyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixPQUF4QjtBQUNBTixJQUFBQSxjQUFjLENBQUNNLE9BQUQsQ0FBZDtBQUNEOztBQUVELHNCQUNFO0FBQUEsd0NBQWUsV0FBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUMsbUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLDBDQUFnQixLQUFoQjtBQUFBLDhCQUNFO0FBRUUsZUFBTyxFQUFFTCxVQUZYO0FBQUEsNENBQ1ksb0hBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQU9HRixXQUFXLGdCQUNWO0FBQUEsNENBQWUsMkRBQWY7QUFBQSwrQkFDRTtBQUFBO0FBQUEsK0NBQ1c7QUFBQSxnREFBZ0IsYUFBaEI7QUFBQSxzQkFBK0JBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURVLGdCQU9WO0FBQUEsNENBQWUseURBQWY7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0NEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FjY291bnRJbmZvLCBzZXRBY2NvdW50SW5mb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRBY2NvdW50KCkge1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudDpcIiwgYWNjb3VudCk7XG4gICAgc2V0QWNjb3VudEluZm8oYWNjb3VudCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1ldGFtYXNrIExvZ2luPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTWV0YU1hc2tfRm94LnN2Z1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZW5hYmxlRXRoZXJldW1CdXR0b24gYmxvY2sgcHktMiBweC00IGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbWQgdGV4dC13aGl0ZSBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwXCJcbiAgICAgICAgICBvbkNsaWNrPXtnZXRBY2NvdW50fVxuICAgICAgICA+XG4gICAgICAgICAgRW5hYmxlIEV0aGVyZXVtXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7YWNjb3VudEluZm8gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBib3gtYm9yZGVyIHAtNCBtdC00IGJvcmRlci00IGJvcmRlci1ncmVlbi00MDBcIj5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgQWNjb3VudDogPHNwYW4gY2xhc3NOYW1lPVwic2hvd0FjY291bnRcIj57YWNjb3VudEluZm99PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGJveC1ib3JkZXIgcC00IG10LTQgYm9yZGVyLTQgYm9yZGVyLXJlZC00MDBcIj5cbiAgICAgICAgICAgIDxoMj5Ob3QgeWV0IHNpZ24gaW48L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwiSG9tZSIsImFjY291bnRJbmZvIiwic2V0QWNjb3VudEluZm8iLCJnZXRBY2NvdW50IiwiYWNjb3VudHMiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJhY2NvdW50IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();