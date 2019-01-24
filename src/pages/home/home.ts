import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import {SettingsPage} from '../settings/settings';
import { StatusBar } from '@ionic-native/status-bar';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

weather: any;
data: any;
city: any;

  constructor(public navCtrl: NavController, public statusBar:StatusBar, private weatherProvider: WeatherProvider, public navParams: NavParams) {
   this.showstatusBar();
    this.city = navParams.get('data');
   this.getWeather();
    

  }
  showstatusBar()
  {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);
    
    // set status bar to white
    this.statusBar.backgroundColorByHexString('#6495ed');
    this.statusBar.show();
  }
   
  ionViewWillEnter(){
   
  }
  getWeather()
  { if(this.city==undefined)
    {
      this.navCtrl.push(SettingsPage);
    }
    else{
  this.weatherProvider.getWeather(this.city).subscribe(weather =>{
    this.weather = weather; 
    console.log(this.weather); 
    this.data =  Object.keys(this.weather.list).length-1;
    console.log(this.data);});
    console.log(this.weather);
  }
  }
  
  
   

}
