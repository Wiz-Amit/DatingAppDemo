import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.css']
})
export class RolesModalComponent implements OnInit {
  @Output() roleUpdater = new EventEmitter();
  title: string;
  closeBtnName: string;
  user: User;
  roles: any[];
 
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

  updateRoles() {
    this.roleUpdater.emit(this.roles);
    this.bsModalRef.hide();
  }

}
