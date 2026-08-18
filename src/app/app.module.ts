import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MovieCardComponent } from './shared/component/movie-card/movie-card.component';
import { MovieDashboardComponent } from './shared/component/movie-dashboard/movie-dashboard.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
      MovieDashboardComponent,

    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
     MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
