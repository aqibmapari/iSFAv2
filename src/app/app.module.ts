import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { SpotifyProvider } from '../providers/spotify/spotify';
import { TabsComponentModule } from "../components/tabs/tabs.module";

import {SharedService} from '../providers/sharedservice';
import {UtilService} from '../providers/util.service';
import {DatabaseService} from '../providers/database.service';
import {APIRequestService} from '../providers/apirequest.service';
import {AfterLoginAPIService} from '../providers/afterloginapi.service';
import {CreateAllTablesService} from '../providers/createtables.service';
import {MasterSyncAPIService} from '../providers/mastersyncapi.service';
import {CustomerSyncAPIService} from '../providers/customersyncapi.service';
import {VisitSyncAPIService} from '../providers/visitsyncapi.service';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    TabsComponentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpotifyProvider,
    SharedService,
    UtilService,
    DatabaseService,
    APIRequestService,
    AfterLoginAPIService,
    CreateAllTablesService,
    MasterSyncAPIService,
    CustomerSyncAPIService,
    VisitSyncAPIService
  ]
})
export class AppModule {}
