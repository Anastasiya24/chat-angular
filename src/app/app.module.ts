import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { SharedModule } from './shared/shared.module';
import { ChatModule } from './chat/chat.module';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { GreetingPageComponent } from './greeting-page/greeting-page.component';
import { ServicesModule } from 'src/services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    GreetingPageComponent,
  ],
  imports: [BrowserModule, SharedModule, ChatModule, AppRoutingModule, ServicesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
