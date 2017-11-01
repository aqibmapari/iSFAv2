webpackJsonp([28],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDefaultPageModule", function() { return SettingsDefaultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settingsdefault__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsDefaultPageModule = (function () {
    function SettingsDefaultPageModule() {
    }
    return SettingsDefaultPageModule;
}());
SettingsDefaultPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settingsdefault__["a" /* SettingsDefaultPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settingsdefault__["a" /* SettingsDefaultPage */]),
        ]
    })
], SettingsDefaultPageModule);

//# sourceMappingURL=settingsdefault.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sharedservice__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsDefaultPage = (function () {
    function SettingsDefaultPage(utilService, platform, databaseService, sharedService) {
        var _this = this;
        this.utilService = utilService;
        this.platform = platform;
        this.databaseService = databaseService;
        this.sharedService = sharedService;
        this.selectedSettings = {};
        this.platform.ready().then(function () {
            _this.pernr = _this.sharedService.getPernr();
            _this.selectedSettings = {
                duration: '1 Hour',
                visittype: 'Sales',
                reason: 'Regular Visit',
                priority: 'Medium'
            };
            var sql = 'SELECT distinct pernr,id,subtyp FROM defaults where pernr=?';
            _this.databaseService.selectComplexQuery(sql, [_this.utilService.encode64(_this.pernr)], 0)
                .then(function (results) {
                console.log(JSON.stringify(results));
                if (results['rows'].length !== 0) {
                    for (var i = 0; i < results['rows'].length; i++) {
                        var row = results['rows']['item'](i);
                        if (_this.utilService.decode64(row.subtyp) == 'salesorganization') {
                            _this.selectedSettings.salesorg = _this.utilService.decode64(row.id);
                        }
                        else if (_this.utilService.decode64(row.subtyp) == 'distributionchannel') {
                            _this.selectedSettings.distrchannel = _this.utilService.decode64(row.id);
                        }
                        else if (_this.utilService.decode64(row.subtyp) == 'division') {
                            _this.selectedSettings.division = _this.utilService.decode64(row.id);
                        }
                        else if (_this.utilService.decode64(row.subtyp) == 'order') {
                            _this.selectedSettings.salesdoc = _this.utilService.decode64(row.id);
                        }
                    }
                }
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        });
    }
    return SettingsDefaultPage;
}());
SettingsDefaultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'settings-default',template:/*ion-inline-start:"F:\Ionic2\iSFAv2\src\pages\settings\default\settingsdefault.html"*/'<ion-list>\n\n    <ion-list-header>\n\n    Order\n\n    </ion-list-header>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Sales Organization</ion-col>\n\n            <ion-col width-67>{{selectedSettings.salesorg}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Distribution Channel</ion-col>\n\n            <ion-col width-67>{{selectedSettings.distrchannel}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Division</ion-col>\n\n            <ion-col width-67>{{selectedSettings.division}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Sales Document Type</ion-col>\n\n            <ion-col width-67>{{selectedSettings.salesdoc}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-list-header>\n\n    Visit\n\n    </ion-list-header>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Duration</ion-col>\n\n            <ion-col width-67>{{selectedSettings.duration}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Visit Type</ion-col>\n\n            <ion-col width-67>{{selectedSettings.visittype}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Reason</ion-col>\n\n            <ion-col width-67>{{selectedSettings.reason}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-33>Priority</ion-col>\n\n            <ion-col width-67>{{selectedSettings.priority}}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n</ion-list>\n\n'/*ion-inline-end:"F:\Ionic2\iSFAv2\src\pages\settings\default\settingsdefault.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_util_service__["a" /* UtilService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_database_service__["a" /* DatabaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_database_service__["a" /* DatabaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_sharedservice__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_sharedservice__["a" /* SharedService */]) === "function" && _d || Object])
], SettingsDefaultPage);

var _a, _b, _c, _d;
//# sourceMappingURL=settingsdefault.js.map

/***/ })

});
//# sourceMappingURL=28.js.map