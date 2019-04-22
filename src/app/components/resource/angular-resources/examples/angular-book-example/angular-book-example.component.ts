import {Component, Input, OnInit} from '@angular/core';
import {AngularBook} from '../../../../../data-model/angular-book';

@Component({
  selector: 'app-angular-book-example',
  templateUrl: './angular-book-example.component.html',
  styleUrls: ['./angular-book-example.component.scss']
})
export class AngularBookExampleComponent implements OnInit {
  @Input() book: AngularBook;

  constructor() {
  }

  ngOnInit() {

  }

}
