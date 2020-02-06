import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { CommonModule } from '@angular/common';
import { MycarouselComponent } from './components/mycarousel/mycarousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { MycardsComponent } from './components/mycards/mycards.component';


@NgModule({
  declarations: [
    AppComponent,
    MycarouselComponent,
    HeaderComponent,
    MycardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
