import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HomeTileImageService {

  constructor(private http: HttpClient) { }

  saveImageService(data): Observable<any> {
    return this.http.post('saveimage', data)
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

  getAllImageBlobData():Observable<any>{
    return this.http.get('/getallimageblobs/',{observe:'response',responseType:'blob'}).pipe(map(res=>{
      console.log('headers')
      console.log(res.headers)
      console.log('body')
      console.log(res.body)
    }))
  }

}


