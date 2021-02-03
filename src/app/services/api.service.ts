import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGame } from '../models/Game';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API_BASE = "https://www.freetogame.com/api/games";

  readonly API_BASE_SINGLE = "https://www.freetogame.com/api/game?id=";

  readonly API_BASE_GENRE = "https://www.freetogame.com/api/games?category=";

  readonly API_BASE_PLATFORM = "https://www.freetogame.com/api/games?platform=";

  constructor(private http: HttpClient) { }

  getGames(): Observable<HttpResponse<IGame[]>> {
    return this.http.get<IGame[]>(this.API_BASE, { observe: 'response'});
  }

  getGame(id: Number): Observable<HttpResponse<IGame>>{
    return this.http.get<IGame>(this.API_BASE_SINGLE + `${id}`, {observe: 'response'});
  }

  getGamesGenre(genre: string): Observable<HttpResponse<IGame[]>>{
    return this.http.get<IGame[]>(this.API_BASE_GENRE + `${genre}`, { observe: 'response' });
  }

  getGamesPlatform(platfrom: string): Observable<HttpResponse<IGame[]>>{
    return this.http.get<IGame[]>(this.API_BASE_PLATFORM + `${platfrom}`, { observe: 'response' });
  }
}
