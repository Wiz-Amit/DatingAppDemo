import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl = environment.apiUrl +  "auth/";
  jwtHelper = new JwtHelperService;

  constructor(private http: HttpClient) { }

  login(model: {}) {
    return this.http.post(this.baseUrl + "login", model)
      .pipe(
        map((response: any) => {
          if(response) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));
          }
        })
      );
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  register(user: User) {
    return this.http.post(this.baseUrl + "register", user);
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    this.decodedToken();
    return !!token;
  }

  decodedToken() {
    return this.jwtHelper.decodeToken(localStorage.getItem("token"));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getUsername() {
    return this.decodedToken().unique_name || "";
  }

  getId() {
    return this.decodedToken().nameid;
  }
}
