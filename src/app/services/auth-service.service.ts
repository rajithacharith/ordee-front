import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginDTO } from '../DTO/loginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public http: any;
  

  constructor(private httpClient:HttpClient) {
    this.http = httpClient;
  }

  

  /**
   * login
   */
  public login(user:loginDTO) {
    console.log(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', "*")
    this.http.post("api/login",user,headers).subscribe(res =>{console.log(res),err=>{console.log("Error Occured")}});
  }
}
