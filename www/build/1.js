webpackJsonp([1],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Device; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(83);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Device
 * @description
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```typescript
 * import { Device } from '@ionic-native/device';
 *
 * constructor(private device: Device) { }
 *
 * ...
 *
 * console.log('Device UUID is: ' + this.device.uuid);
 * ```
 */
var Device = (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Device;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));
Device.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
Device.ctorParameters = function () { return []; };
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
    __metadata("design:type", String)
], Device.prototype, "cordova", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
    __metadata("design:type", String)
], Device.prototype, "model", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
    __metadata("design:type", String)
], Device.prototype, "platform", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
    __metadata("design:type", String)
], Device.prototype, "uuid", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
    __metadata("design:type", String)
], Device.prototype, "version", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
    __metadata("design:type", String)
], Device.prototype, "manufacturer", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
    __metadata("design:type", Boolean)
], Device.prototype, "isVirtual", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
    __metadata("design:type", String)
], Device.prototype, "serial", void 0);
Device = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
        pluginName: 'Device',
        plugin: 'cordova-plugin-device',
        pluginRef: 'device',
        repo: 'https://github.com/apache/cordova-plugin-device',
        platforms: ['Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'macOS', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Device);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppVersion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(83);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name App Version
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * @usage
 * ```typescript
 * import { AppVersion } from '@ionic-native/app-version';
 *
 * constructor(private appVersion: AppVersion) { }
 *
 * ...
 *
 *
 * this.appVersion.getAppName();
 * this.appVersion.getPackageName();
 * this.appVersion.getVersionCode();
 * this.appVersion.getVersionNumber();
 *
 * ```
 */
var AppVersion = (function (_super) {
    __extends(AppVersion, _super);
    function AppVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the name of the app
     * @returns {Promise<any>}
     */
    AppVersion.prototype.getAppName = function () { return; };
    /**
     * Returns the package name of the app
     * @returns {Promise<any>}
     */
    AppVersion.prototype.getPackageName = function () { return; };
    /**
     * Returns the build identifier of the app
     * @returns {Promise<any>}
     */
    AppVersion.prototype.getVersionCode = function () { return; };
    /**
     * Returns the version of the app
     * @returns {Promise<any>}
     */
    AppVersion.prototype.getVersionNumber = function () { return; };
    return AppVersion;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));
AppVersion.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
AppVersion.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppVersion.prototype, "getAppName", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppVersion.prototype, "getPackageName", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppVersion.prototype, "getVersionCode", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppVersion.prototype, "getVersionNumber", null);
AppVersion = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
        pluginName: 'AppVersion',
        plugin: 'cordova-plugin-app-version',
        pluginRef: 'cordova.getAppVersion',
        repo: 'https://github.com/whiteoctober/cordova-plugin-app-version',
        platforms: ['Android', 'iOS', 'Windows']
    })
], AppVersion);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsAboutPageModule", function() { return SettingsAboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settingsabout__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsAboutPageModule = (function () {
    function SettingsAboutPageModule() {
    }
    return SettingsAboutPageModule;
}());
SettingsAboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settingsabout__["SettingsAboutPage"],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settingsabout__["SettingsAboutPage"]),
        ]
    })
], SettingsAboutPageModule);

//# sourceMappingURL=settingsabout.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SettingsAbout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sharedservice__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsAbout = (function () {
    function SettingsAbout(utilService, platform, databaseService, sharedService, appVersion, device) {
        var _this = this;
        this.utilService = utilService;
        this.platform = platform;
        this.databaseService = databaseService;
        this.sharedService = sharedService;
        this.appVersion = appVersion;
        this.device = device;
        this.selectedSettings = {};
        this.platform.ready().then(function () {
            console.log(device);
            _this.pernr = _this.sharedService.getPernr();
            _this.selectedSettings = {
                userid: _this.pernr,
                empno: _this.pernr,
                model: device['model'],
                make: device['manufacturer'],
                imei: device['uuid'],
                platform: device['platform'],
                osversion: device['version']
            };
            appVersion.getVersionNumber().then(function (version) {
                _this.selectedSettings.appversion = version;
            });
            var sql = 'SELECT distinct e.pernr,e.nachn,e.vorna,e.role,e.password,e.roledesc,e.reportto,e.emailid,e.designation,e.status,' +
                'e1.nachn as reporttonachn,e1.vorna as reporttovorna FROM empdetails e LEFT OUTER JOIN empdetails e1 ON e.pernr = e1.pernr and e.pernr=?';
            _this.databaseService.selectComplexQuery(sql, [_this.utilService.encode64(_this.pernr)], 0)
                .then(function (results) {
                console.log(JSON.stringify(results));
                if (results['rows'].length !== 0) {
                    var row = results['rows']['item'](0);
                    _this.selectedSettings.firstname = _this.utilService.decode64(row.nachn);
                    _this.selectedSettings.lastname = _this.utilService.decode64(row.vorna);
                    _this.selectedSettings.designation = _this.utilService.decode64(row.designation);
                    _this.selectedSettings.role = (_this.utilService.decode64(row.roledesc));
                    _this.selectedSettings.emailid = _this.utilService.decode64(row.emailid);
                    var reportingtofname = _this.utilService.decode64(row.reporttonachn);
                    var reportingtolname = _this.utilService.decode64(row.reporttovorna);
                    if (reportingtofname != null)
                        _this.selectedSettings.reportingto = reportingtofname + ' ' + reportingtolname;
                }
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        });
    }
    return SettingsAbout;
}());
SettingsAbout = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'settings-about',template:/*ion-inline-start:"F:\Ionic2\iSFAv2\src\pages\settings\about\settingsabout.html"*/'<ion-list>\n\n    <ion-list-header>\n\n    User\n\n    </ion-list-header>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>User ID</ion-col>\n\n            <ion-col width-67>{{selectedSettings.userid}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>First Name</ion-col>\n\n            <ion-col width-67>{{selectedSettings.firstname}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Last Name</ion-col>\n\n            <ion-col width-67>{{selectedSettings.lastname}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Email ID</ion-col>\n\n            <ion-col width-67>{{selectedSettings.emailid}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-list-header>\n\n    Company\n\n    </ion-list-header>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Designation</ion-col>\n\n            <ion-col width-67>{{selectedSettings.designation}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Reporting to</ion-col>\n\n            <ion-col width-67>{{selectedSettings.reportingto}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Role</ion-col>\n\n            <ion-col width-67>{{selectedSettings.role}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Empl. No.</ion-col>\n\n            <ion-col width-67>{{selectedSettings.empno}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-list-header>\n\n    Device Details\n\n    </ion-list-header>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Model Name</ion-col>\n\n            <ion-col width-67>{{selectedSettings.model}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Make</ion-col>\n\n            <ion-col width-67>{{selectedSettings.make}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>IMEI</ion-col>\n\n            <ion-col width-67>{{selectedSettings.imei}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Platform</ion-col>\n\n            <ion-col width-67>{{selectedSettings.platform}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>O/S Version</ion-col>\n\n            <ion-col width-67>{{selectedSettings.osversion}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>App Version</ion-col>\n\n            <ion-col width-67>{{selectedSettings.appversion}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n</ion-list>\n\n'/*ion-inline-end:"F:\Ionic2\iSFAv2\src\pages\settings\about\settingsabout.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_database_service__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_sharedservice__["a" /* SharedService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__["a" /* AppVersion */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */]])
], SettingsAbout);

//# sourceMappingURL=settingsabout.js.map

/***/ })

});
//# sourceMappingURL=1.js.map