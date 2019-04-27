import { Injectable } from '@angular/core';
import {foodItemDTO} from '../DTO/fooditemDTO';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import { orderDTO } from '../DTO/orderDTO';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {
  foodItems = { data: ""}

  private http: any;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.http = httpClient;
  }

  // Observable string source
  private foodItemSource = new Subject<string>();

  // Observable string stream
  dataString$ = this.foodItemSource.asObservable();

  
  public addfooditem(fooditem: foodItemDTO) {
    const data = JSON.parse(localStorage.getItem('user'));
    console.log(data);
    fooditem.merchantID = data.merchantID;
    
    console.log(fooditem);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    this.http.post('http://localhost:8080/api/merchant/addFoodItem', fooditem, headers).subscribe(res => {
        console.log(res);
        this.router.navigate(['/merchantDashboard']);
    });


  }

  getFoodItems(merchant) {
    this.http.get("http://localhost:8080/api/customer/foodByMerchant?merchantID="+merchant.merchantID).subscribe((res)=>
    {
      console.log(res);
      this.saveFoodItems(res);
    })


  }
  saveFoodItems(foodItems){
    this.foodItems.data= foodItems;
    this.foodItemSource.next(this.foodItems.data);
  }

  addOrder(foodItem){
    // const user = JSON.parse(localStorage.getItem('user'));
    
    var order = new orderDTO();
    order.customerID = '1000';
    order.merchantID = foodItem.merchantID;
    order.foodItemID = foodItem.foodItemID;
    order.quantity = 1;
    
    
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    this.http.post('http://localhost:8080/api/customer/addOrder', order, headers).subscribe(
      (res) => {
        console.log(res);
      }
    )


  }
}
