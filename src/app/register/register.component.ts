import { Component, OnInit } from '@angular/core';

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
