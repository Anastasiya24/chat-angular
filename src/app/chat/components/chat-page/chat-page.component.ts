import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit {
  // TODO GET NAME
  name: string = 'Nastya';

  // TODO GET MESSAGES
  messages = [
    {
      _id: '614362325d69f78bfe860c1a',
      senderId: '6143622e5d69f78bfe860c17',
      text: 'Hi',
      time: '11:26',
      __v: 0,
    },
    {
      _id: '614362365d69f78bfe860c1c',
      senderId: '6143622e5d69f78bfe860c17',
      text: 'Testing.',
      time: '11:26',
      __v: 0,
    },
  ];
  newMessageTest: string = '';
  isValidMessage: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  sendMessage(): void {}
}
