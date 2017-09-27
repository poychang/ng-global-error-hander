// REF:
// https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c

import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ErrorHandler, Injectable, Injector} from '@angular/core';
import * as StackTrace from 'stacktrace-js';

import {Error} from '../services/error.interface';
import {LoggerService} from '../services/logger.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}
  async handleError(error: any) {
    const logger = this.injector.get(LoggerService);
    const message = error.message ? error.message : error.toString();
    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    // get the stack trace, lets grab the last 10 stacks only
    const stackFrames = await StackTrace.fromError(error);
    const stackString =
        stackFrames.splice(0, 20).map(sf => sf.toString()).join('\r\n');
    // log on the server
    logger.log({message, url, stack: stackString} as Error);
  }
}
