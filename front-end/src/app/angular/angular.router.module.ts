import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { LazyLoaderComponent } from './lazy-loader/lazy-loader.component';
import {AngularComponent} from './angular.component';
import {AngularServiceComponent} from './angular-service/angular-service.component';
import {AngularDataArchitectureComponent} from './angular-data-architecture/angular-data-architecture.component';
import {AngularBasicComponent} from './angular-basic/angular-basic.component';
import {AngularTestingComponent} from './angular-testing/angular-testing.component';
import {AngularBoostrapComponent} from './angular-boostrap/angular-boostrap.component';
import {NgBootstrapComponentComponent} from './ng-bootstrap-component/ng-bootstrap-component.component';
import {AngularRouterComponent} from './angular-router/angular-router.component';
import {AngularCoreComponent} from './angular-core/angular-core.component';
import {AngularCompComponent} from './angular-comp/angular-comp.component';
import {AngularInputComponent} from './angular-input/angular-input.component';
import {AngularFormComponent} from './angular-form/angular-form.component';
import {IncrementalDomInAngularComponent} from './incremental-dom-in-angular/incremental-dom-in-angular.component';
import {AngularHelpComponent} from "./angular-help/angular-help.component";
import {AngularTutorialComponent} from "./angular-tutorial/angular-tutorial.component";

const routes: Routes = [{
  path: '',
  component: AngularComponent,
  children: [
    {path: '', redirectTo: 'tutorial', pathMatch: 'full' },
    {path: 'tutorial', component: AngularTutorialComponent },
    {path: 'overview', component: AngularCoreComponent},
    {path: 'core', component: AngularCoreComponent},
    {path: 'basic', component: AngularBasicComponent},
    {
      path: 'component',
      children: [
        {path: '', component: AngularCompComponent},
        {path: 'view-person/:id', component: AngularInputComponent}
      ]
    },
    {path: 'service', component: AngularServiceComponent},
    {path: 'bootstrap', component: AngularBoostrapComponent},
    {path: 'ng-bootstrap', component: NgBootstrapComponentComponent},
    {path: 'form', component: AngularFormComponent},
    {path: 'router', component: AngularRouterComponent},
    {path: 'ng-lazy-loader', component: LazyLoaderComponent},

    {path: 'ng-dom', component: IncrementalDomInAngularComponent},
    {path: 'data-architecture', component: AngularDataArchitectureComponent},
    {path: 'testing', component: AngularTestingComponent},
    {path: 'ng-help', component: AngularHelpComponent},
    { path: '**', redirectTo: 'overview' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRouterModule { }
