import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUser(credentials):Observable<any>{
    return this.http.post('/login',credentials,{headers:this.getHeader()});
  }

  private getHeader(){
    return new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('jwtToken')});
  }
}
