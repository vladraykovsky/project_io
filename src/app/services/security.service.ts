import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable( {
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient){}


  getIndex() {
    return this.http.get(`${environment.baseUrl}index`);
  }

  postAuthorized(user) {
    return this.http.post(`${environment.baseUrl}authorize`, user);
  }

  postRegister(user) {
    return this.http.post(`${environment.baseUrl}register`, user);
  }

}
