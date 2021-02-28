import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private http:HttpClient) { }
  url='/feedback'
  baseUrl = environment.baseUrl;
  sendFeedback(feedbackData):Observable<any>{
    return this.http.post(this.baseUrl+'feedback',feedbackData,{responseType:'text'});
  }
}
