import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../services/merchant.service';
import { DataService } from '../services/data.service';
declare var $:any;
@Component({
  selector: 'app-merchant-orders',
  templateUrl: './merchant-orders.component.html',
  styleUrls: ['./merchant-orders.component.css']
})
export class MerchantOrdersComponent implements OnInit {
  public orderData;
  constructor(private merchantService : MerchantService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.change();
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    this.merchantService.getOrders(data.merchantID);

    this.merchantService.orderDetails$.subscribe((res)=> {
      console.log(res);
      res.orderData.forEach(element => {
        let imgName = element.foodItemBean.image;
          element.foodItemBean.url = "http://localhost:8080/api/file/"+imgName;
          console.log(element.url);
      });
      this.orderData = res.orderData;
      console.log(this.orderData);
    });

    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

  }

}
