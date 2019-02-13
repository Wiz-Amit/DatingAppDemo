import { Component, OnInit } from '@angular/core';
import { Pagination } from '../models/pagination';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Message } from '../models/Message';
import { AlertifyService } from '../services/alertify.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  pagination: Pagination;
  pageNumber = 1;
  pageSize = 5;
  messageContainer = "Unread";
  messageParams: any = {};
  messages: Message[];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.userService.getMessages(this.authService.getId(), this.pageNumber, this.pageSize, this.messageContainer)
      .pipe(
        tap(messages => {
          const userId = +this.authService.getId();
          messages.result.forEach(message => {
            if(message.recipientId === userId)
              this.userService.markMessageAsRead(userId, message.id);
          });
        })
      )
      .subscribe(
        response => {
        this.messages = response.result;
        this.pagination = response.pagination;
        },
        error => {
          this.alertify.error(error);
        }
      )
  }

  deleteMessageConfirm(id: number) {
    this.alertify.confirm("Are you sure you want to delete this message?", () => {
      this.deleteMessage(id);
      return 0;
    });
  }

  deleteMessage(id: number) {
    this.userService.deleteMessage(this.authService.getId(), id).subscribe(
      () => {
        this.alertify.success("Message has been deleted");
        this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
      },
      error => {
        this.alertify.error(error);
      });
  }

  pageChanged(event: any) {
    this.pageNumber = event.page;
    this.loadMessages();
  }

}
