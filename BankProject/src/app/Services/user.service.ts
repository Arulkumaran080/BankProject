import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../Models/user.model';
import { LoanEligibility } from '../Models/loanEligibility.model';
import { personalLoan } from '../Models/personalLoan.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  postUser(data: User) {
    return this.http.post<User>(this.baseUrl + '/user', data);
  }

  getUser() {
    return this.http.get<User>(this.baseUrl + '/user');
  }

  geteligibility(data: string) {
    return this.http.get<LoanEligibility>(
      this.baseUrl + '/eligibility/' + data
    );
  }

  addLoanByUser(data: personalLoan, id: number) {
    return this.http.post<any>(this.baseUrl + '/addLoan/' + id, data);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/user/id/' + id);
  }
}
