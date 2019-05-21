import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  toggleMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  toggleMenuBar() {
    this.toggleMenu = ! this.toggleMenu;
  }
}
