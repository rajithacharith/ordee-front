import { Component, OnInit } from '@angular/core';
import { foodItemDTO } from '../DTO/fooditemDTO';

@Component({
  selector: 'app-addfooditems',
  templateUrl: './addfooditems.component.html',
  styleUrls: ['./addfooditems.component.css']
})
export class AddfooditemsComponent implements OnInit {
  public foodItem;
  constructor() {
    this.foodItem = new foodItemDTO();
  }

  ngOnInit() {
  }

  onSubmit() {

  }
}
