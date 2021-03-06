import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { PaginatedResult } from '../models/pagination';
import { map } from 'rxjs/operators';
import { Message } from '../models/Message';

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

  getUsers(page?, itemsPerPage?, userParams?, likesParams?): Observable<PaginatedResult<User[]>> {
    const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();

    let params = new HttpParams();

    if(page != null && itemsPerPage != null) {
      params = params.append("pageNumber", page);
      params = params.append("pageSize", itemsPerPage);
    }

    if(userParams != null) {
      params = params.append("minAge", userParams.minAge);
      params = params.append("maxAge", userParams.maxAge);
      params = params.append("gender", userParams.gender);
      params = params.append("orderBy", userParams.orderBy);
    }

    if(likesParams === "Likers") {
      params = params.append("likers", "true");
      params = params.append("likees", "false");
    }

    if(likesParams === "Likees") {
      params = params.append("likers", "false");
      params = params.append("likees", "true");
    }

    return this.http.get<User[]>(this.baseUrl + "users", {observe: 'response', params})
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if(response.headers.get("Pagination") != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get("Pagination"))
          }
          return paginatedResult;
        })
      );
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + "users/" + id);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + "users/" + id, user);
  }

  setMainPhoto(userId: number, photoId: number) {
    return this.http.post(this.baseUrl + "users/" + userId + "/photos/" + photoId + "/setMain", {});
  }

  deletePhoto(userId: number, photoId: number) {
    return this.http.delete(this.baseUrl + "users/" + userId + "/photos/" + photoId);
  }

  sendLike(userId: number, recipientId: number) {
    return this.http.post(this.baseUrl + "users/" + userId + "/like/" + recipientId, {});
  }

  getMessages(userId: number, page?, itemsPerPage?, messageContainer?) {
    const paginatedResult: PaginatedResult<Message[]> = new PaginatedResult<Message[]>();

    let params = new HttpParams();

    if(page != null && itemsPerPage != null) {
      params = params.append("pageNumber", page);
      params = params.append("pageSize", itemsPerPage);
      params = params.append("messageContainer", messageContainer);
    }

    return this.http.get<Message[]>(this.baseUrl + "users/" + userId + "/messages",
      {observe: "response", params}).pipe(
        map(response => {
          paginatedResult.result = response.body;
          if(response.headers.get("Pagination") !== null)
            paginatedResult.pagination = JSON.parse(response.headers.get("Pagination"));

          return paginatedResult;
        })
      )
  }

  getMessageThread(senderId: number, recipientId: number) {
    return this.http.get(this.baseUrl + "users/" + senderId + "/messages/thread/" + recipientId);
  }

  sendMessage(recipientId: number, message: Message) {
    return this.http.post(this.baseUrl + "users/" + recipientId + "/messages", message);
  }

  deleteMessage(userId: number, messageId: number) {
    return this.http.post(this.baseUrl + "users/" + userId + "/messages/" + messageId, {});
  }

  markMessageAsRead(userId: number, messageId: number) {
    this.http.post(this.baseUrl + "users/" + userId + "/messages/" + messageId + "/read", {})
      .subscribe();
  }
}
