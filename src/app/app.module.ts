import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { Client1Component } from './components/client1/client1.component';
import { HeaderComponent } from './components/header/header.component';
import { TypingAnimationModule } from 'angular-typing-animation';
import {NgsRevealModule} from 'ngx-scrollreveal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent,
    AboutComponent,
    Client1Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypingAnimationModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }