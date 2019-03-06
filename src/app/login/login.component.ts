import { Component, OnInit } from '@angular/core';
import { loginDTO } from '../DTO/loginDTO';
import { AuthServiceService } from '../services/auth-service.service';
import * as M from "materialize-css/dist/js/materialize";
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  constructor(private authService:AuthServiceService) { 
    this.user = new loginDTO();
   }

  ngOnInit() {
    
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
}
