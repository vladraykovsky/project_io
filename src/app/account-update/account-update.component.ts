import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent implements OnInit {

  user = {username: '', periodOfLicense: new Date(), email: '' };

  constructor() { }

  ngOnInit() {
  }

}
