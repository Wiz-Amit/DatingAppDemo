import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: string = "";

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(form) {
    this.authService.login(form).subscribe(
      next => {
        this.alertify.success("Logged in successfully");
      },
      error => {
        this.alertify.error(error);
      }
    )
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  getUsername() {
    return this.authService.getUsername();
  }

  logout() {
    localStorage.removeItem("token");
    this.alertify.message("Successfully logged out");
  }

}
