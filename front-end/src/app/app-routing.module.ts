import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CustomPreloadStrategyService} from './custom-preload-strategy.service';

import {EngResourceComponent} from './components/resource/english-resource/eng-resource/eng-resource.component';
import {EngPronunciationComponent} from './components/resource/english-resource/eng-pronunciation/eng-pronunciation.component';
import {EngOverviewComponent} from './components/resource/english-resource/eng-overview/eng-overview.component';
import {EngVocabularyWorkshopComponent} from './components/resource/english-resource/eng-vocabulary-workshop/eng-vocabulary-workshop.component';
import {SpringFrameworkComponent} from './spring-framework/spring-framework.component';
import {HibernateComponent} from './hibernate/hibernate.component';

const routes: Routes = [
  { path: '', redirectTo: '/angular', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'angular',         loadChildren: './angular/angular.module#AngularModule',                        data: {preload: true,  delay: true} },
  { path: 'java',            loadChildren: './java/java.module#JavaModule',                                 data: {preload: false, delay: false} },
  { path: 'design-pattern',  loadChildren: './design-pattern/design-pattern.module#DesignPatternModule',    data: {preload: false, delay: true}},
  { path: 'micro-service',   loadChildren: './micro-service/micro-service.module#MicroServiceModule',       data: {preload: true,  delay: true}},
  { path: 'spring-framework', component: SpringFrameworkComponent},
  { path: 'hibernate', component: HibernateComponent},

  { path: 'english', component: EngResourceComponent, children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: EngOverviewComponent},
      {path: 'pronunciation', component: EngPronunciationComponent},
      {path: 'vocabulary-workshop', component: EngVocabularyWorkshopComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadStrategyService })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
