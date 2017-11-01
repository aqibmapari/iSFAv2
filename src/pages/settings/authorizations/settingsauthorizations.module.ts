import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsAuthorizationsPage } from './settingsauthorizations';

@NgModule({
  declarations: [
    SettingsAuthorizationsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsAuthorizationsPage),
  ]
})
export class SettingsAuthorizationsPageModule {}
