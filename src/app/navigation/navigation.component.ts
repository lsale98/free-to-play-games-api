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
  menuOpen: boolean = false;

  categories: ICategory[] = [
    {
      name: "MMO"
    },
     {
      name: "MMORPG"
    },
    {
      name: "Shooter"
    },
    {
      name: "Strategy"
    },
    {
      name: "Moba"
    },
    {
      name: "Card Games"
    },
    {
      name: "Racing"
    },
    {
      name: "Sports"
    },
    {
      name: "Social"
    },
    {
      name: "Fighting"
    },
  ];

  ngOnInit(): void {
  }

  toggleGenreMenu(): void{
    this.genreMenuOpen = !this.genreMenuOpen;
  }

  toggleMenu(): void{
    this.menuOpen = !this.menuOpen;
    this.genreMenuOpen = false;
  }

  
}
