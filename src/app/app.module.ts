import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { MockBackend } from '@angular/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function NgxHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'ngx-translations/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    routing,
    //in every lazy loaded module ngx translate requires importing translate module TranslateModule.forChile
    //but this requirement is because of angular lazy loading mechanism
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: NgxHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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
