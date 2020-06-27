import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {applicationRouterModule} from './app-routing.module';
import {RoleWorkExperienceComponent} from './about-me/role-work-experience/role-work-experience.component';
import {CompanyComponent} from './about-me/company/company.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {CodeComponent} from './code/code.component';
import {MusicComponent} from './music/music.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {PiskandarService} from './api/piskandar.service';
import {PISKANDAR_API} from './api/piskandar-api';
import { PageControlComponent } from './page-control/page-control.component';
import { PostComponent } from './post/post.component';
import {PostResolverService} from './api/resolver/post-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    RoleWorkExperienceComponent,
    CompanyComponent,
    HeaderComponent,
    HomeComponent,
    CodeComponent,
    MusicComponent,
    PageControlComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    applicationRouterModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    PiskandarService,
    {provide: PISKANDAR_API, useClass: HttpClient},
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    PostResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
