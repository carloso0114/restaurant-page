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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = (() => {\r\n    // container\r\n    const contentContainer = document.querySelector('#content');\r\n    const contact = document.createElement('div');\r\n    contact.setAttribute('id', 'contact');\r\n    contact.setAttribute('data-tab-content', '');\r\n    contact.innerHTML = `\r\n      <div class=\"hero\">\r\n      <h1>Contact us</h1>\r\n    </div>\r\n    <div class=\"contact-container\">\r\n      <div class=\"info\">\r\n        <div class=\"address\">\r\n          <p>\r\n            <i class=\"fi-xnsuxl-map-marker-solid\"></i>Gombe OUA 390<br />San\r\n            Kinshasa\r\n          </p>\r\n        </div>\r\n        <div class=\"hours\">\r\n          <p>\r\n            <i class=\"fi-cnsuhl-clock-solid\"></i\r\n            ><span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span\r\n            >8am-11pm\r\n          </p>\r\n        </div>\r\n        <div class=\"phone\">\r\n          <p><i class=\"fi-xnsrxl-phone-solid\"></i>(243)-999 999 999</p>\r\n        </div>\r\n        <div class=\"contact-form\">\r\n          <form onsubmit=\"return false\">\r\n            <h3><i class=\"fi-xwsuxl-envelope-solid\"></i>Message us</h3>\r\n            <div class=\"input-box\">\r\n              <input type=\"text\" required />\r\n              <span>Full Name</span>\r\n            </div>\r\n            <div class=\"input-box\">\r\n              <input type=\"text\" required />\r\n              <span>Email</span>\r\n            </div>\r\n            <div class=\"input-box\">\r\n              <textarea required></textarea>\r\n              <span>Type your message...</span>\r\n            </div>\r\n            <input type=\"submit\" value=\"Send\" />\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>`;\r\n  \r\n    contentContainer.appendChild(contact);\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = (() => {\r\n    const contentContainer = document.querySelector('#content');\r\n  \r\n    const home = document.createElement('div');\r\n    home.classList.add('tab-content');\r\n    home.innerHTML = `<div id=\"home\" class=\"active\" data-tab-content>\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"hero\">\r\n      <h1>My restaurant</h1>\r\n      <p>Tasty and affordable!</p>\r\n      <div class=\"btn-container\">\r\n        <a data-tab-target=\"#menu\" class=\"order-now\">Order Now</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"info\">\r\n      <div class=\"address\">\r\n        <span><i class=\"fi-xnsuxl-map-marker-solid\"></i></span>\r\n        <p>Cl 93 # 51B - 25<br />Barranquilla</p>\r\n      </div>\r\n      <div class=\"hours\">\r\n        <span><i class=\"fi-cnsuhl-clock-solid\"></i></span>\r\n        <p>\r\n          <span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span\r\n          >8am-11pm\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>`;\r\n  \r\n    contentContainer.appendChild(home);\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst tabs = document.querySelectorAll('[data-tab-target]');\r\nconst tabContents = document.querySelectorAll('[data-tab-content]');\r\n\r\nconst burger = document.querySelector('.hamburger');\r\n\r\nburger.addEventListener('click', () => {\r\n  document.querySelector('ul').classList.toggle('active');\r\n  burger.classList.toggle('toggle');\r\n});\r\n\r\ntabs.forEach((tab) => tab.addEventListener('click', () => {\r\n    const target = document.querySelector(tab.dataset.tabTarget);\r\n    tabContents.forEach((tabContent) => {\r\n      tabContent.classList.remove('active');\r\n    });\r\n    tabs.forEach((tab) => {\r\n      tab.classList.remove('red');\r\n    });\r\n    tab.classList.add('red');\r\n    target.classList.add('active');\r\n  }));\r\n  \r\n  document.querySelector('.order-now').addEventListener('click', () => {\r\n    document.querySelector('[data-tab-target=\"#menu\"]').classList.add('red');\r\n  });\r\n  \r\n  document.querySelector('[type=\"submit\"]').addEventListener('click', () => {\r\n    document.querySelector('form').reset();\r\n  });\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\nconst renderMenuPage = (() => {\r\n    const contentContainer = document.querySelector('#content');\r\n    const menu = document.createElement('div');\r\n    menu.setAttribute('id', 'menu');\r\n    menu.setAttribute('data-tab-content', '');\r\n    menu.innerHTML = `\r\n    <div class=\"hero\">\r\n    <h1>Menu</h1>\r\n  </div>\r\n  <div class=\"menu-container\">\r\n    <div class=\"menu-item\">\r\n      <img src=\"./images/hamburger.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Hamburger: <span>$2.49</span></h4>\r\n        <p>\r\n          Buns, patty, tomato, onions, lettuce, and our secret family\r\n          recipe.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <img src=\"./images/cheeseburger.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Cheeseburger: <span>$2.99</span></h4>\r\n        <p>Similar to our hamburger, but with cheese.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <img src=\"./images/double-cheeseburger.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Double Cheeseburger: <span>$3.49</span></h4>\r\n        <p>Similar to our cheeseburger, but with an extra patty.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <img src=\"./images/steak.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Steak: <span>$11.99</span></h4>\r\n        <p>A juicy steak made just how you like it.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <img src=\"./images/ribs.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>BBQ Ribs: <span>$8.99</span></h4>\r\n        <p>Barbecue ribs with your choice of a add-ons.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <img src=\"./images/grilled-cheese.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Grilled Cheese Sandwich: <span>$4.99</span></h4>\r\n        <p>\r\n          A toasted and grilled cheese sandwich, dipped in our special\r\n          sauce.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <img src=\"./images/caesar-salad.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Caesar Salad: <span>$7.99</span></h4>\r\n        <p>\r\n          Your typical caesar salad that comes with your choice of\r\n          dressings.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <img src=\"./images/french-fries.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>French Fries: <span>$1.99</span></h4>\r\n        <p>\r\n          Sometimes you don't want to eat your burger alone, why not add\r\n          some french fries?\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>`;\r\n  \r\n    contentContainer.appendChild(menu);\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nconst pageLoad = (() => {\r\n    const contentContainer = document.querySelector('#content');\r\n  \r\n    const header = document.createElement('header');\r\n    header.innerHTML = `\r\n    <nav>\r\n    <h2>Restaurant</h2>\r\n    <a href=\"#\" class=\"hamburger\">\r\n      <span class=\"line line1\"></span>\r\n      <span class=\"line line2\"></span>\r\n      <span class=\"line line3\"></span>\r\n    </a>\r\n    <ul class=\"links\">\r\n      <li data-tab-target=\"#home\" class=\"tab red\">Home</li>\r\n      <li data-tab-target=\"#menu\" class=\"tab\">Menu</li>\r\n      <li data-tab-target=\"#contact\" class=\"tab\">Contact us</li>\r\n    </ul>\r\n  </nav>`;\r\n  \r\n    contentContainer.appendChild(header);\r\n    })();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

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