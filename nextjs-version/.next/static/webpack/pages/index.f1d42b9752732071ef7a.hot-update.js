"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_ronald_Projects_metamask_login_nextjs_version_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ronald_Projects_metamask_login_nextjs_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ronald_Projects_metamask_login_nextjs_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_ronald_Projects_metamask_login_nextjs_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/ronald/Projects/metamask-login/nextjs-version/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      accountInfo = _useState[0],\n      setAccountInfo = _useState[1];\n\n  function getAccount() {\n    return _getAccount.apply(this, arguments);\n  }\n\n  function _getAccount() {\n    _getAccount = (0,_Users_ronald_Projects_metamask_login_nextjs_version_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_ronald_Projects_metamask_login_nextjs_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var accounts, account;\n      return _Users_ronald_Projects_metamask_login_nextjs_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              accounts = _context.sent;\n              account = accounts[0];\n              console.log(\"account:\", account);\n              setAccountInfo(account);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _getAccount.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"jsx-2793405192\" + \" \" + \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        className: \"jsx-2793405192\",\n        children: \"Metamask Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/MetaMask_Fox.svg\",\n        className: \"jsx-2793405192\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n      className: \"jsx-2793405192\" + \" \" + \"p-6\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        onClick: getAccount,\n        className: \"jsx-2793405192\" + \" \" + \"enableEthereumButton py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700\",\n        children: \"Enable Ethereum\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), accountInfo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"jsx-2793405192\" + \" \" + \"box-border p-4 mt-4 border-4 border-green-400\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n          className: \"jsx-2793405192\",\n          children: [\"Account: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            className: \"jsx-2793405192\" + \" \" + \"showAccount\",\n            children: accountInfo\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 24\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"jsx-2793405192\" + \" \" + \"inline-block\t p-4 mt-4 border-4 border-red-400\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n          className: \"jsx-2793405192\",\n          children: \"Not yet sign in\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"footer\", {\n      className: \"jsx-2793405192\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"2085888330\",\n      children: \"\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25hbGQvUHJvamVjdHMvbWV0YW1hc2stbG9naW4vbmV4dGpzLXZlcnNpb24vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQiIsImZpbGUiOiIvVXNlcnMvcm9uYWxkL1Byb2plY3RzL21ldGFtYXNrLWxvZ2luL25leHRqcy12ZXJzaW9uL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FjY291bnRJbmZvLCBzZXRBY2NvdW50SW5mb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRBY2NvdW50KCkge1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudDpcIiwgYWNjb3VudCk7XG4gICAgc2V0QWNjb3VudEluZm8oYWNjb3VudCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1ldGFtYXNrIExvZ2luPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTWV0YU1hc2tfRm94LnN2Z1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZW5hYmxlRXRoZXJldW1CdXR0b24gcHktMiBweC00IGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbWQgdGV4dC13aGl0ZSBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwXCJcbiAgICAgICAgICBvbkNsaWNrPXtnZXRBY2NvdW50fVxuICAgICAgICA+XG4gICAgICAgICAgRW5hYmxlIEV0aGVyZXVtXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7YWNjb3VudEluZm8gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtYm9yZGVyIHAtNCBtdC00IGJvcmRlci00IGJvcmRlci1ncmVlbi00MDBcIj5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgQWNjb3VudDogPHNwYW4gY2xhc3NOYW1lPVwic2hvd0FjY291bnRcIj57YWNjb3VudEluZm99PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1x0IHAtNCBtdC00IGJvcmRlci00IGJvcmRlci1yZWQtNDAwXCI+XG4gICAgICAgICAgICA8aDI+Tm90IHlldCBzaWduIGluPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cblxuICAgICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\\n/*@ sourceURL=/Users/ronald/Projects/metamask-login/nextjs-version/pages/index.js */\"\n    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3379920139\",\n      children: \"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25hbGQvUHJvamVjdHMvbWV0YW1hc2stbG9naW4vbmV4dGpzLXZlcnNpb24vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEN5QixBQUlxQixBQVFZLFVBUGIsU0FHRyxHQUtkLG1JQUpBIiwiZmlsZSI6Ii9Vc2Vycy9yb25hbGQvUHJvamVjdHMvbWV0YW1hc2stbG9naW4vbmV4dGpzLXZlcnNpb24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWNjb3VudEluZm8sIHNldEFjY291bnRJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnQoKSB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgY29uc29sZS5sb2coXCJhY2NvdW50OlwiLCBhY2NvdW50KTtcbiAgICBzZXRBY2NvdW50SW5mbyhhY2NvdW50KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWV0YW1hc2sgTG9naW48L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9NZXRhTWFza19Gb3guc3ZnXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJlbmFibGVFdGhlcmV1bUJ1dHRvbiBweS0yIHB4LTQgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2dldEFjY291bnR9XG4gICAgICAgID5cbiAgICAgICAgICBFbmFibGUgRXRoZXJldW1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHthY2NvdW50SW5mbyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1ib3JkZXIgcC00IG10LTQgYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTQwMFwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICBBY2NvdW50OiA8c3BhbiBjbGFzc05hbWU9XCJzaG93QWNjb3VudFwiPnthY2NvdW50SW5mb308L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXHQgcC00IG10LTQgYm9yZGVyLTQgYm9yZGVyLXJlZC00MDBcIj5cbiAgICAgICAgICAgIDxoMj5Ob3QgeWV0IHNpZ24gaW48L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ronald/Projects/metamask-login/nextjs-version/pages/index.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"Ques9GB/DFsMTDMkcPPOeuaivv0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixrQkFBc0NELCtDQUFRLENBQUMsSUFBRCxDQUE5QztBQUFBLE1BQU9FLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRDZCLFdBR2RDLFVBSGM7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFRBRzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3lCQyxRQUFRLENBQUNDLE9BQVQsQ0FBaUI7QUFBRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQWpCLENBRHpCOztBQUFBO0FBQ1FDLGNBQUFBLFFBRFI7QUFFUUMsY0FBQUEsT0FGUixHQUVrQkQsUUFBUSxDQUFDLENBQUQsQ0FGMUI7QUFHRUUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkYsT0FBeEI7QUFDQU4sY0FBQUEsY0FBYyxDQUFDTSxPQUFELENBQWQ7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FINkI7QUFBQTtBQUFBOztBQVU3QixzQkFDRTtBQUFBLHdDQUFlLFdBQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDLG1CQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSwwQ0FBZ0IsS0FBaEI7QUFBQSw4QkFDRTtBQUVFLGVBQU8sRUFBRUwsVUFGWDtBQUFBLDRDQUNZLDhHQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFPR0YsV0FBVyxnQkFDVjtBQUFBLDRDQUFlLCtDQUFmO0FBQUEsK0JBQ0U7QUFBQTtBQUFBLCtDQUNXO0FBQUEsZ0RBQWdCLGFBQWhCO0FBQUEsc0JBQStCQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVSxnQkFPVjtBQUFBLDRDQUFlLGdEQUFmO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRDs7R0F6RHVCRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWNjb3VudEluZm8sIHNldEFjY291bnRJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnQoKSB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgY29uc29sZS5sb2coXCJhY2NvdW50OlwiLCBhY2NvdW50KTtcbiAgICBzZXRBY2NvdW50SW5mbyhhY2NvdW50KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWV0YW1hc2sgTG9naW48L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9NZXRhTWFza19Gb3guc3ZnXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJlbmFibGVFdGhlcmV1bUJ1dHRvbiBweS0yIHB4LTQgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2dldEFjY291bnR9XG4gICAgICAgID5cbiAgICAgICAgICBFbmFibGUgRXRoZXJldW1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHthY2NvdW50SW5mbyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1ib3JkZXIgcC00IG10LTQgYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTQwMFwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICBBY2NvdW50OiA8c3BhbiBjbGFzc05hbWU9XCJzaG93QWNjb3VudFwiPnthY2NvdW50SW5mb308L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXHQgcC00IG10LTQgYm9yZGVyLTQgYm9yZGVyLXJlZC00MDBcIj5cbiAgICAgICAgICAgIDxoMj5Ob3QgeWV0IHNpZ24gaW48L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwiSG9tZSIsImFjY291bnRJbmZvIiwic2V0QWNjb3VudEluZm8iLCJnZXRBY2NvdW50IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJhY2NvdW50IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});