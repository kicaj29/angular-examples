import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { MockBackend } from '@angular/http/testing';
import { myMockBackendServiceProvider } from './http-examples/my-mock-backend.service.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [
    MockBackend
    //use myMockBackendServiceProvider if in this sample we want mock http requests
  /*myMockBackendServiceProvider,
    MockBackend,
    BaseRequestOptions*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
