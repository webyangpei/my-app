import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import { OnInit } from '@angular/core'; //生命周期钩子

// export class Hero {
// 	id:number;
// 	name:string;
// }

// const HEROES: Array<Hero> = [  //数组泛型

// // const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit{
  
  providers: [HeroService];
  heroes: Hero[];
  title  = 'hello world';
  selectedHero:Hero = {
	  id: 1,
	  name: 'yp'
  }; 

  constructor(private heroService: HeroService) { };
  getHeroes():void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
     this.selectedHero = hero;
  }
}
