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

/***/ "./node_modules/@emailjs/browser/es/api/sendPost.js":
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendPost\": () => (/* binding */ sendPost)\n/* harmony export */ });\n/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ \"./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n\n\nconst sendPost = (url, data, headers = {}) => {\n    return new Promise((resolve, reject) => {\n        const xhr = new XMLHttpRequest();\n        xhr.addEventListener('load', ({ target }) => {\n            const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target);\n            if (responseStatus.status === 200 || responseStatus.text === 'OK') {\n                resolve(responseStatus);\n            }\n            else {\n                reject(responseStatus);\n            }\n        });\n        xhr.addEventListener('error', ({ target }) => {\n            reject(new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target));\n        });\n        xhr.open('POST', _store_store__WEBPACK_IMPORTED_MODULE_1__.store._origin + url, true);\n        Object.keys(headers).forEach((key) => {\n            xhr.setRequestHeader(key, headers[key]);\n        });\n        xhr.send(data);\n    });\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/api/sendPost.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"init\": () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init),\n/* harmony export */   \"send\": () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send),\n/* harmony export */   \"sendForm\": () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm)\n/* harmony export */ });\n/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/init/init */ \"./node_modules/@emailjs/browser/es/methods/init/init.js\");\n/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/send/send */ \"./node_modules/@emailjs/browser/es/methods/send/send.js\");\n/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ \"./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init,\n    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send,\n    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm,\n});\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/index.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/init/init.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n\n/**\n * Initiation\n * @param {string} publicKey - set the EmailJS public key\n * @param {string} origin - set the EmailJS origin\n */\nconst init = (publicKey, origin = 'https://api.emailjs.com') => {\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID = publicKey;\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._origin = origin;\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/methods/init/init.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ \"./node_modules/@emailjs/browser/es/utils/validateParams.js\");\n/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ \"./node_modules/@emailjs/browser/es/api/sendPost.js\");\n\n\n\nconst findHTMLForm = (form) => {\n    let currentForm;\n    if (typeof form === 'string') {\n        currentForm = document.querySelector(form);\n    }\n    else {\n        currentForm = form;\n    }\n    if (!currentForm || currentForm.nodeName !== 'FORM') {\n        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';\n    }\n    return currentForm;\n};\n/**\n * Send a form the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {string | HTMLFormElement} form - the form element or selector\n * @param {string} publicKey - the EmailJS public key\n * @returns {Promise<EmailJSResponseStatus>}\n */\nconst sendForm = (serviceID, templateID, form, publicKey) => {\n    const uID = publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;\n    const currentForm = findHTMLForm(form);\n    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);\n    const formData = new FormData(currentForm);\n    formData.append('lib_version', '3.6.2');\n    formData.append('service_id', serviceID);\n    formData.append('template_id', templateID);\n    formData.append('user_id', uID);\n    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send-form', formData);\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/send/send.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"send\": () => (/* binding */ send)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ \"./node_modules/@emailjs/browser/es/utils/validateParams.js\");\n/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ \"./node_modules/@emailjs/browser/es/api/sendPost.js\");\n\n\n\n/**\n * Send a template to the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {object} templatePrams - the template params, what will be set to the EmailJS template\n * @param {string} publicKey - the EmailJS public key\n * @returns {Promise<EmailJSResponseStatus>}\n */\nconst send = (serviceID, templateID, templatePrams, publicKey) => {\n    const uID = publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;\n    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);\n    const params = {\n        lib_version: '3.6.2',\n        user_id: uID,\n        service_id: serviceID,\n        template_id: templateID,\n        template_params: templatePrams,\n    };\n    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {\n        'Content-type': 'application/json',\n    });\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/methods/send/send.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EmailJSResponseStatus\": () => (/* binding */ EmailJSResponseStatus)\n/* harmony export */ });\nclass EmailJSResponseStatus {\n    constructor(httpResponse) {\n        this.status = httpResponse.status;\n        this.text = httpResponse.responseText;\n    }\n}\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/store/store.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\nconst store = {\n    _origin: 'https://api.emailjs.com',\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/store/store.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/validateParams.js":
/*!******************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateParams\": () => (/* binding */ validateParams)\n/* harmony export */ });\nconst validateParams = (publicKey, serviceID, templateID) => {\n    if (!publicKey) {\n        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';\n    }\n    if (!serviceID) {\n        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';\n    }\n    if (!templateID) {\n        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';\n    }\n    return true;\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/utils/validateParams.js?");

/***/ }),

