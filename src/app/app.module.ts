import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './ellipsis.pipe';
import { HighlightDirective } from './highlight.directive';
import { DisplayInfoComponent } from './display-info/display-info.component';

@NgModule({
  declarations: [
    AppComponent,
    EllipsisPipe,
    HighlightDirective,
    DisplayInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
