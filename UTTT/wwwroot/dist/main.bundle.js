/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/site.scss":
/*!***********************!*\
  !*** ./css/site.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./scripts/main.ts":
/*!*************************!*\
  !*** ./scripts/main.ts ***!
  \*************************/
/*! exports provided: UtttGame, UtttBoard, UtttArea, UtttLobby, UtttLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uttt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uttt */ "./scripts/uttt/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtttGame", function() { return _uttt__WEBPACK_IMPORTED_MODULE_0__["UtttGame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtttBoard", function() { return _uttt__WEBPACK_IMPORTED_MODULE_0__["UtttBoard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtttArea", function() { return _uttt__WEBPACK_IMPORTED_MODULE_0__["UtttArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtttLobby", function() { return _uttt__WEBPACK_IMPORTED_MODULE_0__["UtttLobby"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtttLogin", function() { return _uttt__WEBPACK_IMPORTED_MODULE_0__["UtttLogin"]; });




/***/ }),

/***/ "./scripts/uttt/components/uttt-area/uttt-area.component.ts":
/*!******************************************************************!*\
  !*** ./scripts/uttt/components/uttt-area/uttt-area.component.ts ***!
  \******************************************************************/
/*! exports provided: UtttArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtttArea", function() { return UtttArea; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let UtttArea = class UtttArea extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super();
        this.area = undefined;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `:host { display: flex; flex-wrap: wrap; width: 60px; }
div { width: 20px; height:20px; background:green; }`;
    }
    render() {
        return Array.from({ length: 9 }, (_, i) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<div @click="${_ => this._claimField(i + 1)}"></div>`);
    }
    _claimField(field) {
        console.log(this.area, field);
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], UtttArea.prototype, "area", void 0);
UtttArea = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('uttt-area')
], UtttArea);



/***/ }),

/***/ "./scripts/uttt/components/uttt-board/uttt-board.component.ts":
/*!********************************************************************!*\
  !*** ./scripts/uttt/components/uttt-board/uttt-board.component.ts ***!
  \********************************************************************/
/*! exports provided: UtttBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtttBoard", function() { return UtttBoard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let UtttBoard = class UtttBoard extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super();
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `:host { display: flex; flex-wrap: wrap; width: 180px; }`;
    }
    render() {
        return Array.from({ length: 9 }, (_, i) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<uttt-area .area="${i + 1}"></uttt-area>`);
    }
};
UtttBoard = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('uttt-board')
], UtttBoard);



/***/ }),

/***/ "./scripts/uttt/components/uttt-game/uttt-game.component.ts":
/*!******************************************************************!*\
  !*** ./scripts/uttt/components/uttt-game/uttt-game.component.ts ***!
  \******************************************************************/
/*! exports provided: UtttGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtttGame", function() { return UtttGame; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let UtttGame = class UtttGame extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `:host { display: block; text-align: center; }`;
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<header><h1>Ultimate Tic Tac Toe</h1></header>
<uttt-lobby></uttt-lobby>`;
    }
};
UtttGame = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('uttt-game')
], UtttGame);



/***/ }),

/***/ "./scripts/uttt/components/uttt-lobby/uttt-lobby.component.ts":
/*!********************************************************************!*\
  !*** ./scripts/uttt/components/uttt-lobby/uttt-lobby.component.ts ***!
  \********************************************************************/
/*! exports provided: UtttLobby */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtttLobby", function() { return UtttLobby; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _services_uttt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/uttt.service */ "./scripts/uttt/services/uttt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let UtttLobby = class UtttLobby extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super();
        this.utttService = _services_uttt_service__WEBPACK_IMPORTED_MODULE_1__["UtttService"].instance;
        this.lobbyInfo = undefined;
        this.utttService.start().then(_ => this._getLobbyInfo());
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `:host { display: block; text-align: center; }`;
    }
    render() {
        if (this.lobbyInfo) {
            return this.lobbyInfo.games.map(g => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `${g}`);
        }
    }
    _getLobbyInfo() {
        this.utttService.getLobbyInfo().then(lobbyInfo => this.lobbyInfo = lobbyInfo);
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], UtttLobby.prototype, "lobbyInfo", void 0);
UtttLobby = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('uttt-lobby')
], UtttLobby);



/***/ }),

/***/ "./scripts/uttt/components/uttt-login/uttt-login.component.ts":
/*!********************************************************************!*\
  !*** ./scripts/uttt/components/uttt-login/uttt-login.component.ts ***!
  \********************************************************************/
