import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }
  public condition = true;

  ngOnInit() {
    this.authService.loginSuccess$.subscribe(
      ()=>{
        this.condition = false;
      }
    );
  }

}
