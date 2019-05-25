import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {

  constructor(private http: HttpClient) { }
  public image;
  async pushFileToStorage(file: FileList){
    let formdata = new FormData(); 
    console.log(file);
    formdata.append('file', file.item(0));
    const headers = new HttpHeaders();
        /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    const requestOpt = { headers: headers}
    this.http.post('/api/merchant/addPhotos',formdata, requestOpt ).subscribe(res => {
      console.log(res);
    }, e =>{
      console.log("Error Occurd")
    });
    
 
    
 
    
  }

  getFile(fileName){
      this.http.get('/api/getImage?image='+fileName).subscribe(
        res =>{
          this.image = res;
          console.log(res);
        }
      )
  }
 
  
}
