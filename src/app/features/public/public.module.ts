import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ContainerComponent} from './container/container.component';

import { PublicRoutingModule } from './public-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { TokenomicsComponent } from './components/tokenomics/tokenomics.component';
import { HomeComponent } from './components/Home/home.component';
import { HowBuyComponent } from './components/how-buy/how-buy.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    RoadmapComponent,
    TokenomicsComponent,
    HomeComponent,
    HowBuyComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    NgOptimizedImage
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HowBuyComponent,
    TokenomicsComponent,
    RoadmapComponent,
    ContainerComponent
  ],
})
export class PublicModule { }
