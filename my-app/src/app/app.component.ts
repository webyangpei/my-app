import { Component } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { HeroesComponent }   from './heroes.component';


RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/dashboard">dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}