import { HttpClient, HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { Forecast } from './forecast';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '25af527a4f606ffdde0e9af417c21eff';

  constructor(private httpClient: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);
    return this.httpClient.get<Weather>(this.apiUrl + 'weather', { params: options });

  }

  getForecast(city: string): Observable<Forecast> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);
    return this.httpClient.get<Forecast>(this.apiUrl + 'forecast', { params: options });
  }


}
