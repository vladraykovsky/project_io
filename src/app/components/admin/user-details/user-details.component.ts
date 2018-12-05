import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user = { username: 'username1', email: 'emal@gmail.com', firstName: 'first', lastName: 'lastname', status: 'disable' };
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
