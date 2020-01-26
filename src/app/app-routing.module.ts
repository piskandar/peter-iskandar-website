import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';

const appRoutes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
];

export const applicationRouterModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  enableTracing: false,
  scrollPositionRestoration: 'enabled'
});
