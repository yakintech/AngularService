import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http:HttpClient) { }

  sendemailapi(name,message){
  
    return this._http.post("http://localhost:3000/api/email",{name:name,message:message}).subscribe((x)=>{
      console.log(x);
    });
  }
}
