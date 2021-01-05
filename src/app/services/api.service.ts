import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API_BASE = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

  httpHeaders: HttpHeaders = new HttpHeaders({
    "x-rapidapi-key": "ffaca5a939msh97a2a1e80ace8e0p101f01jsnbd2bb9bf732f",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  });

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get(this.API_BASE, {headers: this.httpHeaders});
  }
}
