import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  @Output() fire: EventEmitter<any> = new EventEmitter();
  private orderMerchant = new BehaviorSubject('default message');
  merchant = this.orderMerchant.asObservable();
  constructor() { }

  public changeMerchant(merchant){
    this.orderMerchant.next(merchant);
  }

  change() {
    console.log('change started'); 
     this.fire.emit(false);
   }

   getEmittedValue() {
     return this.fire;
   }


}
