import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice-1/exercice-1.component';
import { ColorDirective }  from './exercice-1/shared/color.directive';
import { Color2Directive } from './exercice-1/shared/color2.directive';


@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    ColorDirective,
    Color2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
