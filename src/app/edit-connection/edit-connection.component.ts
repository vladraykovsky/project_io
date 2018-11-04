import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-connection',
  templateUrl: './edit-connection.component.html',
  styleUrls: ['./edit-connection.component.scss']
})
export class EditConnectionComponent implements OnInit {

  connection = {id: 1, hashTag: 'tag', twitterLink: 'some link', facebookLink: 'some link', dayOfWeek: 'Monday', typeOfReport: 'Number'};
  constructor() { }

  ngOnInit() {
  }

}
