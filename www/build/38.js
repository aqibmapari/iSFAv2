webpackJsonp([38],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sharedservice__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_apirequest_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_afterloginapi_service__ = __webpack_require__(205);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, menu, utilService, databaseService, sharedService, apiRequestService, afterLoginAPIService) {
        this.nav = nav;
        this.menu = menu;
        this.utilService = utilService;
        this.databaseService = databaseService;
        this.sharedService = sharedService;
        this.apiRequestService = apiRequestService;
        this.afterLoginAPIService = afterLoginAPIService;
        this.login = {};
        this.submitted = false;
        this.login.username = '40143';
        this.login.password = '40143';
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.apiRequestService.presentLoader('Please Wait...');
        var ip = this.sharedService.getIP();
        var className = this.sharedService.getAPIObj('user');
        this.apiRequestService.getAPI(ip + className).then(function (data) {
            console.log((data));
            _this.databaseService.deleteTableQuery('empdetails', '', []).then(function (obj) { }, function (err) { });
            for (var i = 0; i < data['empdetails'].length; i++) {
                var row = data['empdetails'][i];
                var pernr = _this.utilService.encode64(row.pernr);
                var nachn = _this.utilService.encode64(row.nachn);
                var vorna = _this.utilService.encode64(row.vorna);
                var role = _this.utilService.encode64(row.role);
                var password = _this.utilService.encode64(row.password);
                var roledesc = _this.utilService.encode64(row.roledesc);
                var reportto = _this.utilService.encode64((row.reportto).trim());
                var emailid = _this.utilService.encode64(row.emailid);
                var designation = _this.utilService.encode64(row.designation);
                var status = _this.utilService.encode64(row.status);
                var imei = _this.utilService.encode64(row.imei);
                var simno = _this.utilService.encode64(row.simno);
                var cleardata = _this.utilService.encode64(row.wipeflag);
                var grp = _this.utilService.encode64(row.group.trim());
                var server = _this.utilService.encode64(row.server);
                _this.databaseService.insertIntoTableQuery('empdetails', 'pernr,nachn,vorna,role,password, roledesc,reportto,emailid,designation,status,imei,simno,cleardata,grp,server', [pernr, nachn, vorna, role, password, roledesc, reportto, emailid, designation, status, imei, simno, cleardata, grp, server], i)
                    .then(function (obj) {
                    console.log(JSON.stringify(obj));
                }, function (err) {
                    console.log(JSON.stringify(err));
                });
            }
            _this.apiRequestService.dismissLoader();
        }, function (err) {
            console.log((err));
            _this.apiRequestService.dismissLoader();
        });
    };
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        console.log((form));
        if (form.valid) {
            var username = this.login.username;
            var password = this.login.password;
            this.databaseService.selectTableQuery('empdetails', '*', 'WHERE pernr=? and password=?', [this.utilService.encode64(username), this.utilService.encode64(password)], 0)
                .then(function (results) {
                console.log(JSON.stringify(results));
                _this.nav.setRoot('Home');
                // if(results['rows'].length !== 0){
                //     var row = results['rows']['item'](0);
                //     // var dpernr = this.utilService.decode64(row.pernr);
                //     // var dpassword = this.utilService.decode64(row.password);
                //     var dnachn = this.utilService.decode64(row.nachn);
                //     var dvorna = this.utilService.decode64(row.vorna);
                //     var drole = this.utilService.decode64(row.role);
                //     var dgrp = (this.utilService.decode64(row.grp));
                //     var demailid = this.utilService.decode64(row.emailid);
                //     // var dserver = this.utilService.decode64(row.server);
                //     // var eserver = row.server;
                //     // alert(username);
                //     this.sharedService.setPernr(username);
                //     window.sessionStorage.setItem("userfname",dnachn);
                //     window.sessionStorage.setItem("userlname",dvorna);
                //     window.sessionStorage.setItem("curentuseridforcalender",username);
                //     window.sessionStorage.setItem("empname",dnachn+" "+dvorna);
                //     window.sessionStorage.setItem("dept",dgrp);
                //     window.sessionStorage.setItem("drole",drole);
                //     //window.sessionStorage.setItem("dept","Pre-Sales");
                //     window.sessionStorage.setItem("pwd",password);
                //     if(this.utilService.checkEncodedBlank(demailid) != 'null'){
                //         window.sessionStorage.setItem("useremailid",demailid);
                //     }
                //     else{
                //         window.sessionStorage.setItem("useremailid",'');
                //     }
                //
                //     // this.nav.setRoot(Home);
                //     // this.authenticate();
                //     this.apiRequestService.presentLoader('Please Wait...');
                //     this.insertSettingsData();
                // }
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    LoginPage.prototype.authenticate = function () {
        var _this = this;
        // this.apiRequestService.presentLoader('Please Wait...');
        var ip = this.sharedService.getIP();
        var className = this.sharedService.getAPIObj('authenticate');
        this.apiRequestService.getAPI(ip + className).then(function (data) {
            console.log((data));
            if (data['response'][0]['status'] == 'success') {
                //this.insertSettingsData();
                _this.nav.setRoot('Home');
            }
            else {
                _this.apiRequestService.presentToast('Invalid User!!!');
                _this.apiRequestService.dismissLoader();
                // this.nav.setRoot(Home);
            }
        }, function (err) {
            console.log((err));
            _this.apiRequestService.dismissLoader();
        });
    };
    LoginPage.prototype.insertSettingsData = function () {
        var _this = this;
        this.afterLoginAPIService.callDashboardVideo().then(function (obj) {
            _this.afterLoginAPIService.callSettings().then(function (obj) {
                _this.afterLoginAPIService.callParameters().then(function (obj) {
                    _this.afterLoginAPIService.callMenuParameters().then(function (obj) {
                        _this.goToHomePage();
                    }, function (err) { _this.onAPIError(); });
                }, function (err) { _this.onAPIError(); });
            }, function (err) { _this.onAPIError(); });
        }, function (err) { _this.onAPIError(); });
    };
    LoginPage.prototype.goToHomePage = function () {
        var _this = this;
        this.databaseService.selectTableQuery('usermenumst', '*', 'WHERE pernr=?', [this.utilService.encode64(this.login.username)], 0)
            .then(function (results) {
            console.log(JSON.stringify(results));
            // var menuArray = [];
            var subMenuArray = [];
            var pages = _this.sharedService.getPages();
            if (results['rows'].length !== 0) {
                for (var i = 0; i < results['rows'].length; i++) {
                    var row = results['rows']['item'](i);
                    var menu = _this.utilService.decode64(row.menu);
                    var submenu = _this.utilService.decode64(row.submenu);
                    var flag = _this.utilService.decode64(row.flag);
                    if (flag == 'on') {
                        // menuArray.push(menu);
                        var obj = {};
                        obj['menu'] = menu;
                        obj['submenu'] = submenu;
                        subMenuArray.push(obj);
                        var index = pages.map(function (x) { return (x['id'] == menu); }).indexOf(true);
                        if (index !== -1)
                            pages[index]['show'] = true;
                    }
                }
                // var unique=menuArray.filter(function(itm,i,menuArray){
                //     return i==menuArray.indexOf(itm);
                // });
            }
            // console.log(unique);
            console.log(subMenuArray);
            // this.sharedService.setMenuArr(unique);
            _this.sharedService.setPages(pages);
            _this.sharedService.setSubMenuArr(subMenuArray);
            _this.apiRequestService.dismissLoader();
            _this.nav.setRoot('Home');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    LoginPage.prototype.onAPIError = function () {
        // this.apiRequestService.dismissLoader();
        this.apiRequestService.presentToast('Could Not Connect to server. Please check internet connection and retry');
        this.goToHomePage();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        // the left menu should be disabled on the login page
        this.menu.close();
        this.menu.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // enable the left menu when leaving the login page
        //this.nav.pop();
        this.menu.enable(true);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"F:\Ionic2\iSFAv2\src\pages\login\login.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!-- <ion-list>\n\n		<ion-item>\n			<ion-label floating>Username</ion-label>\n			<ion-input type="text"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Password</ion-label>\n			<ion-input type="password"></ion-input>\n		</ion-item>\n\n	</ion-list>\n\n	<button ion-button block (click)="login()">Sign In</button> -->\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-item>\n			<ion-label floating color="primary">UserId</ion-label>\n			<ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n		</ion-item>\n		<p [hidden]="username.valid || submitted == false" color="danger" padding-left>\n		UserId is required\n		</p>\n\n		<ion-item>\n			<ion-label floating color="primary">Password</ion-label>\n			<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required></ion-input>\n		</ion-item>\n		<p [hidden]="password.valid || submitted == false" color="danger" padding-left>\n		Password is required\n		</p>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" color="primary" block>Login</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\Ionic2\iSFAv2\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_database_service__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_sharedservice__["a" /* SharedService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_apirequest_service__["a" /* APIRequestService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_afterloginapi_service__["a" /* AfterLoginAPIService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=38.js.map