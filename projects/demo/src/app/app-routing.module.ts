import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'projects/demo/src/app/core/features/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'viewport-breakpoint',
    loadChildren: () => import(
      './features/viewport-breakpoint/viewport-breakpoint.module'
    ).then(m => m.DemoNgrViewportBreakpointModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
