import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { AppVersion } from '@ionic-native/app-version';
import { SettingsPage } from './settings';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
  ],
  providers:[
    Device,
    AppVersion
  ]
})
export class SettingsPageModule {}
