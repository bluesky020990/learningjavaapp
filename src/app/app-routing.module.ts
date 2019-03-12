import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListHeroComponent} from './components/list-hero/list-hero.component';
import {HeroComponent} from './components/hero/hero.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroComponent},
  {path: 'heroes', component: ListHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
