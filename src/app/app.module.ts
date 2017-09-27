// Import zone-patch-rxjs to make rxjs run in correct zone.
// REF: https://github.com/angular/angular/issues/14316
// This will be fix by next zone.js version.
import 'zone.js/dist/zone-patch-rxjs';

import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GlobalErrorHandler} from './global-error-handler/global-error-handler';
import {HelloComponent} from './hello.component';
import {LoggerService} from './services/logger.service';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: LoggerService, useClass: LoggerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
