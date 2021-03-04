import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../service/login/login.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {CompCommunicationService} from '../service/componentCommunication/comp-communication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private loginService:LoginService,
    private toastr:ToastrService,
    private route:Router,
    private compCommunication:CompCommunicationService) { }

  login:FormGroup;
  ngOnInit(): void {
    this.login = this.fb.group({
      emailid:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

 
  isCredentialValid(){
    return this.login.valid
  }
  logInUser(){
    let userLoginData:Credential;
    console.log(this.login.controls['emailid'].value)
    userLoginData={emailId:this.login.controls['emailid'].value,
    password:this.login.controls['password'].value}
    if(userLoginData.emailId!=undefined && userLoginData.password!=undefined){
      this.loginService.loginUser(userLoginData).subscribe(res=>{
        if(res) {
         
          this.toastr.success('Logged In successfully !');
        sessionStorage.setItem('jwtToken',res.token);
        sessionStorage.setItem('user',userLoginData.emailId);
        /* setting obseervable username , so that it's realtime value can be accessed */
        this.compCommunication.setUserNameForSuccesfullLogin(userLoginData.emailId);
        this.route.navigate(['/home']);
      }
        else this.toastr.error('Invalid Credential');
      })
    }
  }
  

}
export interface Credential{
  emailId:string;
  password:string;
}
