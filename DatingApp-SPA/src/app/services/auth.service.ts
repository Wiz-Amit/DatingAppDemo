import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl = "http://localhost:5000/api/auth/";
  private jwtHelper = new JwtHelperService;  
  private decodedToken: any;

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
    this.decodedToken = this.jwtHelper.decodeToken(token);
    return !!token;
  }

  getUsername() {
    this.loggedIn();
    return this.decodedToken.unique_name || "";
  }
}
