import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (token !== undefined) {
      return true;
    } else {
      return true;
    }
  }

}
