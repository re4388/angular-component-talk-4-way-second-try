import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TalkComponent } from './talk/talk.component';
import { Parent1Component } from './talk/parent1/parent1.component';
import { Child1Component } from './talk/parent1/child1/child1.component';
import { Sibling1Component } from './talk/sibling1/sibling1.component';
import { Sibling2Component } from './talk/sibling2/sibling2.component';
import { Parent2Component } from './talk/parent2/parent2.component';
import { Child2Component } from './talk/parent2/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    TalkComponent,
    Parent1Component,
    Child1Component,
    Sibling1Component,
    Sibling2Component,
    Parent2Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
