import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { dateValueRange } from 'ionic-angular/umd/util/datetime-util';
import {StatusBar } from '@ionic-native/status-bar';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: any;
   

  constructor(public navCtrl: NavController, public statusBar: StatusBar, public navParams: NavParams) {
     this.showstatusBar();
  }

  showstatusBar()
  {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);
    
    // set status bar to white
    this.statusBar.backgroundColorByHexString('#6495ed')
    ;this.statusBar.show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  mcqAnswer(value)
  { console.log(value);
   this.city = value;
   console.log(this.city);
  }

  Done()
  {
    this.navCtrl.push(HomePage,
      {
        data: this.city
      })
  }

}
