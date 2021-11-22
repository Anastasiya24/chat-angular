import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/services/messages.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit {
  constructor(private userService: UserService, private messageService: MessagesService) {}

  name: string = '';
  messages: any = [];

  newMessageTest: string = '';
  isInvalidMessage: boolean = true;

  ngOnInit(): void {
    // get user name
    this.userService.get().subscribe((data) => (this.name = data));
    this.messageService.get().subscribe((data) => (this.messages = data));

    // load new user name
    this.userService.userName.subscribe((str) => {
      this.name = str;
    });

    this.messageService.messagesList.subscribe((item) => {
      const newList = Array.from(this.messages);
      newList.push(item);
      this.messages = newList;
    });
  }

  onChangeMessage(e: string): void {
    this.newMessageTest = e;
    this.isInvalidMessage = !e || !e?.trim();
  }

  sendMessage(): void {
    this.messageService.post(this.newMessageTest).subscribe();
    this.newMessageTest = '';
    this.isInvalidMessage = true;
  }
}
