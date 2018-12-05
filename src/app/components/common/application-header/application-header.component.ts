import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {

  isLoginned = true;

  constructor() { }

  ngOnInit() {
  }

}
