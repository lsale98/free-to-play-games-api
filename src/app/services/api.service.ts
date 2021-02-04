import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGame } from '../models/Game';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API_BASE = "https://free-to-play-games-database.p.rapidapi.com/api/games";

  readonly API_BASE_SINGLE = "https://free-to-play-games-database.p.rapidapi.com/api/game?id=";

  readonly API_BASE_GENRE = "https://free-to-play-games-database.p.rapidapi.com/api/games?category=";

  readonly API_BASE_PLATFORM = "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=";

  

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
