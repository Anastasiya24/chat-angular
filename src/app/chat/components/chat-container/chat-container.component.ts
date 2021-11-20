import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'],
})

export class ChatContainerComponent implements OnInit {
  @Input() name: string;

  isOpenAccountModal: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  onLinkMainPage(): void {
    this.router.navigateByUrl('/');
  }

  setOpenAccountModal(): void {
    this.isOpenAccountModal = !this.isOpenAccountModal;
  }

  onSaveNickName(e: any): void {
    // save new name
    this.userService.post(e).subscribe();
    this.setOpenAccountModal();
  }
}
