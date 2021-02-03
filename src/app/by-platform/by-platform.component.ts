import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IGame } from '../models/Game';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-by-platform',
  templateUrl: './by-platform.component.html',
  styleUrls: ['./by-platform.component.scss']
})
export class ByPlatformComponent implements OnInit {

  currentPlatform: string;

  games: IGame[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location) { 
    this.location.onUrlChange(path => {
      window.location.reload();
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentPlatform = params.get('platform');
    });

    this.getGamesPlatform();
  }

  getGamesPlatform(): void{
    this.apiService.getGamesPlatform(this.currentPlatform).subscribe(res => {
      for (const data of res.body) {
        this.games.push(data);
      }
    });
  }

}
