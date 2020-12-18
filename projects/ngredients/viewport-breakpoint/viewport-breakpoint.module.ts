import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

import { NgrViewportBreakpointService } from './viewport-breakpoint.service';
import { NgrViewportBreakpointConfig } from './models/config';
import { NGR_VIEWPORT_BREAKPOINT_CONFIG_TOKEN, NGR_VIEWPORT_BREAKPOINT_CONFIG_DEFAULT } from './config';

@NgModule({
  providers: [
    NgrViewportBreakpointService,
    {
      provide: NGR_VIEWPORT_BREAKPOINT_CONFIG_TOKEN,
      useValue: NGR_VIEWPORT_BREAKPOINT_CONFIG_DEFAULT,
    },
  ],
})
export class NgrViewportBreakpointModule {

  public static forRoot<T>(
    config?: NgrViewportBreakpointConfig<T>
  ): ModuleWithProviders<NgrViewportBreakpointModule> {
    return {
      ngModule: NgrViewportBreakpointModule,
      providers: [
        {
          provide: NGR_VIEWPORT_BREAKPOINT_CONFIG_TOKEN,
          useValue: config ? config : NGR_VIEWPORT_BREAKPOINT_CONFIG_DEFAULT
        }
      ],
    }
  }

  // Avoid multiple imports of this NgModule
  public constructor(
    @Optional() @SkipSelf() parentModule: NgrViewportBreakpointModule
  ) {
    if (parentModule) {
      throw new Error('NgrViewportBreakpointModule has already been imported.');
    }
  }
}