/***/ "./src/styles/css/index.css":
/*!**********************************!*\
  !*** ./src/styles/css/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://romario-frontend/./src/styles/css/index.css?");

/***/ }),

/***/ "./src/scripts/email.js":
/*!******************************!*\
  !*** ./src/scripts/email.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.js */ \"./src/scripts/environment.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n\r\n\r\n\r\nclass Email {\r\n  static async send(templateParams) {\r\n    const hasSent = localStorage.getItem('hasSent')\r\n    if (!hasSent) {\r\n      (0,_emailjs_browser__WEBPACK_IMPORTED_MODULE_1__.send)(_environment_js__WEBPACK_IMPORTED_MODULE_0__.SERVICE_ID, _environment_js__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_ID, templateParams, _environment_js__WEBPACK_IMPORTED_MODULE_0__.PUBLIC_KEY)\r\n    } else {\r\n      throw new Error(\r\n        'Você ja enviou um email, se precisar enviar outro, aqui está: <a href=\"mailto:nromario482@gmail.com\">nromario482@gmail.com</a>'\r\n      )\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Email);\r\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/email.js?");

/***/ }),

/***/ "./src/scripts/environment.js":
/*!************************************!*\
  !*** ./src/scripts/environment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PUBLIC_KEY\": () => (/* binding */ PUBLIC_KEY),\n/* harmony export */   \"SERVICE_ID\": () => (/* binding */ SERVICE_ID),\n/* harmony export */   \"TEMPLATE_ID\": () => (/* binding */ TEMPLATE_ID)\n/* harmony export */ });\nconst PUBLIC_KEY = \"Xs8ND_W5kbeDrsZza\"\r\nconst TEMPLATE_ID = \"template_4ywr8tp\"\r\nconst SERVICE_ID = \"service_0713nfe\"\r\n\r\n\r\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/environment.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _email_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.js */ \"./src/scripts/email.js\");\n/* harmony import */ var _toast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.js */ \"./src/scripts/toast.js\");\n/* harmony import */ var _styles_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/css/index.css */ \"./src/styles/css/index.css\");\n/* harmony import */ var _public_assets_arrow_up_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/arrow-up.svg */ \"./public/assets/arrow-up.svg\");\n/* harmony import */ var _public_assets_code_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/code-solid.svg */ \"./public/assets/code-solid.svg\");\n/* harmony import */ var _public_assets_css3_alt_brands_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/assets/css3-alt-brands.svg */ \"./public/assets/css3-alt-brands.svg\");\n/* harmony import */ var _public_assets_expand_arrows_alt_solid_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/assets/expand-arrows-alt-solid.svg */ \"./public/assets/expand-arrows-alt-solid.svg\");\n/* harmony import */ var _public_assets_file_download_solid_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/assets/file-download-solid.svg */ \"./public/assets/file-download-solid.svg\");\n/* harmony import */ var _public_assets_git_alt_brands_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/git-alt-brands.svg */ \"./public/assets/git-alt-brands.svg\");\n/* harmony import */ var _public_assets_github_square_brands_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/github-square-brands.svg */ \"./public/assets/github-square-brands.svg\");\n/* harmony import */ var _public_assets_hand_point_up_regular_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/assets/hand-point-up-regular.svg */ \"./public/assets/hand-point-up-regular.svg\");\n/* harmony import */ var _public_assets_html5_brands_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/assets/html5-brands.svg */ \"./public/assets/html5-brands.svg\");\n/* harmony import */ var _public_assets_icons8_node_js_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/assets/icons8-node-js.svg */ \"./public/assets/icons8-node-js.svg\");\n/* harmony import */ var _public_assets_js_square_brands_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/assets/js-square-brands.svg */ \"./public/assets/js-square-brands.svg\");\n/* harmony import */ var _public_assets_link_solid_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/assets/link-solid.svg */ \"./public/assets/link-solid.svg\");\n/* harmony import */ var _public_assets_linkedin_brands_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/assets/linkedin-brands.svg */ \"./public/assets/linkedin-brands.svg\");\n/* harmony import */ var _public_assets_palette_solid_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../public/assets/palette-solid.svg */ \"./public/assets/palette-solid.svg\");\n/* harmony import */ var _public_assets_react_brands_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../public/assets/react-brands.svg */ \"./public/assets/react-brands.svg\");\n/* harmony import */ var _public_assets_sass_brands_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../public/assets/sass-brands.svg */ \"./public/assets/sass-brands.svg\");\n/* harmony import */ var _public_assets_share_square_solid_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../public/assets/share-square-solid.svg */ \"./public/assets/share-square-solid.svg\");\n/* harmony import */ var _public_assets_sitemap_solid_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../public/assets/sitemap-solid.svg */ \"./public/assets/sitemap-solid.svg\");\n/* harmony import */ var _public_assets_typescript_brands_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../public/assets/typescript-brands.svg */ \"./public/assets/typescript-brands.svg\");\n/* harmony import */ var _public_assets_circle_check_solid_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../public/assets/circle-check-solid.svg */ \"./public/assets/circle-check-solid.svg\");\n/* harmony import */ var _public_assets_circle_exclamation_solid_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../public/assets/circle-exclamation-solid.svg */ \"./public/assets/circle-exclamation-solid.svg\");\n/* harmony import */ var _public_assets_nextjs_original_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../public/assets/nextjs-original.svg */ \"./public/assets/nextjs-original.svg\");\n/* harmony import */ var _public_assets_bootstrap_brands_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../public/assets/bootstrap-brands.svg */ \"./public/assets/bootstrap-brands.svg\");\n/* harmony import */ var _public_assets_retrogames_snapshot_png24__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../public/assets/retrogames-snapshot.png24 */ \"./public/assets/retrogames-snapshot.png24\");\n/* harmony import */ var _public_assets_changix_snapshot_png24__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../public/assets/changix-snapshot.png24 */ \"./public/assets/changix-snapshot.png24\");\n/* harmony import */ var _public_assets_easybank_snapshot_png24__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../public/assets/easybank-snapshot.png24 */ \"./public/assets/easybank-snapshot.png24\");\n/* harmony import */ var _public_assets_fylo_snapshot_png24__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../public/assets/fylo-snapshot.png24 */ \"./public/assets/fylo-snapshot.png24\");\n/* harmony import */ var _public_assets_fireblog_snapshot_png24__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../public/assets/fireblog-snapshot.png24 */ \"./public/assets/fireblog-snapshot.png24\");\n/* harmony import */ var _public_assets_fireswift_snapshot_png24__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../public/assets/fireswift-snapshot.png24 */ \"./public/assets/fireswift-snapshot.png24\");\n/* harmony import */ var _public_assets_ip_address_tracker_snapshot_png24__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../public/assets/ip-address-tracker-snapshot.png24 */ \"./public/assets/ip-address-tracker-snapshot.png24\");\n/* harmony import */ var _public_assets_country_searcher_snapshot_png24__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../public/assets/country-searcher-snapshot.png24 */ \"./public/assets/country-searcher-snapshot.png24\");\n/* harmony import */ var _public_assets_reactcommerce_snapshot_png24__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../public/assets/reactcommerce-snapshot.png24 */ \"./public/assets/reactcommerce-snapshot.png24\");\n/* harmony import */ var _public_assets_space_tourism_snapshot_png24__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../public/assets/space-tourism-snapshot.png24 */ \"./public/assets/space-tourism-snapshot.png24\");\n/* harmony import */ var _public_assets_yourjob_snapshot_png24__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../public/assets/yourjob-snapshot.png24 */ \"./public/assets/yourjob-snapshot.png24\");\n/* harmony import */ var _public_assets_icons8_mysql_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../public/assets/icons8-mysql.svg */ \"./public/assets/icons8-mysql.svg\");\n/* harmony import */ var _public_assets_icons8_python_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../public/assets/icons8-python.svg */ \"./public/assets/icons8-python.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*************** Email sender ****************/\r\nconst emailForm = document.querySelector('.emailForm')\r\nconst resetBtn = document.querySelector('.resetBtn')\r\n\r\nconst handleFormSubmit = async event => {\r\n  event.preventDefault()\r\n  const templateParams = {\r\n    [event.target[0].name]: event.target[0].value,\r\n    [event.target[1].name]: event.target[1].value,\r\n    [event.target[2].name]: event.target[2].value,\r\n    [event.target[3].name]: event.target[3].value\r\n  }\r\n  try {\r\n    for (const param in templateParams) {\r\n      if (!templateParams[param]) {\r\n        throw new Error(`Todos campos precisam ser preenchidos!`)\r\n      }\r\n    }\r\n    await _email_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(templateParams)\r\n    localStorage.setItem('hasSent', true)\r\n    ;(0,_toast_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('sucesso', 'Email enviado com sucesso!')\r\n    resetBtn.click()\r\n  } catch (err) {\r\n    console.error('Exception while sending email => ' + err.message)\r\n    ;(0,_toast_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('aviso', err.message)\r\n  }\r\n}\r\nemailForm.onsubmit = handleFormSubmit\r\n\r\n/*************** Mobile menu ****************/\r\nconst menuMechanisms = event => {\r\n  if (window.innerWidth <= 700) {\r\n    if (event.target.alt === 'back to top') return\r\n    else {\r\n      window.document.body.classList.toggle('body--active')\r\n\r\n      const spans = [...document.querySelectorAll('.burguer')]\r\n      spans.forEach((span, index) => {\r\n        if (index === 0) span.classList.toggle('close-left')\r\n        else if (index === 1) span.classList.toggle('close-right')\r\n        else span.classList.toggle('fade')\r\n      })\r\n\r\n      const menu = document.querySelector('.a-header__navList')\r\n      menu.classList.toggle('a-header__mobile--active')\r\n    }\r\n  }\r\n}\r\n\r\nconst mobileMenuBtn = document.querySelector('.mobile-menu__container')\r\nmobileMenuBtn.onclick = menuMechanisms\r\n\r\n/*************** Smooth scroll on intern links ****************/\r\nconst internLinks = [...document.querySelectorAll('[href^=\"#')]\r\ninternLinks.forEach(link => {\r\n  link.onclick = event => {\r\n    event.preventDefault()\r\n    if (\r\n      event.target.getAttribute('href') === '#header' ||\r\n      event.target.alt === 'voltar ao topo'\r\n    ) {\r\n      window.scroll({\r\n        top: 0,\r\n        behavior: 'smooth'\r\n      })\r\n    } else {\r\n      // Makes menu close when click occurs on mobile\r\n      menuMechanisms(event)\r\n      const element = document.querySelector(event.target.getAttribute('href'))\r\n      window.scroll({\r\n        top: element.offsetTop,\r\n        behavior: 'smooth'\r\n      })\r\n    }\r\n  }\r\n})\r\n\r\n/*************** Animate on scroll ****************/\r\nconst addAnimationClasses = () => {\r\n  const animateDirections = {\r\n    right: 'animate-right',\r\n    left: 'animate-left'\r\n  }\r\n\r\n  const elementsToAnimate = Array.from(document.querySelectorAll('[data-aos]'))\r\n  elementsToAnimate.forEach(element => {\r\n    const animateDirection = element.getAttribute('data-direction')\r\n    element.classList.add(animateDirections[animateDirection])\r\n  })\r\n}\r\n\r\nconst animateOnScroll = () => {\r\n  const { pageYOffset, innerHeight } = window\r\n  const elementsToAnimate = Array.from(document.querySelectorAll('[data-aos]'))\r\n  elementsToAnimate.forEach(element => {\r\n    if (\r\n      element.offsetTop - pageYOffset <=\r\n      innerHeight - (element.offsetTop - pageYOffset) / 7\r\n    ) {\r\n      element.classList.add('animated')\r\n    }\r\n  })\r\n}\r\n\r\nwindow.onscroll = animateOnScroll\r\nwindow.onload = () => {\r\n  addAnimationClasses()\r\n  // delay to allow seeing the animation in presentational section\r\n  setTimeout(() => animateOnScroll(), 200)\r\n}\r\n\r\n/*************** Display back to top button  ****************/\r\nwindow.addEventListener('scroll', () => {\r\n  if (window.pageYOffset >= document.querySelector('#services').offsetTop)\r\n    document.querySelector('.back-to-top').classList.add('back-to-top--active')\r\n  else {\r\n    if (document.querySelector('.back-to-top--active'))\r\n      document\r\n        .querySelector('.back-to-top--active')\r\n        .classList.remove('back-to-top--active')\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/toast.js":
