import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild("editForm") editForm: NgForm;
  @HostListener("window:beforeunload", ["$event"])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  user: any;

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private userService: UserService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(this.authService.getId())
      .subscribe(
        user => {
          this.user = user;
        },
        error => {
          this.alertify.error(error);
        }
      )
  }

  updateUser() {
    this.userService.updateUser(this.authService.getId(), this.user)
      .subscribe(
        next => {
          this.editForm.reset(this.user);
          this.alertify.success("Profile Updated Successfully");
        },
        error => {
          this.alertify.error(error);
        })
  }

}
