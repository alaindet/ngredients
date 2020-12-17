import { Component } from '@angular/core';

import { NGREDIENTS_MOTTO } from 'ngredients';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  motto = NGREDIENTS_MOTTO;
}
