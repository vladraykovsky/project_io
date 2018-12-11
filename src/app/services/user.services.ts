import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable( {
  providedIn: 'root'
})
export class UserServices {

  constructor(private http: HttpClient) {}
  getCurrentUserInfo() {
    return this.http.get(`${environment.baseUrl}private-api/account`);
  }
  updateCurrentUserInfo(currentUser) {
    return this.http.put(`${environment.baseUrl}private-api/account`, currentUser);
  }
  getAllUsers() {
    return this.http.get(`${environment.baseUrl}admin-api`);
  }
  getUserById(userId) {
    return this.http.get(`${environment.baseUrl}admin-api/${userId}`);
  }

  enableAdmin(userId, body) {
    return this.http.post(`${environment.baseUrl}admin-api/${userId}`, body);
  }

  deleteUser(userId) {
    return this.http.delete(`${environment.baseUrl}admin-api/${userId}`);
  }

  getBannedUsers(userId) {
    return this.http.post(`${environment.baseUrl}admin-api/ban/${userId}`, {});
  }

}
