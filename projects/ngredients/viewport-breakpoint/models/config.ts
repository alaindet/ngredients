import { NgrViewportBreakpointBreakpointsSpec } from './breakpoints-spec';

export interface NgrViewportBreakpointConfig {
  debounce?: number | null;
  throttle?: number | null;
  breakpoints?: NgrViewportBreakpointBreakpointsSpec | null;
}
