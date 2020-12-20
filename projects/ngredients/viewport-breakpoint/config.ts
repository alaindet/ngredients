import { InjectionToken } from '@angular/core';

import { NgrViewportBreakpointConfig } from './models/config';

export const NGR_VIEWPORT_BREAKPOINT_CONFIG_TOKEN = (
  new InjectionToken<NgrViewportBreakpointConfig>(
    'The configuration object for NgrViewportBreakpoint'
  )
);

export const NGR_VIEWPORT_BREAKPOINT_CONFIG_DEFAULT: NgrViewportBreakpointConfig = {
  throttle: null,
  debounce: null,
  breakpoints: {
    320: 's',
    768: 'm',
    1024: 'l',
    1280: 'xl',
  }
};
