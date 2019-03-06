import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { loginDTO } from '../DTO/loginDTO';
import { registerDTO } from '../DTO/registerDTO'
import {Router} from '@angular/router'
import { from, throwError, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public http: any;


  constructor(private httpClient:HttpClient,private router:Router) {
    this.http = httpClient;
  }



  public login(user:loginDTO) {
    console.log(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('Access-Control-Allow-Origin', "http://localhost:4200");
    
    this.http.post("http://localhost:8080/api/login",user,headers).subscribe(res =>{
        console.log(res);
        localStorage.setItem('user',res);
        
        this.router.navigate(['/dashboard']);
  }
      ,err=>{
        console.log("Error Occured");
        this.callLoginFaild();
        });
  }

  public register(user : registerDTO){
    console.log("Register")
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('Access-Control-Allow-Origin', "http://localhost:4200");
    
    this.http.post("http://localhost:8080/api/register",user,headers).subscribe(res =>{
      console.log(res);
      this.callRegisterSuccess();
    },err =>{
      console.log("Error occured");
      this.handleError(err);

      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        this.callErrorPopUp();
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  private registerError = new Subject<any>();
  private registerSuccess = new Subject<any>();
  private loginFaild = new Subject<any>();
  // Observable string streams
  public errorMethodCalled$ = this.registerError.asObservable();
  public registerSuccessfull$ = this.registerSuccess.asObservable();
  public loginfaild$ = this.loginFaild.asObservable();
  // Service message commands
  callErrorPopUp() {
    this.registerError.next();
  }
  callRegisterSuccess(){
    this.registerSuccess.next();
  }
  callLoginFaild(){
    console.log("1");
    this.loginFaild.next();
  }
}
