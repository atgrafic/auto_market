/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\src\\\\index.js: Unexpected token (75:21)\\n\\n\\u001b[0m \\u001b[90m 73 |\\u001b[39m     document\\u001b[33m.\\u001b[39mbody\\u001b[33m.\\u001b[39maddEventListener(\\u001b[32m\\\"click\\\"\\u001b[39m\\u001b[33m,\\u001b[39m (e) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 74 |\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 75 |\\u001b[39m         \\u001b[36mif\\u001b[39m (e\\u001b[33m.\\u001b[39mtarget)) {\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 76 |\\u001b[39m             e\\u001b[33m.\\u001b[39mpreventDefault()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 77 |\\u001b[39m             navigateTo(e\\u001b[33m.\\u001b[39mtarget\\u001b[33m.\\u001b[39mhref)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 78 |\\u001b[39m         }\\u001b[0m\\n    at Parser._raise (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:775:17)\\n    at Parser.raiseWithData (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:768:17)\\n    at Parser.raise (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:736:17)\\n    at Parser.unexpected (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9716:16)\\n    at Parser.parseExprAtom (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11112:20)\\n    at Parser.parseExprSubscripts (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10689:23)\\n    at Parser.parseUpdate (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10669:21)\\n    at Parser.parseMaybeUnary (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10647:23)\\n    at Parser.parseExprOps (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10504:23)\\n    at Parser.parseMaybeConditional (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10478:23)\\n    at Parser.parseMaybeAssign (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10441:21)\\n    at Parser.parseExpressionBase (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10386:23)\\n    at C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10380:39\\n    at Parser.allowInAnd (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12085:12)\\n    at Parser.parseExpression (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10380:17)\\n    at Parser.parseStatementContent (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12367:23)\\n    at Parser.parseStatement (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12236:17)\\n    at Parser.parseIfStatement (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12590:28)\\n    at Parser.parseStatementContent (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12281:21)\\n    at Parser.parseStatement (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12236:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12816:25)\\n    at Parser.parseBlockBody (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12807:10)\\n    at Parser.parseBlock (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12791:10)\\n    at Parser.parseFunctionBody (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11758:24)\\n    at Parser.parseArrowExpression (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11730:10)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11303:12)\\n    at Parser.parseExprAtom (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11007:21)\\n    at Parser.parseExprSubscripts (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10689:23)\\n    at Parser.parseUpdate (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10669:21)\\n    at Parser.parseMaybeUnary (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10647:23)\\n    at Parser.parseExprOps (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10504:23)\\n    at Parser.parseMaybeConditional (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10478:23)\\n    at Parser.parseMaybeAssign (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10441:21)\\n    at C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10408:39\\n    at Parser.allowInAnd (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12085:12)\\n    at Parser.parseMaybeAssignAllowIn (C:\\\\Podyplomowe frontent\\\\projekt zaliczenie\\\\auto_market\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10408:17)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });