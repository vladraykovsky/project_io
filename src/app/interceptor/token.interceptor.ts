import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TokenService} from '../services/token.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{

  constructor(private tokenService: TokenService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('authorize') || req.url.endsWith('register')) {
      return next.handle(req);
    } else {
      req = req.clone( {
        setHeaders: {
          Authorization: `Bearer ${this.tokenService.getToken()}`
        }
      });
      return next.handle(req);
    }
  }
}
