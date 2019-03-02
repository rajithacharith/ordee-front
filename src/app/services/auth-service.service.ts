import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginDTO } from '../DTO/loginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  static http: any;
  

  constructor(private http:HttpClient) {
    this.http = http;
  }

  static login(loginDTO:loginDTO){
    console.log(loginDTO);
    this.http.post("localhost:8080/api/login",loginDTO).subscribe(res =>{console.log(res),err=>{console.log("Error Occured")}});

  }
}
