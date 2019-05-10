import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FoodserviceService } from '../services/foodservice.service';
import { Subject } from 'rxjs';
declare var $:any;
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
  public loading = false;
  private recomendation;
  private hasRecomendation = false;
  constructor(private data: DataService,private foodService: FoodserviceService) { }

  ngOnInit() {
    $(document).ready(function(){
      $('select').formSelect();
    });
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    }); 

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

    this.foodService.orderSuccess$.subscribe(
      ()=>{
        this.orderSucessPopUp();
      }
    )
    this.foodService.recomendationSuccess$.subscribe(
      (message) => {
        console.log(message.data);
        this.recomendation = message.data;
        if(this.recomendation.length>0){
          this.hasRecomendation = true;
        }
        else{
        this.hasRecomendation = false;
        }
      }
    )
  }

  selectFood(foodItem){
    this.checkOutPrice+=foodItem.price;
    this.orderList.push(foodItem);
    this.foodService.getRecomendations(this.orderList);
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
    this.loading = true;
    console.log("Loading : ",this.loading);
    console.log("Order added");
    this.foodService.addOrder(this.orderList);
  }

  orderSucessPopUp(){
    this.loading = false;
    console.log("Loading : ",this.loading);
    $('#orderSuccess').modal('open');
  }

  clearData(){
    this.checkOutPrice =0;
    this.orderList = new Array();
    console.log(this.orderList,this.checkOutPrice);
  }

 

}
