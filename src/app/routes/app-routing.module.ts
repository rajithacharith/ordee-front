import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { DashboadComponent } from '../dashboad/dashboad.component';
import { AddfooditemsComponent } from '../addfooditems/addfooditems.component';
import { ShowfooditemsComponent } from '../showfooditems/showfooditems.component';
import { MerchantdashComponent } from '../merchantdash/merchantdash.component';
import { CustomerdashComponent } from '../customerdash/customerdash.component';
import { FooditemsComponent } from '../fooditems/fooditems.component';
import { EditfooditemComponent } from '../editfooditem/editfooditem.component';
import { MerchantListComponent } from '../merchant-list/merchant-list.component';
import { MerchantOrdersComponent } from '../merchant-orders/merchant-orders.component';
import { GuardService } from '../services/guard.service';
import { from } from 'rxjs';
const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'home' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'addfooditem' , component: AddfooditemsComponent, canActivate :[GuardService]},
  {path: 'showfooditems' , component: ShowfooditemsComponent, canActivate :[GuardService]},
  {path: 'merchantDashboard' , component: MerchantdashComponent, canActivate :[GuardService]},
  {path: 'customerDashboard' , component: CustomerdashComponent, canActivate :[GuardService]},
  {path: 'foodItems' , component: FooditemsComponent, canActivate :[GuardService]},
  {path: 'editfooditem' , component: EditfooditemComponent, canActivate :[GuardService]},
  {path: 'merchantList', component: MerchantListComponent, canActivate :[GuardService] },
  {path: 'merchantOrders', component: MerchantOrdersComponent , canActivate :[GuardService] },
  {path: 'dashboard' , component: DashboadComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
