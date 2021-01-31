import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IGame } from '../models/Game';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  games: IGame[] = [];
  randomGames: IGame[] = [];
  gamesId: Array<Number> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getGames();
   
  }

  getGames(): void{
    this.apiService.getGames().subscribe((res) => {
      for (const data of res.body) {
        this.games.push(data);
        this.gamesId.push(data.id);
      }
    })
  }
 
}