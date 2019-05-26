import { Component, OnInit } from '@angular/core';
import { foodItemDTO } from '../DTO/fooditemDTO';
import { UploadFileServiceService } from '../services/upload-file-service.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FoodserviceService } from '../services/foodservice.service';

@Component({
  selector: 'app-addfooditems',
  templateUrl: './addfooditems.component.html',
  styleUrls: ['./addfooditems.component.css']
})
export class AddfooditemsComponent implements OnInit {
  showFile = false
  fileUploads: Observable<string[]>
  selectedFile: FileList;
  currentFileUpload: FileList;
  fileName: String;
  public pageName;
  progress: { percentage: number } = { percentage: 0 }
  public foodItem;
  constructor(private uploadService: UploadFileServiceService,private foodService: FoodserviceService) {
    this.foodItem = new foodItemDTO();
  }

  ngOnInit() {
    this.pageName = "Add new Food Item"
  }

  async onSubmit() {
    console.log(this.selectedFile.item(0).name);
    await this.upload();
    this.foodService.addfooditem(this.foodItem);

  }

  select(event){
    console.log(event);
    const file = event.target.files.item(0)
    if (file.type.match('image.*')) {
      this.selectedFile = event.target.files;
      } else {
      alert('invalid format!');
    }
  }

  async upload() {
    this.progress.percentage = 0;
    this.foodItem.image = this.selectedFile.item(0).name;
    this.currentFileUpload = this.selectedFile;
    var e = await this.uploadService.pushFileToStorage(this.currentFileUpload);
    
    
 
    this.selectedFile = undefined
  }
}
