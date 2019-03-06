import { Component, OnInit, EventEmitter } from '@angular/core';
import { registerDTO } from '../DTO/registerDTO';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as M from "materialize-css/dist/js/materialize";
import { AuthServiceService } from '../services/auth-service.service';
import {MaterializeAction} from 'angular2-materialize'
declare var $:any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  public user: registerDTO;
  
  constructor(private authService : AuthServiceService) { 
    this.user = new registerDTO();
    console.log("Register Started");
 
  }

  ngOnInit() {
    $(document).ready(function(){
      $('select').formSelect();
    });

    

   
  }

  onSubmit(){
    console.log(this.user)
    this.authService.register(this.user);
  }
  

}
