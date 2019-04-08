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
  selectedFile: any;
  currentFileUpload: FileList;
  fileName: String;
  progress: { percentage: number } = { percentage: 0 }
  public foodItem;
  constructor(private uploadService: UploadFileServiceService,private foodService: FoodserviceService) {
    this.foodItem = new foodItemDTO();
  }

  ngOnInit() {
  }

  async onSubmit() {
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
    this.foodItem.image.push(this.fileName);
    this.currentFileUpload = this.selectedFile;
    var e = await this.uploadService.pushFileToStorage(this.currentFileUpload);
    console.log(e);
    // this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress) {
    //     this.progress.percentage = Math.round(100 * event.loaded / event.total);
    //     console.log(this.progress.percentage);
    //   } else if (event instanceof HttpResponse) {
    //     console.log('File is completely uploaded!');
    //   }
    // })
 
    this.selectedFile = undefined
  }
}
