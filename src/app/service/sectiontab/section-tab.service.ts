import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionTabService {

  constructor(private http:HttpClient) { }

  getAllImagesForSection(section:string):Observable<any>{
    return this.http.get('/sectionimage/'+section,{headers: this.getHeaders()})
  }

  private  getHeaders():HttpHeaders{
    return new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  }

}