/*!******************************!*\
  !*** ./src/scripts/toast.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst severities = {\r\n  aviso: 'assets/circle-exclamation-solid.svg',\r\n  sucesso: 'assets/circle-check-solid.svg'\r\n}\r\n\r\nconst toggleToast = (severity, content) => {\r\n  const toast = document.querySelector('.toast')\r\n  const toastTitle = document.querySelector('.toast__title h3')\r\n  const toastTitleIcons = Array.from(\r\n    document.querySelectorAll('.toast__title img')\r\n  )\r\n  const toastContent = document.querySelector('.toast__content p')\r\n  toastContent.innerHTML = content\r\n\r\n  toastTitle.textContent = severity\r\n  toastTitleIcons.forEach(icon => (icon.src = severities[severity]))\r\n  toastContent.innerHTML = content\r\n\r\n  toast.classList.add('toast--active')\r\n  setTimeout(() => toast.classList.remove('toast--active'), 5000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleToast);\r\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/toast.js?");

/***/ }),

/***/ "./public/assets/arrow-up.svg":
/*!************************************!*\
  !*** ./public/assets/arrow-up.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/arrow-up.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/arrow-up.svg?");

/***/ }),

/***/ "./public/assets/bootstrap-brands.svg":
/*!********************************************!*\
  !*** ./public/assets/bootstrap-brands.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/bootstrap-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/bootstrap-brands.svg?");

/***/ }),

