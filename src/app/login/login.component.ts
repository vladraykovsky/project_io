import { Component, OnInit } from '@angular/core';
import {SecurityService} from '../services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {login: '', password: ''};

  constructor(private securityService: SecurityService) { }

  ngOnInit() {
  }

  authorizeUser() {
    this.securityService.postAuthorized(this.user).subscribe( obj => {
      console.log(obj);
      localStorage.setItem('token', obj['token']);
    });
  }

}
