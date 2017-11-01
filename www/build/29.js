webpackJsonp([29],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsBackendPageModule", function() { return SettingsBackendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settingsbackend__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsBackendPageModule = (function () {
    function SettingsBackendPageModule() {
    }
    return SettingsBackendPageModule;
}());
SettingsBackendPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settingsbackend__["SettingsBackendPage"],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settingsbackend__["SettingsBackendPage"]),
        ]
    })
], SettingsBackendPageModule);

//# sourceMappingURL=settingsbackend.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SettingsBackend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsBackend = (function () {
    function SettingsBackend() {
        this.selectedSettings = {};
        this.selectedSettings = {
            servername: 'SAP DEV',
            applserver: '192.168.2.3',
            instance: '140',
            systemid: '10',
            router: ''
        };
    }
    return SettingsBackend;
}());
SettingsBackend = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'settings-backend',template:/*ion-inline-start:"F:\Ionic2\iSFAv2\src\pages\settings\backend\settingsbackend.html"*/'<ion-list>\n\n    <ion-list-header>\n\n    Server Details\n\n    </ion-list-header>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Server Name</ion-col>\n\n            <ion-col width-67>{{selectedSettings.servername}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Appl Server</ion-col>\n\n            <ion-col width-67>{{selectedSettings.applserver}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Instance</ion-col>\n\n            <ion-col width-67>{{selectedSettings.instance}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>System ID</ion-col>\n\n            <ion-col width-67>{{selectedSettings.systemid}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Router</ion-col>\n\n            <ion-col width-67>{{selectedSettings.router}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n</ion-list>\n\n'/*ion-inline-end:"F:\Ionic2\iSFAv2\src\pages\settings\backend\settingsbackend.html"*/
    }),
    __metadata("design:paramtypes", [])
], SettingsBackend);

//# sourceMappingURL=settingsbackend.js.map

/***/ })

});
//# sourceMappingURL=29.js.map