import { Component } from '@angular/core';
import { NGREDIENTS_MOTTO } from 'ngredients';

import { FEATURES } from 'projects/demo/src/app/core/data';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  NGREDIENTS_MOTTO = NGREDIENTS_MOTTO;
  FEATURES = FEATURES;
}
