import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import {LibraryService  } from './services/library.service';
import {HeroService} from './services/hero.service';



import { ListHeroComponent } from './components/list-hero/list-hero.component';
import { HeroComponent } from './components/hero/hero.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListHeroComponent,
    HeroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LibraryService, HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