/***/ "./public/assets/changix-snapshot.png24":
/*!**********************************************!*\
  !*** ./public/assets/changix-snapshot.png24 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/changix-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/changix-snapshot.png24?");

/***/ }),

/***/ "./public/assets/circle-check-solid.svg":
/*!**********************************************!*\
  !*** ./public/assets/circle-check-solid.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/circle-check-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/circle-check-solid.svg?");

/***/ }),

/***/ "./public/assets/circle-exclamation-solid.svg":
/*!****************************************************!*\
  !*** ./public/assets/circle-exclamation-solid.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/circle-exclamation-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/circle-exclamation-solid.svg?");

/***/ }),

/***/ "./public/assets/code-solid.svg":
/*!**************************************!*\
  !*** ./public/assets/code-solid.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/code-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/code-solid.svg?");

/***/ }),

/***/ "./public/assets/country-searcher-snapshot.png24":
/*!*******************************************************!*\
  !*** ./public/assets/country-searcher-snapshot.png24 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/country-searcher-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/country-searcher-snapshot.png24?");

/***/ }),

/***/ "./public/assets/css3-alt-brands.svg":
/*!*******************************************!*\
  !*** ./public/assets/css3-alt-brands.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/css3-alt-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/css3-alt-brands.svg?");

/***/ }),

