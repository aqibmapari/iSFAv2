webpackJsonp([0],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_music_item_music_item_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_log_evnt_log_evnt_module__ = __webpack_require__(320);
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
            __WEBPACK_IMPORTED_MODULE_4__directives_log_evnt_log_evnt_module__["a" /* LogEvntDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_3__components_music_item_music_item_module__["a" /* MusicItemComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 315:
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

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicItemComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_item__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_ms_to_mins_ms_to_mins_module__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MusicItemComponentModule = (function () {
    function MusicItemComponentModule() {
    }
    return MusicItemComponentModule;
}());
MusicItemComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__music_item__["a" /* MusicItemComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__pipes_ms_to_mins_ms_to_mins_module__["a" /* MsToMinsPipeModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__music_item__["a" /* MusicItemComponent */]]
    })
], MusicItemComponentModule);

//# sourceMappingURL=music-item.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicItemComponent; });
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

var MusicItemComponent = (function () {
    function MusicItemComponent() {
    }
    return MusicItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MusicItemComponent.prototype, "track", void 0);
MusicItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'music-item',template:/*ion-inline-start:"F:\Ionic2\iSFAv2\src\components\music-item\music-item.html"*/'<a ion-item detail-none>\n  <ion-thumbnail item-left>\n    <img [src]="track.album.images[0].url" alt="">\n  </ion-thumbnail>\n  <h2>{{track.name}}</h2>\n  <h3>{{track.artists[0].name}}</h3>\n  <p>{{track.album.name}}</p>\n  <ion-note item-right>\n    {{track.duration_ms | msToMins}}\n  </ion-note>\n</a>'/*ion-inline-end:"F:\Ionic2\iSFAv2\src\components\music-item\music-item.html"*/
    }),
    __metadata("design:paramtypes", [])
], MusicItemComponent);

//# sourceMappingURL=music-item.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsToMinsPipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ms_to_mins__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MsToMinsPipeModule = (function () {
    function MsToMinsPipeModule() {
    }
    return MsToMinsPipeModule;
}());
MsToMinsPipeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__ms_to_mins__["a" /* MsToMinsPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__ms_to_mins__["a" /* MsToMinsPipe */]]
    })
], MsToMinsPipeModule);

//# sourceMappingURL=ms-to-mins.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsToMinsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MsToMinsPipe = (function () {
    function MsToMinsPipe() {
    }
    MsToMinsPipe.prototype.transform = function (value) {
        return this.durationFromMsHelper(value);
    };
    MsToMinsPipe.prototype.pad2 = function (num) {
        if (num <= 99) {
            num = ('0' + num).slice(-2);
        }
        return num;
    };
    MsToMinsPipe.prototype.durationFromMsHelper = function (ms) {
        var x = ms / 1000;
        var seconds = this.pad2(Math.floor(x % 60));
        x /= 60;
        var minutes = this.pad2(Math.floor(x % 60));
        x /= 60;
        var hours = Math.floor(x % 24);
        var newHours = hours ? this.pad2(hours) + ':' : '';
        return newHours + minutes + ':' + seconds;
    };
    return MsToMinsPipe;
}());
MsToMinsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'msToMins',
    })
], MsToMinsPipe);

//# sourceMappingURL=ms-to-mins.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEvntDirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_evnt__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LogEvntDirectiveModule = (function () {
    function LogEvntDirectiveModule() {
    }
    return LogEvntDirectiveModule;
}());
LogEvntDirectiveModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__log_evnt__["a" /* LogEvntDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__log_evnt__["a" /* LogEvntDirective */]]
    })
], LogEvntDirectiveModule);

//# sourceMappingURL=log-evnt.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEvntDirective; });
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

var LogEvntDirective = (function () {
    function LogEvntDirective() {
        console.log('Hello LogEvntDirective Directive');
    }
    LogEvntDirective.prototype.onClick = function (event) {
        console.log(event);
    };
    return LogEvntDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LogEvntDirective.prototype, "onClick", null);
LogEvntDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[logEvnt]'
    }),
    __metadata("design:paramtypes", [])
], LogEvntDirective);

//# sourceMappingURL=log-evnt.js.map

/***/ })

});
//# sourceMappingURL=0.js.map