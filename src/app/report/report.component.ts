import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  currentDate = new Date();
  range = [];

  constructor() {
  }

  ngOnInit() {
    for ( let i = 0 ; i < 7; i++) {
      this.range.push( {begin: new Date().setDate(new Date().getDate() - i), end: new Date().setDate(new Date().getDate() - (6 + i))});
    }
  }


  currentDateSubstractSixDays(date: Date, days: number) {
    return new Date().setDate(date.getDate() - days);
  }

}
