import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})

export class ListsComponent implements OnInit {
  users: User[];
  pagination: Pagination;
  pageNumber = 1;
  pageSize = 5;
  user: User = JSON.parse(localStorage.getItem("user"));
  likesParam = "Likers";

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam)
    .subscribe(
      res => {
      this.users = res.result;
      this.pagination = res.pagination;
      },
      error => {
        this.alertify.error(error);
      });
  }

  pageChanged(event: any) {
    this.pageNumber = event.page;
    this.loadUsers();
  }
}
