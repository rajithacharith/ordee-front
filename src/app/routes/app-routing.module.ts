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
const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'home' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'addfooditem' , component: AddfooditemsComponent},
  {path: 'showfooditems' , component: ShowfooditemsComponent},
  {path: 'merchantDashboard' , component: MerchantdashComponent},
  {path: 'customerDashboard' , component: CustomerdashComponent},
  {path: 'foodItems' , component: FooditemsComponent},
  {path: 'editfooditem' , component: EditfooditemComponent},
  {path: 'merchantList', component: MerchantListComponent },
  {path: 'dashboard' , component: DashboadComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
