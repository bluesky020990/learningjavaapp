import { Injectable } from '@angular/core';


import {HEROES} from '../sample-data/sample.data';
import {Observable, of} from 'rxjs';
import {Hero} from '../data-model/hero';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }
}
