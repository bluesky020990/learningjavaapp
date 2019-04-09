import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPerson} from '../angular-comp/angular-comp.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-angular-input',
  templateUrl: './angular-input.component.html',
  styleUrls: ['./angular-input.component.scss']
})
export class AngularInputComponent implements OnInit {
  @Input() person: IPerson;
  // @Input() personId: number;

  @Output('selectPerson') select: EventEmitter<string> = new EventEmitter<string>();

  private personId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.personId = +this.route.snapshot.paramMap.get('id');
  }

  selectThePerson() {
    this.select.emit(this.person.name + ' with name ' + this.person.age);
  }

}
