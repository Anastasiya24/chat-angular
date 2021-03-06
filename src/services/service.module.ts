import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { MessagesService } from './messages.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, CommonModule],
  providers: [ApiService, UserService, MessagesService],
  declarations: [],
})
export class ServicesModule {}
