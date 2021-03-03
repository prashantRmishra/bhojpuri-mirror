import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  loginUser(credentials):Observable<any>{
    return this.http.post(this.baseUrl+'login',credentials);
  }

 
}
