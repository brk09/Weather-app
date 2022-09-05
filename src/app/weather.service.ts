import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  callWeatherApi() {
    return this.httpClient.get(
      'https://api.openweathermap.org/data/2.5/weather?',
      {
        params: {
          lat: 35,
          lon: 129,
          appid: 'a9ba00f41fb0d327ac91cc0b7d377632',
        },
      }
    );
  }
}
