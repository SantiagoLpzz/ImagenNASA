import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'QhdDtj7imbcvsGqXvImIkhFtW6e88rYwr45VCbxM'; // Reemplaza con tu API Key

  constructor(private http: HttpClient) { }

  getImageOfTheDay(date?: string): Observable<any> {
    let url = `${this.apiUrl}?api_key=${this.apiKey}`;
    if (date) {
      url += `&date=${date}`;
    }
    return this.http.get(url);
  }
}
