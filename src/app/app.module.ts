import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageConnectionsComponent } from './manage-connections/manage-connections.component';
import { AddConnectionComponent } from './add-connection/add-connection.component';
import { EditConnectionComponent } from './edit-connection/edit-connection.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { ReportComponent } from './report/report.component';
import { AddReportComponent } from './add-report/add-report.component';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import {RouterModule, Routes} from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [
  {path: '', component: ApplicationHeaderComponent, children: [
      {path: '' , component: DescriptionComponent },
      {path: 'connections', component: ManageConnectionsComponent},
      {path: 'reports', component: ReportComponent},

      {path: 'connections/add', component: AddConnectionComponent},
      {path: 'connections/:id/edit', component: EditConnectionComponent},
      {path: 'account', component: AccountUpdateComponent},
      {path: 'login', component: LoginComponent}
    ]}

];

@NgModule({
  declarations: [
    AppComponent,
    ManageConnectionsComponent,
    AddConnectionComponent,
    EditConnectionComponent,
    LoginComponent,
    LogoutComponent,
    AccountUpdateComponent,
    ReportComponent,
    AddReportComponent,
    ApplicationHeaderComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
