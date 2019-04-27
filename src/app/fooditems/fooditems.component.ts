import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FoodserviceService } from '../services/foodservice.service';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {
  private merchant;
  public noFoodItem = true;
  private foodData;
  private orderList = new Array();
  public checkBox = false;
  private checkOutPrice = 0;
  constructor(private data: DataService,private foodService: FoodserviceService) { }

  ngOnInit() {
    this.data.merchant.subscribe((data)=>{
      this.merchant = data;
      console.log(this.merchant);
      
    })

    this.foodService.getFoodItems(this.merchant);
    this.foodService.dataString$.subscribe((res)=>{
      console.log(res);
      if(res.length == 0){
        console.log("No food items");

      }else{
        this.noFoodItem = false;
        this.foodData = res;
      }
    })
  }

  selectFood(foodItem){
    this.checkOutPrice+=foodItem.price;
    this.orderList.push(foodItem);
    console.log(this.orderList);

    //this.foodService.addOrder(foodItem);
  }
  removeOrder(foodItem){
    this.checkOutPrice-=foodItem.price;
    let index = this.orderList.indexOf(foodItem);
    console.log(index);
    this.orderList.splice(index,1);
    

  }
  addOrder(){
    console.log("Order added");
  }
}
