import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor() {
    console.log('................. ' + 'inti manager component !!!');
  }

  ngOnInit() {
  }

}
