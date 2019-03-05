import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginDTO } from '../DTO/loginDTO';
import { registerDTO } from '../DTO/registerDTO'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public http: any;


  constructor(private httpClient:HttpClient) {
    this.http = httpClient;
  }



  public login(user:loginDTO) {
    console.log(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('Access-Control-Allow-Origin', "http://localhost:4200");
    
    this.http.post("http://localhost:8080/api/login",user,headers).subscribe(res =>{console.log(res),err=>{console.log("Error Occured")}});
  }

  public register(user : registerDTO){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('Access-Control-Allow-Origin', "http://localhost:4200");
    
    this.http.post("http://localhost:8080/api/register",user,headers).subscribe(res =>{console.log(res),err=>{console.log("Error Occured")}});
  }
}
