import {Component} from '@angular/core';

import {LoggerService} from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  error$ = this.logger.error$;

  constructor(private logger: LoggerService) {}
}
