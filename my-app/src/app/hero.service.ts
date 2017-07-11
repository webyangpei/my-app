import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()


export class HeroService { //HeroService可以从任何地方获取Hero数据 —— Web服务、本地存储或模拟数据源。 从组件中移除数据访问逻辑意味着你可以随时更改这些实现方式，而不影响需要这些英雄数据的组件。
  
  getHeroes():Promise<Hero[]>{
     return Promise.resolve(HEROES);
  }
}