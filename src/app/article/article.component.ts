import { Component, OnInit } from '@angular/core';
import { HomeTileImageService } from '../service/home-tile-image.service'
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ModelPopupComponent } from '../popup/model-popup/model-popup.component';
import { CompCommunicationService } from '../service/componentCommunication/comp-communication.service';

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
    private dialog:MatDialog,
    private compCommunication:CompCommunicationService) { }


  imageFile: any;
  imageFileId: any;;
  imageDescription: any
  fileURL: any;
  title:any;
  section:any
  shortDescription:any;
  news:FormGroup;
  imgid:any;
  loggedIn:any='';

  ngOnInit(): void {
    this.loggedIn = sessionStorage.getItem('jwtToken');
    if(this.loggedIn==undefined || this.loggedIn==null)
    this.compCommunication.loggedInuser.subscribe(data=>{
      this.loggedIn=data;
     
    })
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
          if(this.title!=null && this.title!=undefined && this.title!=''){
            document.getElementById('viewarticle').style.display='block';
            document.getElementById('spinner').style.display='none';
          }
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

  uploadNewsToServer(){
  
    let file = new  FormData();
   
    file.append('image',this.news.controls['imgFile'].value.files[0]);
    file.append('title',this.news.controls['title'].value)
    file.append('section',this.news.controls['section'].value)
    file.append('shortDescription',this.news.controls['shortDescription'].value)
    file.append('description',this.news.controls['description'].value)
    this.imageservice.saveImageService(file).subscribe(data=>{
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