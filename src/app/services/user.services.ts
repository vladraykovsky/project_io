import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable( {
  providedIn: 'root'
})
export class UserServices {

  constructor(private http: HttpClient){}
  getCurrentUserInfo() {
    return this.http.get(`${environment.baseUrl}account`);
  }
  getAllUsers() {
    return this.http.get(`${environment.baseUrl}admin/users`);
  }
  getUserById(userId) {
    return this.http.get(`${environment.baseUrl}admin/users/${userId}`);
  }

  enableAdmin(userId, body) {
    return this.http.post(`${environment.baseUrl}admin/users/${userId}`, body);
  }

  deleteUser(userId) {
    return this.http.delete(`${environment.baseUrl}admin/users/${userId}`);
  }

  getBannedUsers(){
    return this.http.get(`${environment.baseUrl}admin/users/banned`);
  }

}
