import { Injectable } from '@angular/core';
import {foodItemDTO} from '../DTO/fooditemDTO';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {
  private http: any;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.http = httpClient;
  }
  public addfooditem(fooditem: foodItemDTO) {
    // const data = JSON.parse(localStorage.getItem('user'));
    // fooditem.merchantId = data.merchantID;
    fooditem.merchantID = "5001";
    console.log(fooditem);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    this.http.post('http://localhost:8080/api/merchant/addFoodItem', fooditem, headers).subscribe(res => {
        console.log(res);
        this.router.navigate(['/dashboard']);
    });


  }

  async showFoodItems() {
    // const data = JSON.parse(localStorage.getItem('user'));
    // const merchantId = data.merchantID;
    const merchantId = '3001';
    const headers = new Headers();
    let fooditemData;
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    try {
      // fooditemData = this.http.get('http://localhost:8080/api/merchant/checkFoodItems?merchantID=' + merchantId, headers);
      fooditemData = [
        {id: 1, name: 'Billy Bob', age: '12', gender: 'male', height: 1, col: 'red', dob: '', cheese: 1},
        {id: 2, name: 'Mary May', age: '1', gender: 'female', height: 2, col: 'blue', dob: '14/05/1982', cheese: true},
        {id: 3, name: 'Christine Lobowski', age: '42', height: 0, col: 'green', dob: '22/05/1982', cheese: 'true'},
        {id: 4, name: 'Brendon Philips', age: '125', gender: 'male', height: 1, col: 'orange', dob: '01/08/1980'},
        {id: 5, name: 'Margret Marmajuke', age: '16', gender: 'female', height: 5, col: 'yellow', dob: '31/01/1999'},
        {id: 6, name: 'Billy Bob', age: '12', gender: 'male', height: 1, col: 'red', dob: '', cheese: 1},
        {id: 7, name: 'Mary May', age: '1', gender: 'female', height: 2, col: 'blue', dob: '14/05/1982', cheese: true},
        {id: 8, name: 'Christine Lobowski', age: '42', height: 0, col: 'green', dob: '22/05/1982', cheese: 'true'},
        {id: 9, name: 'Brendon Philips', age: '125', gender: 'male', height: 1, col: 'orange', dob: '01/08/1980'},
        {id: 10, name: 'Margret Marmajuke', age: '16', gender: 'female', height: 5, col: 'yellow', dob: '31/01/1999'},
      ];
      console.log(fooditemData);
    } catch (e) {
      const fooditemData = [
        {id: 1, name: 'Billy Bob', age: '12', gender: 'male', height: 1, col: 'red', dob: '', cheese: 1},
        {id: 2, name: 'Mary May', age: '1', gender: 'female', height: 2, col: 'blue', dob: '14/05/1982', cheese: true},
        {id: 3, name: 'Christine Lobowski', age: '42', height: 0, col: 'green', dob: '22/05/1982', cheese: 'true'},
        {id: 4, name: 'Brendon Philips', age: '125', gender: 'male', height: 1, col: 'orange', dob: '01/08/1980'},
        {id: 5, name: 'Margret Marmajuke', age: '16', gender: 'female', height: 5, col: 'yellow', dob: '31/01/1999'},
        {id: 6, name: 'Billy Bob', age: '12', gender: 'male', height: 1, col: 'red', dob: '', cheese: 1},
        {id: 7, name: 'Mary May', age: '1', gender: 'female', height: 2, col: 'blue', dob: '14/05/1982', cheese: true},
        {id: 8, name: 'Christine Lobowski', age: '42', height: 0, col: 'green', dob: '22/05/1982', cheese: 'true'},
        {id: 9, name: 'Brendon Philips', age: '125', gender: 'male', height: 1, col: 'orange', dob: '01/08/1980'},
        {id: 10, name: 'Margret Marmajuke', age: '16', gender: 'female', height: 5, col: 'yellow', dob: '31/01/1999'},
      ];

    }
    console.log(fooditemData);
    return fooditemData;

  }
}
