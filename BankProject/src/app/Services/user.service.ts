import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../Models/user.model';
import { LoanEligibility } from '../Models/loanEligibility.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postUser(data:User){
    return this.http.post<User>("http://localhost:8080/user",data);
  }
  
  getUser(){
    return this.http.get<User>("http://localhost:8080/user");
  }
  
  posteligibility(data:string){
    return this.http.get<LoanEligibility>("http://localhost:8080/eligibility/"+data);
  }
}
