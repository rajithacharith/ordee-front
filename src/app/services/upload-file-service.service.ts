import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {

  constructor(private http: HttpClient) { }

  async pushFileToStorage(file: FileList): Promise<Observable<HttpEvent<{}>>> {
    let formdata = new FormData(); 
    console.log(file);
    formdata.append('file', file.item(0));
    const headers = new HttpHeaders();
        /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    const requestOpt = { headers: headers}
    this.http.post('http://localhost:8080/api/merchant/addPhotos',formdata, requestOpt ).subscribe(e => {
      console.log(e);
    })
    
 
    const req = new HttpRequest('POST', 'http://localhost:8080/api/merchant/addPhotos', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
 
  
}
