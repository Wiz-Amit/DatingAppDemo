import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { User } from 'src/app/models/user';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() user: User;
  messages: Message[];
  message: any = {};

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertify: AlertifyService
    ) { }

  ngOnInit() {
    this.loadMessageThread();
  }

  loadMessageThread() {
    this.userService.getMessageThread(this.authService.getId(), this.user.id)
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages.slice().reverse();
      },
      error => {
        this.alertify.error(error);
      },
      () => {
        this.scrollToBottom();

      })
  }

  sendMessage() {
    this.message.recipientId = this.user.id;
    this.userService.sendMessage(this.authService.getId(), this.message)
      .subscribe(
        (message: Message) => {
          this.messages.push(message);
          this.message.content = "";
        },
        error => {
          this.alertify.error(error);
        },
        () => {
          this.scrollToBottom();
        })
  }

  scrollToBottom() {
    setTimeout(() => {
      document.querySelector("#chatBottom")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
}
