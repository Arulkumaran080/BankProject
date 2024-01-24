import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  postLoan(data: any) {
    return this.http.post<any>(this.baseUrl + '/loan-app/allLoan', data);
  }

  getLoan() {
    return this.http.get<any>(this.baseUrl + '/loan-app/allLoan');
  }

  aproved(id: number, data: any) {
    return this.http.put<any>(this.baseUrl + '/loan-app/approved/' + id, data);
  }
  rejected(id: number, data: any) {
    return this.http.put<any>(this.baseUrl + '/loan-app/rejected/' + id, data);
  }
}
