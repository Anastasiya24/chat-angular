import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileSettingsComponent } from '../profile-settings/profile-settings.component';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'],
})

export class ChatContainerComponent implements OnInit {
  @Input() name: string;

  isOpenAccountModal: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLinkMainPage(): void {
    this.router.navigateByUrl('/');
  }

  setOpenAccountModal(): void {
    const exIsOpenAccountModal = this.isOpenAccountModal;
    this.isOpenAccountModal = !exIsOpenAccountModal;
  }

  onSaveNickName(e: any): void {
    // TODO SAVE NICKNAME
    console.log('Save new name click', e);
  }
}
