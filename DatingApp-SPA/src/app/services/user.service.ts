import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Authorization": "Bearer " + localStorage.getItem("token")
//   })
// };

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "users");
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + "users/" + id)
  }
}
