import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app/app.component';
import {PublicModule} from "./features/public/public.module";
import { SquirtlePaperModule } from './features/squirtle-paper/squirtle-paper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PublicModule,
    AppRoutingModule,
    SquirtlePaperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
