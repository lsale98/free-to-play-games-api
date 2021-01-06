import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  games: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void{
    this.apiService.getGames().subscribe((games) => {
      this.games = games;
    })
  }

}
