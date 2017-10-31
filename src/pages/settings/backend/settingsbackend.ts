import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
@IonicPage({name: 'SettingsBackend'})
@Component({
	selector: 'settings-backend',
	templateUrl: 'settingsbackend.html'
})
export class SettingsBackendPage {
	selectedSettings : any = {};
	constructor() {
		this.selectedSettings = {
			servername: 'SAP DEV',
			applserver: '192.168.2.3',
			instance: '140',
			systemid: '10',
			router: ''
		};
	}
}