/***/ "./public/assets/easybank-snapshot.png24":
/*!***********************************************!*\
  !*** ./public/assets/easybank-snapshot.png24 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/easybank-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/easybank-snapshot.png24?");

/***/ }),

/***/ "./public/assets/expand-arrows-alt-solid.svg":
/*!***************************************************!*\
  !*** ./public/assets/expand-arrows-alt-solid.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/expand-arrows-alt-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/expand-arrows-alt-solid.svg?");

/***/ }),

/***/ "./public/assets/file-download-solid.svg":
/*!***********************************************!*\
  !*** ./public/assets/file-download-solid.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/file-download-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/file-download-solid.svg?");

/***/ }),

/***/ "./public/assets/fireblog-snapshot.png24":
/*!***********************************************!*\
  !*** ./public/assets/fireblog-snapshot.png24 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fireblog-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/fireblog-snapshot.png24?");

/***/ }),

/***/ "./public/assets/fireswift-snapshot.png24":
/*!************************************************!*\
  !*** ./public/assets/fireswift-snapshot.png24 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fireswift-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/fireswift-snapshot.png24?");

/***/ }),

/***/ "./public/assets/fylo-snapshot.png24":
/*!*******************************************!*\
  !*** ./public/assets/fylo-snapshot.png24 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fylo-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/fylo-snapshot.png24?");

/***/ }),

/***/ "./public/assets/git-alt-brands.svg":
/*!******************************************!*\
  !*** ./public/assets/git-alt-brands.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/git-alt-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/git-alt-brands.svg?");

/***/ }),

