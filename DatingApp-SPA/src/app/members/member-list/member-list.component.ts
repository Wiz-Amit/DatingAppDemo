import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AlertifyService } from '../../services/alertify.service';
import { User } from '../../models/user';
import { Pagination } from 'src/app/models/pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];
  pagination: Pagination;
  pageNumber = 1;
  pageSize = 5;
  user: User = JSON.parse(localStorage.getItem("user"));
  genderList = [{display: "Male", value: "male"}, {display: "Female", value: "female"}]
  userParams: any = {};

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.resetFilters();
  }

  loadUsers() {
    this.userService.getUsers(this.pageNumber, this.pageSize, this.userParams).subscribe(res => {
      this.users = res.result;
      this.pagination = res.pagination;
    },
    error => {
      this.alertify.error(error);
    });
  }

  
  

  resetFilters() {
    this.userParams.gender = this.user.gender == "male" ? "female" : "male";
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.userParams.orderBy = "lastActive";

    this.loadUsers();
  }
}
