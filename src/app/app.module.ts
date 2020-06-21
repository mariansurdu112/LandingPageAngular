import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from '@progress/kendo-angular-editor';
import { AuthInterceptor } from './admin/auth.interceptor';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    LanguageTranslationModule,
    HttpClientModule,
    EditorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useFactory(router: Router) {
      return new AuthInterceptor(router);
    },
    multi: true,
    deps: [Router]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
