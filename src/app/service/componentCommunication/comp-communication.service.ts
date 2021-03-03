import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompCommunicationService {

  constructor() { }
  private username  = new BehaviorSubject<string>("");
  loggedInuser =  this.username.asObservable();

  setUserNameForSuccesfullLogin(username:string){
    this.username.next(username);
  }
}
