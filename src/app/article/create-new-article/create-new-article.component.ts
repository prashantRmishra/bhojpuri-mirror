import { Component, OnInit } from '@angular/core';
import { HomeTileImageService } from 'src/app/service/home-tile-image.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-new-article',
  templateUrl: './create-new-article.component.html',
  styleUrls: ['./create-new-article.component.css']
})
export class CreateNewArticleComponent implements OnInit {

  constructor(private imageservice: HomeTileImageService,
    private toastr:ToastrService,
    private fb : FormBuilder,
    private router:Router,
    private dialog:MatDialog) { }

    imageFile: any;
    imageFileId: any;;
    description: any
    title:any;
    section:any
    shortDescription:any;
    news:FormGroup;
    imgid:any;
  ngOnInit(): void {

     //form bulder 
     this.news= this.fb.group({
      title:['',[Validators.required,Validators.maxLength(20)]],
      shortDescription:['',[Validators.required,Validators.maxLength(150)]],
      imgFile:['',[Validators.required]],
      description:['',[Validators.required]],
      section:['',[Validators.required]]

    })
  }


  validNews(){
    return this.news.valid;
  }
  //uploading file to servre 

  uploadNewsToServer(){
   
    let file = new  FormData();
   
    file.append('image',this.news.controls['imgFile'].value.files[0]);
    file.append('title',this.news.controls['title'].value)
    file.append('section',this.news.controls['section'].value)
    file.append('shortDescription',this.news.controls['shortDescription'].value)
    file.append('description',this.news.controls['description'].value)
    this.imageservice.saveImageService(file).subscribe(data=>{
      if(data!=null) {this.toastr.success("News uploaded sucessfully !");
    this.router.navigate(['/section/'+ this.news.controls['section'].value])}
      else this.toastr.error(data);
    })
  }


}
