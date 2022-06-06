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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _texts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./texts.js */ \"./src/scripts/texts.js\");\n/* harmony import */ var _styles_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/css/index.css */ \"./src/styles/css/index.css\");\n/* harmony import */ var _public_assets_arrow_up_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/assets/arrow-up.svg */ \"./public/assets/arrow-up.svg\");\n/* harmony import */ var _public_assets_code_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/code-solid.svg */ \"./public/assets/code-solid.svg\");\n/* harmony import */ var _public_assets_css3_alt_brands_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/css3-alt-brands.svg */ \"./public/assets/css3-alt-brands.svg\");\n/* harmony import */ var _public_assets_expand_arrows_alt_solid_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/assets/expand-arrows-alt-solid.svg */ \"./public/assets/expand-arrows-alt-solid.svg\");\n/* harmony import */ var _public_assets_file_download_solid_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/assets/file-download-solid.svg */ \"./public/assets/file-download-solid.svg\");\n/* harmony import */ var _public_assets_git_alt_brands_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/assets/git-alt-brands.svg */ \"./public/assets/git-alt-brands.svg\");\n/* harmony import */ var _public_assets_github_square_brands_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/github-square-brands.svg */ \"./public/assets/github-square-brands.svg\");\n/* harmony import */ var _public_assets_hand_point_up_regular_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/hand-point-up-regular.svg */ \"./public/assets/hand-point-up-regular.svg\");\n/* harmony import */ var _public_assets_html5_brands_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/assets/html5-brands.svg */ \"./public/assets/html5-brands.svg\");\n/* harmony import */ var _public_assets_jquery_brands_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/assets/jquery-brands.svg */ \"./public/assets/jquery-brands.svg\");\n/* harmony import */ var _public_assets_js_square_brands_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/assets/js-square-brands.svg */ \"./public/assets/js-square-brands.svg\");\n/* harmony import */ var _public_assets_link_solid_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/assets/link-solid.svg */ \"./public/assets/link-solid.svg\");\n/* harmony import */ var _public_assets_linkedin_brands_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/assets/linkedin-brands.svg */ \"./public/assets/linkedin-brands.svg\");\n/* harmony import */ var _public_assets_node_js_brands_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/assets/node-js-brands.svg */ \"./public/assets/node-js-brands.svg\");\n/* harmony import */ var _public_assets_palette_solid_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../public/assets/palette-solid.svg */ \"./public/assets/palette-solid.svg\");\n/* harmony import */ var _public_assets_postgresql_brands_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../public/assets/postgresql-brands.svg */ \"./public/assets/postgresql-brands.svg\");\n/* harmony import */ var _public_assets_react_brands_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../public/assets/react-brands.svg */ \"./public/assets/react-brands.svg\");\n/* harmony import */ var _public_assets_sass_brands_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../public/assets/sass-brands.svg */ \"./public/assets/sass-brands.svg\");\n/* harmony import */ var _public_assets_share_square_solid_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../public/assets/share-square-solid.svg */ \"./public/assets/share-square-solid.svg\");\n/* harmony import */ var _public_assets_sitemap_solid_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../public/assets/sitemap-solid.svg */ \"./public/assets/sitemap-solid.svg\");\n/* harmony import */ var _public_assets_typescript_brands_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../public/assets/typescript-brands.svg */ \"./public/assets/typescript-brands.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*************** Mobile menu ****************/\r\nconst menuMechanisms = event => {\r\n  if (window.innerWidth <= 700) {\r\n    if (event.target.alt === 'voltar ao topo') return\r\n    else {\r\n      window.document.body.classList.toggle('body--active')\r\n\r\n      const spans = [...document.querySelectorAll('.burguer')]\r\n      spans.forEach((span, index) => {\r\n        if (index === 0) span.classList.toggle('close-left')\r\n        else if (index === 1) span.classList.toggle('close-right')\r\n        else span.classList.toggle('fade')\r\n      })\r\n\r\n      const menu = document.querySelector('.a-header__navList')\r\n      menu.classList.toggle('a-header__mobile--active')\r\n    }\r\n  }\r\n}\r\n\r\nconst mobileMenuBtn = document.querySelector('.mobile-menu__container')\r\nmobileMenuBtn.addEventListener('click', menuMechanisms)\r\n\r\n/*************** Smooth scroll on intern links ****************/\r\nconst internLinks = [...document.querySelectorAll('[href^=\"#')]\r\ninternLinks.forEach(link => {\r\n  link.addEventListener('click', event => {\r\n    event.preventDefault()\r\n    // Makes menu close\r\n    menuMechanisms(event)\r\n    // Smooth scroll\r\n    if (event.target.getAttribute('href') === '#header' || event.target.alt === 'voltar ao topo') {\r\n      window.scroll({\r\n        top: 0,\r\n        behavior: 'smooth'\r\n      })\r\n    } else if (event.target.getAttribute('href') === '#contacts') {\r\n      window.scroll({\r\n        top: window.document.body.offsetHeight,\r\n        behavior: 'smooth'\r\n      })\r\n    } else {\r\n      const element = document.querySelector(event.target.getAttribute('href'))\r\n      window.scroll({\r\n        top: element.offsetTop,\r\n        behavior: 'smooth'\r\n      })\r\n    }\r\n  })\r\n})\r\n\r\n/*************** Animate on scroll ****************/\r\nconst animations = () => {\r\n  const { pageYOffset, innerHeight } = window\r\n  const elementsToAnimate = [...document.querySelectorAll('[data-aos]')]\r\n  elementsToAnimate.forEach(element => {\r\n    if (element.offsetTop - pageYOffset <= innerHeight - (element.offsetTop - pageYOffset) / 7) {\r\n      element.classList.add('animated')\r\n    }\r\n  })\r\n}\r\n\r\nwindow.addEventListener('scroll', animations)\r\nwindow.addEventListener('load', animations)\r\n\r\n/*************** Animations on skills section  ****************/\r\nconst insertContent = event => {\r\n  const tec = event.target.getAttribute('data-skill')\r\n  if (tec !== null) {\r\n    const obj = _texts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(obj => obj.title === tec)\r\n    title.innerHTML = obj.title\r\n    content.innerHTML = obj.description\r\n  }\r\n}\r\nconst skills = [...document.querySelectorAll('.skill')]\r\nconst title = document.querySelector('.e-skills__contents h3')\r\nconst content = document.querySelector('.e-skills__contents p')\r\nskills.forEach(skill => {\r\n  skill.addEventListener('mouseover', insertContent)\r\n  skill.addEventListener('click', insertContent)\r\n  skill.addEventListener('mouseout', () => {\r\n    title.innerHTML = 'Tecnologias'\r\n    content.innerHTML = `\r\n    Hover over the cards to see a brief abstract about the technology. <br />\r\n              If you are in a mobile device, just click on the cards to see the abstract.\r\n    `\r\n  })\r\n})\r\n\r\n/*************** Display back to top button  ****************/\r\nwindow.addEventListener('scroll', () => {\r\n  if (window.pageYOffset >= document.querySelector('#services').offsetTop)\r\n    document.querySelector('.back-to-top').classList.add('back-to-top--active')\r\n  else {\r\n    if (document.querySelector('.back-to-top--active'))\r\n      document.querySelector('.back-to-top--active').classList.remove('back-to-top--active')\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/texts.js":
/*!******************************!*\
  !*** ./src/scripts/texts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst texts = [\r\n  {\r\n    title: 'HTML',\r\n    description: `\r\n            Hyper text markup language. <br /> \r\n            Creates all the page's body, texts, images etc. <br />\r\n            1 year and 1 month experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'CSS',\r\n    description: `\r\n            Cascading style sheets. <br />\r\n            Brings up a better visual to the website, as well as animations and effects. <br />\r\n            1 year and 1 month experience.\r\n\r\n        `\r\n  },\r\n  {\r\n    title: 'JavaScript',\r\n    description: `\r\n            Programming language. <br />\r\n            Delivers dinamic to the website, making it more pleasant to the user. <br />\r\n            1 year and 1 month experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'Git',\r\n    description: `\r\n            Code versionament system. <br />\r\n            Makes teamwork faster allowing organizing the code in a simply and fast way. <br />\r\n            8 Months experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'React',\r\n    description: `\r\n            Javascript library. <br />\r\n            Eases the construction and expansion of the project while gives a better performance. <br />\r\n            11 months experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'TypeScript',\r\n    description: `\r\n            Programming language based on javascript. <br />\r\n            Adds static types to javascript, bringing benefits as the capture of errors during development. <br />\r\n            8 months experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'SASS',\r\n    description: `\r\n            CSS preprocessor. <br />\r\n            Auxiliates in the creation and organization of the style sheets. <br />\r\n            6 months experience.\r\n        `\r\n  },\r\n  {\r\n    title: 'Jquery',\r\n    description: `\r\n            Javascript library. <br />\r\n            Helps in DOM manipulation, also brings solutions to make animations,\r\n            or HTTP requests. <br />\r\n            2 months experience.\r\n        `\r\n  }\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (texts);\r\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/texts.js?");

/***/ }),

