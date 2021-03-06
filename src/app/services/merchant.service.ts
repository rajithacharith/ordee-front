import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  sharingData = { name: " " };

  // Observable string source
  private dataStringSource = new Subject<string>();

  // Observable string stream
  dataString$ = this.dataStringSource.asObservable();

  private productsObservable: any;
  constructor(private http: HttpClient) { }

  getMerchants(){
    this.http.get("/api/customer/getMerchants").subscribe((res)=>
    {
      console.log(res);
      this.saveData(res);
    })
  
  }

  public saveData(value){
    console.log(value);
    console.log("save data function called " + value + this.sharingData.name);
    
    this.sharingData.name = value;
    console.log(this.sharingData.name)
    this.dataStringSource.next(this.sharingData.name);
  }

  private orderDetails = new Subject<any>();
  public orderDetails$ = this.orderDetails.asObservable();

  public getOrders(merchant){
    this.http.get("/api/merchant/checkOrders?merchantID="+merchant).subscribe(
      res =>{
        console.log(res);
        this.orderDetails.next({orderData : res});
      }
    )
  }

  public setStatus(orderId,status){
    this.http.get("/api/merchant/setStatus?orderId="+orderId+"&status="+status).subscribe(
      (res)=>{
        console.log("Status changed");
      }
    )
  }

  public update(){
    this.http.get("/api/merchant/updateReccomendation").subscribe(
      res => {
        console.log(res);
      }
    )
  }


}
