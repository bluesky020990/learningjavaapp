import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MicroServiceComponent} from "./micro-service.component";
import {MicroServiceOverviewComponent} from "./micro-service-overview/micro-service-overview.component";
import { DecomposeServiceComponent } from './decompose-service/decompose-service.component';

const routing: Routes = [{
  path: '',
  component: MicroServiceComponent,
  children: [
    // {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'overview', component: MicroServiceOverviewComponent},
    {path: 'decompose-service', component: DecomposeServiceComponent},
  ]
}];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  declarations: [
    MicroServiceComponent,
    MicroServiceOverviewComponent,
    DecomposeServiceComponent
  ],
  imports: [
    CommonModule,
    Routing
  ]
})
export class MicroServiceModule { }
