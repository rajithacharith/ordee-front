import { Component, OnInit } from '@angular/core';
import { registerDTO } from '../DTO/registerDTO';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as M from "materialize-css/dist/js/materialize";
import { AuthServiceService } from '../services/auth-service.service'
declare var $:any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: registerDTO;
  countries: string[] = ['USA', 'UK', 'Canada'];
  default: string = 'UK';

  countryForm: FormGroup;
  
  states = [
    {name: 'Arizona', code: 'AZ'},
    {name: 'California', code: 'CA'},
    {name: 'Colorado', code: 'CO'}
  ];


  
  constructor(private authService : AuthServiceService) { 
    this.user = new registerDTO();
    console.log("Register Started");
    this.countryForm = new FormGroup({
      country: new FormControl(null)
  });
  this.countryForm.controls['country'].setValue(this.default, {onlySelf: true});

  
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
