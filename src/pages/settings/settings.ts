import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: 'Settings'})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
	tabs: Array<{title: string,value: string, root: any, icon: string}>;
	segmentModel: string;
	constructor(public navCtrl: NavController) {
		this.tabs = [
			{ title: "About",value:"about", root: 'SettingsAbout', icon: "calendar" },
			{ title: "Authorizations",value:"authorizations", root: 'SettingsAuthorizations', icon: "calendar" },
			{ title: "Default",value:"default", root: 'SettingsBackend', icon: "calendar" },
			{ title: "Backend",value:"backend", root: 'SettingsDefault', icon: "calendar" }
		];
		this.segmentModel = "about";
	}
	segmentValueChange(value:string):void {
		//console.log(value);
		this.segmentModel = value;
	}
}

