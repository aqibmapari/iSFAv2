webpackJsonp([2],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncModalPageModule", function() { return SyncModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__syncmodal__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SyncModalPageModule = (function () {
    function SyncModalPageModule() {
    }
    return SyncModalPageModule;
}());
SyncModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__syncmodal__["a" /* SyncModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__syncmodal__["a" /* SyncModalPage */]),
        ],
    })
], SyncModalPageModule);

//# sourceMappingURL=syncmodal.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apirequest_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_afterloginapi_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mastersyncapi_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_customersyncapi_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_visitsyncapi_service__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {UtilService} from '../../providers/util.service';
// import {DatabaseService} from '../../providers/database.service';
// import {SharedService} from '../../providers/sharedservice';





/**
 * Generated class for the SyncPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SyncModalPage = (function () {
    function SyncModalPage(platform, params, viewCtrl, 
        // public utilService: UtilService,
        // public databaseService: DatabaseService,
        // public sharedService: SharedService,
        apiRequestService, afterLoginAPIService, masterSyncAPIService, customerSyncAPIService, visitSyncAPIService) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.apiRequestService = apiRequestService;
        this.afterLoginAPIService = afterLoginAPIService;
        this.masterSyncAPIService = masterSyncAPIService;
        this.customerSyncAPIService = customerSyncAPIService;
        this.visitSyncAPIService = visitSyncAPIService;
        this.items = [{ title: 'Sync All', id: 'allsync', note: 'Last 12.01.2016 09:35:05' },
            { title: 'Sync Masters Data', id: 'mastersync', note: 'Last 12.01.2016 09:38:05' },
            { title: 'Send Data', id: 'sendsync', note: 'Last 11.01.2016 17:57:23' }
        ];
    }
    SyncModalPage.prototype.getData = function (id) {
        if (id == "allsync") {
            this.insertData();
        }
        else if (id == "mastersync") {
            this.insertMasters();
        }
        else if (id == "orderssync") {
            this.sendData();
        }
    };
    SyncModalPage.prototype.insertData = function () {
        var _this = this;
        this.apiRequestService.presentLoader('Please Wait... All Data Syncing.');
        this.customerSyncAPIService.callCustomer(0).then(function (obj) {
            _this.visitSyncAPIService.callVisitPJP().then(function (obj) {
                // add visit/call related API here later
                _this.customerSyncAPIService.callCustCredit(0, 0).then(function (obj) {
                    _this.customerSyncAPIService.callCustSOInvDetails(0, 0).then(function (obj) {
                        _this.customerSyncAPIService.callCustomerContact(0).then(function (obj) {
                            _this.customerSyncAPIService.callCustomerAssetMaster(0, 0).then(function (obj) {
                                _this.apiRequestService.presentToast('Done');
                                _this.apiRequestService.dismissLoader();
                            }, function (err) { _this.onAPIError(); });
                        }, function (err) { _this.onAPIError(); });
                    }, function (err) { _this.onAPIError(); });
                }, function (err) { _this.onAPIError(); });
            }, function (err) { _this.onAPIError(); });
        }, function (err) { _this.onAPIError(); });
    };
    SyncModalPage.prototype.insertMasters = function () {
        var _this = this;
        this.apiRequestService.presentLoader('Please Wait... Masters Data Syncing.');
        this.masterSyncAPIService.callMaterial(0).then(function (obj) {
            _this.masterSyncAPIService.callArticlePricelist().then(function (obj) {
                _this.masterSyncAPIService.callPriorityMaster().then(function (obj) {
                    _this.masterSyncAPIService.callPromoDetails(0, 0, 0, 0).then(function (obj) {
                        _this.apiRequestService.presentToast('Done');
                        _this.apiRequestService.dismissLoader();
                    }, function (err) { _this.onAPIError(); });
                }, function (err) { _this.onAPIError(); });
            }, function (err) { _this.onAPIError(); });
        }, function (err) { _this.onAPIError(); });
    };
    SyncModalPage.prototype.sendData = function () {
    };
    SyncModalPage.prototype.onAPIError = function () {
        this.apiRequestService.dismissLoader();
        this.apiRequestService.presentToast('Could Not Connect to server. Please check internet connection and retry');
    };
    SyncModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SyncModalPage;
}());
SyncModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\Ionic2\iSFAv2\src\pages\syncmodal\syncmodal.html"*/'<ion-header>\n  <ion-toolbar>\n      <ion-title>Sync</ion-title>\n      <ion-buttons start>\n          <button ion-button (click)="dismiss()">\n              <span color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item *ngFor="let item of items" (click)="getData(item.id)">\n          {{item.title}}\n          <ion-note item-right>\n          {{item.note}}\n          </ion-note>\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\Ionic2\iSFAv2\src\pages\syncmodal\syncmodal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_apirequest_service__["a" /* APIRequestService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_afterloginapi_service__["a" /* AfterLoginAPIService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_mastersyncapi_service__["a" /* MasterSyncAPIService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_customersyncapi_service__["a" /* CustomerSyncAPIService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_visitsyncapi_service__["a" /* VisitSyncAPIService */]])
], SyncModalPage);

//# sourceMappingURL=syncmodal.js.map

/***/ })

});
//# sourceMappingURL=2.js.map