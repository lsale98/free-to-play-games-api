import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByGenreComponent } from './by-genre/by-genre.component';
import { GameComponent } from './game/game.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'genre/:genre', component: ByGenreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
