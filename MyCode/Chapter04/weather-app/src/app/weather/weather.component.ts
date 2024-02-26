import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';
import { Forecast } from '../forecast';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatCardModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {

  weather: Weather | undefined;
  forecast: Forecast | undefined;

  constructor(private weatherService: WeatherService) { }

  search(city: string) {
    this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
    this.weatherService.getForecast(city).subscribe(forecast => this.forecast = forecast);
  }


}
