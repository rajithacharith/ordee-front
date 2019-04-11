import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../services/merchant.service';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent implements OnInit {
  private datalist: any;
  constructor(private merchantService: MerchantService) { }

  ngOnInit() {
   this.merchantService.getMerchants();
   this.merchantService.dataString$.subscribe((res)=>{
     this.datalist = res;
     console.log(this.datalist);
   })
  }

}
