import { Component, OnInit } from '@angular/core';
import { loginDTO } from '../DTO/loginDTO';
import { AuthServiceService } from '../services/auth-service.service';
import {Router} from '@angular/router';
import * as M from "materialize-css/dist/js/materialize";
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  constructor(private authService:AuthServiceService,private router: Router) { 
    this.user = new loginDTO();
   }

  ngOnInit() {
    if(localStorage.getItem("user")){
        let data = JSON.parse(localStorage.getItem("user"));
        if(data.customerId){
          this.router.navigate(['/customerDashboard']);
        }else if(data.merchantID){
          this.router.navigate(['/merchantDashboard']);
        }
    }
    
    //console.log(this.user.username,this.user.password);
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    }); 
    this.authService.loginfaild$.subscribe(
      () => {
        console.log("2")
        this.popUpError();
      }
    );
  }

  onSubmit(){
    console.log(this.user.username,this.user.password);
    this.authService.login(this.user);
  }

  popUpError(){
    console.log("3");
    $('#modal1').modal('open');
  }

  registerUser(){
    this.router.navigate(['/register']);
  }
}
