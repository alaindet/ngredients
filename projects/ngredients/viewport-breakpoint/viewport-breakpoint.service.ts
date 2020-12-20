import { Injectable, Inject, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription, Observable } from 'rxjs';
import { throttleTime, debounceTime } from 'rxjs/operators';

import {
  NGR_VIEWPORT_BREAKPOINT_CONFIG_TOKEN,
  NGR_VIEWPORT_BREAKPOINT_CONFIG_DEFAULT,
 } from './config';
import { NgrViewportBreakpointConfig } from './models/config';
import { NgrViewportBreakpointBreakpointsSpec } from './models/breakpoints-spec';
import { NgrViewportBreakpointBreakpoint } from './models/breakpoint';
import { NgrViewportBreakpoint } from './models/viewport-breakpoint';

@Injectable()
export class NgrViewportBreakpointService implements OnDestroy {

  private viewportBreakpoint$: BehaviorSubject<NgrViewportBreakpoint>;
  private breakpointsArray: NgrViewportBreakpointBreakpoint[] = [];
  private config: NgrViewportBreakpointConfig = {};
  private sub: Subscription | null = null;

  get viewportBreakpoint(): Observable<NgrViewportBreakpoint> {
    return this.viewportBreakpoint$.asObservable();
  }

  constructor(
    @Inject(NGR_VIEWPORT_BREAKPOINT_CONFIG_TOKEN)
    config: NgrViewportBreakpointConfig,
  ) {
    this.config = {
      ...NGR_VIEWPORT_BREAKPOINT_CONFIG_DEFAULT,
      ...config,
    };
    this.breakpointsArray = this.buildBreakpointsArray(this.config.breakpoints);
    const breakpoint = this.findBreakpoint(window.innerWidth);
    this.viewportBreakpoint$ = new BehaviorSubject<NgrViewportBreakpoint>(breakpoint);
    this.initResizeObservable();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.viewportBreakpoint$.complete();
  }

  private initResizeObservable(): void {

    let resizeObservable = fromEvent(window, 'resize');

    if (this.config.throttle) {
      resizeObservable = resizeObservable.pipe(
        throttleTime(this.config.throttle)
      );
    }

    if (this.config.debounce) {
      resizeObservable = resizeObservable.pipe(
        debounceTime(this.config.debounce)
      );
    }

    this.sub = resizeObservable.subscribe(
      () => this.viewportBreakpoint$.next(
        this.findBreakpoint(window.innerWidth)
      )
    );
  }

  private buildBreakpointsArray(
    spec?: NgrViewportBreakpointBreakpointsSpec | null
  ): NgrViewportBreakpointBreakpoint[] {

    if (!spec || !this?.config.breakpoints) {
      return [];
    }

    let breakpointsArray: NgrViewportBreakpointBreakpoint[] = [];

    for (const breakpoint of Object.keys(spec)) {
      const resolution = Number(breakpoint);
      const value = this.config.breakpoints[resolution];
      const item: NgrViewportBreakpointBreakpoint = { resolution, value };
      breakpointsArray = [...breakpointsArray, item];
    }

    breakpointsArray.sort(
      (
        a: NgrViewportBreakpointBreakpoint,
        b: NgrViewportBreakpointBreakpoint,
      ): number => {
        return a.resolution > b.resolution ? 1 : -1;
      }
    );

    return breakpointsArray;
  }

  private findBreakpoint(viewportWidth: number): NgrViewportBreakpoint {

    for (const breakpoint of this.breakpointsArray) {
      if (viewportWidth < breakpoint.resolution) {
        return {
          viewportWidth,
          breakpoint,
        };
      }
    }

    return {
      viewportWidth,
      breakpoint: null,
    };
  }
}
