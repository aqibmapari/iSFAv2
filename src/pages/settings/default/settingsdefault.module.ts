import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsDefaultPage } from './settingsdefault';

@NgModule({
  declarations: [
    SettingsDefaultPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsDefaultPage),
  ]
})
export class SettingsDefaultPageModule {}
