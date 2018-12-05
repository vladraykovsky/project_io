import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ManageConnectionsComponent } from './components/common/manage-connections/manage-connections.component';
import { AddConnectionComponent } from './components/common/add-connection/add-connection.component';
import { EditConnectionComponent } from './components/common/edit-connection/edit-connection.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountUpdateComponent } from './components/common/account-update/account-update.component';
import { ReportComponent } from './components/common/report/report.component';
import { AddReportComponent } from './components/common/add-report/add-report.component';
import { ApplicationHeaderComponent } from './components/common/application-header/application-header.component';
import {RouterModule, Routes} from '@angular/router';
import { DescriptionComponent } from './components/common/description/description.component';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {ButtonsModule, WavesModule, DropdownModule, MDBBootstrapModule} from 'angular-bootstrap-md';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {NgbCalendar, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './components/admin/admin/admin.component';

import { AdminUsersPanelComponent } from './components/admin/admin-users-panel/admin-users-panel.component';
import { AdminUsersBanedPanelComponent } from './components/admin/admin-users-baned-panel/admin-users-baned-panel.component';
import { UserDetailsComponent } from './components/admin/user-details/user-details.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes = [
  {path: '', component: ApplicationHeaderComponent, children: [
      {path: '' , component: DescriptionComponent },
      {path: 'connections', component: ManageConnectionsComponent},
      {path: 'reports', component: ReportComponent},

      {path: 'connections/add', component: AddConnectionComponent},
      {path: 'connections/:id/edit', component: EditConnectionComponent},
      {path: 'account', component: AccountUpdateComponent},
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent}
    ]},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'users', component: AdminUsersPanelComponent},
      {path: 'users/baned', component: AdminUsersBanedPanelComponent},
      {path: 'users/add', component: AddUserComponent},
      {path: 'users/:id', component: UserDetailsComponent},
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
    DescriptionComponent,
    AdminComponent,
    AdminUsersPanelComponent,
    AdminUsersBanedPanelComponent,
    UserDetailsComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    DropdownModule,
    FontAwesomeModule,
    DlDateTimePickerDateModule,
    ButtonsModule,
    WavesModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
