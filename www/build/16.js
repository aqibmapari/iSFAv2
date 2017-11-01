webpackJsonp([16],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sharedservice__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(_ngZone, nav, menu, sharedService, utilService, modalCtrl) {
        var _this = this;
        this._ngZone = _ngZone;
        this.nav = nav;
        this.menu = menu;
        this.sharedService = sharedService;
        this.utilService = utilService;
        this.modalCtrl = modalCtrl;
        this.submitted = false;
        var temp = sharedService.getPages();
        this._ngZone.run(function () {
            _this.pages = temp; // this.utilService.filterObject(temp,'show',true);
        });
    }
    /*getTriples() {
        let triples = [];
        let length = this.pages.length;
        for (let i = 0; i < length; i += 3) {
            let trio = [];
            trio.push(this.pages[i]);
            if (i + 1 < length) {
                trio.push(this.pages[i + 1]);
            }
            if (i + 2 < length) {
                trio.push(this.pages[i + 2]);
            }

            triples.push(trio);
        }
        return triples;
    }*/
    HomePage.prototype.getDoubles = function () {
        var doubles = [];
        var length = this.pages.length;
        for (var i = 0; i < length; i += 2) {
            var trio = [];
            trio.push(this.pages[i]);
            if (i + 1 < length) {
                trio.push(this.pages[i + 1]);
            }
            doubles.push(trio);
        }
        return doubles;
    };
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page//
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        if (page.title == "Sync") {
            var modal = this.modalCtrl.create('SyncModalPage');
            modal.present();
        }
        else if (page.title == "Sign Off") {
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.push(page.component);
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        // the left menu should be disabled on the login page
        this.menu.close();
        this.menu.enable(false);
    };
    HomePage.prototype.ionViewWillLeave = function () {
        // enable the left menu when leaving the login page
        //this.nav.pop();
        this.menu.enable(true);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\Ionic2\iSFAv2\src\pages\home\home.html"*/'<!-- <ion-header>\n	<ion-navbar> -->\n		<!-- <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button> -->\n		<!-- <ion-title>Home</ion-title>\n	</ion-navbar>\n</ion-header> -->\n<ion-content>\n	<ion-card>\n		<img src="../../assets/img/logo.png"/>\n	</ion-card>\n	<ion-grid>\n		<ion-row *ngFor="let doubles of getDoubles()">\n			<ion-col *ngFor="let item of doubles" (click)="openPage(item)">\n				<ion-item style="text-align:center !important;">\n					<ion-icon [name]=\'item.iconName\' color="primary" style="font-size:24px;"></ion-icon><br>\n					<label>{{item.title}}</label>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"F:\Ionic2\iSFAv2\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_sharedservice__["a" /* SharedService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=16.js.map