/*! exports provided: UtttLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtttLogin", function() { return UtttLogin; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let UtttLogin = class UtttLogin extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super();
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `:host { display: flex; flex-wrap: wrap; width: 180px; }`;
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<uttt-board></uttt-board>`;
    }
};
UtttLogin = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('uttt-login')
], UtttLogin);



/***/ }),

/***/ "./scripts/uttt/index.ts":
/*!*******************************!*\
  !*** ./scripts/uttt/index.ts ***!
  \*******************************/
/*! exports provided: UtttGame, UtttBoard, UtttArea, UtttLobby, UtttLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uttt_components_uttt_game_uttt_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../uttt/components/uttt-game/uttt-game.component */ "./scripts/uttt/components/uttt-game/uttt-game.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtttGame", function() { return _uttt_components_uttt_game_uttt_game_component__WEBPACK_IMPORTED_MODULE_0__["UtttGame"]; });

/* harmony import */ var _uttt_components_uttt_board_uttt_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uttt/components/uttt-board/uttt-board.component */ "./scripts/uttt/components/uttt-board/uttt-board.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtttBoard", function() { return _uttt_components_uttt_board_uttt_board_component__WEBPACK_IMPORTED_MODULE_1__["UtttBoard"]; });

/* harmony import */ var _uttt_components_uttt_area_uttt_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uttt/components/uttt-area/uttt-area.component */ "./scripts/uttt/components/uttt-area/uttt-area.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtttArea", function() { return _uttt_components_uttt_area_uttt_area_component__WEBPACK_IMPORTED_MODULE_2__["UtttArea"]; });

/* harmony import */ var _uttt_components_uttt_lobby_uttt_lobby_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uttt/components/uttt-lobby/uttt-lobby.component */ "./scripts/uttt/components/uttt-lobby/uttt-lobby.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtttLobby", function() { return _uttt_components_uttt_lobby_uttt_lobby_component__WEBPACK_IMPORTED_MODULE_3__["UtttLobby"]; });

/* harmony import */ var _uttt_components_uttt_login_uttt_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uttt/components/uttt-login/uttt-login.component */ "./scripts/uttt/components/uttt-login/uttt-login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtttLogin", function() { return _uttt_components_uttt_login_uttt_login_component__WEBPACK_IMPORTED_MODULE_4__["UtttLogin"]; });








/***/ }),

/***/ "./scripts/uttt/services/uttt.service.ts":
/*!***********************************************!*\
  !*** ./scripts/uttt/services/uttt.service.ts ***!
  \***********************************************/
