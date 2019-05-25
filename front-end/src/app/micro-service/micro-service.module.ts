import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MicroServiceComponent} from "./micro-service.component";
import {MicroServiceOverviewComponent} from "./micro-service-overview/micro-service-overview.component";

const routing: Routes = [{
  path: '',
  component: MicroServiceComponent,
  children: [
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'overview', component: MicroServiceOverviewComponent},
    {path: 'decompose-service', component: MicroServiceOverviewComponent},
  ]
}];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  declarations: [
    MicroServiceComponent,
    MicroServiceOverviewComponent
  ],
  imports: [
    CommonModule,
    Routing
  ]
})
export class MicroServiceModule { }
