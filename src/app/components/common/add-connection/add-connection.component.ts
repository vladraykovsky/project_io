import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-connection',
  templateUrl: './add-connection.component.html',
  styleUrls: ['./add-connection.component.scss']
})
export class AddConnectionComponent implements OnInit {

  connection = {id: 1, hashTag: 'tag', twitterLink: '--', facebookLink: '--', dayOfWeek: 'Saturday', typeOfReport: 'Simple'};
  constructor() { }

  daysOfWeek = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
  typeOfReport = [ 'Simple', 'Number', 'Full'];
  ngOnInit() {
  }

}
