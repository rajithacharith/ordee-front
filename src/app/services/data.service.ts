import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private orderMerchant = new BehaviorSubject('default message');
  merchant = this.orderMerchant.asObservable();
  constructor() { }

  public changeMerchant(merchant){
    this.orderMerchant.next(merchant);
  }
}
