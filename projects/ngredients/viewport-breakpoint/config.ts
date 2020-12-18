import { InjectionToken } from '@angular/core';

import { NgrViewportBreakpointConfig } from './models/config';

export const NGR_VIEWPORT_BREAKPOINT_CONFIG_TOKEN = (
  new InjectionToken<NgrViewportBreakpointConfig<any>>(
    'The configuration object for NgViewportSize'
  )
);

export const NGR_VIEWPORT_BREAKPOINT_CONFIG_DEFAULT: NgrViewportBreakpointConfig<{
  [resoution: number]: string
}> = {
  throttle: null,
  debounce: null,
  breakpoints: {
    320: 's',
    768: 'm',
    1024: 'l',
    1280: 'xl',
  }
};
