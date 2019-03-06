import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../data-model/hero";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;


  constructor() { }

  ngOnInit() {
  }

}
