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
    ApplicationHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
