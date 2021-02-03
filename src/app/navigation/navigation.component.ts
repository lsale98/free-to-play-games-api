import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ICategory } from '../models/Category';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  genreMenuOpen: boolean = false;
  platformMenuOpen: boolean = false;
  menuOpen: boolean = false;

  categories: ICategory[] = [
    {
      name: "mmo"
    },
     {
      name: "mmorpg"
    },
    {
      name: "shooter"
    },
    {
      name: "strategy"
    },
    {
      name: "moba"
    },
    {
      name: "card"
    },
    {
      name: "racing"
    },
    {
      name: "sports"
    },
    {
      name: "social"
    },
    {
      name: "fighting"
    },
  ];

  ngOnInit(): void {
  }

  toggleGenreMenu(): void{
    this.genreMenuOpen = !this.genreMenuOpen;
  }

  togglePlatformMenu(): void{
    this.platformMenuOpen = !this.platformMenuOpen
  }

  toggleMenu(): void{
    this.menuOpen = !this.menuOpen;
    this.genreMenuOpen = false;
    this.platformMenuOpen = false;
  }

  scrollTop(): void{
    window.scroll(0, 0);
  }

  
}
