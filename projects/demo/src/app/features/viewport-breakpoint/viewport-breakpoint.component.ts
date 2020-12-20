import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  NgrViewportBreakpointService,
  NgrViewportBreakpoint,
} from 'ngredients/viewport-breakpoint';

@Component({
  template: `
    <h1>ngredients/viewport-breakpoint</h1>
    <ul>
      <li>
        Try to resize the window and check the console
      </li>
      <li>
        Check <code>viewport-breakpoint.module.ts</code> to see how to configure
        <code>NgrViewportBreakpointModule</code>, or leave the default config
      </li>
    </ul>
    <ng-container
      *ngIf="(
        viewportBreakpointService.viewportBreakpoint | async
      ) as viewportBreakpoint"
    >
      <pre>{{ viewportBreakpoint | json }}</pre>
    </ng-container>
    <a routerLink="/">Home</a>
  `
})
export class DemoNgrViewportBreakpointComponent implements OnInit, OnDestroy {

  sub: Subscription | null = null;

  constructor(
    public viewportBreakpointService: NgrViewportBreakpointService,
  ) {}

  ngOnInit(): void {
    this.sub = this.viewportBreakpointService.viewportBreakpoint.subscribe(
      (viewportBreakpoint: NgrViewportBreakpoint): void => {
        console.log('ngredients/viewport-breakpoint', viewportBreakpoint);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
