/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/listatarefa/modelist.ts":
/*!*************************************!*\
  !*** ./src/listatarefa/modelist.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.input = void 0;
const input = document.querySelector('.input');
exports.input = input;
const bnt = document.querySelector('.bnt');
const resultado = document.querySelector('.resultado');
bnt.addEventListener('click', function (event) {
    event.preventDefault();
    if (!input.value)
        return;
    handleCriaTarefa(input);
});
function handleButtonRemove(li) {
    li.innerText += ' ';
    const bntRemove = document.createElement('button');
    bntRemove.innerText = 'apagar';
    bntRemove.setAttribute('class', 'removebutton');
    li.appendChild(bntRemove);
}
function handleCriaTarefa(input) {
    const li = document.createElement('li');
    li.innerText = input.value;
    resultado.appendChild(li);
    handleButtonRemove(li);
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./src/listatarefa/index.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./modelist */ "./src/listatarefa/modelist.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map