import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgBootstrapComponentComponent} from './ng-bootstrap-component/ng-bootstrap-component.component';
import {IncrementalDomInAngularComponent} from './incremental-dom-in-angular/incremental-dom-in-angular.component';
import {AngularBookExampleComponent} from './examples/angular-book-example/angular-book-example.component';
import {AngularListBookExampleComponent} from './examples/angular-list-book-example/angular-list-book-example.component';
import { LazyLoaderComponent } from './lazy-loader/lazy-loader.component';

import {RaphaelDirective} from '../directives/raphael.directive';
import {AngularComponent} from './angular.component';
import {AngularRouterModule} from './angular.router.module';

import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {BootstrapModule} from '../material/bootstrap.module';
import {AngularBoostrapComponent} from './angular-boostrap/angular-boostrap.component';
import {AngularInputComponent} from './angular-input/angular-input.component';
import {AngularBasicComponent} from './angular-basic/angular-basic.component';
import {AngularCompComponent} from './angular-comp/angular-comp.component';
import {AngularRouterComponent} from './angular-router/angular-router.component';
import {AngularRouterAdvanceComponent} from './angular-router-advance/angular-router-advance.component';
import {AngularServiceComponent} from './angular-service/angular-service.component';
import {AngularDataArchitectureComponent} from './angular-data-architecture/angular-data-architecture.component';
import {AngularFormComponent} from './angular-form/angular-form.component';
import {AngularBookComponent} from './angular-book/angular-book.component';
import {AngularCoreComponent} from './angular-core/angular-core.component';
import {AngularTestingComponent} from './angular-testing/angular-testing.component';


@NgModule({
  entryComponents: [
  ],
  declarations: [
    AngularComponent,
    AngularBoostrapComponent,

    AngularBasicComponent,
    AngularCompComponent,
    AngularInputComponent,

    NgBootstrapComponentComponent,
    AngularRouterComponent,
    AngularRouterAdvanceComponent,
    IncrementalDomInAngularComponent,
    AngularServiceComponent,
    AngularDataArchitectureComponent,
    AngularFormComponent,
    AngularBookComponent,
    AngularTestingComponent,
    AngularCoreComponent,
    AngularBookExampleComponent,
    AngularListBookExampleComponent,
    RaphaelDirective,
    AngularComponent,
    LazyLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularRouterModule,

    FormsModule,
    MaterialModule,
    BootstrapModule
  ]
})
export class AngularModule { }
