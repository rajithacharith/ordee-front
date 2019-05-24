import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public condition;
  constructor(private dataService: DataService) { }
  

  ngOnInit() {
    this.condition = true;
    this.dataService.getEmittedValue().subscribe(
      item => {
        this.condition= item;
      }
    )
  }

}
