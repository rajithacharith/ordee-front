import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-merchantdash',
  templateUrl: './merchantdash.component.html',
  styleUrls: ['./merchantdash.component.css']
})
export class MerchantdashComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.change();
  }

}
