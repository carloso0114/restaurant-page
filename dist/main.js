/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = (() => {\r\n  const contactLink = document.querySelector('#contact-link')\r\n  const body = document.querySelector('#content');\r\n\r\n  contactLink.addEventListener(\"click\", e => {\r\n    body.innerHTML = `contact`\r\n  })\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = (() => {\r\n  const contentContainer = document.querySelector('#content');\r\n\r\n  const homeHtml = `\r\n    <main>\r\n    <h1 class=\"text-center\"> Restaurant Page </h1>\r\n<div class=\"card text-white bg-dark mb-3 mx-auto\" style=\"max-width: 18rem;\">\r\n<div class=\"card-body\">\r\n  <h5 class=\"card-title\">Delicious FastFood</h5>\r\n  <p class=\"card-text\">Prepare yourself to taste the heaven in a dish.</p>\r\n</div>\r\n</div>\r\n<div class=\"card text-white bg-dark mb-3 mx-auto\" style=\"max-width: 18rem;\">\r\n<div class=\"card-header\">Hours</div>\r\n<div class=\"card-body\">\r\n  <h5 class=\"card-title\">24/7</h5>\r\n  <p class=\"card-text\"> From Thursday to Sunday only.</p>\r\n</div>\r\n</div>\r\n<div class=\"card text-white bg-dark mb-3 mx-auto\" style=\"max-width: 18rem;\">\r\n<div class=\"card-header\">Location</div>\r\n<div class=\"card-body\">\r\n  <h5 class=\"card-title\">Barranquilla, Colombia</h5>\r\n  <p class=\"card-text\">742 Evergreen Terrace.</p>\r\n</div>\r\n</div>\r\n    </main>`\r\n  contentContainer.innerHTML = homeHtml;\r\n\r\n  const homeLink = document.querySelector('#home-link')\r\n  homeLink.addEventListener(\"click\", e => {\r\n    contentContainer.innerHTML = homeHtml;\r\n  })\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\nconst renderMenu = (() => {\r\n    const menuLink = document.querySelector('#menu-link');\r\n    const body = document.querySelector('#content');\r\n    \r\n\r\n    menuLink.addEventListener(\"click\", e => {\r\n        body.classList.remove('test');\r\n        body.classList.add('test2');\r\n        body.innerHTML = `menu`\r\n    })\r\n\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nconst pageLoad = (() => {\r\n  const contentContainer = document.querySelector('body');\r\n  \r\n  const header = document.createElement('header');\r\n  header.innerHTML = `\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"collapse navbar-collapse justify-content-md-center\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" id=\"home-link\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" id=\"menu-link\">Menu</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" id=\"contact-link\">Contact Us</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n  </nav>`;\r\n  \r\n  const content = document.createElement('div');\r\n  content.setAttribute('id', 'content');\r\n\r\n\r\n\r\n  const footer = document.createElement('footer');\r\n\r\n  footer.classList.add('py-4','bg-dark','flex-shrink-0');\r\n  footer.innerHTML=`\r\n  <div class=\"container text-center\">\r\n    <a href='https://www.freepik.com/photos/background' class='text-muted'>Background photo created by benzoix - www.freepik.com</a>\r\n  </div>`;\r\n\r\n  contentContainer.append(header);\r\n  contentContainer.append(content);\r\n  contentContainer.append(footer);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;