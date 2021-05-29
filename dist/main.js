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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = (() => {\r\n  const contactLink = document.querySelector('#contact-link')\r\n  const body = document.querySelector('#content');\r\n\r\n  contactLink.addEventListener(\"click\", e => {\r\n    body.innerHTML = `\r\n  <div class=\"container\">\r\n\r\n<div class=\"row\">\r\n  <h1 class=\"header-title\"> Contact </h1>\r\n  <hr>\r\n  <div class=\"col-sm-6\">\r\n    <iframe width=\"100%\" height=\"320px;\" frameborder=\"0\" style=\"border:0\"\r\n      src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5538.622139199621!2d-74.82882132173242!3d11.008790582397756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c84c74a8641276e!2sTEXANO%201931%20COMIDAS%20RAPIDAS%20Y%20ASADOS!5e0!3m2!1ses!2sco!4v1622259091106!5m2!1ses!2sco\"\r\n      allowfullscreen></iframe>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6\">\r\n    <form action=\"form.php\" class=\"contact-form\" method=\"post\">\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"nm\" placeholder=\"Name\" required=\"\" autofocus=\"\">\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group form_left\">\r\n        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"em\" placeholder=\"Email\" required=\"\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <textarea class=\"form-control textarea-contact\" rows=\"5\" id=\"comment\" name=\"FB\"\r\n          placeholder=\"Type Your Message/Feedback here...\" required=\"\"></textarea>\r\n        <br>\r\n        <button class=\"btn btn-dark\"> <i class=\"fas fa-paper-plane\"></i> Send </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"container second-portion\">\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-6 col-lg-4\">\r\n    <div class=\"box\">\r\n      <div class=\"icon\">\r\n        <div class=\"info\">\r\n          <h3 class=\"title\">MAIL</h3>\r\n          <p>\r\n            <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> thisrestaurant@myrestaurant.com\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"space\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xs-12 col-sm-6 col-lg-4\">\r\n    <div class=\"box\">\r\n      <div class=\"icon\">\r\n        <div class=\"info\">\r\n          <h3 class=\"title\">CONTACT</h3>\r\n          <p>\r\n            <i class=\"fab fa-whatsapp-square\"></i> (+57)-9624XXXXX\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"space\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xs-12 col-sm-6 col-lg-4\">\r\n    <div class=\"box\">\r\n      <div class=\"icon\">\r\n        <div class=\"info\">\r\n          <h3 class=\"title\">ADDRESS</h3>\r\n          <p>\r\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> 15/3 Junction Plot Shree Krishna Krupa\",\r\n            Rajkot - 360001.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n    `\r\n  })\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = (() => {\r\n  const contentContainer = document.querySelector('#content');\r\n\r\n  const homeHtml = `\r\n    <main>\r\n    <h1 class=\"text-center\"> Restaurant Page </h1>\r\n  <div class=\"card text-white bg-dark mb-3 mx-auto\" style=\"max-width: 18rem;\">\r\n  <div class=\"card-body\">\r\n  <h5 class=\"card-title\">Delicious FastFood</h5>\r\n  <p class=\"card-text\">Prepare yourself to taste the heaven in a dish.</p>\r\n  </div>\r\n  </div>\r\n  <div class=\"card text-white bg-dark mb-3 mx-auto\" style=\"max-width: 18rem;\">\r\n  <div class=\"card-header\">Hours</div>\r\n  <div class=\"card-body\">\r\n  <h5 class=\"card-title\">24/7</h5>\r\n  <p class=\"card-text\"> From Thursday to Sunday only.</p>\r\n  </div>\r\n  </div>\r\n  <div class=\"card text-white bg-dark mb-3 mx-auto\" style=\"max-width: 18rem;\">\r\n  <div class=\"card-header\">Location</div>\r\n  <div class=\"card-body\">\r\n  <h5 class=\"card-title\">Barranquilla, Colombia</h5>\r\n  <p class=\"card-text\">742 Evergreen Terrace.</p>\r\n  </div>\r\n  </div>\r\n  </main>`\r\n  contentContainer.innerHTML = homeHtml;\r\n\r\n  const homeLink = document.querySelector('#home-link')\r\n  homeLink.addEventListener(\"click\", e => {\r\n    contentContainer.innerHTML = homeHtml;\r\n  })\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\nconst renderMenu = (() => {\r\n    const menuLink = document.querySelector('#menu-link');\r\n    const body = document.querySelector('#content');\r\n    \r\n\r\n    menuLink.addEventListener(\"click\", e => {\r\n        body.classList.remove('test');\r\n        body.classList.add('test2');\r\n        body.innerHTML = `\r\n        <div class=\"card-group\">\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Card title</h5>\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Card title</h5>\r\n            <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Card title</h5>\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          </div>\r\n        </div>\r\n        </div>\r\n        <div class=\"card-group\">\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Card title</h5>\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Card title</h5>\r\n            <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Card title</h5>\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          </div>\r\n        </div>\r\n        </div>\r\n        <div class=\"card-group\">\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Card title</h5>\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Card title</h5>\r\n            <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Card title</h5>\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          </div>\r\n        </div>\r\n        </div>`\r\n    })\r\n\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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