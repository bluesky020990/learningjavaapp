import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {MaterialModule} from './material/material.module';
import {BootstrapModule} from './material/bootstrap.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {BreadcrumbService} from './services/breadcrumb.service';
import {LibraryService} from './services/library.service';
import {HeroService} from './services/hero.service';
import {BookService} from './services/angular-services/book.service';


import {MenuBarComponent} from './components/decorate/menu-bar/menu-bar.component';
import {FooterBarComponent} from './components/decorate/footer-bar/footer-bar.component';


import {DashboardComponent} from './components/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';


import {EngPronunciationComponent} from './components/resource/english-resource/eng-pronunciation/eng-pronunciation.component';
import {EngResourceComponent} from './components/resource/english-resource/eng-resource/eng-resource.component';
import {EngOverviewComponent} from './components/resource/english-resource/eng-overview/eng-overview.component';
import {EngParagraphComponent} from './components/common/eng-paragraph/eng-paragraph.component';
import {EngWordComponent} from './components/common/eng-word/eng-word.component';
import { EngVocabularyWorkshopComponent } from './components/resource/english-resource/eng-vocabulary-workshop/eng-vocabulary-workshop.component';
import { DesignPatternComponent } from './design-pattern/design-pattern.component';
import { SpringFrameworkComponent } from './spring-framework/spring-framework.component';
import { HibernateComponent } from './hibernate/hibernate.component';
import { JavaComponent } from './java/java.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    // import decorate
    MenuBarComponent,
    FooterBarComponent,

    BreadcrumbComponent,

    DashboardComponent,

    //  ---------------- ENGLISH COMPONENT ---------------- //
    EngParagraphComponent,
    EngWordComponent,
    EngResourceComponent,
    EngVocabularyWorkshopComponent,
    EngPronunciationComponent,
    EngOverviewComponent,

    //  ---------------- ENGLISH COMPONENT ---------------- //
    DesignPatternComponent,
    SpringFrameworkComponent,
    HibernateComponent,
    JavaComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,

    FormsModule,
    MaterialModule,
    BootstrapModule
  ],
  providers: [
    LibraryService,
    HeroService,
    BreadcrumbService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
