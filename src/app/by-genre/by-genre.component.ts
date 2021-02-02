import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IGame } from '../models/Game';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-by-genre',
  templateUrl: './by-genre.component.html',
  styleUrls: ['./by-genre.component.scss']
})
export class ByGenreComponent implements OnInit {

  currentGenre: String;

  games: IGame[] = [];
  
  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location) { 
    this.location.onUrlChange(path => {
      window.location.reload();
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentGenre = params.get('genre');
    });

    this.getGamesGenres();
  }

  getGamesGenres(): void{
    this.apiService.getGamesGenre(this.currentGenre).subscribe(res => {
      for (const data of res.body) {
        this.games.push(data);
      }
    });
  }

}
