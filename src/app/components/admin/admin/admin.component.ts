import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MdbTablePaginationComponent, MdbTableService} from 'angular-bootstrap-md';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  users = [];
  previous: any = [];
  firstItemIndex;
  lastItemIndex;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
