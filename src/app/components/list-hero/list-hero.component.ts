import {Component, OnInit} from '@angular/core';
import {Hero} from '../../data-model/hero';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.scss']
})
export class ListHeroComponent implements OnInit {

  heroes = null;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }


  getHeroes() {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
