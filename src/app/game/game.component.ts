import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from '../models/Game';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  currentId: number;
  currentGenre: String;
  game: IGame;
  games: IGame[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentId = +params.get('id');
    });    
    this.getGame();
  }

  getGame(): void{
    this.apiService.getGame(this.currentId).toPromise()
      .then(res => {
        this.game = res.body;
      })
      .then(() => {
         this.currentGenre = this.game.genre;
      })
      .then(() => {
        this.getGamesGenres();
    })
  }

  getGamesGenres(): void{
    this.apiService.getGamesGenre(this.currentGenre).subscribe(res => {
      for (const data of res.body) {
        if (data.id !== this.currentId) {
          this.games.push(data);
        }
      }
    });
  }
}
