import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl = environment.apiUrl +  "auth/";
  private jwtHelper = new JwtHelperService;

  constructor(private http: HttpClient) { }

  login(model: {}) {
    return this.http.post(this.baseUrl + "login", model).pipe(
      map((response: any) => {
        if(response) localStorage.setItem("token", response.token);
      })
    );
  }

  register(model: {}) {
    return this.http.post(this.baseUrl + "register", model);
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    this.decodedToken();
    return !!token;
  }

  decodedToken() {
    return this.jwtHelper.decodeToken(localStorage.getItem("token"));
  }

  getUsername() {
    return this.decodedToken().unique_name || "";
  }

  getId() {
    return this.decodedToken().nameid;
  }
}
