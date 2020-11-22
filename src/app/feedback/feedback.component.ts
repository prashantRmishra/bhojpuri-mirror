import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  
  countries:string[]=['India','Bangladesh','Pakistan','Shri-lanka']
  ngOnInit(): void {
   
  }
  //for form control you can use either FormGroup(here yuo have to specify each controls that could get repetitive)
  // or FormBuilder( Servicw that auto injects controls)
  feedback=this.fb.group({
  name:['',Validators.required],
  email:['',Validators.required],
  resident:['',Validators.required],
  comment:['']
  })
  /* IMP
  IN HTML you can use formGroupName or  [formGroup] for group name (here 'feedback')
  and formControlName or [formControl] for field name (here 'name','email',etc) */

  submitFeedback(){
    console.log(this.feedback.value)
  }


}
