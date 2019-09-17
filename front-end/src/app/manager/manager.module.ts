import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ManagerComponent} from "./manager.component";
import {ManageRoutingModule} from "./manager-routing.module";

@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    RouterModule,
    ManageRoutingModule
  ]
})
export class ManagerModule { }
