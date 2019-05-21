import { Injectable } from '@angular/core';
import {HeroService} from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private heroService: HeroService) { }
}
