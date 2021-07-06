import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { DescriptionComponent } from '../description/description.component';
import { PricingComponent } from '../pricing/pricing.component';
import { GetstartComponent } from '../getstart/getstart.component';
import { BlogComponent } from '../blog/blog.component';
import { FeatureComponent } from '../feature/feature.component';
import { ClientComponent } from '../client/client.component';
import { ContactComponent } from '../contact/contact.component';
import { TestiComponent } from '../testi/testi.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ParticlesModule } from 'angular-particle';

import { Index1Component } from './index1/index1.component';


@NgModule({
  declarations: [Index1Component, ServicesComponent, AboutComponent, DescriptionComponent, PricingComponent,
    GetstartComponent, BlogComponent, ContactComponent, TestiComponent,
    ClientComponent,FeatureComponent],
  imports: [
    CommonModule,
    NgxYoutubePlayerModule.forRoot(),
    HomeRoutingModule,
    ParticlesModule
  ]
})
export class HomeModule { }

