import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

// import {EngResourceComponent} from './components/resource/english-resource/eng-resource/eng-resource.component';
// import {EngPronunciationComponent} from './components/resource/english-resource/eng-pronunciation/eng-pronunciation.component';
// import {EngOverviewComponent} from './components/resource/english-resource/eng-overview/eng-overview.component';
// import {EngVocabularyWorkshopComponent} from './components/resource/english-resource/eng-vocabulary-workshop/eng-vocabulary-workshop.component';
// import {SpringFrameworkComponent} from './spring-framework/spring-framework.component';
// import {HibernateComponent} from './hibernate/hibernate.component';

const routes: Routes = [
  { path: '', redirectTo: '/angular', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'angular', loadChildren: './angular/angular.module#AngularModule' },
  { path: 'java', loadChildren: './java/java.module#JavaModule'},
];

// {
//   path: 'english', component: EngResourceComponent,
//   children: [
//     {path: '', redirectTo: 'overview', pathMatch: 'full'},
//     {path: 'overview', component: EngOverviewComponent},
//     {path: 'pronunciation', component: EngPronunciationComponent},
//     {path: 'vocabulary-workshop', component: EngVocabularyWorkshopComponent},
//   ]
// },
// { path: 'design-pattern', loadChildren: './design-pattern/design-pattern.module#DesignPatternModule' },
// { path: 'spring-framework', component: SpringFrameworkComponent},
// { path: 'hibernate', component: HibernateComponent}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
