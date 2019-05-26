import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
  import { from } from 'rxjs';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() title:string;
  public user;
  public userType;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if("customerId" in this.user){
      console.log("Customer");
      this.userType = "customer";
    }else{
      console.log("Merchant");
      this.userType = "merchant";
    }
  }

  logOut(){
    console.log("Logging out");
    localStorage.removeItem("user");
    this.router.navigate(['/login']);

  }

}
