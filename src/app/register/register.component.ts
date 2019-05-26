import { Component, OnInit, EventEmitter } from '@angular/core';
import { registerDTO } from '../DTO/registerDTO';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as M from "materialize-css/dist/js/materialize";
import { AuthServiceService } from '../services/auth-service.service';
import {MaterializeAction} from 'angular2-materialize'
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
declare var $:any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  public user: registerDTO;
  
  constructor(private authService : AuthServiceService, private dataService: DataService,private router:Router) { 
    this.user = new registerDTO();
    console.log("Register Started");
 
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
    $(document).ready(function(){
      $('select').formSelect();
    });
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    }); 

    this.authService.errorMethodCalled$.subscribe(
      () => {
        this.popUpError();
      }
    );
    this.authService.registerSuccessfull$.subscribe(
      () => {
        this.popUpSuccess();
      }
    );

    this.dataService.change();

  }

  onSubmit(){
    console.log(this.user)
    this.authService.register(this.user);
  }

  popUpError(){
    $('#modal1').modal('open');
  }
  popUpSuccess(){
    $('#modal2').modal('open');
  }
  

}
