import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HomeTileImageService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;
  saveImageService(file): Observable<any> {
    return this.http.post(this.baseUrl+'saveimage',file)
  }

  deleteImageFIle(imgId:any) : Observable<any>{
    return this.http.delete(this.baseUrl+'deleteimage/'+imgId,{headers:this.getHeader()});
  }
  getAllImages(): Observable<any> {
    return this.http.get(this.baseUrl+'getimagesforhome')
  }
  getIamgeById(imgid: any): Observable<any> {
    return this.http.get(this.baseUrl+'getimage/' + imgid , {responseType:'blob',observe:'response'})
    .pipe(map(res=>{
      return res.body;


    }));
  }
  getImageDescription(imgid:any):Observable<any>{
    return this.http.get(this.baseUrl+'getimagedescription/'+imgid,{observe:'body'})
  }

  private getHeader(){
    return new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  }

}


