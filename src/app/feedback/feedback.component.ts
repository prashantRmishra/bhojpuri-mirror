import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {FeedbackServiceService} from '../service/feedback-service.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private feedbackservice: FeedbackServiceService,
    private toastr :ToastrService,
    private route:Router) { }
  
  countries:string[]=['India','Bangladesh','Pakistan','Shri-lanka']

  feedbackData:feedbackModel;
  feedback:FormGroup
  ngOnInit(): void {
     //for form control you can use either FormGroup(here yuo have to specify each controls that could get repetitive)
  // or FormBuilder( Servicw that auto injects controls)
  this.feedback=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    resident:['',Validators.required],
    comment:['']
    })
    /* IMP
    IN HTML you can use formGroupName or  [formGroup] for group name (here 'feedback')
    and formControlName or [formControl] for field name (here 'name','email',etc) */
  
  }

  submitFeedback(){
    console.log(this.feedback.value);
    if(this.feedback.valid){
     this.feedbackData={
       name:this.feedback.controls['name'].value,
       comment:this.feedback.controls['comment'].value,
       email:this.feedback.controls['email'].value,
       resident:this.feedback.controls['resident'].value
     }
      this.feedbackservice.sendFeedback(this.feedbackData).subscribe(data=>{
        console.log('Response: '+data);
        if(data!=null){
          this.toastr.success('Feedback sent successfully')
          this.route.navigate(['/home']);
        }
        else{
          console.log('please enter valid data!!')
          this.toastr.error('Please enter valid information')
        }
      })
    }
    else{
      console.log('please enter valid data!!')
      this.toastr.info('Please enter valid information')
    }
     
  }


}
export interface feedbackModel{
  name:string;
  email:string;
  comment:string;
  resident:string;
}
