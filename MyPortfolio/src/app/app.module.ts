import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SummaryComponent } from './summary/summary.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { TechnologiesCertificatesComponent } from './technologies-certificates/technologies-certificates.component';
import { ProjectExperienceComponent } from './project-experience/project-experience.component';
import { OrganizationComponent } from './organization/organization.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SummaryComponent,
    ProfileImageComponent,
    TechnologiesCertificatesComponent,
    ProjectExperienceComponent,
    OrganizationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,OrganizationComponent]
})
export class AppModule { }
