import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {BootstrapModule} from '../material/bootstrap.module';
import {LessonComponent} from "./lesson/lesson.component";
import { LessonMenuComponent } from './lesson-menu/lesson-menu.component';

@NgModule({
  entryComponents: [
  ],
  declarations: [
    LessonComponent,
    LessonMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    BootstrapModule
  ], exports: [LessonComponent, LessonMenuComponent]
})
export class CommonLessonModule { }
