import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../Models/user.model';
import { LoanEligibility } from '../Models/loanEligibility.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  postUser(data:any){
    return this.http.post<any>(this.baseUrl+"/api-emp/save",data);
  }
  
  getUser(){
    return this.http.get<any>(this.baseUrl+"/api-emp/getAll");
  }
}