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
import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    RoleWorkExperienceComponent,
    CompanyComponent,
    HeaderComponent,
    HomeComponent,
    CodeComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    applicationRouterModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
