import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '2c071f0733msh79e550556bbbd41p15f477jsn11bf3a4a3865';
  private apiUrl = 'https://the-weather-api.p.rapidapi.com/api/weather';

  constructor(private http: HttpClient) {}

  searchWeatherByCity(city: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', this.apiKey)
      .set('X-RapidAPI-Host', 'the-weather-api.p.rapidapi.com');

    const options = { headers };
    return this.http.get(`${this.apiUrl}/${city}`, options);
  }
}
