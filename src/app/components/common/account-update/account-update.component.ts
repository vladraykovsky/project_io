import { Component, OnInit } from '@angular/core';
import {AF} from '../../../services/AF.service';
import {UserServices} from '../../../services/user.services';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent implements OnInit {

  user = {username: 'username', periodOfLicense: new Date(), firstName: 'firstName' , lastName: 'lastName' , email: 'email@mail.com', twitterUsername: ''  };
  constructor(public afService: AF,
              private userService: UserServices) { }

  ngOnInit() {
  }

  socialLogin(loginProvider) {
    this.afService.socialLogin(loginProvider)
      .then( data => data['credentials']
        )
      .then( credentials => this.userService.updateCurrentUserInfo(credentials)
      )
      .then( currentUser => {
        currentUser.subscribe( user => {
          console.log(user);
        }, error1 => {
          console.log(error1);
        });
      });
  }

}
