import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {MaterialModule} from './material/material.module';
import {BootstrapModule} from './material/bootstrap.module';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';

import {LibraryService} from './services/library.service';
import {HeroService} from './services/hero.service';


import {MenuBarComponent} from './components/decorate/menu-bar/menu-bar.component';
import {FooterBarComponent} from './components/decorate/footer-bar/footer-bar.component';


import {ListHeroComponent} from './components/list-hero/list-hero.component';
import {HeroComponent} from './components/hero/hero.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {Lesson01Component} from './components/lesson/lesson01/lesson01.component';
import {Lesson02Component} from './components/lesson/lesson02/lesson02.component';
import {Lesson03Component} from './components/lesson/lesson03/lesson03.component';
import {Lesson04Component} from './components/lesson/lesson04/lesson04.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularResourcesComponent} from './components/resource/angular-resources/angular-resources.component';
import {AngularRouterComponent} from './components/resource/angular-resources/angular-router/angular-router.component';
import {AngularRouterAdvanceComponent} from './components/resource/angular-resources/angular-router-advance/angular-router-advance.component';
import {AngularBoostrapComponent} from './components/resource/angular-resources/angular-boostrap/angular-boostrap.component';
import {NgBootstrapComponentComponent} from './components/resource/angular-resources/ng-bootstrap-component/ng-bootstrap-component.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';


import {BreadcrumbService} from './services/breadcrumb.service';


@NgModule({
  declarations: [
    AppComponent,

    // import decorate
    MenuBarComponent,
    FooterBarComponent,


    NavigationComponent,
    BreadcrumbComponent,


    ListHeroComponent,
    HeroComponent,
    DashboardComponent,
    Lesson01Component,
    Lesson02Component,
    Lesson03Component,
    Lesson04Component,


    AngularResourcesComponent,
    AngularBoostrapComponent,


    AngularRouterComponent,
    AngularRouterAdvanceComponent,
    NgBootstrapComponentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    MaterialModule,
    BootstrapModule,

    BrowserAnimationsModule
  ],
  providers: [
    LibraryService, HeroService, BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
