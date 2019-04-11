import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import 'materialize-css';
import { DashboadComponent } from './dashboad/dashboad.component';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { UserlistComponent } from './userlist/userlist.component';
import { AddfooditemsComponent } from './addfooditems/addfooditems.component';
import 'tabulator-tables';
import { ShowfooditemsComponent } from './showfooditems/showfooditems.component';
import { MerchantdashComponent } from './merchantdash/merchantdash.component';
import { CustomerdashComponent } from './customerdash/customerdash.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { EditfooditemComponent } from './editfooditem/editfooditem.component';
import { UploadFileServiceService } from './services/upload-file-service.service';
import { MerchantListComponent } from './merchant-list/merchant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboadComponent,
    UserlistComponent,
    AddfooditemsComponent,
    ShowfooditemsComponent,
    MerchantdashComponent,
    CustomerdashComponent,
    FooditemsComponent,
    EditfooditemComponent,
    MerchantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [UploadFileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
