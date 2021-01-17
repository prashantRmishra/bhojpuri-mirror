import { Component, OnInit } from '@angular/core';
import { HomeTileImageService } from '../service/home-tile-image.service'
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ModelPopupComponent } from '../popup/model-popup/model-popup.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private imageservice: HomeTileImageService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private toastr:ToastrService,
    private fb : FormBuilder,
    private router:Router,
    private dialog:MatDialog) { }


  imageFile: any;
  imageFileId: any;;
  imageDescription: any
  fileURL: any;
  title:any;
  section:any
  shortDescription:any;
  news:FormGroup;
  imgid:any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.imageFileId = params['fileid'];
      this.imageservice.getIamgeById(this.imageFileId).subscribe(data => {
        this.fileURL = URL.createObjectURL(data);
        this.imageFile = this.sanitizer.bypassSecurityTrustUrl(this.fileURL)
        this.imageservice.getImageDescription(this.imageFileId).subscribe(data => {
          this.imageDescription = data.newsDescription;
          this.title = data.title
          this.section = data.section;
          this.shortDescription=data.shortDescription;
          this.imgid=data.id;
        })
      })
    })


    //form bulder 
    this.news= this.fb.group({
      title:[this.title,[Validators.required,Validators.maxLength(20)]],
      shortDescription:[this.shortDescription,[Validators.required,Validators.maxLength(150)]],
      imgFile:['',[Validators.required]],
      description:[this.imageDescription,[Validators.required]],
      section:[this.section,[Validators.required]]

    })
  }

  viewDetails:boolean=true;
  editArticlePage(){
    this.viewDetails=false;
  }
  validNews(){
    return this.news.valid;
  }
  //uploading file to servre 
  newsInfo =new Map();
  uploadNewsToServer(){
    console.log('title '+this.news.controls['title'].value+' decription '+this.news.controls['description'].value);
   this.newsInfo.set(' title',this.news.controls['title'].value)
   this.newsInfo.set(' newsDescription',this.news.controls['description'].value)
   this.newsInfo.set('shortDescription',this.news.controls['shortDescription'].value)
   this.newsInfo.set('section',this.news.controls['section'].value)
    let file = new  FormData();
   
    file.append('image',this.news.controls['imgFile'].value.files[0]);
    this.imageservice.saveImageService(file,this.news.controls['title'].value,
    this.news.controls['section'].value,
    this.news.controls['shortDescription'].value,
    this.news.controls['description'].value
    ).subscribe(data=>{
      if(data!=null) {this.toastr.success("News uploaded sucessfully !");
    this.router.navigate(['/section/'+this.section])}
      else this.toastr.error(data);
    })
  }


  deleteNews(){
    const dialog = this.dialog.open(ModelPopupComponent,{data:{
      filename:'this news '
    }});
    dialog.afterClosed().subscribe(data=>{
      if(data=='yes'){
        this.imageservice.deleteImageFIle(this.imgid).subscribe(res=>{
          if(res){
            this.toastr.success('Article deleted succesfully !');
            this.router.navigate(['/section/'+this.section])
          }
          else this.toastr.error(res)
        })
      }
    })
  }

}
export interface HomeTilePageModel{
  title:any;
  shortDescription:any;
  newsDescription:any;
  section:any;
}
