import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportServices {
  constructor(private http: HttpClient) {}

  postReport(body) {
    return this.http.post(`${environment.baseUrl}private-api/report`, body);
  }
  getReportById(reportId: number) {
    return this.http.get(`${environment.baseUrl}private-api/report/${reportId}`);
  }

  deleteReportById(reportId: number) {
    return this.http.delete(`${environment.baseUrl}private-api/report/${reportId}`);
  }
  getAllReports() {
    return this.http.get(`${environment.baseUrl}private-api/report/all`);
  }
  deleteAllReports() {
    return this.http.delete(`${environment.baseUrl}private-api/report/all`);
  }
}
