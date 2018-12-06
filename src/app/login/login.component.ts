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

  registerUser() {
    this.securityService.postRegister(this.user).subscribe( obj => {
      console.log(obj);
    });
  }

}