/***/ "./public/assets/arrow-up.svg":
/*!************************************!*\
  !*** ./public/assets/arrow-up.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/arrow-up..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/arrow-up.svg?");

/***/ }),

/***/ "./public/assets/code-solid.svg":
/*!**************************************!*\
  !*** ./public/assets/code-solid.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/code-solid..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/code-solid.svg?");

/***/ }),

/***/ "./public/assets/css3-alt-brands.svg":
/*!*******************************************!*\
  !*** ./public/assets/css3-alt-brands.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/css3-alt-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/css3-alt-brands.svg?");

/***/ }),

/***/ "./public/assets/expand-arrows-alt-solid.svg":
/*!***************************************************!*\
  !*** ./public/assets/expand-arrows-alt-solid.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/expand-arrows-alt-solid..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/expand-arrows-alt-solid.svg?");

/***/ }),

/***/ "./public/assets/file-download-solid.svg":
/*!***********************************************!*\
  !*** ./public/assets/file-download-solid.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/file-download-solid..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/file-download-solid.svg?");

/***/ }),

/***/ "./public/assets/git-alt-brands.svg":
/*!******************************************!*\
  !*** ./public/assets/git-alt-brands.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/git-alt-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/git-alt-brands.svg?");

/***/ }),

/***/ "./public/assets/github-square-brands.svg":
/*!************************************************!*\
  !*** ./public/assets/github-square-brands.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/github-square-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/github-square-brands.svg?");

/***/ }),

