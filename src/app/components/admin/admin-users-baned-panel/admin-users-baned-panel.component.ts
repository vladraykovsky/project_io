import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MdbTablePaginationComponent, MdbTableService} from 'angular-bootstrap-md';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-users-baned-panel',
  templateUrl: './admin-users-baned-panel.component.html',
  styleUrls: ['./admin-users-baned-panel.component.scss']
})
export class AdminUsersBanedPanelComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  users = [];
  previous: any = [];
  firstItemIndex;
  lastItemIndex;
  faCheckCircle = faCheckCircle;
  constructor(private tableService: MdbTableService,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    for (let i = 0 ; i < 20 ; i++) {
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

  enableUser(user) {

  }

}
