import { Component } from '@angular/core';
import { NGREDIENTS_MOTTO } from 'ngredients';

import { FEATURES } from 'projects/demo/src/app/core/data';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  NGREDIENTS_MOTTO = NGREDIENTS_MOTTO;
  FEATURES = FEATURES;
}
