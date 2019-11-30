import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ManagerComponent} from "./manager.component";
import {ManageRoutingModule} from "./manager-routing.module";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

import {ManagerDefaultComponent} from './manager-default/manager-default.component';
import {MaterialModule} from "../material/material.module";
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [ManagerComponent, HeaderComponent, FooterComponent, ManagerDefaultComponent, HelpComponent],
  imports: [
    CommonModule,
    RouterModule,
    ManageRoutingModule,
    MaterialModule,
  ]
})
export class ManagerModule {
}
