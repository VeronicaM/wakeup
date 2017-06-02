import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { Router } from '@angular/router';

import { httpFactory } from './config/http.factory';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WakeupCommonModule } from './common/common.module';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginModule } from './pages/login/login.module';
import { QuestionSetsComponent } from './pages/question-sets/question-sets.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    QuestionSetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    WakeupCommonModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [
    {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions, Router]
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
