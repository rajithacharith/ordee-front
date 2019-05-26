import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router, CanActivate } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(){
    if(this.authService.isCustomer()){
      this.router.navigate(['/customerDashboard']);
      return true;
    } else if ( this.authService.isMerchant()){
      this.router.navigate(['/merchantDashboard']);
      return true;
    } else {
      return true;
    }
  }
}
