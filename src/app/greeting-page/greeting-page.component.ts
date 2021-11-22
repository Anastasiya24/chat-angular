import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-greeting-page',
  templateUrl: './greeting-page.component.html',
  styleUrls: ['./greeting-page.component.css'],
})
export class GreetingPageComponent implements OnInit {
  nickName: string = '';
  isInvalidNickName: boolean = true;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  onChangeNickName(e: string): void {
    this.nickName = e;
    this.isInvalidNickName = !e || !e?.trim();
  }

  onSaveNickName(): void {
    this.userService
      .post(this.nickName)
      .subscribe((data) => this.router.navigate(['/']));
  }
}
