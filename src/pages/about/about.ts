import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public statusBar: StatusBar) {
 this.show();
  }
  show()
  {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);
    
    // set status bar to white
    this.statusBar.backgroundColorByHexString('#6495ed');
    this.statusBar.show();
  }

}
