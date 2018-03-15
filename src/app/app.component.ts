import { Component } from '@angular/core';
import { LoggerService } from '@my/logger-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(logger: LoggerService) {
    logger.debug('Hello World!');
    logger.log('Application started!');
  }
}
