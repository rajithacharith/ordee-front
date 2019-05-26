import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MerchantService } from '../services/merchant.service';
@Component({
  selector: 'app-merchantdash',
  templateUrl: './merchantdash.component.html',
  styleUrls: ['./merchantdash.component.css']
})
export class MerchantdashComponent implements OnInit {
  public pageName;
  constructor(private dataService: DataService, private merchantService:MerchantService) { }

  ngOnInit() {
    this.pageName = "Merchant Dashboard";
    this.dataService.change();
  }

  update(){
    console.log("Updating");
    this.merchantService.update();
  }
}
