import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { CvLayoutComponent } from './cv-layout.component';
import { CvHeaderComponent } from './cv-header/cv-header.component';
import { CvBodyComponent } from './cv-body/cv-body.component';
import { CvFooterComponent } from './cv-footer/cv-footer.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { SkillGroupComponent } from './skill-group/skill-group.component';

const routing: Routes = [{
  path: '', component: CvLayoutComponent
}];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);


@NgModule({
  declarations: [CvLayoutComponent, CvHeaderComponent, CvBodyComponent, CvFooterComponent, CvSectionComponent, SkillGroupComponent],
  imports: [
    CommonModule,
    Routing
  ]
})


export class CvLayoutModule { }
