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

/***/ "./src/styles/css/index.css":
/*!**********************************!*\
  !*** ./src/styles/css/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://romario-frontend/./src/styles/css/index.css?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _texts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./texts.js */ \"./src/scripts/texts.js\");\n/* harmony import */ var _styles_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/css/index.css */ \"./src/styles/css/index.css\");\n\r\n\r\n\r\n/*************** Mobile menu ****************/\r\nconst menuMechanisms = event => {\r\n  if (window.innerWidth <= 700) {\r\n    if (event.target.alt === 'voltar ao topo') return\r\n    else {\r\n      window.document.body.classList.toggle('body--active')\r\n\r\n      const spans = [...document.querySelectorAll('.burguer')]\r\n      spans.forEach((span, index) => {\r\n        if (index === 0) span.classList.toggle('close-left')\r\n        else if (index === 1) span.classList.toggle('close-right')\r\n        else span.classList.toggle('fade')\r\n      })\r\n\r\n      const menu = document.querySelector('.a-header__navList')\r\n      menu.classList.toggle('a-header__mobile--active')\r\n    }\r\n  }\r\n}\r\n\r\nconst mobileMenuBtn = document.querySelector('.mobile-menu__container')\r\nmobileMenuBtn.addEventListener('click', menuMechanisms)\r\n\r\n/*************** Smooth scroll on intern links ****************/\r\nconst internLinks = [...document.querySelectorAll('[href^=\"#')]\r\ninternLinks.forEach(link => {\r\n  link.addEventListener('click', event => {\r\n    event.preventDefault()\r\n    // Makes menu close\r\n    menuMechanisms(event)\r\n    // Smooth scroll\r\n    if (event.target.getAttribute('href') === '#header' || event.target.alt === 'voltar ao topo') {\r\n      window.scroll({\r\n        top: 0,\r\n        behavior: 'smooth'\r\n      })\r\n    } else if (event.target.getAttribute('href') === '#contacts') {\r\n      window.scroll({\r\n        top: window.document.body.offsetHeight,\r\n        behavior: 'smooth'\r\n      })\r\n    } else {\r\n      const element = document.querySelector(event.target.getAttribute('href'))\r\n      window.scroll({\r\n        top: element.offsetTop,\r\n        behavior: 'smooth'\r\n      })\r\n    }\r\n  })\r\n})\r\n\r\n/*************** Animate on scroll ****************/\r\nconst animations = () => {\r\n  const { pageYOffset, innerHeight } = window\r\n  const elementsToAnimate = [...document.querySelectorAll('[data-aos]')]\r\n  elementsToAnimate.forEach(element => {\r\n    if (element.offsetTop - pageYOffset <= innerHeight - (element.offsetTop - pageYOffset) / 7) {\r\n      element.classList.add('animated')\r\n    }\r\n  })\r\n}\r\n\r\nwindow.addEventListener('scroll', animations)\r\nwindow.addEventListener('load', animations)\r\n\r\n/*************** Animations on skills section  ****************/\r\nconst insertContent = event => {\r\n  const tec = event.target.getAttribute('data-skill')\r\n  if (tec !== null) {\r\n    const obj = _texts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(obj => obj.title === tec)\r\n    title.innerHTML = obj.title\r\n    content.innerHTML = obj.description\r\n  }\r\n}\r\nconst skills = [...document.querySelectorAll('.skill')]\r\nconst title = document.querySelector('.e-skills__contents h3')\r\nconst content = document.querySelector('.e-skills__contents p')\r\nskills.forEach(skill => {\r\n  skill.addEventListener('mouseover', insertContent)\r\n  skill.addEventListener('click', insertContent)\r\n  skill.addEventListener('mouseout', () => {\r\n    title.innerHTML = 'Tecnologias'\r\n    content.innerHTML = `\r\n    Hover over the cards to see a brief abstract about the technology. <br />\r\n              If you are in a mobile device, just click on the cards to see the abstract.\r\n    `\r\n  })\r\n})\r\n\r\n/*************** Display back to top button  ****************/\r\nwindow.addEventListener('scroll', () => {\r\n  if (window.pageYOffset >= document.querySelector('#services').offsetTop)\r\n    document.querySelector('.back-to-top').classList.add('back-to-top--active')\r\n  else {\r\n    if (document.querySelector('.back-to-top--active'))\r\n      document.querySelector('.back-to-top--active').classList.remove('back-to-top--active')\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/texts.js":
/*!******************************!*\
  !*** ./src/scripts/texts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst texts = [\r\n  {\r\n    title: 'HTML',\r\n    description: `\r\n            Hyper text markup language. <br /> \r\n            Creates all the page's body, texts, images etc. <br />\r\n            1 year and 1 month experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'CSS',\r\n    description: `\r\n            Cascading style sheets. <br />\r\n            Brings up a better visual to the website, as well as animations and effects. <br />\r\n            1 year and 1 month experience.\r\n\r\n        `\r\n  },\r\n  {\r\n    title: 'JavaScript',\r\n    description: `\r\n            Programming language. <br />\r\n            Delivers dinamic to the website, making it more pleasant to the user. <br />\r\n            1 year and 1 month experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'Git',\r\n    description: `\r\n            Code versionament system. <br />\r\n            Makes teamwork faster allowing organizing the code in a simply and fast way. <br />\r\n            8 Months experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'React',\r\n    description: `\r\n            Javascript library. <br />\r\n            Eases the construction and expansion of the project while gives a better performance. <br />\r\n            11 months experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'TypeScript',\r\n    description: `\r\n            Programming language based on javascript. <br />\r\n            Adds static types to javascript, bringing benefits as the capture of errors during development. <br />\r\n            8 months experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'SASS',\r\n    description: `\r\n            CSS preprocessor. <br />\r\n            Auxiliates in the creation and organization of the style sheets. <br />\r\n            6 months experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'Jquery',\r\n    description: `\r\n            Javascript library. <br />\r\n            Helps in DOM manipulation, also brings solutions to make animations,\r\n            or HTTP requests. <br />\r\n            2 months experience.\r\n        `\r\n  }\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (texts);\r\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/texts.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;