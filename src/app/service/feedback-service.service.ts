import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private http:HttpClient) { }
  url='/feedback'
  sendFeedback(feedbackData):Observable<any>{
    return this.http.post(this.url,feedbackData,{responseType:'text'});
  }
}
