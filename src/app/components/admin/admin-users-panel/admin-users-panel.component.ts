import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MdbTablePaginationComponent, MdbTableService} from 'angular-bootstrap-md';
import { faBan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-users-panel',
  templateUrl: './admin-users-panel.component.html',
  styleUrls: ['./admin-users-panel.component.scss']
})
export class AdminUsersPanelComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  users = [];
  previous: any = [];
  firstItemIndex;
  lastItemIndex;
  faBan = faBan;

  constructor(private tableService: MdbTableService,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    for (let i = 0 ; i < 40 ; i++) {
      this.users.push( {username: 'username', email: 'email@gmail.com', firstName: 'first', lastName: 'lastname' });
    }

    this.tableService.setDataSource(this.users);
    this.users = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
  }


  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }


  banUser(user) {
  }
}