/***/ "./public/assets/hand-point-up-regular.svg":
/*!*************************************************!*\
  !*** ./public/assets/hand-point-up-regular.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/hand-point-up-regular..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/hand-point-up-regular.svg?");

/***/ }),

/***/ "./public/assets/html5-brands.svg":
/*!****************************************!*\
  !*** ./public/assets/html5-brands.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/html5-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/html5-brands.svg?");

/***/ }),

/***/ "./public/assets/jquery-brands.svg":
/*!*****************************************!*\
  !*** ./public/assets/jquery-brands.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/jquery-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/jquery-brands.svg?");

/***/ }),

/***/ "./public/assets/js-square-brands.svg":
/*!********************************************!*\
  !*** ./public/assets/js-square-brands.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/js-square-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/js-square-brands.svg?");

/***/ }),

/***/ "./public/assets/link-solid.svg":
/*!**************************************!*\
  !*** ./public/assets/link-solid.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/link-solid..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/link-solid.svg?");

/***/ }),

/***/ "./public/assets/linkedin-brands.svg":
/*!*******************************************!*\
  !*** ./public/assets/linkedin-brands.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/linkedin-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/linkedin-brands.svg?");

/***/ }),

/***/ "./public/assets/node-js-brands.svg":
/*!******************************************!*\
  !*** ./public/assets/node-js-brands.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/node-js-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/node-js-brands.svg?");

/***/ }),

/***/ "./public/assets/palette-solid.svg":
/*!*****************************************!*\
  !*** ./public/assets/palette-solid.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/palette-solid..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/palette-solid.svg?");

/***/ }),

/***/ "./public/assets/postgresql-brands.svg":
/*!*********************************************!*\
  !*** ./public/assets/postgresql-brands.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/postgresql-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/postgresql-brands.svg?");

/***/ }),

/***/ "./public/assets/react-brands.svg":
/*!****************************************!*\
  !*** ./public/assets/react-brands.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/react-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/react-brands.svg?");

/***/ }),

/***/ "./public/assets/sass-brands.svg":
/*!***************************************!*\
  !*** ./public/assets/sass-brands.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sass-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/sass-brands.svg?");

/***/ }),

/***/ "./public/assets/share-square-solid.svg":
/*!**********************************************!*\
  !*** ./public/assets/share-square-solid.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/share-square-solid..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/share-square-solid.svg?");

/***/ }),

/***/ "./public/assets/sitemap-solid.svg":
/*!*****************************************!*\
  !*** ./public/assets/sitemap-solid.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sitemap-solid..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/sitemap-solid.svg?");

/***/ }),

/***/ "./public/assets/typescript-brands.svg":
/*!*********************************************!*\
  !*** ./public/assets/typescript-brands.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/typescript-brands..svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/typescript-brands.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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