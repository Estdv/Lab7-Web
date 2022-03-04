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

/***/ "./Reunion.js":
/*!********************!*\
  !*** ./Reunion.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Reunion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reunion.css */ \"./Reunion.css\");\n\r\n\r\nwindow.onload = function () {\r\n\r\n    document.body.className = \"fondo\"\r\n    var princ = document.createElement(\"div\")\r\n    document.body.appendChild(princ)\r\n    var head = document.createElement(\"h1\")\r\n    head.innerHTML=\"Esta oscuro...\"\r\n    head.className=\"texto\"\r\n    princ.appendChild(head)\r\n    var cont = document.createElement(\"p\")\r\n    cont.innerHTML = \"Unas semanas despues, 5 personas despertaron en un cuarto oscuro. Un doctor, un abogado, un ingeniero, un contratista y un policia. Ninguno sabia que estaba<br> pasando. Se levantaron, y se saludaron. Discutieron a cerca de que estaban haciendo aqui y se presentaron. Derrepente, se prendio una luz y una sola fecha apareci�<br> en la pared. Todos miraron esa fecha con una cara de horror como si supieran lo que hicieron en esa fecha, antes de que pudieran hablar, se abrio una puerta y entr�<br> una persona. La puerta se cerro rapidamente y todos reconocieron a la persona. Todos vieron a la persona y supieron que es quien los habia puesto ahi. Antes de que<br> pudieran intentar convencerlo de dejarlos salir, se empez� a escuchar un ruido mientras el cuarto se llanaba con un humo verde.<br> El contratista y el docotro pusieron una cara de horror y supieron que era el gas. Era el mismo quimico barato que el contratista habia usado en su demolici�n.<br> <br> Poco a poco el cuarto se llen� de este gas concentrado y todos, incluyendo al villano, perdieron la conciencia y eventualmente murieron.<br>\" \r\n    cont.className = \"texto\"\r\n    princ.appendChild(cont)\r\n\r\n    var conc = document.createElement(\"p\")\r\n    conc.innerHTML = \"Ahora que ya sabe la primera tragedia, es hora de que le presente otra perspectiva. Una un tanto parcial....\"\r\n    conc.className = \"texto\"\r\n    princ.appendChild(conc)\r\n\r\n    var li1 = document.createElement(\"li\")\r\n    var a1 = document.createElement(\"a\")\r\n    a1.href=\"Villano.html\"\r\n    a1.innerHTML=\"Perspectiva del villano\"\r\n    princ.appendChild(li1)\r\n    li1.appendChild(a1)\r\n\r\n}\n\n//# sourceURL=webpack://lab6/./Reunion.js?");

/***/ }),

/***/ "./Reunion.css":
/*!*********************!*\
  !*** ./Reunion.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./Reunion.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Reunion.js");
/******/ 	
/******/ })()
;