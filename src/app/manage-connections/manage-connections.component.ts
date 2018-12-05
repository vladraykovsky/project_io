import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {MdbTablePaginationComponent, MdbTableService} from 'angular-bootstrap-md';
@Component({
  selector: 'app-manage-connections',
  templateUrl: './manage-connections.component.html',
  styleUrls: ['./manage-connections.component.scss']
})
export class ManageConnectionsComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  faPencilAlt = faPencilAlt;
  faTrashAlt =  faTrashAlt;
  connections = [];
  previous: any = [];
  firstItemIndex;
  lastItemIndex;

  constructor(public router: Router,
              private tableService: MdbTableService,
              private cdRef: ChangeDetectorRef) {
    this.connections.push( {id: 1, hashTag: 'tag', twitterLink: '--', facebookLink: '--', dayOfWeek: '--', typeOfReport: '--'});
    this.connections.push( {id: 1, hashTag: 'tag2', twitterLink: '--', facebookLink: '--', dayOfWeek: '--', typeOfReport: '--'});
  }

  ngOnInit() {
    for( let i = 0;  i < 12; i++  ) {
      this.connections.push({id: 1, hashTag: 'tag', twitterLink: '--', facebookLink: '--', dayOfWeek: '--', typeOfReport: '--'});
    }

    this.tableService.setDataSource(this.connections);
    this.connections = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
  }

  editConnection(connection: any, router: Router) {
    router.navigate( [ 'connections', connection.id, 'edit']);
  }

  ngAfterViewInit(): void {
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

  removeConnection(conncetion, basicModel) {
    console.log(conncetion);
    basicModel.hide();
  }

}
