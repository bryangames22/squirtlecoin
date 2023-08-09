import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicModule} from '../public/public.module';
import {ContainerComponent} from './container/container.component';

import { SquirtlePaperRoutingModule } from './squirtle-paper-routing.module';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    SquirtlePaperRoutingModule,
    PublicModule,
  ],
})
export class SquirtlePaperModule { }
