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

// TODO
// https://stackoverflow.com/a/62733441/5653974
// type GetBreakpointType<Br extends NgrViewportBreakpointConfig<any>> = Br extends NgrViewportBreakpointConfig<infer T> ? T : unknown;

@Injectable()
export class NgrViewportBreakpointService implements OnDestroy {

  private viewportSize$: BehaviorSubject<NgrViewportBreakpoint<unknown>>;
  private breakpointsArray: NgrViewportBreakpointBreakpoint<unknown>[] = [];
  private config: NgrViewportBreakpointConfig<unknown> = NGR_VIEWPORT_BREAKPOINT_CONFIG_DEFAULT;
  private sub: Subscription | null = null;
  private breakpointType: unknown;

  get viewportSize(): Observable<NgrViewportBreakpoint<unknown>> {
    return this.viewportSize$.asObservable();
  }

  constructor(
    @Inject(NGR_VIEWPORT_BREAKPOINT_CONFIG_TOKEN)
    config: NgrViewportBreakpointConfig<unknown>,
  ) {

    this.config = { ...this.config, ...config };
    this.breakpointsArray = this.buildBreakpointsArray(this.config?.breakpoints);
    this.viewportSize$ = new BehaviorSubject<NgrViewportBreakpoint<unknown>>(
      this.findBreakpoint(window.innerWidth)
    );
    this.initResizeObservable();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.viewportSize$.complete();
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
      () => this.viewportSize$.next(
        this.findBreakpoint(window.innerWidth)
      )
    );
  }

  private buildBreakpointsArray(
    spec?: NgrViewportBreakpointBreakpointsSpec<unknown> | null
  ): NgrViewportBreakpointBreakpoint[] {

    if (!spec || !this.config.breakpoints) {
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
      (a: NgrViewportBreakpointBreakpoint, b: NgrViewportBreakpointBreakpoint): number => {
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
