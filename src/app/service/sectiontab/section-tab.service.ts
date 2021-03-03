import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionTabService {

  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllImagesForSection(section:string):Observable<any>{
    return this.http.get(this.baseUrl+'sectionimage/'+section)
  }

  private  getHeaders():HttpHeaders{
    return new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem('jwtToken')});
  }

}
