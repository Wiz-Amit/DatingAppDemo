import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService) {}
    
  canActivate(next: ActivatedRouteSnapshot): boolean {
    const roles = next.firstChild.data["roles"] as Array<string>;
    if(roles) {
      const match = this.authService.checkRole(roles);
      if(match) {
        return true;
      } else { 
        this.router.navigate(["members"]);
        this.alertify.error("You are not authorized to access this area");
      }
    }

    if(this.authService.loggedIn()) return true;
    else {
      this.alertify.error("Access denied!");
      this.router.navigate(["/"]);
      return false;
    }
  }
}
