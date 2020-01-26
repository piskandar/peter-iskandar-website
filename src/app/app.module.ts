import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {applicationRouterModule} from './app-routing.module';
import { RoleWorkExperienceComponent } from './about-me/role-work-experience/role-work-experience.component';
import { CompanyComponent } from './about-me/company/company.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    RoleWorkExperienceComponent,
    CompanyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    applicationRouterModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
