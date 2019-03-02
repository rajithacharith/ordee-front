import { Component, OnInit } from '@angular/core';
import { loginDTO } from '../DTO/loginDTO';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  constructor() { 
    this.user = new loginDTO();
   }

  ngOnInit() {
    
    console.log(this.user.username,this.user.password);
  }

  onSubmit(){
    console.log(this.user.username,this.user.password);
    AuthServiceService.login(this.user);
  }

}
