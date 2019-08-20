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

import { HibernateComponent } from './hibernate/hibernate.component';
import {RouterModule} from '@angular/router';
import {CustomPreloadStrategyService} from './custom-preload-strategy.service';



@NgModule({
  declarations: [
    AppComponent,
    // import decorate
    MenuBarComponent,
    FooterBarComponent,

    BreadcrumbComponent,

    DashboardComponent,

    EngParagraphComponent,
    EngWordComponent,
    EngResourceComponent,
    EngVocabularyWorkshopComponent,
    EngPronunciationComponent,
    EngOverviewComponent,

    HibernateComponent,
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
    BookService,
    CustomPreloadStrategyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
