import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IGame } from '../models/Game';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  currentId: Number;
  currentGenre: string;
  game: IGame;
  games: IGame[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private location:Location, private router: Router) {
    this.location.onUrlChange(path => {
      window.location.reload();
     });
   
   }

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
        if (this.game.genre == "Card Game") {
           this.currentGenre = "card"
        }
        if (this.game.genre == "Battle Royale") {
          this.currentGenre = "battle-royale";
        }
        else {
          this.currentGenre = this.game.genre;
        }
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
