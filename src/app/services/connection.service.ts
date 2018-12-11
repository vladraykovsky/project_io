import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  constructor(private http: HttpClient){}

  getConnection() {
    return this.http.get(`${environment.baseUrl}private-api/connection`);
  }
  postConnection(connection) {
    return this.http.post(`${environment.baseUrl}private-api/connection`, connection);
  }

  deleteConnection(connectionId: number) {
    return this.http.delete(`${environment.baseUrl}private-api/connection/${connectionId}`);
  }
  putConnection(connection) {
    return this.http.put(`${environment.baseUrl}private-api/connection/${connection.connectionId}`, connection);
  }

}
