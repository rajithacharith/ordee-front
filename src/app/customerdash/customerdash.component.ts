import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdash',
  templateUrl: './customerdash.component.html',
  styleUrls: ['./customerdash.component.css']
})
export class CustomerdashComponent implements OnInit {

  constructor() { }
  public user;
  public pageName;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.pageName = "Customer Dashboard";
  }

  addFood(){
    console.log("Clicked");
    
  }

}
