import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  constructor(private http: HttpClient){}

  getConnection() {
    return this.http.get(`${environment.baseUrl}connection`);
  }
  postConnection(connection) {
    return this.http.post(`${environment.baseUrl}connection`, connection);
  }

  deleteConnection(connectionId: number) {
    return this.http.delete(`${environment.baseUrl}connection/${connectionId}`);
  }
  putConnection(connection) {
    return this.http.put(`${environment.baseUrl}connection/${connection.connectionId}`, connection);
  }

}
