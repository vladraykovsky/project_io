import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user = { username: 'username1', email: 'email@gmail.com', firstName: 'first', lastName: 'lastname', password: '', password2: '' };
  constructor() { }

  ngOnInit() {
  }

}