/*! exports provided: UtttService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtttService", function() { return UtttService; });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class UtttService {
    constructor() {
        this._connection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]().withUrl('/utttHub').build();
        this._registerHandlers();
    }
    _registerHandlers() {
        this._connection.on('connected', connectionId => console.log('connected', connectionId));
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._connection.start().then(_ => console.log('Connection started.'));
        });
    }
    getLobbyInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._connection.invoke('getLobbyInfo');
        });
    }
}
UtttService.instance = new UtttService();


/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./scripts/main.ts ./css/site.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./scripts/main.ts */"./scripts/main.ts");
module.exports = __webpack_require__(/*! ./css/site.scss */"./css/site.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3NpdGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy91dHR0L2NvbXBvbmVudHMvdXR0dC1hcmVhL3V0dHQtYXJlYS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy91dHR0L2NvbXBvbmVudHMvdXR0dC1ib2FyZC91dHR0LWJvYXJkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3V0dHQvY29tcG9uZW50cy91dHR0LWdhbWUvdXR0dC1nYW1lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3V0dHQvY29tcG9uZW50cy91dHR0LWxvYmJ5L3V0dHQtbG9iYnkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdXR0dC9jb21wb25lbnRzL3V0dHQtbG9naW4vdXR0dC1sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy91dHR0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdXR0dC9zZXJ2aWNlcy91dHR0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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ImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0L1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCAqIGZyb20gJy4vdXR0dCc7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzLCBwcm9wZXJ0eSwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCd1dHR0LWFyZWEnKVxyXG5leHBvcnQgY2xhc3MgVXR0dEFyZWEgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcclxuICBhcmVhOiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIGNzc2A6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgd2lkdGg6IDYwcHg7IH1cclxuZGl2IHsgd2lkdGg6IDIwcHg7IGhlaWdodDoyMHB4OyBiYWNrZ3JvdW5kOmdyZWVuOyB9YDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sIChfLCBpKSA9PiBodG1sYDxkaXYgQGNsaWNrPVwiJHtfID0+IHRoaXMuX2NsYWltRmllbGQoaSsxKX1cIj48L2Rpdj5gKVxyXG4gIH1cclxuXHJcbiAgX2NsYWltRmllbGQoZmllbGQ6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5hcmVhLCBmaWVsZCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgndXR0dC1ib2FyZCcpXHJcbmV4cG9ydCBjbGFzcyBVdHR0Qm9hcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gY3NzYDpob3N0IHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyB3aWR0aDogMTgwcHg7IH1gO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKF8sIGkpID0+IGh0bWxgPHV0dHQtYXJlYSAuYXJlYT1cIiR7aSsxfVwiPjwvdXR0dC1hcmVhPmApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgndXR0dC1nYW1lJylcclxuZXhwb3J0IGNsYXNzIFV0dHRHYW1lIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIGNzc2A6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1gO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgPGhlYWRlcj48aDE+VWx0aW1hdGUgVGljIFRhYyBUb2U8L2gxPjwvaGVhZGVyPlxyXG48dXR0dC1sb2JieT48L3V0dHQtbG9iYnk+YDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzLCBwcm9wZXJ0eSwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcclxuaW1wb3J0IHsgVXR0dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dHR0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2JieUluZm8gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3V0dHQuaW50ZXJmYWNlcyc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgndXR0dC1sb2JieScpXHJcbmV4cG9ydCBjbGFzcyBVdHR0TG9iYnkgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHV0dHRTZXJ2aWNlOiBVdHR0U2VydmljZSA9IFV0dHRTZXJ2aWNlLmluc3RhbmNlO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcclxuICBsb2JieUluZm86IExvYmJ5SW5mbyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gY3NzYDpob3N0IHsgZGlzcGxheTogYmxvY2s7IHRleHQtYWxpZ246IGNlbnRlcjsgfWA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy51dHR0U2VydmljZS5zdGFydCgpLnRoZW4oXyA9PiB0aGlzLl9nZXRMb2JieUluZm8oKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5sb2JieUluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMubG9iYnlJbmZvLmdhbWVzLm1hcChnID0+IGh0bWxgJHtnfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0TG9iYnlJbmZvKCkge1xyXG4gICAgdGhpcy51dHR0U2VydmljZS5nZXRMb2JieUluZm8oKS50aGVuKGxvYmJ5SW5mbyA9PiB0aGlzLmxvYmJ5SW5mbyA9IGxvYmJ5SW5mbyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgndXR0dC1sb2dpbicpXHJcbmV4cG9ydCBjbGFzcyBVdHR0TG9naW4gZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gY3NzYDpob3N0IHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyB3aWR0aDogMTgwcHg7IH1gO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgPHV0dHQtYm9hcmQ+PC91dHR0LWJvYXJkPmBcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi4vdXR0dC9jb21wb25lbnRzL3V0dHQtZ2FtZS91dHR0LWdhbWUuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi4vdXR0dC9jb21wb25lbnRzL3V0dHQtYm9hcmQvdXR0dC1ib2FyZC5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuLi91dHR0L2NvbXBvbmVudHMvdXR0dC1hcmVhL3V0dHQtYXJlYS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuLi91dHR0L2NvbXBvbmVudHMvdXR0dC1sb2JieS91dHR0LWxvYmJ5LmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4uL3V0dHQvY29tcG9uZW50cy91dHR0LWxvZ2luL3V0dHQtbG9naW4uY29tcG9uZW50JzsiLCJpbXBvcnQgKiBhcyBzaWduYWxSIGZyb20gXCJAbWljcm9zb2Z0L3NpZ25hbHJcIjtcclxuaW1wb3J0IHsgTG9iYnlJbmZvIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdXR0dC5pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXR0dFNlcnZpY2Uge1xyXG4gIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVXR0dFNlcnZpY2UgPSBuZXcgVXR0dFNlcnZpY2UoKTtcclxuXHJcbiAgcHJpdmF0ZSBfY29ubmVjdGlvbiA9IG5ldyBzaWduYWxSLkh1YkNvbm5lY3Rpb25CdWlsZGVyKCkud2l0aFVybCgnL3V0dHRIdWInKS5idWlsZCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3JlZ2lzdGVySGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlZ2lzdGVySGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLl9jb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCBjb25uZWN0aW9uSWQgPT4gY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcsIGNvbm5lY3Rpb25JZCkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5zdGFydCgpLnRoZW4oXyA9PiBjb25zb2xlLmxvZygnQ29ubmVjdGlvbiBzdGFydGVkLicpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldExvYmJ5SW5mbygpOiBQcm9taXNlPExvYmJ5SW5mbz4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24uaW52b2tlKCdnZXRMb2JieUluZm8nKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9