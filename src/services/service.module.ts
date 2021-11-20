import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, CommonModule],
  providers: [ApiService, UserService],
  declarations: [],
})
export class ServicesModule {}