/***/ "./public/assets/github-square-brands.svg":
/*!************************************************!*\
  !*** ./public/assets/github-square-brands.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/github-square-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/github-square-brands.svg?");

/***/ }),

/***/ "./public/assets/hand-point-up-regular.svg":
/*!*************************************************!*\
  !*** ./public/assets/hand-point-up-regular.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/hand-point-up-regular.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/hand-point-up-regular.svg?");

/***/ }),

/***/ "./public/assets/html5-brands.svg":
/*!****************************************!*\
  !*** ./public/assets/html5-brands.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/html5-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/html5-brands.svg?");

/***/ }),

/***/ "./public/assets/icons8-mysql.svg":
/*!****************************************!*\
  !*** ./public/assets/icons8-mysql.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icons8-mysql.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/icons8-mysql.svg?");

/***/ }),

/***/ "./public/assets/icons8-node-js.svg":
/*!******************************************!*\
  !*** ./public/assets/icons8-node-js.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icons8-node-js.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/icons8-node-js.svg?");

/***/ }),

/***/ "./public/assets/icons8-python.svg":
/*!*****************************************!*\
  !*** ./public/assets/icons8-python.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icons8-python.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/icons8-python.svg?");

/***/ }),

/***/ "./public/assets/ip-address-tracker-snapshot.png24":
/*!*********************************************************!*\
  !*** ./public/assets/ip-address-tracker-snapshot.png24 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/ip-address-tracker-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/ip-address-tracker-snapshot.png24?");

/***/ }),

/***/ "./public/assets/js-square-brands.svg":
/*!********************************************!*\
  !*** ./public/assets/js-square-brands.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/js-square-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/js-square-brands.svg?");

/***/ }),

/***/ "./public/assets/link-solid.svg":
/*!**************************************!*\
  !*** ./public/assets/link-solid.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/link-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/link-solid.svg?");

/***/ }),

/***/ "./public/assets/linkedin-brands.svg":
/*!*******************************************!*\
  !*** ./public/assets/linkedin-brands.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/linkedin-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/linkedin-brands.svg?");

/***/ }),

/***/ "./public/assets/nextjs-original.svg":
/*!*******************************************!*\
  !*** ./public/assets/nextjs-original.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/nextjs-original.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/nextjs-original.svg?");

/***/ }),

/***/ "./public/assets/palette-solid.svg":
/*!*****************************************!*\
  !*** ./public/assets/palette-solid.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/palette-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/palette-solid.svg?");

/***/ }),

/***/ "./public/assets/react-brands.svg":
/*!****************************************!*\
  !*** ./public/assets/react-brands.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/react-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/react-brands.svg?");

/***/ }),

/***/ "./public/assets/reactcommerce-snapshot.png24":
/*!****************************************************!*\
  !*** ./public/assets/reactcommerce-snapshot.png24 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/reactcommerce-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/reactcommerce-snapshot.png24?");

/***/ }),

/***/ "./public/assets/retrogames-snapshot.png24":
/*!*************************************************!*\
  !*** ./public/assets/retrogames-snapshot.png24 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/retrogames-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/retrogames-snapshot.png24?");

/***/ }),

/***/ "./public/assets/sass-brands.svg":
/*!***************************************!*\
  !*** ./public/assets/sass-brands.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sass-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/sass-brands.svg?");

/***/ }),

/***/ "./public/assets/share-square-solid.svg":
/*!**********************************************!*\
  !*** ./public/assets/share-square-solid.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/share-square-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/share-square-solid.svg?");

/***/ }),

/***/ "./public/assets/sitemap-solid.svg":
/*!*****************************************!*\
  !*** ./public/assets/sitemap-solid.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sitemap-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/sitemap-solid.svg?");

/***/ }),

/***/ "./public/assets/space-tourism-snapshot.png24":
/*!****************************************************!*\
  !*** ./public/assets/space-tourism-snapshot.png24 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/space-tourism-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/space-tourism-snapshot.png24?");

/***/ }),

/***/ "./public/assets/typescript-brands.svg":
/*!*********************************************!*\
  !*** ./public/assets/typescript-brands.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/typescript-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/typescript-brands.svg?");

/***/ }),

/***/ "./public/assets/yourjob-snapshot.png24":
/*!**********************************************!*\
  !*** ./public/assets/yourjob-snapshot.png24 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/yourjob-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/yourjob-snapshot.png24?");

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