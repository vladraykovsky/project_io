import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {MdbTablePaginationComponent, MdbTableService} from 'angular-bootstrap-md';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit,  AfterViewInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  public myDatePickerOptions = {
// Your options
  };

  customDate = new Date();
  currentDate = new Date();
  faTrashAlt =  faTrashAlt;
  range = [];
  previous: any = [];
  reports = [ {name: 'name', username: 'username'}];

  firstItemIndex;
  lastItemIndex;

  constructor(private tableService: MdbTableService,
  private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    for ( let i = 0 ; i < 7; i++) {
      this.range.push( {begin: new Date().setDate(new Date().getDate() - i), end: new Date().setDate(new Date().getDate() - (6 + i))});
    }
    for (let i = 0; i < 15; i++) {
      this.reports.push({name: 'name', username: 'username'});
    }

    this.tableService.setDataSource(this.reports);
    this.reports = this.tableService.getDataSource();
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

  removeReport(report, basicModal) {
    console.log(report);
    basicModal.hide();
  }



}
