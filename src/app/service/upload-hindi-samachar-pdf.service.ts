import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadHindiSamacharPDFService {

  constructor(private http: HttpClient) { }
  url = 'hindisamacharpdf'
  baseUrl  = environment.baseUrl
  uplaodHindiSamacharPDF(hindisamacharPDFFormData): Observable<any> {

    return this.http.post(this.baseUrl+this.url, hindisamacharPDFFormData, { responseType: 'text' });
  }

  getHindiSamacharPdffile(fileId): Observable<any> {
    return this.http.get(this.baseUrl+'getfile/'+fileId, { responseType: 'blob' }).pipe(map(res => {
      console.log('the response is ' + res)

      return res;
    }))
  }
  getHidiSamacharPdfFileDetailsForTableService():Observable<any>{
    return this.http.get(this.baseUrl+'getfiledetails',{observe:'body'}).pipe(map(res=>{
      console.log(res);
      return res;
    }))
  }

  deleteHindiSamacharFileDetails(fileid:any):Observable<any>{
    return this.http.delete(this.baseUrl+'deletefiledetails/'+fileid,{observe:'response'});
  }
}
