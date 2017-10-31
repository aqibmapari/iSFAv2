import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsAboutPage } from './settingsabout';

@NgModule({
  declarations: [
    SettingsAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsAboutPage),
  ]
})
export class SettingsAboutPageModule {}
