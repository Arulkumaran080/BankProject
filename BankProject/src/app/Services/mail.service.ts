import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  baseUrl:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  sendOTPMail(mail:string){
    return this.http.get<any>(this.baseUrl+"/sendMail/"+mail);
  }

}