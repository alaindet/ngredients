import { NgrViewportBreakpointBreakpointsSpec } from './breakpoints-spec';

export interface NgrViewportBreakpointConfig<T> {
  debounce?: number | null;
  throttle?: number | null;
  breakpoints?: NgrViewportBreakpointBreakpointsSpec<T> | null;
}
