import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: string = "";

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    this.authService.login(form).subscribe(
      next => {
        this.alertify.success("Successfully Logged in");
      },
      error => {
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(["/members"]);
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
    this.router.navigate(["/home"]);
  }

}
