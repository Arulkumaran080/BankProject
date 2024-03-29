import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get<any>(this.baseUrl+"/admin");
  }

}