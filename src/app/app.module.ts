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


import {AngularResourcesComponent} from './components/resource/angular-resources/angular-resources.component';
import {AngularBasicComponent} from './components/resource/angular-resources/angular-basic/angular-basic.component';
import {AngularBoostrapComponent} from './components/resource/angular-resources/angular-boostrap/angular-boostrap.component';
import {NgBootstrapComponentComponent} from './components/resource/angular-resources/ng-bootstrap-component/ng-bootstrap-component.component';
import {AngularRouterComponent} from './components/resource/angular-resources/angular-router/angular-router.component';
import {AngularRouterAdvanceComponent} from './components/resource/angular-resources/angular-router-advance/angular-router-advance.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';


import {AngularCompComponent} from './components/resource/angular-resources/angular-comp/angular-comp.component';
import {AngularInputComponent} from './components/resource/angular-resources/angular-input/angular-input.component';
import {IncrementalDomInAngularComponent} from './components/resource/angular-resources/incremental-dom-in-angular/incremental-dom-in-angular.component';
import {AngularServiceComponent} from './components/resource/angular-resources/angular-service/angular-service.component';
import {AngularDataArchitectureComponent} from './components/resource/angular-resources/angular-data-architecture/angular-data-architecture.component';
import {AngularFormComponent} from './components/resource/angular-resources/angular-form/angular-form.component';
import {AngularBookComponent} from './components/resource/angular-resources/angular-book/angular-book.component';
import {AngularTestingComponent} from './components/resource/angular-resources/angular-testing/angular-testing.component';
import {AngularCoreComponent} from './components/resource/angular-resources/angular-core/angular-core.component';
import {AngularBookExampleComponent} from './components/resource/angular-resources/examples/angular-book-example/angular-book-example.component';


import {AngularListBookExampleComponent} from './components/resource/angular-resources/examples/angular-list-book-example/angular-list-book-example.component';
import {EngPronunciationComponent} from './components/resource/english-resource/eng-pronunciation/eng-pronunciation.component';
import {EngResourceComponent} from './components/resource/english-resource/eng-resource/eng-resource.component';
import {EngOverviewComponent} from './components/resource/english-resource/eng-overview/eng-overview.component';
import {EngParagraphComponent} from './components/common/eng-paragraph/eng-paragraph.component';
import {EngWordComponent} from './components/common/eng-word/eng-word.component';
import { EngVocabularyWorkshopComponent } from './components/resource/english-resource/eng-vocabulary-workshop/eng-vocabulary-workshop.component';
import { RaphaelDirective } from './directives/raphael.directive';


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
    EngPronunciationComponent,
    EngOverviewComponent,


    //  ---------------- ENGLISH COMPONENT ---------------- //
    AngularResourcesComponent,
    AngularBoostrapComponent,


    AngularBasicComponent,
    AngularCompComponent,
    AngularInputComponent,

    NgBootstrapComponentComponent,
    AngularRouterComponent,
    AngularRouterAdvanceComponent,
    IncrementalDomInAngularComponent,
    AngularServiceComponent,
    AngularDataArchitectureComponent,
    AngularFormComponent,
    AngularBookComponent,
    AngularTestingComponent,
    AngularCoreComponent,
    AngularBookExampleComponent,
    AngularListBookExampleComponent,
    EngVocabularyWorkshopComponent,
    RaphaelDirective,


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
    LibraryService,
    HeroService,
    BreadcrumbService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
