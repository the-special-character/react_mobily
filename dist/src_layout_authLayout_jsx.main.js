"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_mobily"] = self["webpackChunkreact_mobily"] || []).push([["src_layout_authLayout_jsx"],{

/***/ "./src/layout/authLayout.jsx":
/*!***********************************!*\
  !*** ./src/layout/authLayout.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/authContext */ \"./src/context/authContext.jsx\");\n\n\n\n\nvar AuthLayout = function AuthLayout() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_1__.AuthContext),\n      user = _useContext.user;\n\n  if (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {\n      to: \"/\",\n      replace: true\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"max-w-md w-full space-y-8\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"mx-auto h-12 w-auto\",\n    src: \"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\",\n    alt: \"Workflow\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"mt-6 text-center text-3xl font-extrabold text-gray-900\"\n  }, \"Sign in to your account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"mt-2 text-center text-sm text-gray-600\"\n  }, \"Or\", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"#register\",\n    className: \"font-medium text-indigo-600 hover:text-indigo-500\"\n  }, \"start your 14-day free trial\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthLayout);\n\n//# sourceURL=webpack://react_mobily/./src/layout/authLayout.jsx?");

/***/ })

}]);