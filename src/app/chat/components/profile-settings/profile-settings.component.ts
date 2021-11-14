import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
})
export class ProfileSettingsComponent implements OnInit {
  @Input() name: string;
  @Output() onSave = new EventEmitter();

  nickName: string = '';
  isInvalidNickName: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onChangeNickName(e: string): void {
    this.nickName = e;
    this.isInvalidNickName = !e || !e?.trim();
  }

  onSaveNickName(): void {
    this.onSave.emit(this.nickName);
  }
}
