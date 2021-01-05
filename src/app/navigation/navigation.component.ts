import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  duplicateCategories:Array<Category>=[]; 

  categories: Array<Category>=[]; 
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCategories();
    //console.log(this.categories);
    console.log(this.duplicateCategories);
    
  }

  getCategories(): void {
    this.apiService.getGames().subscribe(categories => {
      for (const category of (categories as any)) {
        this.duplicateCategories.push({
          name: category.genre
        });
      }
    });  
    
   
    
  }

}
