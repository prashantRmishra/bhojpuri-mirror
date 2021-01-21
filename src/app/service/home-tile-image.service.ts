import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HomeTileImageService {

  constructor(private http: HttpClient) { }

  saveImageService(file): Observable<any> {
    return this.http.post('/saveimage',file)
  }

  deleteImageFIle(imgId:any) : Observable<any>{
    return this.http.delete('/deleteimage/'+imgId,{headers:this.getHeader()});
  }
  getAllImages(): Observable<any> {
    return this.http.get('/getallimagefiles')
  }
  getIamgeById(imgid: any): Observable<any> {
    return this.http.get('/getimage/' + imgid , {responseType:'blob',observe:'response'})
    .pipe(map(res=>{
      return res.body;


    }));
  }
  getImageDescription(imgid:any):Observable<any>{
    return this.http.get('/getimagedescription/'+imgid,{observe:'body'})
  }

  private getHeader(){
    return new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  }

}


