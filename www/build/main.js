webpackJsonp([21],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/article/article.module": [
		289,
		48
	],
	"../pages/capture/capture.module": [
		290,
		47
	],
	"../pages/changepassword/changepassword.module": [
		291,
		44
	],
	"../pages/customer/customer.module": [
		292,
		43
	],
	"../pages/dashboard/dashboard.module": [
		293,
		42
	],
	"../pages/diary/diary.module": [
		294,
		41
	],
	"../pages/home/home.module": [
		295,
		40
	],
	"../pages/lead/lead.module": [
		296,
		39
	],
	"../pages/login/login.module": [
		297,
		38
	],
	"../pages/marketintelligence/marketintelligence.module": [
		298,
		37
	],
	"../pages/marketplan/marketplan.module": [
		299,
		36
	],
	"../pages/merchandising/merchandising.module": [
		300,
		35
	],
	"../pages/myactivity/myactivity.module": [
		301,
		34
	],
	"../pages/orders/orders.module": [
		302,
		33
	],
	"../pages/pod/pod.module": [
		303,
		32
	],
	"../pages/potential/potential.module": [
		304,
		31
	],
	"../pages/pricelist/pricelist.module": [
		305,
		30
	],
	"../pages/settings/about/settingsabout.module": [
		345,
		24
	],
	"../pages/settings/backend/settingsbackend.module": [
		349,
		29
	],
	"../pages/settings/default/settingsdefault.module": [
		347,
		28
	],
	"../pages/settings/settings.module": [
		306,
		23
	],
	"../pages/stock/stock.module": [
		307,
		27
	],
	"../pages/sync/sync.module": [
		308,
		26
	],
	"../pages/syncmodal/syncmodal.module": [
		309,
		25
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAllTablesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateAllTablesService = (function () {
    function CreateAllTablesService(databaseService) {
        this.databaseService = databaseService;
    }
    CreateAllTablesService.prototype.createAllTables = function () {
        this.createDashboardVideoTable();
        this.createCustTabMstTable();
        this.createArticleTabmstTable();
        this.createServermstTable();
        this.createDefaultsTable();
        this.createParametersTable();
        this.createMenuParametersTable();
        this.createMaterialmstTable();
        this.createArticlePricelistTable();
        this.createArticleKeyaccplTable();
        this.createArticleCustclassplTable();
        this.createArticleCustchainplTable();
        this.createArticlebrcustclassplTable();
        this.createArticleCustomerplTable();
        this.createA305Table();
        this.createCustBranchmstTable();
        this.createCustChainmstTable();
        this.createCustClassmstTable();
        this.createCustKeyacctsmstTable();
        this.createPricelistpriomstTable();
        this.createPromoFamilyTable();
        this.createPromoMaterialTable();
        this.createPromoConfigTable();
        this.createPromoStructTable();
        this.createPromoStructMaterialTable();
        this.createCustomermstTable();
        this.createVisitTransactionTable();
        this.createCustomerCreditTable();
        this.createCustomerCreditLimitTable();
        this.createCustomerSODetailsTable();
        this.createCustomerInvDetailsTable();
        this.createCustomerContactTable();
        this.createAssetTable();
        this.createCustomerAssetTable();
        this.createCustomerAssetStatusTable();
    };
    CreateAllTablesService.prototype.createDashboardVideoTable = function () {
        this.databaseService.createTableQuery('dashboardvideomst', 'vid text, vidname text, vidlocalpath text, thumblocalpath text,pernr text')
            .then(function (obj) {
            console.log('table created dashboardvideomst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustTabMstTable = function () {
        this.databaseService.createTableQuery('custtabmst', 'pernr text, branch text,customergroup text,customerclass text,customerchain text,popclass text, industry text,' +
            'industrycode1 text,parentgroup text,territorysalesgrp text,customer text,status text')
            .then(function (obj) {
            console.log('table created custtabmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createArticleTabmstTable = function () {
        this.databaseService.createTableQuery('articletabmst', 'pernr text, businessunit text,producdivision text,category text,subcategory text,principal text, brand text, segment text')
            .then(function (obj) {
            console.log('table created articletabmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createServermstTable = function () {
        this.databaseService.createTableQuery('servermst', 'servername text, Applicationserver text,instance text,systemid text,router text')
            .then(function (obj) {
            console.log('table created servermst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createDefaultsTable = function () {
        this.databaseService.createTableQuery('defaults', 'pernr text, id text,subtyp text')
            .then(function (obj) {
            console.log('table created defaults');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createParametersTable = function () {
        this.databaseService.createTableQuery('parametermst', 'parameter text, value text')
            .then(function (obj) {
            console.log('table created parametermst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createMenuParametersTable = function () {
        this.databaseService.createTableQuery('usermenumst', 'pernr text,menu text,submenu text,flag text')
            .then(function (obj) {
            console.log('table created usermenumst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createMaterialmstTable = function () {
        this.databaseService.createTableQuery('materialmst', 'pernr text,matnr text, maktx text,packing text, division text,listprice text,eancode text, businessunit text, ' +
            'proddivision text, category text, subcategory text, principal text, brand text, segment text, uom text, status text, temp text')
            .then(function (obj) {
            console.log('table created materialmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createArticlePricelistTable = function () {
        this.databaseService.createTableQuery('A907', 'pernr text, kappl text, kschl text, matnr text, datab text, datbi text, kbetr text, uom text')
            .then(function (obj) {
            console.log('table created A907');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createArticleKeyaccplTable = function () {
        this.databaseService.createTableQuery('A907keyaccountsmst', 'pernr text, kappl text, kschl text, matnr text, datab text, datbi text, kbetr text, uom text, keyaccountid text, keyaccount text')
            .then(function (obj) {
            console.log('table created A907keyaccountsmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createArticleCustclassplTable = function () {
        this.databaseService.createTableQuery('A907custclassmst', 'pernr text, kappl text, kschl text, matnr text, datab text, datbi text, kbetr text, uom text, custclassid text, custclass text')
            .then(function (obj) {
            console.log('table created A907custclassmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createArticleCustchainplTable = function () {
        this.databaseService.createTableQuery('A907custchainmst', 'pernr text, kappl text, kschl text, matnr text, datab text, datbi text, kbetr text, uom text, custchainid text, custchain text')
            .then(function (obj) {
            console.log('table created A907custchainmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createArticlebrcustclassplTable = function () {
        this.databaseService.createTableQuery('A907branchclassmst', 'pernr text, kappl text, kschl text, matnr text, datab text, datbi text, kbetr text, uom text, branchid text, branch text, custclassid text, custclass text')
            .then(function (obj) {
            console.log('table created A907branchclassmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createArticleCustomerplTable = function () {
        this.databaseService.createTableQuery('A907customermst', 'pernr text, kappl text, kschl text, matnr text, datab text, datbi text, kbetr text, uom text, kunnr text')
            .then(function (obj) {
            console.log('table created A907customermst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createA305Table = function () {
        this.databaseService.createTableQuery('A305', 'pernr text, kappl text, kschl text, matnr text, datab text, datbi text, kbetr text, uom text, kunnr text')
            .then(function (obj) {
            console.log('table created A305');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustBranchmstTable = function () {
        this.databaseService.createTableQuery('custbranchmst', 'pernr text, branchid text, vkbur text')
            .then(function (obj) {
            console.log('table created custbranchmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustChainmstTable = function () {
        this.databaseService.createTableQuery('custchainmst', 'pernr text, custchainid text, kvgr2 text')
            .then(function (obj) {
            console.log('table created custchainmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustClassmstTable = function () {
        this.databaseService.createTableQuery('custclassmst', 'pernr text, classid text, kvgr1 text')
            .then(function (obj) {
            console.log('table created custclassmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustKeyacctsmstTable = function () {
        this.databaseService.createTableQuery('custkeyacctsmst', 'pernr text, keyaccountid text, kvgr4 text')
            .then(function (obj) {
            console.log('table created custkeyacctsmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createPricelistpriomstTable = function () {
        this.databaseService.createTableQuery('pricelistpriomst', 'pernr text, tablename text, priority text')
            .then(function (obj) {
            console.log('table created pricelistpriomst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createPromoFamilyTable = function () {
        this.databaseService.createTableQuery('promofamilymst', 'typeid text, pernr text, description text,startdate text,enddate text,orderedtype text, promotype text,ouom text,puom text,'
            + 'oparameter text,promoparameter text,flag text')
            .then(function (obj) {
            console.log('table created promofamilymst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createPromoMaterialTable = function () {
        this.databaseService.createTableQuery('promomaterialmst', 'typeid text,promoid text,matnr text,type text,pernr text, qnty text,uom text,discount text, price text')
            .then(function (obj) {
            console.log('table created promomaterialmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createPromoConfigTable = function () {
        this.databaseService.createTableQuery('promoconfigmst', 'typeid text,value text,promovalue text,promotype text,pernr text')
            .then(function (obj) {
            console.log('table created promoconfigmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createPromoStructTable = function () {
        this.databaseService.createTableQuery('promostructmst', 'typeid text, pernr text, description text,startdate text,enddate text,forcedflag text, discount text,ouom text,flag text')
            .then(function (obj) {
            console.log('table created promostructmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createPromoStructMaterialTable = function () {
        this.databaseService.createTableQuery('promomaterialstructmst', 'typeid text,promoid text,matnr text,type text,pernr text,discount text')
            .then(function (obj) {
            console.log('table created promomaterialstructmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustomermstTable = function () {
        this.databaseService.createTableQuery('customermst', 'typeid number, kunnr text, land1 text,name1 text,name2 text,custclass text,popclass text,abcclass text,chain text, ' +
            'pernr text,address text,branch text,custgrp text,custstatus text, custtype text,latitude text,longitude text,city text, ' +
            'channeltype1 text,channeltype2 text,territory text,parentgroup text,outletname text,website text,zterm text,emailid text, ' +
            'cflag text,type text,area text,areacode text,billto text')
            .then(function (obj) {
            console.log('table created customermst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createVisitTransactionTable = function () {
        this.databaseService.createTableQuery('visittran', 'visitid text, createdUserId text, visitDate text,visitStartTime text,visitEndTime text,customerId text,customerType Text,' +
            'customerName text,contactPerson text,contactNumber text,creationDate text,creationTime text, discription text,visitTypeId text,' +
            'reasonId text,priorityId text,assigneeName text,assigneeUserId text,category text,status text,articleid text,objective1 text,' +
            'subobjective1 text,objective2 text,subobjective2 text,objective3 text,subobjective3 text,objective4 text,subobjective4 text,' +
            'objective5 text,subobjective5 text,objective1moduleresponse text,objective2moduleresponse text,objective3moduleresponse text,' +
            'objective4moduleresponse text,objective5moduleresponse text,otherobjective text,objective1customerresponse text, objective1futureaction text,' +
            'objective2customerresponse text, objective2futureaction text,otherobjectivecustomerresponse text, otherobjectivefutureaction text,' +
            'checkintime text,checkindate text, checkouttime text, checkoutdate text,sendflag text,captureObjectiveJSON text,note text,latforuser text,' +
            'longforuser text,sendtoserverflag text,ooflag text,objective text,servervisitflag text,ordervalue text,collectionvalue text,comments text,' +
            'fadate text,faStartTime text, faEndTime text')
            .then(function (obj) {
            console.log('table created visittran');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustomerCreditTable = function () {
        this.databaseService.createTableQuery('custcreditmst', 'kunnr text, invno text,invdate text,invamount text,amountrec text,date text,balance text,duedate text,instrumentno text,' +
            'invdatetime text,pernr text')
            .then(function (obj) {
            console.log('table created custcreditmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustomerCreditLimitTable = function () {
        this.databaseService.createTableQuery('custcreditlimitmst', 'kunnr text,pernr text, creditlimit text,used text,receivable text')
            .then(function (obj) {
            console.log('table created custcreditlimitmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustomerSODetailsTable = function () {
        this.databaseService.createTableQuery('sodetailsmst', 'pernr text,kunnr text,vbeln text,sodate text,vbelni text, invdate text, ponumber text,orderqty text,delqty text')
            .then(function (obj) {
            console.log('table created sodetailsmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustomerInvDetailsTable = function () {
        this.databaseService.createTableQuery('invdetailsmst', 'pernr text,vbelnf text,vbelni text,matnr text,qtyuom text, invdate text,qty text,maktx text,recqty text,podstatus text,netwr text')
            .then(function (obj) {
            console.log('table created invdetailsmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustomerContactTable = function () {
        this.databaseService.createTableQuery('customercontactmst', 'typeid int, kunnr text,name text,designation text,mobileno text,tel text,fax text, emailid text,photo text,pernr text,sendflag text,datetime text,dflag text')
            .then(function (obj) {
            console.log('table created customercontactmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createAssetTable = function () {
        this.databaseService.createTableQuery('assetmst', 'typeid text PRIMARY KEY, value text,pernr text')
            .then(function (obj) {
            console.log('table created assetmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustomerAssetTable = function () {
        this.databaseService.createTableQuery('custassetsmst', 'typeid text ,kunnr text, asset int,serialno text,instdate text,location text,imgurl text,imgpath text,statusid text,pernr text')
            .then(function (obj) {
            console.log('table created custassetsmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    CreateAllTablesService.prototype.createCustomerAssetStatusTable = function () {
        this.databaseService.createTableQuery('custassetstatusmst', 'typeid text PRIMARY KEY, status text,pernr text')
            .then(function (obj) {
            console.log('table created custassetstatusmst');
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    return CreateAllTablesService;
}());
CreateAllTablesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_service__["a" /* DatabaseService */]])
], CreateAllTablesService);

//# sourceMappingURL=createtables.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterLoginAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sharedservice__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apirequest_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AfterLoginAPIService = (function () {
    function AfterLoginAPIService(utilService, databaseService, sharedService, apiRequestService) {
        this.utilService = utilService;
        this.databaseService = databaseService;
        this.sharedService = sharedService;
        this.apiRequestService = apiRequestService;
        this.ip = this.sharedService.getIP();
    }
    AfterLoginAPIService.prototype.callDashboardVideo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('dashboardvideo');
            var pernr = _this.utilService.encode64(_this.pernr);
            var action = '?action=DisplayVideoList&pernr=' + _this.pernr;
            _this.apiRequestService.getAPI(_this.ip + className + action).then(function (data) {
                console.log(JSON.stringify(data));
                for (var i = 0; i < data['videoList'].length; i++) {
                    var v_id = _this.utilService.encode64(data['videoList'][i]['v_id']);
                    _this.databaseService.selectTableQuery('dashboardvideomst', '*', 'WHERE vid=?', [v_id], i).then(function (results) {
                        if (results['rows'].length == 0) {
                            var row = data['videoList'][results['index']];
                            var vid = _this.utilService.encode64(row['v_id']);
                            var vidname = _this.utilService.encode64(row['v_name']);
                            _this.databaseService.insertIntoTableQuery('dashboardvideomst', 'vid,vidname,pernr', [vid, vidname, pernr], results['index'])
                                .then(function (obj) {
                                console.log(JSON.stringify(obj));
                            }, function (err) {
                                console.log(JSON.stringify(err));
                            });
                        }
                    }, function (err) { });
                }
                resolve(true);
            }, function (err) {
                console.log((err));
                reject(false);
            });
        });
    };
    AfterLoginAPIService.prototype.callSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var className = _this.sharedService.getAPIObj('settings');
            // let pernr = this.utilService.encode64(this.pernr);
            var action = '?pernr=' + _this.pernr;
            _this.apiRequestService.getAPI(_this.ip + className + action).then(function (data) {
                console.log(JSON.stringify(data));
                _this.insertIntoCustTabmstTable(data['masters']['custtabmst']);
                _this.insertIntoArticleTabmstTable(data['masters']['articletabmst']);
                _this.insertIntoServermstTable(data['masters']['servermst']);
                _this.insertIntoDefaultsTable(data['masters']['emptoordermst']);
                resolve(true);
            }, function (err) {
                console.log('error Settings ' + (err));
                reject(false);
            });
        });
    };
    AfterLoginAPIService.prototype.insertIntoCustTabmstTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('custtabmst', ' where pernr=?', [epernr]).then(function (obj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = this.utilService.encode64(row.pernr);
            var branch = this.utilService.encode64(row.branch);
            var customergroup = this.utilService.encode64(row.customergroup);
            var customerclass = this.utilService.encode64(row.customerclass);
            var customerchain = this.utilService.encode64(row.customerchain);
            var popclass = this.utilService.encode64(row.popclass);
            var industry = this.utilService.encode64((row.industry));
            var industrycode1 = this.utilService.encode64(row.industrycode1);
            var parentgroup = this.utilService.encode64(row.parentgroup);
            var territorysalesgrp = this.utilService.encode64(row.territorysalesgrp);
            var customer = this.utilService.encode64(row.customer);
            var status = this.utilService.encode64(row.status);
            this.databaseService.insertIntoTableQuery('custtabmst', 'pernr,branch,customergroup,customerclass,customerchain,popclass,industry,industrycode1,parentgroup,territorysalesgrp,customer,status', [pernr, branch, customergroup, customerclass, customerchain, popclass, industry, industrycode1, parentgroup, territorysalesgrp, customer, status], i)
                .then(function (obj) {
                console.log(JSON.stringify(obj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    AfterLoginAPIService.prototype.insertIntoArticleTabmstTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('articletabmst', ' where pernr=?', [epernr]).then(function (obj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = this.utilService.encode64(row.pernr);
            var businessunit = this.utilService.encode64(row.businessunit);
            var producdivision = this.utilService.encode64(row.producdivision);
            var category = this.utilService.encode64(row.category);
            var subcategory = this.utilService.encode64(row.subcategory);
            var principal = this.utilService.encode64(row.principal);
            var brand = this.utilService.encode64((row.brand));
            var segment = this.utilService.encode64(row.segment);
            this.databaseService.insertIntoTableQuery('articletabmst', 'pernr,businessunit,producdivision,category,subcategory,principal,brand,segment', [pernr, businessunit, producdivision, category, subcategory, principal, brand, segment], i)
                .then(function (obj) {
                console.log(JSON.stringify(obj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    AfterLoginAPIService.prototype.insertIntoServermstTable = function (data) {
        // let epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('servermst', '', []).then(function (obj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var servername = this.utilService.encode64(row.servername);
            var Applicationserver = this.utilService.encode64(row.Applicationserver);
            var instance = this.utilService.encode64(row.instance);
            var systemid = this.utilService.encode64(row.systemid);
            var router = this.utilService.encode64(row.router);
            this.databaseService.insertIntoTableQuery('servermst', 'servername,Applicationserver,instance,systemid,router', [servername, Applicationserver, instance, systemid, router], i)
                .then(function (obj) {
                console.log(JSON.stringify(obj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    AfterLoginAPIService.prototype.insertIntoDefaultsTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('defaults', ' where pernr=?', [epernr]).then(function (obj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = this.utilService.encode64(row.pernr);
            var id = this.utilService.encode64(row.id);
            var subtyp = this.utilService.encode64(row.subtyp);
            this.databaseService.insertIntoTableQuery('defaults', 'pernr,id,subtyp', [pernr, id, subtyp], i)
                .then(function (obj) {
                console.log(JSON.stringify(obj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    AfterLoginAPIService.prototype.callParameters = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var className = _this.sharedService.getAPIObj('parameters');
            // let pernr = this.utilService.encode64(this.pernr);
            var action = ''; //'?pernr='+this.pernr;
            _this.apiRequestService.getAPI(_this.ip + className + action).then(function (data) {
                console.log(JSON.stringify(data));
                _this.insertIntoParametersTable(data['parametermst']);
                resolve(true);
            }, function (err) {
                console.log('error Settings ' + (err));
                reject(false);
            });
        });
    };
    AfterLoginAPIService.prototype.insertIntoParametersTable = function (data) {
        // let epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('parametermst', '', []).then(function (obj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            // var pernr = this.utilService.encode64(row.pernr);
            var parameter = this.utilService.encode64(row.parameter);
            var value = this.utilService.encode64(row.value);
            this.databaseService.insertIntoTableQuery('parametermst', 'parameter,value', [parameter, value], i)
                .then(function (obj) {
                console.log(JSON.stringify(obj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    AfterLoginAPIService.prototype.callMenuParameters = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var className = _this.sharedService.getAPIObj('menuparameters');
            // let pernr = this.utilService.encode64(this.pernr);
            var action = '?pernr=' + _this.pernr;
            _this.apiRequestService.getAPI(_this.ip + className + action).then(function (data) {
                console.log(JSON.stringify(data));
                _this.insertIntoUserMenuTable(data['usermenumst']);
                resolve(true);
            }, function (err) {
                console.log('error Settings ' + (err));
                reject(false);
            });
        });
    };
    AfterLoginAPIService.prototype.insertIntoUserMenuTable = function (data) {
        var pernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('usermenumst', ' where pernr=?', [pernr]).then(function (obj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            // var pernr = this.utilService.encode64(row.pernr);
            var menu = this.utilService.encode64(row.menu.toLowerCase());
            var submenu = this.utilService.encode64(row.submenu.toLowerCase());
            var flag = this.utilService.encode64(row.flag);
            this.databaseService.insertIntoTableQuery('usermenumst', 'pernr,menu,submenu,flag', [pernr, menu, submenu, flag], i)
                .then(function (obj) {
                console.log(JSON.stringify(obj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    return AfterLoginAPIService;
}());
AfterLoginAPIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_2__database_service__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_3__sharedservice__["a" /* SharedService */],
        __WEBPACK_IMPORTED_MODULE_4__apirequest_service__["a" /* APIRequestService */]])
], AfterLoginAPIService);

//# sourceMappingURL=afterloginapi.service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterSyncAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sharedservice__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apirequest_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MasterSyncAPIService = (function () {
    function MasterSyncAPIService(utilService, databaseService, sharedService, apiRequestService) {
        this.utilService = utilService;
        this.databaseService = databaseService;
        this.sharedService = sharedService;
        this.apiRequestService = apiRequestService;
        this.ip = this.sharedService.getIP();
    }
    MasterSyncAPIService.prototype.callMaterial = function (lasttypeid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('materials');
            // let pernr = this.utilService.encode64(this.pernr);
            var link = _this.ip + className;
            _this.insertMaterial(link, lasttypeid, resolve, reject);
        });
    };
    MasterSyncAPIService.prototype.insertMaterial = function (link, lasttypeid, resolve, reject) {
        var _this = this;
        // console.log(resolve);
        var action = '?pernr=' + this.pernr + '&typeid=' + lasttypeid;
        this.apiRequestService.getAPI(link + action).then(function (data) {
            // console.log(JSON.stringify(data));
            var _len = data['materialmst'].length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (lasttypeid == 0)
                _this.databaseService.deleteTableQuery('materialmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                resolve(true);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data['materialmst'][i];
                    var pernr = epernr;
                    var matnr = _this.utilService.encode64(row.matnr);
                    var maktx = _this.utilService.encode64(row.maktx);
                    var packing = _this.utilService.encode64(row.packing);
                    var division = _this.utilService.encode64(row.division);
                    var listprice = _this.utilService.encode64(row.listprice);
                    var eancode = _this.utilService.encode64((row.eancode));
                    var businessunit = _this.utilService.encode64(row.businessunit);
                    var proddivision = _this.utilService.encode64(row.proddivision);
                    var category = _this.utilService.encode64(row.category);
                    var subcategory = _this.utilService.encode64(row.subcategory);
                    var principal = _this.utilService.encode64(row.principal);
                    var brand = _this.utilService.encode64(row.brand);
                    var segment = _this.utilService.encode64(row.segment);
                    var uom = _this.utilService.encode64(row.uom);
                    var status = _this.utilService.encode64(row.status);
                    var temp = _this.utilService.encode64(row.temp);
                    _this.databaseService.insertIntoTableQuery('materialmst', 'pernr,matnr, maktx, packing, division, listprice, eancode, businessunit, proddivision, category, subcategory, principal, brand, segment, uom, status,temp', [pernr, matnr, maktx, packing, division, listprice, eancode, businessunit, proddivision, category, subcategory, principal, brand, segment, uom, status, temp], i)
                        .then(function (resobj) {
                        // console.log(JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1)
                        _this.insertMaterial(link, row['typeid'], resolve, reject);
                }
            }
        }, function (err) {
            console.log((err));
            reject(false);
        });
    };
    MasterSyncAPIService.prototype.callArticlePricelist = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var className = _this.sharedService.getAPIObj('pricelist');
            // let pernr = this.utilService.encode64(this.pernr);
            var action = '?pernr=' + _this.pernr;
            _this.apiRequestService.getAPI(_this.ip + className + action).then(function (data) {
                // console.log(JSON.stringify(data));
                _this.InsertIntoPlArticleTable(data['masters']['A907']);
                _this.InsertIntoPlKeyAcctsTable(data['masters']['A907keyaccountsmst']);
                _this.InsertIntoPlCustChainTable(data['masters']['A907custchainmst']);
                _this.InsertIntoPlBranchCustClassTable(data['masters']['A907branchclassmst']);
                _this.InsertIntoPlCustomerTable(data['masters']['A907customermst']);
                _this.InsertIntoBranchMasterTable(data['masters']['custbranchmst']);
                _this.InsertIntoCustChainMasterTable(data['masters']['custchainmst']);
                _this.InsertIntoCustClassMasterTable(data['masters']['custclassmst']);
                _this.InsertIntoKeyAcctsMasterTable(data['masters']['custkeyacctsmst']);
                _this.InsertIntoA305(data['masters']['A305']);
                resolve(true);
            }, function (err) {
                console.log('error Settings ' + (err));
                reject(false);
            });
        });
    };
    MasterSyncAPIService.prototype.InsertIntoPlArticleTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A907', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            this.databaseService.insertIntoTableQuery('A907', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.InsertIntoPlKeyAcctsTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A907keyaccountsmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            var keyaccountid = this.utilService.encode64(row.keyaccountid);
            var keyaccount = this.utilService.encode64((row.keyaccount));
            this.databaseService.insertIntoTableQuery('A907keyaccountsmst', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom,keyaccountid,keyaccount', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom, keyaccountid, keyaccount], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.InsertIntoPlCustChainTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A907custchainmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            var custchainid = this.utilService.encode64(row.custchainid);
            var custchain = this.utilService.encode64((row.custchain));
            this.databaseService.insertIntoTableQuery('A907custchainmst', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom,custchainid,custchain', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom, custchainid, custchain], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.InsertIntoPlBranchCustClassTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A907branchclassmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            var branchid = this.utilService.encode64(row.branchid);
            var branch = this.utilService.encode64((row.branch));
            var custclassid = this.utilService.encode64(row.custclassid);
            var custclass = this.utilService.encode64((row.custclass));
            this.databaseService.insertIntoTableQuery('A907branchclassmst', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom,branchid,branch,custclassid,custclass', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom, branchid, branch, custclassid, custclass], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.InsertIntoPlCustomerTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A907customermst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            var kunnr = this.utilService.encode64((row.kunnr));
            this.databaseService.insertIntoTableQuery('A907customermst', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom,kunnr', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom, kunnr], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.InsertIntoBranchMasterTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('custbranchmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var branchid = this.utilService.encode64(row.branchid);
            var vkbur = this.utilService.encode64(row.vkbur);
            this.databaseService.insertIntoTableQuery('custbranchmst', 'pernr,branchid, vkbur', [pernr, branchid, vkbur], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.InsertIntoCustChainMasterTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('custchainmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var custchainid = this.utilService.encode64(row.custchainid);
            var kvgr2 = this.utilService.encode64(row.kvgr2);
            this.databaseService.insertIntoTableQuery('custchainmst', 'pernr,custchainid, kvgr2', [pernr, custchainid, kvgr2], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.InsertIntoCustClassMasterTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('custclassmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var classid = this.utilService.encode64(row.classid);
            var kvgr1 = this.utilService.encode64(row.kvgr1);
            this.databaseService.insertIntoTableQuery('custclassmst', 'pernr,classid, kvgr1', [pernr, classid, kvgr1], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.InsertIntoKeyAcctsMasterTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('custkeyacctsmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var keyaccountid = this.utilService.encode64(row.keyaccountid);
            var kvgr4 = this.utilService.encode64(row.kvgr4);
            this.databaseService.insertIntoTableQuery('custkeyacctsmst', 'pernr,keyaccountid, kvgr4', [pernr, keyaccountid, kvgr4], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.InsertIntoA305 = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A305', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            var kunnr = this.utilService.encode64((row.kunnr));
            this.databaseService.insertIntoTableQuery('A305', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom,kunnr', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom, kunnr], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.callPriorityMaster = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var className = _this.sharedService.getAPIObj('prioritymaster');
            // let pernr = this.utilService.encode64(this.pernr);
            var action = ''; //'?pernr='+this.pernr;
            _this.apiRequestService.getAPI(_this.ip + className + action).then(function (data) {
                console.log(JSON.stringify(data));
                _this.InsertIntoPriorityMasterTable(data['masters']['pricelistpriomst']);
                resolve(true);
            }, function (err) {
                console.log('error Settings ' + (err));
                reject(false);
            });
        });
    };
    MasterSyncAPIService.prototype.InsertIntoPriorityMasterTable = function (data) {
        // let epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('pricelistpriomst', '', []).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            // var pernr = this.utilService.encode64(row.pernr);
            var tablename = this.utilService.encode64(row.table);
            var priority = this.utilService.encode64(row.priority);
            this.databaseService.insertIntoTableQuery('pricelistpriomst', 'tablename,priority', [tablename, priority], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    MasterSyncAPIService.prototype.callPromoDetails = function (typeid1, typeid2, typeid3, typeid4) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('promotions');
            // let pernr = this.utilService.encode64(this.pernr);
            var link = _this.ip + className;
            var obj1 = { typeid: 0, isLast: false };
            var obj2 = { typeid: 0, isLast: false };
            var obj3 = { typeid: 0, isLast: false };
            var obj4 = { typeid: 0, isLast: false };
            var obj5 = { typeid: 0, isLast: false };
            _this.callPromoAPI(link, obj1, obj2, obj3, obj4, obj5, resolve, reject);
        });
    };
    MasterSyncAPIService.prototype.callPromoAPI = function (link, obj1, obj2, obj3, obj4, obj5, resolve, reject) {
        var _this = this;
        // console.log(resolve);
        var action = '?pernr=' + this.pernr + '&typeid1=' + obj1['typeid'] + '&typeid2=' + obj2['typeid'] + '&typeid3=' + obj3['typeid'] + '&typeid4=' + obj4['typeid'];
        this.apiRequestService.getAPI(link + action).then(function (data) {
            // console.log(JSON.stringify(data));
            _this.populatePromo(link, obj1, obj2, obj3, obj4, obj5, resolve, reject, data['masters']);
        }, function (err) {
            console.log((err));
            reject(false);
        });
    };
    MasterSyncAPIService.prototype.populatePromo = function (link, obj1, obj2, obj3, obj4, obj5, resolve, reject, data) {
        var _this = this;
        var d1 = this.InsertIntoPromoFamilyTable(data['promofamilymst'], obj1);
        var d2 = this.InsertIntoPromoMaterialTable(data['promomaterialmst'], obj2);
        var d3 = this.InsertIntoPromoStructTable(data['promostructmst'], obj3);
        var d4 = this.InsertIntoPromoMaterialStructTable(data['promomaterialstructmst'], obj4);
        var d5 = this.InsertIntoPromoConfigTable(data['promoconfigmst'], obj5);
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].forkJoin([d1, d2, d3, d4, d5]).subscribe(function (t) {
            console.log(t);
            if (t[0]['isLast'] && t[1]['isLast'] && t[2]['isLast'] && t[3]['isLast'] && t[4]['isLast'])
                resolve(true);
            else
                _this.callPromoAPI(link, t[0], t[1], t[2], t[3], t[4], resolve, reject);
        });
    };
    MasterSyncAPIService.prototype.InsertIntoPromoFamilyTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('promofamilymst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var typeid = _this.utilService.encode64(row.typeid);
                    var description = _this.utilService.encode64(row.description);
                    var startdate = (row.startdate);
                    var enddate = (row.enddate);
                    var orderedtype = _this.utilService.encode64(row.orderedtype);
                    var promotype = _this.utilService.encode64((row.promotype));
                    var ouom = _this.utilService.encode64(row.ouom);
                    var puom = _this.utilService.encode64(row.puom);
                    var oparameter = _this.utilService.encode64(row.oparammeter);
                    var promoparameter = _this.utilService.encode64(row.promoparameter);
                    var flag = _this.utilService.encode64(row.flag.trim());
                    _this.databaseService.insertIntoTableQuery('promofamilymst', 'typeid,description,startdate,enddate,orderedtype,promotype,ouom,puom,oparameter,promoparameter,pernr,flag', [typeid, description, startdate, enddate, orderedtype, promotype, ouom, puom, oparameter, promoparameter, pernr, flag], i)
                        .then(function (resobj) {
                        console.log('promofamilymst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    MasterSyncAPIService.prototype.InsertIntoPromoMaterialTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('promomaterialmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var typeid = _this.utilService.encode64(row.typeid);
                    var promoid = _this.utilService.encode64(row.promoid);
                    var matnr = _this.utilService.encode64(row.matnr);
                    var type = _this.utilService.encode64((row.type));
                    var qnty = _this.utilService.encode64(row.qnty);
                    var uom = _this.utilService.encode64(row.uom);
                    var discount = _this.utilService.encode64(row.discount);
                    var price = _this.utilService.encode64(row.price);
                    _this.databaseService.insertIntoTableQuery('promomaterialmst', 'typeid,promoid,matnr,type,pernr,qnty,uom,discount,price', [typeid, promoid, matnr, type, pernr, qnty, uom, discount, price], i)
                        .then(function (resobj) {
                        console.log('promomaterialmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    MasterSyncAPIService.prototype.InsertIntoPromoStructTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('promostructmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var typeid = _this.utilService.encode64(row.typeid);
                    var description = _this.utilService.encode64(row.description);
                    var startdate = (row.startdate);
                    var enddate = (row.enddate);
                    var forcedflag = _this.utilService.encode64(row.forcedflag);
                    var discount = _this.utilService.encode64((row.discount));
                    var ouom = _this.utilService.encode64(row.ouom);
                    var flag = _this.utilService.encode64(row.flag.trim());
                    _this.databaseService.insertIntoTableQuery('promostructmst', 'typeid,description,startdate,enddate,forcedflag,discount,ouom,pernr,flag', [typeid, description, startdate, enddate, forcedflag, discount, ouom, pernr, flag], i)
                        .then(function (resobj) {
                        console.log('promostructmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    MasterSyncAPIService.prototype.InsertIntoPromoMaterialStructTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('promomaterialstructmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var typeid = _this.utilService.encode64(row.typeid);
                    var promoid = _this.utilService.encode64(row.promoid);
                    var matnr = _this.utilService.encode64(row.matnr);
                    var discount = _this.utilService.encode64((row.discount));
                    var type = _this.utilService.encode64(row.type);
                    _this.databaseService.insertIntoTableQuery('promomaterialstructmst', 'typeid,promoid,matnr,type,pernr,discount', [typeid, promoid, matnr, type, pernr, discount], i)
                        .then(function (resobj) {
                        console.log('promomaterialstructmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    MasterSyncAPIService.prototype.InsertIntoPromoConfigTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['isLast']) {
                if (obj['typeid'] == 0)
                    _this.databaseService.deleteTableQuery('promoconfigmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
                if (_len == 0) {
                    obj.isLast = true;
                    resolve(obj);
                }
                else {
                    for (var i = 0; i < _len; i++) {
                        var row = data[i];
                        var pernr = epernr;
                        var typeid = _this.utilService.encode64(row.typeid);
                        var value = _this.utilService.encode64(row.value);
                        var promovalue = _this.utilService.encode64(row.promovalue);
                        var promotype = _this.utilService.encode64(row.promotype);
                        _this.databaseService.insertIntoTableQuery('promoconfigmst', 'typeid,value,promovalue,promotype,pernr', [typeid, value, promovalue, promotype, pernr], i)
                            .then(function (resobj) {
                            console.log('promoconfigmst ' + JSON.stringify(resobj));
                        }, function (err) {
                            console.log(JSON.stringify(err));
                        });
                        if (i == _len - 1) {
                            obj.isLast = true;
                            resolve(obj);
                        }
                    }
                }
            }
            else {
                obj.isLast = true;
                resolve(obj);
            }
        });
    };
    return MasterSyncAPIService;
}());
MasterSyncAPIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_4__database_service__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_5__sharedservice__["a" /* SharedService */],
        __WEBPACK_IMPORTED_MODULE_6__apirequest_service__["a" /* APIRequestService */]])
], MasterSyncAPIService);

//# sourceMappingURL=mastersyncapi.service.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSyncAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sharedservice__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apirequest_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomerSyncAPIService = (function () {
    function CustomerSyncAPIService(utilService, databaseService, sharedService, apiRequestService) {
        this.utilService = utilService;
        this.databaseService = databaseService;
        this.sharedService = sharedService;
        this.apiRequestService = apiRequestService;
        this.ip = this.sharedService.getIP();
    }
    CustomerSyncAPIService.prototype.callCustomer = function (lasttypeid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('customers');
            // let pernr = this.utilService.encode64(this.pernr);
            var link = _this.ip + className;
            _this.insertCustomers(link, lasttypeid, resolve, reject);
        });
    };
    CustomerSyncAPIService.prototype.insertCustomers = function (link, lasttypeid, resolve, reject) {
        var _this = this;
        // console.log(resolve);
        // link = 'http://212.118.101.174:8081/bsalesfs/CustomerDetailsToApp.do';
        var action = '?pernr=' + this.pernr + '&typeid=' + lasttypeid;
        this.apiRequestService.getAPI(link + action).then(function (data) {
            // console.log(JSON.stringify(data));
            var _len = data['customermst'].length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (lasttypeid == 0)
                _this.databaseService.deleteTableQuery('customermst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                resolve(true);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data['customermst'][i];
                    var pernr = epernr;
                    var name1 = _this.utilService.encode64(row.name1);
                    var outletname = _this.utilService.encode64(row.NAME_CO);
                    var typeid = (row.typeid);
                    var kunnr = _this.utilService.encode64(row.kunnr);
                    var address = _this.utilService.encode64(row.address);
                    var custclass = _this.utilService.encode64(row.custclass);
                    var branch = _this.utilService.encode64(row.branch);
                    var chain = _this.utilService.encode64(row.chain);
                    var popclass = _this.utilService.encode64(row.popclass);
                    var abcclass = _this.utilService.encode64(row.abcclass);
                    var custgrp = _this.utilService.encode64(row.custgrp);
                    var custstatus = _this.utilService.encode64(row.status);
                    var custtype = _this.utilService.encode64(row.custtype);
                    var latitude = _this.utilService.encode64(row.latitude);
                    var longitude = _this.utilService.encode64(row.longitude);
                    var city = _this.utilService.encode64(row.city);
                    var channeltype1 = _this.utilService.encode64(row.BRSCH_TEXT);
                    var channeltype2 = _this.utilService.encode64(row.BRAN1_TEXT);
                    var territory = _this.utilService.encode64(row.VKGRP_TEXT);
                    var parentgroup = _this.utilService.encode64(row.KATR7_TEXT);
                    var website = _this.utilService.encode64(row.website);
                    var zterm = _this.utilService.encode64(row.zterm);
                    var emailid = _this.utilService.encode64(row.EMAIL);
                    var cflag = _this.utilService.encode64(row.cflag);
                    var billto = _this.utilService.encode64(row.billto == '' ? row.kunnr : row.billto);
                    var type = _this.utilService.encode64('c'); //this.utilService.encode64(row.type.trim().toLowerCase());
                    _this.databaseService.insertIntoTableQuery('customermst', 'typeid,pernr,kunnr,name1,address,custclass,branch,chain,popclass,custgrp,custstatus,custtype,latitude,longitude,' +
                        'abcclass,city,channeltype1,channeltype2,territory,parentgroup,outletname,website,zterm,emailid,cflag,type,billto', [typeid, pernr, kunnr, name1, address, custclass, branch, chain, popclass, custgrp, custstatus, custtype, latitude, longitude,
                        abcclass, city, channeltype1, channeltype2, territory, parentgroup, outletname, website, zterm, emailid, cflag, type, billto], i)
                        .then(function (resobj) {
                        console.log(JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1)
                        _this.insertCustomers(link, row['typeid'], resolve, reject);
                }
            }
        }, function (err) {
            console.log((err));
            reject(false);
        });
    };
    CustomerSyncAPIService.prototype.callCustCredit = function (typeid1, typeid2) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('credit');
            // let pernr = this.utilService.encode64(this.pernr);
            var link = _this.ip + className;
            var obj1 = { typeid: 0, isLast: false };
            var obj2 = { typeid: 0, isLast: false };
            _this.callCustCreditAPI(link, obj1, obj2, resolve, reject);
        });
    };
    CustomerSyncAPIService.prototype.callCustCreditAPI = function (link, obj1, obj2, resolve, reject) {
        var _this = this;
        // console.log(resolve);
        var action = '?pernr=' + this.pernr + '&typeid1=' + obj1['typeid'] + '&typeid2=' + obj2['typeid'];
        this.apiRequestService.getAPI(link + action).then(function (data) {
            // console.log(JSON.stringify(data));
            _this.populateCustCredit(link, obj1, obj2, resolve, reject, data['masters']);
        }, function (err) {
            console.log((err));
            reject(false);
        });
    };
    CustomerSyncAPIService.prototype.populateCustCredit = function (link, obj1, obj2, resolve, reject, data) {
        var _this = this;
        var d1 = this.InsertIntoCustCreditTable(data['custcreditmst'], obj1);
        var d2 = this.InsertIntoCustCreditLimitTable(data['custcreditlimitmst'], obj2);
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].forkJoin([d1, d2]).subscribe(function (t) {
            console.log(t);
            if (t[0]['isLast'] && t[1]['isLast'])
                resolve(true);
            else
                _this.callCustCreditAPI(link, t[0], t[1], resolve, reject);
        });
    };
    CustomerSyncAPIService.prototype.InsertIntoCustCreditTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('custcreditmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var kunnr = _this.utilService.encode64(row.kunnr);
                    var invno = _this.utilService.encode64(row.invno);
                    var invdate = (row.invdate);
                    var invdatetime = _this.utilService.returnDateTime(_this.utilService.formatDateToDatabaseFormat(row.invdate) + ' 00:00:00.00', false);
                    // console.log(invdatetime);
                    var invamount = _this.utilService.encode64(row.invamount);
                    var amountrec = _this.utilService.encode64((row.amountrec));
                    var date = (row.date);
                    var duedate = (row.duedate);
                    var balance = _this.utilService.encode64(row.balance);
                    _this.databaseService.insertIntoTableQuery('custcreditmst', 'kunnr, invno,invdate,invamount,amountrec,date,balance,duedate,invdatetime,pernr', [kunnr, invno, invdate, invamount, amountrec, date, balance, duedate, invdatetime, pernr], i)
                        .then(function (resobj) {
                        console.log('custcreditmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    CustomerSyncAPIService.prototype.InsertIntoCustCreditLimitTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('custcreditlimitmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var kunnr = _this.utilService.encode64(row.kunnr);
                    var creditlimit = _this.utilService.encode64(row.creditlimit);
                    var used = _this.utilService.encode64((row.used));
                    var receivable = _this.utilService.encode64(row.receivable);
                    _this.databaseService.insertIntoTableQuery('custcreditlimitmst', 'kunnr,pernr,creditlimit,used,receivable', [kunnr, pernr, creditlimit, used, receivable], i)
                        .then(function (resobj) {
                        console.log('custcreditlimitmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    CustomerSyncAPIService.prototype.callCustSOInvDetails = function (typeid1, typeid2) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('sodetails');
            // let pernr = this.utilService.encode64(this.pernr);
            var link = _this.ip + className;
            var obj1 = { typeid: 0, isLast: false };
            var obj2 = { typeid: 0, isLast: false };
            _this.callCustSOInvDetailsAPI(link, obj1, obj2, resolve, reject);
        });
    };
    CustomerSyncAPIService.prototype.callCustSOInvDetailsAPI = function (link, obj1, obj2, resolve, reject) {
        var _this = this;
        // console.log(resolve);
        var action = '?pernr=' + this.pernr + '&typeid1=' + obj1['typeid'] + '&typeid2=' + obj2['typeid'];
        this.apiRequestService.getAPI(link + action).then(function (data) {
            // console.log(JSON.stringify(data));
            _this.populateCustSOInvDetails(link, obj1, obj2, resolve, reject, data['masters']);
        }, function (err) {
            console.log((err));
            reject(false);
        });
    };
    CustomerSyncAPIService.prototype.populateCustSOInvDetails = function (link, obj1, obj2, resolve, reject, data) {
        var _this = this;
        var d1 = this.InsertIntoCustSODetailsTable(data['sodetailsmst'], obj1);
        var d2 = this.InsertIntoCustInvDetailsTable(data['invdetailsmst'], obj2);
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].forkJoin([d1, d2]).subscribe(function (t) {
            console.log(t);
            if (t[0]['isLast'] && t[1]['isLast'])
                resolve(true);
            else
                _this.callCustSOInvDetailsAPI(link, t[0], t[1], resolve, reject);
        });
    };
    CustomerSyncAPIService.prototype.InsertIntoCustSODetailsTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('sodetailsmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var kunnr = _this.utilService.encode64(row.kunnr);
                    var vbeln = _this.utilService.encode64(row.vbeln);
                    var vbelni = _this.utilService.encode64(row.vbelni);
                    var sodate = (row.sodate);
                    var invdate = (row.invdate);
                    var ponumber = _this.utilService.encode64(row.ebeln);
                    var orderqty = _this.utilService.encode64((row.kwmeng));
                    var delqty = _this.utilService.encode64(row.rfmng);
                    _this.databaseService.insertIntoTableQuery('sodetailsmst', 'kunnr,vbeln,sodate,vbelni,invdate,ponumber,orderqty,delqty,pernr', [kunnr, vbeln, sodate, vbelni, invdate, ponumber, orderqty, delqty, pernr], i)
                        .then(function (resobj) {
                        console.log('sodetailsmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    CustomerSyncAPIService.prototype.InsertIntoCustInvDetailsTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('invdetailsmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var vbelnf = _this.utilService.encode64(row.vbelnf);
                    var vbelni = _this.utilService.encode64(row.vbelni);
                    var matnr = _this.utilService.encode64(row.matnr);
                    var qtyuom = _this.utilService.encode64(row.qtyuom);
                    var invdate = (row.invdate);
                    var qty = _this.utilService.encode64((row.qty));
                    var maktx = _this.utilService.encode64(row.description);
                    var netwr = _this.utilService.encode64((row.netwr));
                    var recqty = _this.utilService.encode64(row.recqty);
                    var podstatus = _this.utilService.encode64("null");
                    _this.databaseService.insertIntoTableQuery('invdetailsmst', 'vbelnf, vbelni,matnr,qtyuom,invdate,qty,maktx,recqty,podstatus,netwr,pernr', [vbelnf, vbelni, matnr, qtyuom, invdate, qty, maktx, recqty, podstatus, netwr, pernr], i)
                        .then(function (resobj) {
                        console.log('invdetailsmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    CustomerSyncAPIService.prototype.callCustomerContact = function (lasttypeid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('custcontact');
            // let pernr = this.utilService.encode64(this.pernr);
            var link = _this.ip + className;
            _this.InsertIntoCustomerContact(link, lasttypeid, resolve, reject);
        });
    };
    CustomerSyncAPIService.prototype.InsertIntoCustomerContact = function (link, lasttypeid, resolve, reject) {
        var _this = this;
        // console.log(resolve);
        link = 'http://212.118.101.174:8081/bsalesfs/GetCustomerContactDetails.do';
        var action = '?pernr=' + this.pernr + '&typeid=' + lasttypeid;
        this.apiRequestService.getAPI(link + action).then(function (data) {
            // console.log(JSON.stringify(data));
            var _len = data['customercontactmst'].length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (lasttypeid == 0)
                _this.databaseService.deleteTableQuery('customercontactmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                resolve(true);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data['customercontactmst'][i];
                    var pernr = epernr;
                    var typeid = (row.appid);
                    var kunnr = _this.utilService.encode64(row.kunnr);
                    var name = _this.utilService.encode64(row.name);
                    var designation = _this.utilService.encode64(row.designation);
                    var mobileno = _this.utilService.encode64(row.mobileno);
                    var emailid = _this.utilService.encode64(row.emailid);
                    var tel = _this.utilService.encode64(row.tel);
                    var fax = _this.utilService.encode64(row.fax);
                    var photo = _this.utilService.encode64(row.path);
                    var datetime = (row.datetime);
                    var sendflag = _this.utilService.encode64('N');
                    _this.databaseService.insertIntoTableQuery('customercontactmst', 'typeid,kunnr, name,designation,mobileno,emailid,photo,pernr,tel,fax,sendflag,datetime', [typeid, kunnr, name, designation, mobileno, emailid, photo, pernr, tel, fax, sendflag, datetime], i)
                        .then(function (resobj) {
                        console.log('customercontactmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1)
                        _this.InsertIntoCustomerContact(link, row['typeid'], resolve, reject);
                }
            }
        }, function (err) {
            console.log((err));
            reject(false);
        });
    };
    CustomerSyncAPIService.prototype.callCustomerAssetMaster = function (typeid1, typeid2) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('custasset');
            // let pernr = this.utilService.encode64(this.pernr);
            var link = _this.ip + className;
            var obj1 = { typeid: 0, isLast: false };
            var obj2 = { typeid: 0, isLast: false };
            var obj3 = { typeid: 0, isLast: false };
            _this.callCustomerAssetMasterAPI(link, obj1, obj2, obj3, resolve, reject);
        });
    };
    CustomerSyncAPIService.prototype.callCustomerAssetMasterAPI = function (link, obj1, obj2, obj3, resolve, reject) {
        var _this = this;
        // console.log(resolve);
        var action = '?pernr=' + this.pernr + '&typeid1=' + obj1['typeid'] + '&typeid2=' + obj2['typeid'];
        this.apiRequestService.getAPI(link + action).then(function (data) {
            // console.log(JSON.stringify(data));
            _this.populateCustomerAssetMaster(link, obj1, obj2, obj3, resolve, reject, data['masters']);
        }, function (err) {
            console.log((err));
            reject(false);
        });
    };
    CustomerSyncAPIService.prototype.populateCustomerAssetMaster = function (link, obj1, obj2, obj3, resolve, reject, data) {
        var _this = this;
        var d1 = this.InsertIntoCustAssetTable(data['custassetsmst'], obj1);
        var d2 = this.InsertIntoAssetTable(data['assetmst'], obj2);
        var d3 = this.InsertIntoCustAssetStatusTable(data['custassetstatusmst'], obj3);
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].forkJoin([d1, d2, d3]).subscribe(function (t) {
            console.log(t);
            if (t[0]['isLast'] && t[1]['isLast'] && t[2]['isLast'])
                resolve(true);
            else
                _this.callCustomerAssetMasterAPI(link, t[0], t[1], t[2], resolve, reject);
        });
    };
    CustomerSyncAPIService.prototype.InsertIntoCustAssetTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            // if(obj['typeid']==0) this.databaseService.deleteTableQuery('sodetailsmst',' where pernr=?',[epernr]).then((resobj) => {},(err) => {});
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var selrow = data[i];
                    var pernr = epernr;
                    _this.databaseService.selectTableQuery('custassetsmst', 'distinct kunnr,serialno', ' where serialno=? and pernr= ?', [_this.utilService.encode64(selrow.kunnr), pernr], i).then(function (resobj) {
                        var index = resobj['index'];
                        var row = data[index];
                        var pernr = epernr;
                        var kunnr = _this.utilService.encode64(row.kunnr);
                        var typeid = _this.utilService.encode64(row.typeid);
                        var asset = _this.utilService.encode64(row.asset);
                        var instdate = (row.instdate);
                        var serialno = _this.utilService.encode64(row.serialno);
                        var location = _this.utilService.encode64((row.location));
                        var statusid = _this.utilService.encode64(row.status);
                        if (resobj['rows'].length != 0) {
                            _this.databaseService.updateTableQuery('custassetsmst', 'typeid=?, kunnr=?, asset=?, instdate=?,location=?,statusid=?', 'WHERE serialno=? and pernr= ?', [typeid, kunnr, asset, instdate, location, statusid, serialno, pernr], i)
                                .then(function (resobj) {
                                console.log('custassetsmst ' + JSON.stringify(resobj));
                            }, function (err) {
                                console.log(JSON.stringify(err));
                            });
                        }
                        else {
                            _this.databaseService.insertIntoTableQuery('custassetsmst', 'typeid, kunnr, asset, instdate,location,statusid, serialno,pernr', [typeid, kunnr, asset, instdate, location, statusid, serialno, pernr], i)
                                .then(function (resobj) {
                                console.log('custassetsmst ' + JSON.stringify(resobj));
                            }, function (err) {
                                console.log(JSON.stringify(err));
                            });
                        }
                        if (index == _len - 1) {
                            obj.typeid = row['typeid'];
                            resolve(obj);
                        }
                        ;
                    }, function (err) { });
                }
            }
        });
    };
    CustomerSyncAPIService.prototype.InsertIntoAssetTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('assetmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var typeid = _this.utilService.encode64(row.typeid);
                    var value = _this.utilService.encode64(row.value);
                    _this.databaseService.insertIntoTableQuery('assetmst', 'typeid, value,pernr', [typeid, value, pernr], i)
                        .then(function (resobj) {
                        console.log('assetmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    CustomerSyncAPIService.prototype.InsertIntoCustAssetStatusTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['isLast']) {
                if (obj['typeid'] == 0)
                    _this.databaseService.deleteTableQuery('custassetstatusmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
                if (_len == 0) {
                    obj.isLast = true;
                    resolve(obj);
                }
                else {
                    for (var i = 0; i < _len; i++) {
                        var row = data[i];
                        var pernr = epernr;
                        var typeid = _this.utilService.encode64(row.typeid);
                        var status = _this.utilService.encode64(row.status);
                        _this.databaseService.insertIntoTableQuery('custassetstatusmst', 'typeid, status,pernr', [typeid, status, pernr], i)
                            .then(function (resobj) {
                            console.log('custassetstatusmst ' + JSON.stringify(resobj));
                        }, function (err) {
                            console.log(JSON.stringify(err));
                        });
                        if (i == _len - 1) {
                            obj.isLast = true;
                            resolve(obj);
                        }
                    }
                }
            }
            else {
                obj.isLast = true;
                resolve(obj);
            }
        });
    };
    return CustomerSyncAPIService;
}());
CustomerSyncAPIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_4__database_service__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_5__sharedservice__["a" /* SharedService */],
        __WEBPACK_IMPORTED_MODULE_6__apirequest_service__["a" /* APIRequestService */]])
], CustomerSyncAPIService);

//# sourceMappingURL=customersyncapi.service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitSyncAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sharedservice__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apirequest_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VisitSyncAPIService = (function () {
    function VisitSyncAPIService(utilService, databaseService, sharedService, apiRequestService) {
        this.utilService = utilService;
        this.databaseService = databaseService;
        this.sharedService = sharedService;
        this.apiRequestService = apiRequestService;
        this.ip = this.sharedService.getIP();
    }
    VisitSyncAPIService.prototype.callVisitPJP = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('visitpjp');
            // let pernr = this.utilService.encode64(this.pernr);
            var link = _this.ip + className;
            // link = 'http://212.118.101.174:8081/bsalesfs/VisitsToApp.do';
            var action = '?pernr=' + _this.pernr;
            _this.apiRequestService.getAPI(link + action).then(function (data) {
                console.log(data);
                _this.callActualVisits(data['visitexcuplmst']).then(function (obj) {
                    resolve(true);
                }, function (err) { reject(false); });
            }, function (err) {
                console.log((err));
                reject(false);
            });
        });
    };
    VisitSyncAPIService.prototype.callActualVisits = function (visitPJP) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var context = _this;
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('visitapp');
            // let pernr = this.utilService.encode64(this.pernr);
            var link = _this.ip + className;
            // link = 'http://212.118.101.174:8081/bsalesfs/GetVisitsFromApp.do';
            var action = '?action=get&pernr=' + _this.pernr;
            _this.apiRequestService.getAPI(link + action).then(function (data) {
                console.log(data);
                var visitActual = data['masters']['visitmst'];
                console.log(visitActual);
                var visitFinalArr = (visitPJP);
                for (var i = 0; i < visitActual.length; i++) {
                    var visitObj = visitActual[i];
                    var index = visitFinalArr.map(function (x) {
                        return (x['pernr'] == visitObj['assigneeUserId'] && x['kunnr'] == visitObj['kunnr'] && x['visitdate'] == visitObj['visitdate']
                            && context.utilService.convertTime24HrFormat(x['starttime']) == visitObj['visitstarttime']
                            && context.utilService.convertTime24HrFormat(x['endtime']) == visitObj['visitendtime']);
                    }).indexOf(true);
                    if (index === -1) {
                        visitObj.starttime = context.utilService.formatAMPM(visitObj['visitstarttime']);
                        visitObj.endtime = context.utilService.formatAMPM(visitObj['visitendtime']);
                        visitFinalArr.push(visitObj);
                    }
                    else {
                        visitFinalArr[index].serverFlag = 'Y';
                        visitFinalArr[index] = Object.assign(visitObj, visitFinalArr[index]);
                    }
                }
                _this.insertVisits(visitFinalArr);
                resolve(true);
            }, function (err) {
                console.log((err));
                reject(false);
            });
        });
    };
    VisitSyncAPIService.prototype.insertVisits = function (data) {
        var _this = this;
        console.log(data);
        var _len = data.length;
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('visittran', ' where assigneeUserId=?', [epernr]).then(function (resobj) { }, function (err) { });
        if (_len == 0) {
            // resolve(true);
        }
        else {
            for (var i = 0; i < _len; i++) {
                var selrow = data[i];
                // var pernr = epernr;
                this.databaseService.selectTableQuery('customermst', 'distinct kunnr,name1', ' where kunnr=?', [this.utilService.encode64(selrow.kunnr)], i).then(function (resobj) {
                    var index = resobj['index'];
                    if (resobj['rows'].length != 0) {
                        var row = data[index];
                        var custRow = resobj['rows']['item'](0);
                        var visitdatetime = _this.utilService.formatDateToDatabaseFormat(row.visitdate) + ' ' + _this.utilService.convertTime24HrFormat(row['starttime']) + '.00';
                        var visitid = _this.pernr + _this.utilService.returnDateTime(visitdatetime, true) / 1000;
                        console.log(visitid);
                        var sendflag = _this.utilService.encode64('N');
                        var createdUserId = _this.utilService.encode64(row.pernr);
                        var visitDate = (row.visitdate);
                        var visitStartTime = (row.starttime);
                        var visitEndTime = (row.endtime);
                        var customerId = _this.utilService.encode64(row.kunnr);
                        var customerName = (custRow.name1);
                        var customerType = _this.utilService.encode64(row.customerType);
                        var contactPerson = _this.utilService.encode64(row.contactperson);
                        var contactNumber = _this.utilService.encode64(row.contactnumber);
                        var creationDate = row.creationdate;
                        var creationTime = row.creationtime;
                        var discription = _this.utilService.encode64(row.description);
                        var visitTypeId = _this.utilService.encode64(row.visitTypeid);
                        var reasonId = _this.utilService.encode64(row.reasonId);
                        var priorityId = _this.utilService.encode64(row.priorityId);
                        var assigneeName = _this.utilService.encode64(row.assigneeName);
                        var assigneeUserId = _this.utilService.encode64(row.assigneeUserId);
                        // var category = this.utilService.encode64(row.category);
                        var status = _this.utilService.encode64(row.status);
                        var note = _this.utilService.encode64(row.note);
                        var checkintime = (row.checkintime);
                        var checkouttime = (row.checkouttime);
                        var checkindate = (row.checkindate);
                        var checkoutdate = (row.checkoutdate);
                        var latforuser = _this.utilService.encode64(row.latitude);
                        var longforuser = _this.utilService.encode64(row.longitude);
                        var ooflag = _this.utilService.encode64(row.ooflag);
                        _this.databaseService.insertIntoTableQuery('visittran', 'visitid,createdUserId,visitDate,visitStartTime,visitEndTime,customerId,customerType,customerName,' +
                            'contactPerson,contactNumber,creationDate,creationTime,discription,visitTypeId,reasonId,priorityId,' +
                            'assigneeName,assigneeUserId,status,checkintime,checkouttime,' +
                            'checkindate, checkoutdate, note, sendflag,ooflag,latforuser,longforuser', [visitid, createdUserId, visitDate, visitStartTime, visitEndTime, customerId, customerType, customerName,
                            contactPerson, contactNumber, creationDate, creationTime, discription, visitTypeId, reasonId, priorityId,
                            assigneeName, assigneeUserId, status, checkintime, checkouttime,
                            checkindate, checkoutdate, note, sendflag, ooflag, latforuser, longforuser], index)
                            .then(function (resobj) {
                            console.log(JSON.stringify(resobj));
                        }, function (err) {
                            console.log(JSON.stringify(err));
                        });
                    }
                }, function (err) { });
            }
        }
    };
    VisitSyncAPIService.prototype.callArticlePricelist = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var className = _this.sharedService.getAPIObj('pricelist');
            // let pernr = this.utilService.encode64(this.pernr);
            var action = '?pernr=' + _this.pernr;
            _this.apiRequestService.getAPI(_this.ip + className + action).then(function (data) {
                // console.log(JSON.stringify(data));
                _this.InsertIntoPlArticleTable(data['masters']['A907']);
                _this.InsertIntoPlKeyAcctsTable(data['masters']['A907keyaccountsmst']);
                _this.InsertIntoPlCustChainTable(data['masters']['A907custchainmst']);
                _this.InsertIntoPlBranchCustClassTable(data['masters']['A907branchclassmst']);
                _this.InsertIntoPlCustomerTable(data['masters']['A907customermst']);
                _this.InsertIntoBranchMasterTable(data['masters']['custbranchmst']);
                _this.InsertIntoCustChainMasterTable(data['masters']['custchainmst']);
                _this.InsertIntoCustClassMasterTable(data['masters']['custclassmst']);
                _this.InsertIntoKeyAcctsMasterTable(data['masters']['custkeyacctsmst']);
                _this.InsertIntoA305(data['masters']['A305']);
                resolve(true);
            }, function (err) {
                console.log('error Settings ' + (err));
                reject(false);
            });
        });
    };
    VisitSyncAPIService.prototype.InsertIntoPlArticleTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A907', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            this.databaseService.insertIntoTableQuery('A907', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.InsertIntoPlKeyAcctsTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A907keyaccountsmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            var keyaccountid = this.utilService.encode64(row.keyaccountid);
            var keyaccount = this.utilService.encode64((row.keyaccount));
            this.databaseService.insertIntoTableQuery('A907keyaccountsmst', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom,keyaccountid,keyaccount', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom, keyaccountid, keyaccount], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.InsertIntoPlCustChainTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A907custchainmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            var custchainid = this.utilService.encode64(row.custchainid);
            var custchain = this.utilService.encode64((row.custchain));
            this.databaseService.insertIntoTableQuery('A907custchainmst', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom,custchainid,custchain', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom, custchainid, custchain], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.InsertIntoPlBranchCustClassTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A907branchclassmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            var branchid = this.utilService.encode64(row.branchid);
            var branch = this.utilService.encode64((row.branch));
            var custclassid = this.utilService.encode64(row.custclassid);
            var custclass = this.utilService.encode64((row.custclass));
            this.databaseService.insertIntoTableQuery('A907branchclassmst', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom,branchid,branch,custclassid,custclass', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom, branchid, branch, custclassid, custclass], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.InsertIntoPlCustomerTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A907customermst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            var kunnr = this.utilService.encode64((row.kunnr));
            this.databaseService.insertIntoTableQuery('A907customermst', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom,kunnr', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom, kunnr], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.InsertIntoBranchMasterTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('custbranchmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var branchid = this.utilService.encode64(row.branchid);
            var vkbur = this.utilService.encode64(row.vkbur);
            this.databaseService.insertIntoTableQuery('custbranchmst', 'pernr,branchid, vkbur', [pernr, branchid, vkbur], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.InsertIntoCustChainMasterTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('custchainmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var custchainid = this.utilService.encode64(row.custchainid);
            var kvgr2 = this.utilService.encode64(row.kvgr2);
            this.databaseService.insertIntoTableQuery('custchainmst', 'pernr,custchainid, kvgr2', [pernr, custchainid, kvgr2], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.InsertIntoCustClassMasterTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('custclassmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var classid = this.utilService.encode64(row.classid);
            var kvgr1 = this.utilService.encode64(row.kvgr1);
            this.databaseService.insertIntoTableQuery('custclassmst', 'pernr,classid, kvgr1', [pernr, classid, kvgr1], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.InsertIntoKeyAcctsMasterTable = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('custkeyacctsmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var keyaccountid = this.utilService.encode64(row.keyaccountid);
            var kvgr4 = this.utilService.encode64(row.kvgr4);
            this.databaseService.insertIntoTableQuery('custkeyacctsmst', 'pernr,keyaccountid, kvgr4', [pernr, keyaccountid, kvgr4], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.InsertIntoA305 = function (data) {
        var epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('A305', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var pernr = epernr;
            var kappl = this.utilService.encode64(row.kappl);
            var kschl = this.utilService.encode64(row.kschl);
            var matnr = this.utilService.encode64(row.matnr);
            var datab = this.utilService.encode64(row.datab);
            var datbi = this.utilService.encode64(row.datbi);
            var kbetr = this.utilService.encode64((row.kbetr));
            var uom = this.utilService.encode64(row.uom.toUpperCase());
            var kunnr = this.utilService.encode64((row.kunnr));
            this.databaseService.insertIntoTableQuery('A305', 'pernr,kappl,kschl,matnr,datab,datbi,kbetr,uom,kunnr', [pernr, kappl, kschl, matnr, datab, datbi, kbetr, uom, kunnr], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.callPriorityMaster = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var className = _this.sharedService.getAPIObj('prioritymaster');
            // let pernr = this.utilService.encode64(this.pernr);
            var action = ''; //'?pernr='+this.pernr;
            _this.apiRequestService.getAPI(_this.ip + className + action).then(function (data) {
                console.log(JSON.stringify(data));
                _this.InsertIntoPriorityMasterTable(data['masters']['pricelistpriomst']);
                resolve(true);
            }, function (err) {
                console.log('error Settings ' + (err));
                reject(false);
            });
        });
    };
    VisitSyncAPIService.prototype.InsertIntoPriorityMasterTable = function (data) {
        // let epernr = this.utilService.encode64(this.pernr);
        this.databaseService.deleteTableQuery('pricelistpriomst', '', []).then(function (resobj) { }, function (err) { });
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            // var pernr = this.utilService.encode64(row.pernr);
            var tablename = this.utilService.encode64(row.table);
            var priority = this.utilService.encode64(row.priority);
            this.databaseService.insertIntoTableQuery('pricelistpriomst', 'tablename,priority', [tablename, priority], i)
                .then(function (resobj) {
                console.log(JSON.stringify(resobj));
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
    };
    VisitSyncAPIService.prototype.callPromoDetails = function (typeid1, typeid2, typeid3, typeid4) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pernr = _this.sharedService.getPernr();
            var className = _this.sharedService.getAPIObj('promotions');
            // let pernr = this.utilService.encode64(this.pernr);
            var link = _this.ip + className;
            var obj1 = { typeid: 0, isLast: false };
            var obj2 = { typeid: 0, isLast: false };
            var obj3 = { typeid: 0, isLast: false };
            var obj4 = { typeid: 0, isLast: false };
            var obj5 = { typeid: 0, isLast: false };
            _this.callPromoAPI(link, obj1, obj2, obj3, obj4, obj5, resolve, reject);
        });
    };
    VisitSyncAPIService.prototype.callPromoAPI = function (link, obj1, obj2, obj3, obj4, obj5, resolve, reject) {
        var _this = this;
        // console.log(resolve);
        var action = '?pernr=' + this.pernr + '&typeid1=' + obj1['typeid'] + '&typeid2=' + obj2['typeid'] + '&typeid3=' + obj3['typeid'] + '&typeid4=' + obj4['typeid'];
        this.apiRequestService.getAPI(link + action).then(function (data) {
            // console.log(JSON.stringify(data));
            _this.populatePromo(link, obj1, obj2, obj3, obj4, obj5, resolve, reject, data['masters']);
        }, function (err) {
            console.log((err));
            reject(false);
        });
    };
    VisitSyncAPIService.prototype.populatePromo = function (link, obj1, obj2, obj3, obj4, obj5, resolve, reject, data) {
        var _this = this;
        var d1 = this.InsertIntoPromoFamilyTable(data['promofamilymst'], obj1);
        var d2 = this.InsertIntoPromoMaterialTable(data['promomaterialmst'], obj2);
        var d3 = this.InsertIntoPromoStructTable(data['promostructmst'], obj3);
        var d4 = this.InsertIntoPromoMaterialStructTable(data['promomaterialstructmst'], obj4);
        var d5 = this.InsertIntoPromoConfigTable(data['promoconfigmst'], obj5);
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].forkJoin([d1, d2, d3, d4, d5]).subscribe(function (t) {
            console.log(t);
            if (t[0]['isLast'] && t[1]['isLast'] && t[2]['isLast'] && t[3]['isLast'] && t[4]['isLast'])
                resolve(true);
            else
                _this.callPromoAPI(link, t[0], t[1], t[2], t[3], t[4], resolve, reject);
        });
    };
    VisitSyncAPIService.prototype.InsertIntoPromoFamilyTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('promofamilymst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var typeid = _this.utilService.encode64(row.typeid);
                    var description = _this.utilService.encode64(row.description);
                    var startdate = (row.startdate);
                    var enddate = (row.enddate);
                    var orderedtype = _this.utilService.encode64(row.orderedtype);
                    var promotype = _this.utilService.encode64((row.promotype));
                    var ouom = _this.utilService.encode64(row.ouom);
                    var puom = _this.utilService.encode64(row.puom);
                    var oparameter = _this.utilService.encode64(row.oparammeter);
                    var promoparameter = _this.utilService.encode64(row.promoparameter);
                    var flag = _this.utilService.encode64(row.flag.trim());
                    _this.databaseService.insertIntoTableQuery('promofamilymst', 'typeid,description,startdate,enddate,orderedtype,promotype,ouom,puom,oparameter,promoparameter,pernr,flag', [typeid, description, startdate, enddate, orderedtype, promotype, ouom, puom, oparameter, promoparameter, pernr, flag], i)
                        .then(function (resobj) {
                        console.log('promofamilymst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    VisitSyncAPIService.prototype.InsertIntoPromoMaterialTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('promomaterialmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var typeid = _this.utilService.encode64(row.typeid);
                    var promoid = _this.utilService.encode64(row.promoid);
                    var matnr = _this.utilService.encode64(row.matnr);
                    var type = _this.utilService.encode64((row.type));
                    var qnty = _this.utilService.encode64(row.qnty);
                    var uom = _this.utilService.encode64(row.uom);
                    var discount = _this.utilService.encode64(row.discount);
                    var price = _this.utilService.encode64(row.price);
                    _this.databaseService.insertIntoTableQuery('promomaterialmst', 'typeid,promoid,matnr,type,pernr,qnty,uom,discount,price', [typeid, promoid, matnr, type, pernr, qnty, uom, discount, price], i)
                        .then(function (resobj) {
                        console.log('promomaterialmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    VisitSyncAPIService.prototype.InsertIntoPromoStructTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('promostructmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var typeid = _this.utilService.encode64(row.typeid);
                    var description = _this.utilService.encode64(row.description);
                    var startdate = (row.startdate);
                    var enddate = (row.enddate);
                    var forcedflag = _this.utilService.encode64(row.forcedflag);
                    var discount = _this.utilService.encode64((row.discount));
                    var ouom = _this.utilService.encode64(row.ouom);
                    var flag = _this.utilService.encode64(row.flag.trim());
                    _this.databaseService.insertIntoTableQuery('promostructmst', 'typeid,description,startdate,enddate,forcedflag,discount,ouom,pernr,flag', [typeid, description, startdate, enddate, forcedflag, discount, ouom, pernr, flag], i)
                        .then(function (resobj) {
                        console.log('promostructmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    VisitSyncAPIService.prototype.InsertIntoPromoMaterialStructTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['typeid'] == 0)
                _this.databaseService.deleteTableQuery('promomaterialstructmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
            if (_len == 0) {
                obj.isLast = true;
                resolve(obj);
            }
            else {
                for (var i = 0; i < _len; i++) {
                    var row = data[i];
                    var pernr = epernr;
                    var typeid = _this.utilService.encode64(row.typeid);
                    var promoid = _this.utilService.encode64(row.promoid);
                    var matnr = _this.utilService.encode64(row.matnr);
                    var discount = _this.utilService.encode64((row.discount));
                    var type = _this.utilService.encode64(row.type);
                    _this.databaseService.insertIntoTableQuery('promomaterialstructmst', 'typeid,promoid,matnr,type,pernr,discount', [typeid, promoid, matnr, type, pernr, discount], i)
                        .then(function (resobj) {
                        console.log('promomaterialstructmst ' + JSON.stringify(resobj));
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
                    if (i == _len - 1) {
                        obj.typeid = row['typeid'];
                        resolve(obj);
                    }
                    ;
                }
            }
        });
    };
    VisitSyncAPIService.prototype.InsertIntoPromoConfigTable = function (data, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _len = data.length;
            var epernr = _this.utilService.encode64(_this.pernr);
            if (obj['isLast']) {
                if (obj['typeid'] == 0)
                    _this.databaseService.deleteTableQuery('promoconfigmst', ' where pernr=?', [epernr]).then(function (resobj) { }, function (err) { });
                if (_len == 0) {
                    obj.isLast = true;
                    resolve(obj);
                }
                else {
                    for (var i = 0; i < _len; i++) {
                        var row = data[i];
                        var pernr = epernr;
                        var typeid = _this.utilService.encode64(row.typeid);
                        var value = _this.utilService.encode64(row.value);
                        var promovalue = _this.utilService.encode64(row.promovalue);
                        var promotype = _this.utilService.encode64(row.promotype);
                        _this.databaseService.insertIntoTableQuery('promoconfigmst', 'typeid,value,promovalue,promotype,pernr', [typeid, value, promovalue, promotype, pernr], i)
                            .then(function (resobj) {
                            console.log('promoconfigmst ' + JSON.stringify(resobj));
                        }, function (err) {
                            console.log(JSON.stringify(err));
                        });
                        if (i == _len - 1) {
                            obj.isLast = true;
                            resolve(obj);
                        }
                    }
                }
            }
            else {
                obj.isLast = true;
                resolve(obj);
            }
        });
    };
    return VisitSyncAPIService;
}());
VisitSyncAPIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_5__database_service__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_6__sharedservice__["a" /* SharedService */],
        __WEBPACK_IMPORTED_MODULE_7__apirequest_service__["a" /* APIRequestService */]])
], VisitSyncAPIService);

//# sourceMappingURL=visitsyncapi.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_spotify_spotify__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tabs_tabs_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tabs_tabs_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_tabs_tabs_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_sharedservice__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_util_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_database_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_apirequest_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_afterloginapi_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_createtables_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_mastersyncapi_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_customersyncapi_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_visitsyncapi_service__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_tabs_tabs_module__["TabsComponentModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/article/article.module#ArticlePageModule', name: 'Article', segment: 'article', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/capture/capture.module#CapturePageModule', name: 'Capture', segment: 'capture', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepassword/changepassword.module#ChangePasswordPageModule', name: 'ChangePassword', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/customer.module#CustomerPageModule', name: 'Customer', segment: 'customer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'Dashboard', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/diary/diary.module#DiaryPageModule', name: 'Diary', segment: 'diary', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'Home', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lead/lead.module#LeadPageModule', name: 'Lead', segment: 'lead', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/marketintelligence/marketintelligence.module#MarketIntelligencePageModule', name: 'MarketIntelligence', segment: 'marketintelligence', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/marketplan/marketplan.module#MarketPlanPageModule', name: 'MarketPlan', segment: 'marketplan', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/merchandising/merchandising.module#MerchandisingPageModule', name: 'Merchandising', segment: 'merchandising', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/myactivity/myactivity.module#MyActivityPageModule', name: 'MyActivity', segment: 'myactivity', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'Orders', segment: 'orders', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pod/pod.module#PodPageModule', name: 'POD', segment: 'pod', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/potential/potential.module#PotentialPageModule', name: 'Potential', segment: 'potential', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pricelist/pricelist.module#PriceListPageModule', name: 'PriceList', segment: 'pricelist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'Settings', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stock/stock.module#StockStatusPageModule', name: 'StockStatus', segment: 'stock', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sync/sync.module#SyncPageModule', name: 'Sync', segment: 'sync', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/syncmodal/syncmodal.module#SyncModalPageModule', name: 'SyncModal', segment: 'syncmodal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/about/settingsabout.module#SettingsAboutPageModule', name: 'SettingsAbout', segment: 'settingsabout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/backend/settingsbackend.module#SettingsBackendPageModule', name: 'SettingsBackend', segment: 'settingsbackend', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/default/settingsdefault.module#SettingsDefaultPageModule', name: 'SettingsDefault', segment: 'settingsdefault', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_spotify_spotify__["a" /* SpotifyProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_sharedservice__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_11__providers_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_database_service__["a" /* DatabaseService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_apirequest_service__["a" /* APIRequestService */],
            __WEBPACK_IMPORTED_MODULE_14__providers_afterloginapi_service__["a" /* AfterLoginAPIService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_createtables_service__["a" /* CreateAllTablesService */],
            __WEBPACK_IMPORTED_MODULE_16__providers_mastersyncapi_service__["a" /* MasterSyncAPIService */],
            __WEBPACK_IMPORTED_MODULE_17__providers_customersyncapi_service__["a" /* CustomerSyncAPIService */],
            __WEBPACK_IMPORTED_MODULE_18__providers_visitsyncapi_service__["a" /* VisitSyncAPIService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SqlStorage, Storage} from 'ionic-angular';
var DatabaseService = (function () {
    //db : Storage;
    function DatabaseService(sqlite) {
        // this.db = new SQLite();
        this.sqlite = sqlite;
        //this.db = new Storage(SqlStorage);
    }
    DatabaseService.prototype.openDB = function () {
        return new Promise(function (resolve, reject) {
            resolve('success'); // test ionic serve
            // this.sqlite.create({
            // 	name: 'iSFA.db',
            // 	location: 'default'
            // })
            // .then((db: SQLiteObject) => {
            // 	this.db = db;
            // 	console.log('Success: iSFA opened');
            // 	resolve('success');
            // })
            // .catch(err => {
            // 	console.error('Unable to open database: ', err);
            // 	reject(err);
            // });
        });
    };
    DatabaseService.prototype.createTableQuery = function (tableName, columns) {
        console.log(this.db);
        return new Promise(function (resolve, reject) {
            resolve('success'); // test ionic serve
            // console.log(this.db);
            // this.db.executeSql('CREATE TABLE IF NOT EXISTS '+tableName+' ('+columns+')', {}).then(() => {
            // 	resolve("success");
            // }, (err) => {
            // 	console.error('Unable to execute sql: ', err);
            // 	reject(err);
            // });
        });
    };
    DatabaseService.prototype.insertIntoTableQuery = function (tableName, columns, params, index) {
        return new Promise(function (resolve, reject) {
            resolve('success'); // test ionic serve
            // let placeholders = '?';
            // let _length = columns.split(',').length;
            // for(var i=0; i<_length-1; i++){
            // 	placeholders += ',?';
            // }
            // this.db.executeSql('INSERT OR REPLACE INTO '+tableName+' ('+columns+') VALUES( '+placeholders+')', params).then((data) => {
            // 	data['index'] = index;
            // 	resolve(data);
            // }, (err) => {
            // 	console.error('Unable to execute sql: ', err);
            // 	reject(err);
            // });
        });
    };
    DatabaseService.prototype.selectTableQuery = function (tableName, columns, whereClause, params, index) {
        return new Promise(function (resolve, reject) {
            resolve('success'); // test ionic serve
            // this.db.executeSql('SELECT '+columns+' FROM '+tableName+' '+whereClause, params).then((data) => {
            // 	data['index'] = index;
            // 	resolve(data);
            // }, (err) => {
            // 	console.error('Unable to execute sql: ', err);
            // 	reject(err);
            // });
        });
    };
    DatabaseService.prototype.selectComplexQuery = function (query, params, index) {
        return new Promise(function (resolve, reject) {
            resolve('success'); // test ionic serve
            // this.db.executeSql(query, params).then((data) => {
            // 	data['index'] = index;
            // 	resolve(data);
            // }, (err) => {
            // 	console.error('Unable to execute sql: ', err);
            // 	reject(err);
            // });
        });
    };
    DatabaseService.prototype.updateTableQuery = function (tableName, columns, whereClause, params, index) {
        return new Promise(function (resolve, reject) {
            resolve('success'); // test ionic serve
            // this.db.executeSql('update '+tableName+' SET '+columns+' '+whereClause, params).then((data) => {
            // 	data['index'] = index;
            // 	resolve(data);
            // }, (err) => {
            // 	console.error('Unable to execute sql: ', err);
            // 	reject(err);
            // });
        });
    };
    DatabaseService.prototype.deleteTableQuery = function (tableName, whereClause, params) {
        return new Promise(function (resolve, reject) {
            resolve('success'); // test ionic serve
            // this.db.executeSql('DELETE FROM '+tableName+' '+whereClause, params).then((data) => {
            // 	resolve(data);
            // }, (err) => {
            // 	console.error('Unable to execute sql: ', err);
            // 	reject(err);
            // });
        });
    };
    return DatabaseService;
}());
DatabaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
], DatabaseService);

//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sharedservice__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_createtables_service__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {APIRequestService} from '../providers/apirequest.service';
// import {AfterLoginAPIService} from '../providers/afterloginapi.service';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, sharedService, databaseService, createTables, utilService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.sharedService = sharedService;
        this.databaseService = databaseService;
        this.createTables = createTables;
        this.utilService = utilService;
        this.initializeApp();
        sharedService.setIP('http://202.189.244.62:8080/rajhanssales');
        sharedService.setAPIObj([{ key: 'user', className: '/getUserJsonAction.do' },
            { key: 'authenticate', className: '/ValidateLoginAction.do' },
            { key: 'dashboardvideo', className: '/VideoMessageAction.do' },
            { key: 'settings', className: '/GetUserAuthorizationsToApp.do' },
            { key: 'parameters', className: '/GetParametersToApp.do' },
            { key: 'menuparameters', className: '/GetUserMenuAuthorization.do' },
            { key: 'materials', className: '/MaterialDetailsToApp.do' },
            { key: 'pricelist', className: '/GetPriceListMastersToApp.do' },
            { key: 'prioritymaster', className: '/GetMasterToApp.do' },
            { key: 'promotions', className: '/GetPromoToApp.do' },
            { key: 'customers', className: '/CustomerDetailsToApp.do' },
            { key: 'visitpjp', className: '/VisitsToApp.do' },
            { key: 'visitapp', className: '/GetVisitsFromApp.do' },
            { key: 'credit', className: '/CustomerCreditToApp.do' },
            { key: 'sodetails', className: '/GetOrderStatusToApp.do' },
            { key: 'custcontact', className: '/GetCustomerContactDetails.do' },
            { key: 'custasset', className: '/GetCustAssetsToApp.do' }
        ]);
        // used for an example of ngFor and navigation
        sharedService.setPages([
            { title: 'My Activity', id: 'myactivity', show: false, component: 'MyActivity', iconName: 'list-box', iosIcon: 'ios-list-box', androidIcon: 'md-list-box' },
            { title: 'Dashboard', id: 'dashboard', show: false, component: 'Dashboard', iconName: 'pie', iosIcon: 'ios-pie', androidIcon: 'md-pie' },
            { title: 'Diary', id: 'diary', show: false, component: 'Diary', iconName: 'calendar', iosIcon: 'ios-calendar', androidIcon: 'md-calendar' },
            { title: 'Customer', id: 'customer', show: false, component: 'Customer', iconName: 'person', iosIcon: 'ios-person', androidIcon: 'md-person' },
            { title: 'Article', id: 'article', show: false, component: 'Article', iconName: 'logo-dropbox', iosIcon: 'logo-dropbox', androidIcon: 'logo-dropbox' },
            { title: 'Lead', id: 'lead', show: false, component: 'Lead', iconName: 'people', iosIcon: 'ios-people', androidIcon: 'md-people' },
            { title: 'Potential', id: 'potential', show: false, component: 'Potential', iconName: 'trending-up', iosIcon: 'ios-trending-up', androidIcon: 'md-trending-up' },
            { title: 'Price List', id: 'pricelist', show: false, component: 'PriceList', iconName: 'logo-usd', iosIcon: 'logo-usd', androidIcon: 'logo-usd' },
            { title: 'Merchandising', id: 'merchandising', show: false, component: 'Merchandising', iconName: 'logo-markdown', iosIcon: 'logo-markdown', androidIcon: 'logo-markdown' },
            { title: 'Capture', id: 'capture', show: false, component: 'Capture', iconName: 'checkbox-outline', iosIcon: 'ios-checkbox-outline', androidIcon: 'md-checkbox-outline' },
            { title: 'Stock Status', id: 'stock', show: false, component: 'StockStatus', iconName: 'logo-buffer', iosIcon: 'logo-buffer', androidIcon: 'logo-buffer' },
            { title: 'Orders', id: 'order', show: false, component: 'Orders', iconName: 'cart', iosIcon: 'ios-cart', androidIcon: 'md-cart' },
            { title: 'POD', id: 'pod', show: false, component: 'POD', iconName: 'train', iosIcon: 'ios-train', androidIcon: 'md-train' },
            { title: 'Market Intelligence', id: 'marketintelligence', show: false, component: 'MarketIntelligence', iconName: 'stats', iosIcon: 'ios-stats', androidIcon: 'md-stats' },
            { title: 'Market Plan', id: 'marketplan', show: false, component: 'MarketPlan', iconName: 'globe', iosIcon: 'ios-globe', androidIcon: 'md-globe' },
            { title: 'Settings', id: 'settings', show: false, component: 'Settings', iconName: 'settings', iosIcon: 'ios-settings', androidIcon: 'md-settings' },
            { title: 'Sync', id: 'sync', show: true, component: 'Sync', iconName: 'sync', iosIcon: 'ios-sync', androidIcon: 'md-sync' },
            { title: 'Change Password', id: 'changepassword', show: true, component: 'ChangePassword', iconName: 'key', iosIcon: 'ios-key', androidIcon: 'md-key' },
            { title: 'Sign Off', id: 'signoff', show: true, component: 'Login', iconName: 'power', iosIcon: 'ios-power', androidIcon: 'md-power' }
        ]);
        // let temp = sharedService.getPages();
        // this.pages = this.utilService.filterObject(temp,'show',true);
        this.pages = sharedService.getPages();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.databaseService.openDB().then(function (obj) {
                _this.databaseService.createTableQuery('empdetails', 'pernr int, nachn text,vorna text,role int,password text, roledesc text,reportto text,emailid text,designation text, status text,imei text,simno text,cleardata text,grp text,server text')
                    .then(function (obj) {
                    console.log('table created empdetails');
                    _this.rootPage = 'Login'; //Login;
                }, function (err) {
                    console.log(JSON.stringify(err));
                });
                _this.createTables.createAllTables();
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
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
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\Ionic2\iSFAv2\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"F:\Ionic2\iSFAv2\src\app\app.html"*/,
        providers: []
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_sharedservice__["a" /* SharedService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_database_service__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_createtables_service__["a" /* CreateAllTablesService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_util_service__["a" /* UtilService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpotifyProvider = (function () {
    function SpotifyProvider(http) {
        this.http = http;
    }
    SpotifyProvider.prototype.load = function (query) {
        return this.http.get("https://api.spotify.com/v1/search?q=" + encodeURIComponent(query) + "&limit=50&type=track")
            .retryWhen(function (error) { return error.delay(500); })
            .timeout(5000)
            .map(function (res) { return res.json(); });
    };
    return SpotifyProvider;
}());
SpotifyProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], SpotifyProvider);

//# sourceMappingURL=spotify.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);

var SharedService = (function () {
    function SharedService() {
    }
    SharedService.prototype.setPages = function (page) {
        this.pages = page;
    };
    SharedService.prototype.getPages = function () {
        return this.pages;
    };
    SharedService.prototype.setIP = function (ip) {
        this.ip = ip;
    };
    SharedService.prototype.getIP = function () {
        return this.ip;
    };
    SharedService.prototype.setPernr = function (pernr) {
        this.pernr = pernr;
    };
    SharedService.prototype.getPernr = function () {
        return this.pernr;
    };
    SharedService.prototype.setAPIObj = function (apiObj) {
        this.apiObj = apiObj;
    };
    SharedService.prototype.getAPIObj = function (key) {
        var index = this.apiObj.map(function (x) { return (x.key == key); }).indexOf(true);
        if (index !== -1) {
            return this.apiObj[index]['className'];
        }
        else {
            return '';
        }
    };
    SharedService.prototype.setMenuArr = function (menuArray) {
        this.menuArray = menuArray;
    };
    SharedService.prototype.getMenuArr = function () {
        return this.menuArray;
    };
    SharedService.prototype.setSubMenuArr = function (subMenuArray) {
        this.subMenuArray = subMenuArray;
    };
    SharedService.prototype.getSubMenuArr = function () {
        return this.subMenuArray;
    };
    return SharedService;
}());

//# sourceMappingURL=sharedservice.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
var UtilService = (function () {
    function UtilService() {
        this.keyStr = "ABCDEFGHIJKLMNOP" +
            "QRSTUVWXYZabcdef" +
            "ghijklmnopqrstuv" +
            "wxyz0123456789+/" +
            "=";
    }
    UtilService.prototype.sortObject = function (array, key) {
        var sortedObjects = array.sort(function (a, b) {
            var aName = a[key].toLowerCase();
            var bName = b[key].toLowerCase();
            return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
        });
        return sortedObjects;
    };
    UtilService.prototype.groupObjects = function (objects, key) {
        var sortedObjects = this.sortObject(objects, key);
        var currentLetter = false;
        var currentObjects = [];
        var groupedObjects = [];
        sortedObjects.forEach(function (value, index) {
            if (value[key].charAt(0) != currentLetter) {
                currentLetter = value[key].charAt(0);
                var newGroup = {
                    letter: currentLetter,
                    object: []
                };
                currentObjects = newGroup.object;
                groupedObjects.push(newGroup);
            }
            currentObjects.push(value);
        });
        return groupedObjects;
    };
    UtilService.prototype.filterObject = function (array, key, searchTerm) {
        return array.filter(function (item) {
            return item[key] == (searchTerm);
        });
    };
    UtilService.prototype.encode64 = function (input) {
        if (input == undefined || input == '')
            input = 'null';
        input = encodeURIComponent(input);
        var output = "";
        var chr1, chr2, chr3 = null;
        var enc1, enc2, enc3, enc4 = null;
        var i = 0;
        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this.keyStr.charAt(enc1) +
                this.keyStr.charAt(enc2) +
                this.keyStr.charAt(enc3) +
                this.keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = null;
            enc1 = enc2 = enc3 = enc4 = null;
        } while (i < input.length);
        return output;
    };
    UtilService.prototype.decode64 = function (input) {
        if (input == undefined || input == null)
            return input;
        var output = "";
        var chr1, chr2, chr3 = null;
        var enc1, enc2, enc3, enc4 = null;
        var i = 0;
        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
            console.log("There were invalid base64 characters in the input text.\n" +
                "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                "Expect errors in decoding.");
            return input;
        }
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            enc1 = this.keyStr.indexOf(input.charAt(i++));
            enc2 = this.keyStr.indexOf(input.charAt(i++));
            enc3 = this.keyStr.indexOf(input.charAt(i++));
            enc4 = this.keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
            chr1 = chr2 = chr3 = null;
            enc1 = enc2 = enc3 = enc4 = null;
        } while (i < input.length);
        return decodeURIComponent(output);
    };
    UtilService.prototype.checkEncodedBlank = function (text) {
        if (this.encode64((text)) == this.encode64(this.decode64(this.encode64('')))) {
            text = 'null';
        }
        return (text);
    };
    UtilService.prototype.checkReturnValue = function (chkVal, rtnVal) {
        return (chkVal === 'null' || chkVal === '' || chkVal === undefined || chkVal === null || chkVal == 'NaN') ? rtnVal : chkVal;
    };
    UtilService.prototype.convertTime24HrFormat = function (str) {
        var time = str;
        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM == "PM" && hours < 12)
            hours = hours + 12;
        if (AMPM == "AM" && hours == 12)
            hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10)
            sHours = "0" + sHours;
        if (minutes < 10)
            sMinutes = "0" + sMinutes;
        return (sHours + ":" + sMinutes + ":00");
    };
    UtilService.prototype.formatAMPM = function (date) {
        var hours = 0, minutes = 0;
        if (date instanceof Date) {
            hours = date.getHours();
            minutes = date.getMinutes();
        }
        else {
            var tempDateArr = date.split(':');
            if (tempDateArr.length != 0) {
                hours = parseInt(tempDateArr[0], 10);
                minutes = parseInt(tempDateArr[1], 10);
            }
        }
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10)
            sHours = "0" + hours;
        if (minutes < 10)
            sMinutes = "0" + minutes;
        var strTime = sHours + ':' + sMinutes + ' ' + ampm;
        return strTime;
    };
    UtilService.prototype.formatDateToDatabaseFormat = function (dateStr) {
        var formattedDateStr = dateStr.split(".");
        return formattedDateStr[2] + "-" + ((formattedDateStr[1] < 10) ? "0" + formattedDateStr[1] : formattedDateStr[1]) + "-" + ((formattedDateStr[0] < 10) ? "0" + formattedDateStr[0] : formattedDateStr[0]);
    };
    UtilService.prototype.returnDateTime = function (datetime, isTimeZoneIndependent) {
        // var isTimeZoneIndependent = false;
        var _datetime = datetime.split(' ');
        var _date = _datetime[0].split('-');
        var _time = _datetime[1].split(':');
        var _sec = _time[2].split('.');
        var year = parseInt(_date[0], 10);
        var month = parseInt(_date[1], 10) - 1;
        var day = parseInt(_date[2], 10);
        var hours = parseInt(_time[0], 10);
        var minutes = parseInt(_time[1], 10);
        var seconds = parseInt(_sec[0], 10);
        var milliseconds = parseInt(_sec[1], 10);
        var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        var returnDateTime = isTimeZoneIndependent ? (d.getTime() - (d.getTimezoneOffset() * 60000)) : d.getTime();
        return returnDateTime;
    };
    return UtilService;
}());

//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var APIRequestService = (function () {
    function APIRequestService(http, loadingController, toastCtrl) {
        this.http = http;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
    }
    APIRequestService.prototype.getAPI = function (link) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(link);
            _this.http.get(link)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    APIRequestService.prototype.presentLoader = function (text) {
        this.loader = this.loadingController.create({
            content: text
        });
        this.loader.present();
    };
    APIRequestService.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000
        });
        toast.present();
    };
    APIRequestService.prototype.dismissLoader = function () {
        this.loader.dismiss();
    };
    return APIRequestService;
}());
APIRequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], APIRequestService);

//# sourceMappingURL=apirequest.service.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map