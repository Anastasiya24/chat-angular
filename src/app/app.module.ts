import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { SharedModule } from './shared/shared.module';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { GreetingPageComponent } from './greeting-page/greeting-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    ChatPageComponent,
    GreetingPageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
