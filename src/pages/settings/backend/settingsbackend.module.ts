import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsBackendPage } from './settingsbackend';

@NgModule({
  declarations: [
    SettingsBackendPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsBackendPage),
  ]
})
export class SettingsBackendPageModule {}
