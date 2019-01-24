import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Http } from '@angular/http';

@Injectable()
export class WeatherProvider {

apikey = "f155845c890a508436eed09fdcbfb780";
url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');

    this.url = 'http://api.openweathermap.org/data/2.5/forecast?id=';
    }
    getWeather(city)
    {
    return this.http.get(this.url+city+'&APPID='+this.apikey)
    .map(res=>res.json());
    }
  

}
