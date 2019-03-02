import { Component, OnInit } from '@angular/core';
import { registerDTO } from '../DTO/registerDTO';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: registerDTO;
  constructor() { 
    this.user = new registerDTO();
    console.log("Register Started");
  }

  ngOnInit() {
  }

}
