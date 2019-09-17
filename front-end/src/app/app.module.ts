import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {MaterialModule} from './material/material.module';
import {BootstrapModule} from './material/bootstrap.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
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

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
