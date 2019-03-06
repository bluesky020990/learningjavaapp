import { Component, OnInit } from '@angular/core';
import {Hero} from "../../data-model/hero";
import {HEROES} from "../../sample-data/sample.data";

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.scss']
})
export class ListHeroComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
