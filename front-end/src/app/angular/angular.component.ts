import {Component} from '@angular/core';
import {AngularService} from "./angular.service";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent{
  constructor(private angularService: AngularService) {

  }

}
