import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DesignPatternComponent} from './design-pattern.component';

const routing: Routes = [
  { path: '', component: DesignPatternComponent },
  { path: '', component: DesignPatternComponent }
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  declarations: [
    DesignPatternComponent
  ],
  imports: [
    CommonModule,
    Routing
  ]
})
export class DesignPatternModule { }
