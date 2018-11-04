import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
@Component({
  selector: 'app-manage-connections',
  templateUrl: './manage-connections.component.html',
  styleUrls: ['./manage-connections.component.scss']
})
export class ManageConnectionsComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faTrashAlt =  faTrashAlt;
  connections = [];

  constructor(public router: Router) {
    this.connections.push( {id: 1, hashTag: 'tag', twitterLink: '--', facebookLink: '--', dayOfWeek: '--', typeOfReport: '--'});
    this.connections.push( {id: 1, hashTag: 'tag2', twitterLink: '--', facebookLink: '--', dayOfWeek: '--', typeOfReport: '--'});
  }

  ngOnInit() {
  }

  editConnection(connection: any, router: Router) {
    router.navigate( [ 'connections', connection.id, 'edit']);
  }

}
