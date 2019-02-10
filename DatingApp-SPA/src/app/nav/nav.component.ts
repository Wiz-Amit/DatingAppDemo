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
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router) {
      //forwards the user to home when logged out
      window.addEventListener("storage", () => {
        if(localStorage.getItem("token") == null)
          this.router.navigate(["/home"]);
      });
    }

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

  getCurrentUser() {
    return this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    
    this.alertify.message("Successfully logged out");
    this.router.navigate(["/home"]);
  }

}
