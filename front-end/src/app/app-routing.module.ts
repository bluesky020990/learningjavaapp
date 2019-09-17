import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {path: '', loadChildren: 'src/app/manager/manager.module#ManagerModule'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
