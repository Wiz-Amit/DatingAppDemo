import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { RolesModalComponent } from '../roles-modal/roles-modal.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[];
  bsModalRef: BsModalRef;

  constructor(
    private adminService: AdminService,
    private alertify: AlertifyService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getUsersWithRoles();
  }

  getUsersWithRoles() {
    this.adminService.getUserWithRoles().subscribe((users: User[]) => {
      this.users = users;
    },
    error => {
      console.log(error);
      this.alertify.error(error);
    });
  }

  editRolesModal(user: User) {
    const initialState = {
      user,
      roles: this.getRolesArray(user)
    };
    this.bsModalRef = this.modalService.show(RolesModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.roleUpdater.subscribe(values => {
      const rolesToUpdate = {
        roleNames: [...values.filter(el => el.checked == true).map(el => el.name)]
      }
      if(rolesToUpdate) {
        this.adminService.updateRoles(user, rolesToUpdate).subscribe(
          () => {
            user.roles = [...rolesToUpdate.roleNames];
          },
          error => {
            console.log(error);
          }
        )
      }
    });
  }

  getRolesArray(user: User) {
    let roles: any[] = [
      {name: "Admin", value: "Admin"},
      {name: "Moderator", value: "Moderator"},
      {name: "Member", value: "Member"},
      {name: "VIP", value: "VIP"}
    ];

    roles.forEach(role => {
      let isMatch = false;

      user.roles.forEach(userRole => {
        if(role.name == userRole) {
          isMatch = true;
          role.checked = true;
        }
      });

      if(isMatch == false) role.checked = false;
    });

    return roles;
  }

}
