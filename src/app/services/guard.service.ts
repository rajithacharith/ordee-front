import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private router:Router, private authService: AuthServiceService) { }

  canActivate(){
    if(this.authService.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return true;
    }
  }
}
