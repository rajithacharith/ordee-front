import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdash',
  templateUrl: './customerdash.component.html',
  styleUrls: ['./customerdash.component.css']
})
export class CustomerdashComponent implements OnInit {

  constructor() { }
  public user;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));

  }

  addFood(){
    console.log("Clicked");
    
  }

}
