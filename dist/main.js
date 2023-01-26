/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import './style.css';\n\nconst tasks = [\n  {\n    description: 'Pay the bills',\n    completed: true,\n    index: 0,\n  },\n  {\n    description: 'Pick up the kids',\n    completed: true,\n    index: 1,\n  },\n  {\n    description: 'Write some code',\n    completed: true,\n    index: 2,\n  },\n  {\n    description: 'Drink coffee',\n    completed: true,\n    index: 3,\n  },\n];\n\nconst loadTask = (arr) => {\n  arr.forEach((task) => {\n    const container = document.querySelector('.list-div');\n    const listItem = document.createElement('li');\n    listItem.innerHTML = `\n    <input type=\"checkbox\" name=\"\" id=\"\">\n    <p class=\"task-to-be-done\">${task.description}</p>\n    `;\n    container.appendChild(listItem);\n  });\n};\n\nloadTask(tasks);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;