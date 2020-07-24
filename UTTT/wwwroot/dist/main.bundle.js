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
        this.games = [];
        this.players = [];
        this.utttService.start().then(_ => this._getLobbyInfo());
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `:host { display: flex; }
#games { flex: 1; }
#players { width: 300px; }`;
    }
    _getLobbyInfo() {
        this.utttService.getLobbyInfo().then(lobbyInfo => {
            this.games = lobbyInfo.games;
            this.players = lobbyInfo.players;
        });
    }
    render() {
        return [this._renderGames(), this._renderPlayers()];
    }
    _renderGames() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<div id="games">${this.games.map(g => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `${g}`)}</div>`;
    }
    _renderPlayers() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<div id="players">${this.players.map(g => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<button @click="${_ => this._challenge(g)}" ?disabled=${g === this.utttService.self}>${g}</button>`)}</div>`;
    }
    _challenge(player) {
        this.utttService.challenge(player);
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Array })
], UtttLobby.prototype, "games", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Array })
], UtttLobby.prototype, "players", void 0);
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
    get self() {
        return this._connection.connectionId;
    }
    _registerHandlers() {
        this._connection.on('connected', connectionId => console.log('connected', connectionId));
        this._connection.on('challenged', connectionId => console.log('challenged', connectionId));
        this._connection.on('accepted', connectionId => console.log('accepted', connectionId));
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            // Could this be done in advance?
            return yield this._connection.start().then(_ => console.log('Connection started.'));
        });
    }
    getLobbyInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._connection.invoke('getLobbyInfo');
        });
    }
    challenge(player) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._connection.invoke('challenge', player).catch((e) => { console.error(e.message); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3NpdGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy91dHR0L2NvbXBvbmVudHMvdXR0dC1hcmVhL3V0dHQtYXJlYS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy91dHR0L2NvbXBvbmVudHMvdXR0dC1ib2FyZC91dHR0LWJvYXJkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3V0dHQvY29tcG9uZW50cy91dHR0LWdhbWUvdXR0dC1nYW1lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3V0dHQvY29tcG9uZW50cy91dHR0LWxvYmJ5L3V0dHQtbG9iYnkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdXR0dC9jb21wb25lbnRzL3V0dHQtbG9naW4vdXR0dC1sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy91dHR0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdXR0dC9zZXJ2aWNlcy91dHR0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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Q0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRyxDQUFDO0tBQUE7O0FBN0JlLG9CQUFRLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgKiBmcm9tICcuL3V0dHQnOyIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgndXR0dC1hcmVhJylcclxuZXhwb3J0IGNsYXNzIFV0dHRBcmVhIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXHJcbiAgYXJlYTogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBjc3NgOmhvc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IHdpZHRoOiA2MHB4OyB9XHJcbmRpdiB7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6MjBweDsgYmFja2dyb3VuZDpncmVlbjsgfWA7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogOSB9LCAoXywgaSkgPT4gaHRtbGA8ZGl2IEBjbGljaz1cIiR7XyA9PiB0aGlzLl9jbGFpbUZpZWxkKGkrMSl9XCI+PC9kaXY+YClcclxuICB9XHJcblxyXG4gIF9jbGFpbUZpZWxkKGZpZWxkOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYXJlYSwgZmllbGQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjc3MsIHByb3BlcnR5LCBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3V0dHQtYm9hcmQnKVxyXG5leHBvcnQgY2xhc3MgVXR0dEJvYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIGNzc2A6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgd2lkdGg6IDE4MHB4OyB9YDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sIChfLCBpKSA9PiBodG1sYDx1dHR0LWFyZWEgLmFyZWE9XCIke2krMX1cIj48L3V0dHQtYXJlYT5gKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjc3MsIHByb3BlcnR5LCBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3V0dHQtZ2FtZScpXHJcbmV4cG9ydCBjbGFzcyBVdHR0R2FtZSBleHRlbmRzIExpdEVsZW1lbnQge1xyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBjc3NgOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgdGV4dC1hbGlnbjogY2VudGVyOyB9YDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBodG1sYDxoZWFkZXI+PGgxPlVsdGltYXRlIFRpYyBUYWMgVG9lPC9oMT48L2hlYWRlcj5cclxuPHV0dHQtbG9iYnk+PC91dHR0LWxvYmJ5PmA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XHJcbmltcG9ydCB7IFV0dHRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXR0dC5zZXJ2aWNlJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCd1dHR0LWxvYmJ5JylcclxuZXhwb3J0IGNsYXNzIFV0dHRMb2JieSBleHRlbmRzIExpdEVsZW1lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgdXR0dFNlcnZpY2U6IFV0dHRTZXJ2aWNlID0gVXR0dFNlcnZpY2UuaW5zdGFuY2U7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXHJcbiAgZ2FtZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcclxuICBwbGF5ZXJzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIGNzc2A6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IH1cclxuI2dhbWVzIHsgZmxleDogMTsgfVxyXG4jcGxheWVycyB7IHdpZHRoOiAzMDBweDsgfWA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy51dHR0U2VydmljZS5zdGFydCgpLnRoZW4oXyA9PiB0aGlzLl9nZXRMb2JieUluZm8oKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRMb2JieUluZm8oKSB7XHJcbiAgICB0aGlzLnV0dHRTZXJ2aWNlLmdldExvYmJ5SW5mbygpLnRoZW4obG9iYnlJbmZvID0+IHtcclxuICAgICAgdGhpcy5nYW1lcyA9IGxvYmJ5SW5mby5nYW1lcztcclxuICAgICAgdGhpcy5wbGF5ZXJzID0gbG9iYnlJbmZvLnBsYXllcnM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBbdGhpcy5fcmVuZGVyR2FtZXMoKSwgdGhpcy5fcmVuZGVyUGxheWVycygpXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlbmRlckdhbWVzKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgPGRpdiBpZD1cImdhbWVzXCI+JHt0aGlzLmdhbWVzLm1hcChnID0+IGh0bWxgJHtnfWApfTwvZGl2PmA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZW5kZXJQbGF5ZXJzKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgPGRpdiBpZD1cInBsYXllcnNcIj4ke3RoaXMucGxheWVycy5tYXAoZyA9PiBodG1sYDxidXR0b24gQGNsaWNrPVwiJHtfID0+IHRoaXMuX2NoYWxsZW5nZShnKX1cIiA/ZGlzYWJsZWQ9JHtnID09PSB0aGlzLnV0dHRTZXJ2aWNlLnNlbGZ9PiR7Z308L2J1dHRvbj5gKX08L2Rpdj5gO1xyXG4gIH1cclxuXHJcbiAgX2NoYWxsZW5nZShwbGF5ZXI6IHN0cmluZykge1xyXG4gICAgdGhpcy51dHR0U2VydmljZS5jaGFsbGVuZ2UocGxheWVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzLCBwcm9wZXJ0eSwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCd1dHR0LWxvZ2luJylcclxuZXhwb3J0IGNsYXNzIFV0dHRMb2dpbiBleHRlbmRzIExpdEVsZW1lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBjc3NgOmhvc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IHdpZHRoOiAxODBweDsgfWA7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGA8dXR0dC1ib2FyZD48L3V0dHQtYm9hcmQ+YFxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuLi91dHR0L2NvbXBvbmVudHMvdXR0dC1nYW1lL3V0dHQtZ2FtZS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuLi91dHR0L2NvbXBvbmVudHMvdXR0dC1ib2FyZC91dHR0LWJvYXJkLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4uL3V0dHQvY29tcG9uZW50cy91dHR0LWFyZWEvdXR0dC1hcmVhLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4uL3V0dHQvY29tcG9uZW50cy91dHR0LWxvYmJ5L3V0dHQtbG9iYnkuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi4vdXR0dC9jb21wb25lbnRzL3V0dHQtbG9naW4vdXR0dC1sb2dpbi5jb21wb25lbnQnOyIsImltcG9ydCAqIGFzIHNpZ25hbFIgZnJvbSBcIkBtaWNyb3NvZnQvc2lnbmFsclwiO1xyXG5pbXBvcnQgeyBMb2JieUluZm8gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy91dHR0LmludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVdHR0U2VydmljZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBVdHR0U2VydmljZSA9IG5ldyBVdHR0U2VydmljZSgpO1xyXG5cclxuICBwcml2YXRlIF9jb25uZWN0aW9uID0gbmV3IHNpZ25hbFIuSHViQ29ubmVjdGlvbkJ1aWxkZXIoKS53aXRoVXJsKCcvdXR0dEh1YicpLmJ1aWxkKCk7XHJcblxyXG4gIGdldCBzZWxmKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbi5jb25uZWN0aW9uSWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3JlZ2lzdGVySGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlZ2lzdGVySGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLl9jb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCBjb25uZWN0aW9uSWQgPT4gY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcsIGNvbm5lY3Rpb25JZCkpO1xyXG4gICAgdGhpcy5fY29ubmVjdGlvbi5vbignY2hhbGxlbmdlZCcsIGNvbm5lY3Rpb25JZCA9PiBjb25zb2xlLmxvZygnY2hhbGxlbmdlZCcsIGNvbm5lY3Rpb25JZCkpO1xyXG4gICAgdGhpcy5fY29ubmVjdGlvbi5vbignYWNjZXB0ZWQnLCBjb25uZWN0aW9uSWQgPT4gY29uc29sZS5sb2coJ2FjY2VwdGVkJywgY29ubmVjdGlvbklkKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIC8vIENvdWxkIHRoaXMgYmUgZG9uZSBpbiBhZHZhbmNlP1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24uc3RhcnQoKS50aGVuKF8gPT4gY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gc3RhcnRlZC4nKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRMb2JieUluZm8oKTogUHJvbWlzZTxMb2JieUluZm8+IHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLmludm9rZSgnZ2V0TG9iYnlJbmZvJyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjaGFsbGVuZ2UocGxheWVyOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24uaW52b2tlKCdjaGFsbGVuZ2UnLCBwbGF5ZXIpLmNhdGNoKChlOiBFcnJvcikgPT4geyBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7IH0pO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=