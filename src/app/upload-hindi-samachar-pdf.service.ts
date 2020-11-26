import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadHindiSamacharPDFService {

  constructor(private http:HttpClient) { }
   url='/hindisamacharpdf'
   
  uplaodHindiSamacharPDF(hindisamacharPDFFormData):Observable<any>{
     
    return this.http.post(this.url,hindisamacharPDFFormData,{responseType:'text'});
  }
}
