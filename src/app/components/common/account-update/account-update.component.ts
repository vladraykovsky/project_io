import { Component, OnInit } from '@angular/core';
import {AF} from '../../../services/AF.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent implements OnInit {

  user = {username: 'username', periodOfLicense: new Date(), firstName: 'firstName' , lastName: 'lastName' , email: 'email@mail.com', twitterUsername: ''  };
  constructor(public afService: AF) { }

  ngOnInit() {
  }

  socialLogin(loginProvider) {
    this.afService.socialLogin(loginProvider)
      .then( data => {
            console.log(data);
        });
  }

}
