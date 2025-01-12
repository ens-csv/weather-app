import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
}

private apiUrl = 'https://api.openweathermap.org/data/2.5/';
private apiKey = '34a20c604c8aa94e8fd5224b8628e00a';

getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
        .set('units', 'metric')
        .set('q', city)
        .set('appId', this.apiKey);
    return this.http.get<Weather>(this.apiUrl + 'weather', { params:
options });
}
