import { Injectable } from '@angular/core';
import {foodItemDTO} from '../DTO/fooditemDTO';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import { orderDTO } from '../DTO/orderDTO';
import { orderListDTO } from '../DTO/orderListDTO';

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

  private recomendations = false;
  private recomendationData = [];
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
      res.forEach(element => {
        let imgName = element.image;
          element.url = "http://localhost:8080/api/file/"+element.image;
          console.log(element.url);
      });
      this.saveFoodItems(res);
    })


  }
  saveFoodItems(foodItems){
    this.foodItems.data= foodItems;
    this.foodItemSource.next(this.foodItems.data);
  }

  addOrder(foodItem){
    console.log(foodItem);
    // const user = JSON.parse(localStorage.getItem('user'));
    const data = JSON.parse(localStorage.getItem('user'));
    console.log(data);
    var orderList = new orderListDTO();
   // var order = new orderDTO();
    let orderItems = new Array();
    foodItem.forEach(element => {
      let item = new orderDTO();
      item.foodItemID = element.foodItemID;
      item.merchantID = element.merchantID;
      orderItems.push(element);
      console.log(element)
    });
   
    orderList.customerID = data.customerId;
    orderList.orderList = orderItems;
    
    console.log(orderList);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    this.http.post('http://localhost:8080/api/customer/addOrder', orderList, headers).subscribe(
      (res) => {
        console.log(res);
        console.log("Order Success");
        this.callOrderSuccess();
      },
      err =>{
        
      }
    )


  }

  private orderSuccess = new Subject<any>();
  public orderSuccess$ = this.orderSuccess.asObservable();

  callOrderSuccess(){
    this.orderSuccess.next();
  }

  private recomendationSuccess = new Subject<any>();
  public recomendationSuccess$ = this.recomendationSuccess.asObservable();

  getRecomendations(foodItemList){

    let foodList = [];
    foodItemList.forEach(element => {
      foodList.push(element.foodItemID)
    });

    console.log(foodList);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    this.http.post('http://localhost:8080/api/customer/recommendation', foodList, headers).subscribe(
      (res) => {
        console.log(res);
        res.forEach(element => {
          let imgName = element.image;
            element.url = "http://localhost:8080/api/file/"+element.image;
            console.log(element.url);
        });

        
        this.recomendationSuccess.next({data : res})
          
       
      },
      err =>{
        
      }
    )

  }

}
