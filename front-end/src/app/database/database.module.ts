import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseComponent } from './database.component';
import {RouterModule, Routes} from "@angular/router";
import { OverviewComponent } from './overview/overview.component';
import { NonSQLComponent } from './non-sql/non-sql.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {BootstrapModule} from "../material/bootstrap.module";
import {CommonLessonModule} from "../common/common.module";


const routing: Routes = [{
  path: '',
  component: DatabaseComponent,
  children: [
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'overview', component: OverviewComponent},
    {path: 'non-sql', component: NonSQLComponent},
  ]
}];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  declarations: [
    DatabaseComponent,
    OverviewComponent,
    NonSQLComponent],
  imports: [
    CommonModule,
    Routing,

    FormsModule,
    MaterialModule,
    BootstrapModule,
    CommonLessonModule
  ]
})
export class DatabaseModule { }
