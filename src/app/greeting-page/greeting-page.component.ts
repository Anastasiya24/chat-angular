import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-page',
  templateUrl: './greeting-page.component.html',
  styleUrls: ['./greeting-page.component.css'],
})
export class GreetingPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSaveNickName() {
    console.log('Save click');
  }
}
