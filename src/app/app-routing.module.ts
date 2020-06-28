import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {HomeComponent} from './home/home.component';
import {MusicComponent} from './music/music.component';
import {CodeComponent} from './code/code.component';
import {PostComponent} from './post/post.component';
import {PostResolverService} from './api/resolver/post-resolver.service';

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'code',
    component: CodeComponent
  },
  {
    path: 'code/:year/:month/:day/:slug',
    component: PostComponent,
    resolve: {
      post: PostResolverService
    }
  }
];

export const applicationRouterModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  enableTracing: false,
  scrollPositionRestoration: 'enabled'
});
