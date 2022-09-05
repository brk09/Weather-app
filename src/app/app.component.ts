import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: Array<object> = [];

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {
    this.callApi();
  }

  callApi() {
    this.weather.callWeatherApi().subscribe((res) => {});
  }
}
