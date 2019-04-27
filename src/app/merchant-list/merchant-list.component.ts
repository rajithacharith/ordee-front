import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../services/merchant.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent implements OnInit {
  public datalist: any;
  constructor(private merchantService: MerchantService,private data: DataService,private router: Router) { }

  ngOnInit() {
   this.merchantService.getMerchants();
   this.merchantService.dataString$.subscribe((res)=>{
     this.datalist = res;
     console.log(this.datalist);
   })
  }

  selectMerchant(merchant){
    console.log(merchant);
    this.data.changeMerchant(merchant);
    this.router.navigate(['/foodItems'])

  }

}
