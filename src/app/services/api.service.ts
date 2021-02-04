import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGame } from '../models/Game';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API_BASE = `${environment.api}/games`;

  readonly API_BASE_SINGLE = `${environment.api}/game?id=`;

  readonly API_BASE_GENRE = `${environment.api}/games?category=`;

  readonly API_BASE_PLATFORM = `${environment.api}/games?platform=`;

  

  constructor(private http: HttpClient) { 
     
   
  }

  getGames(): Observable<HttpResponse<IGame[]>> {
    const headers = new HttpHeaders()
   .set('x-rapidapi-key', environment.xrapidapikey)
   .set('x-rapidapi-host', environment.xrapidapihost);
    return this.http.get<IGame[]>(this.API_BASE, { observe: 'response', headers: headers });
  }

  getGame(id: Number): Observable<HttpResponse<IGame>>{
    const headers = new HttpHeaders()
      .set('x-rapidapi-key', environment.xrapidapikey)
   .set('x-rapidapi-host', environment.xrapidapihost);
    
    return this.http.get<IGame>(this.API_BASE_SINGLE + id, {observe: 'response', headers: headers});
  }

  getGamesGenre(genre: string): Observable<HttpResponse<IGame[]>>{
     const headers = new HttpHeaders()
  .set('x-rapidapi-key', environment.xrapidapikey)
   .set('x-rapidapi-host', environment.xrapidapihost);
    return this.http.get<IGame[]>(this.API_BASE_GENRE + `${genre}`, { observe: 'response', headers: headers });
  }

  getGamesPlatform(platfrom: string): Observable<HttpResponse<IGame[]>>{
     const headers = new HttpHeaders()
  .set('x-rapidapi-key', environment.xrapidapikey)
   .set('x-rapidapi-host', environment.xrapidapihost);
    return this.http.get<IGame[]>(this.API_BASE_PLATFORM + `${platfrom}`, { observe: 'response', headers: headers });
  }
}
