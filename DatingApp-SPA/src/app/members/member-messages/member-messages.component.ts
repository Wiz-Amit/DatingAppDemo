import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { User } from 'src/app/models/user';
import { Message } from 'src/app/models/Message';
import { tap } from 'rxjs/operators';
// import { SignalR, IConnectionOptions } from 'ng2-signalr';
import * as signalR from "@aspnet/signalr";

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit, OnDestroy {
  @Input() user: User;
  messages: Message[];
  message: any = {};
  connection: signalR.HubConnection;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertify: AlertifyService
    ) { }

  ngOnInit() {
    this.loadMessageThread();
    this.connectToMessageHub();
  }

  ngOnDestroy(): void {
    this.connection.stop();
  }
    
  connectToMessageHub() {
    //signalr
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5000/messagehub", { accessTokenFactory: () => this.getAccessToken() })
      .build();

    this.connection
      .start()
      .then(() => console.log('Connected to messageHub'))
      .catch(err => console.log(err));

    this.connection.on("newMessage", (message: Message) => {
      this.newMessage(message);
    });
  }

  getAccessToken() {
    return localStorage.getItem("token");
  }

  newMessage(message: Message) {
    var userId = +this.authService.getId();

    //check if the message already exists
    var isNew = true;
    this.messages.forEach(m => {
      if(m.id == message.id) {
        m.isRead = true;
        m.dataRead = message.dataRead;
        isNew = false;
      }
    });

    //replace if exists else push new message
    if(isNew)
      this.messages.push(message);

      if(message.recipientId === userId && message.isRead == false)
        this.userService.markMessageAsRead(userId, message.id);

    this.scrollToBottom();
  }

  loadMessageThread() {
    this.userService.getMessageThread(this.authService.getId(), this.user.id)
      .pipe(
        tap((messages: Message[]) => {
          const userId = +this.authService.getId();
          messages.forEach(message => {
            if(message.recipientId === userId && message.isRead == false)
              this.userService.markMessageAsRead(userId, message.id);
          });
        })
      )
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
          // this.messages.push(message);
          this.message.content = "";
        },
        error => {
          this.alertify.error(error);
        })
  }

  scrollToBottom() {
    setTimeout(() => {
      document.querySelector("#chatBottom")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
}
