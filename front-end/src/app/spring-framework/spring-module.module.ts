import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import {SpringFrameworkComponent} from "./spring-framework.component";
import { SpringOverviewComponent } from './spring-overview/spring-overview.component';

const routing: Routes = [{
  path: '',
  component: SpringFrameworkComponent,
  children: [
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'overview', component: SpringOverviewComponent},
  ]
}];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);


@NgModule({
  declarations: [
    SpringFrameworkComponent,
    SpringOverviewComponent
  ],
  imports: [
    CommonModule,
    Routing
  ]
})


export class SpringModuleModule { }
