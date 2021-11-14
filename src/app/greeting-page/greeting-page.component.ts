import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-page',
  templateUrl: './greeting-page.component.html',
  styleUrls: ['./greeting-page.component.css'],
})
export class GreetingPageComponent implements OnInit {
  nickName: string = '';
  isInvalidNickName: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onChangeNickName(e: string): void {
    this.nickName = e;
    this.isInvalidNickName = !e || !e?.trim();
  }

  onSaveNickName(): void {
    // TODO SAVE NICKNAME
    console.log('Save click', this.nickName);
  }
}
