import {Component, Input, OnInit} from '@angular/core';
import Tabulator from 'tabulator-tables';
import {__await} from 'tslib';
import {async} from 'rxjs/internal/scheduler/async';
import { FoodserviceService } from '../services/foodservice.service';
@Component({
  selector: 'app-showfooditems',
  templateUrl: './showfooditems.component.html',
  styleUrls: ['./showfooditems.component.css']
})
export class ShowfooditemsComponent implements OnInit {

  constructor(private foodService: FoodserviceService) { }
  tableData: any[] = [];
  dataReceived = false;
  @Input() columnNames: any[] = [];
  @Input() height = '311px';
  // list properties you want to set per implementation here...

  tab = document.createElement('div');


  ngOnInit() {
    


  }





}
