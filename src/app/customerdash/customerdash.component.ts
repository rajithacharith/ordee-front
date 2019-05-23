import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdash',
  templateUrl: './customerdash.component.html',
  styleUrls: ['./customerdash.component.css']
})
export class CustomerdashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addFood(){
    console.log("Clicked");
  }

}
