import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgrViewportBreakpointModule } from 'ngredients/viewport-breakpoint';

import { NGR_VIEWPORT_BREAKPOINT_CONFIG } from './config';
import { DemoNgrViewportBreakpointComponent } from './viewport-breakpoint.component';

const routes: Routes = [
  { path: '', component: DemoNgrViewportBreakpointComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // NgrViewportBreakpointModule, // Without default config
    NgrViewportBreakpointModule.forRoot(NGR_VIEWPORT_BREAKPOINT_CONFIG),
  ],
  declarations: [DemoNgrViewportBreakpointComponent],
  bootstrap: [DemoNgrViewportBreakpointComponent],
})
export class DemoNgrViewportBreakpointModule {}
