import { NgrViewportBreakpointBreakpoint } from './breakpoint';

export interface NgrViewportBreakpoint<T> {
  viewportWidth: number;
  breakpoint: NgrViewportBreakpointBreakpoint<T> | null;
}
