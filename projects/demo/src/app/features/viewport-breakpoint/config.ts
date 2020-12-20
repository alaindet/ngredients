import { NgrViewportBreakpointConfig } from 'ngredients/viewport-breakpoint';

export const NGR_VIEWPORT_BREAKPOINT_CONFIG: NgrViewportBreakpointConfig = {
  debounce: 100,
  breakpoints: {
    300: 'very small',
    500: 'still small',
    800: 'medium small',
    1100: 'definetely not small',
  },
};
