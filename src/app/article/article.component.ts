import { Component, OnInit } from '@angular/core';
import { HomeTileImageService } from '../service/home-tile-image.service'
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private imageservice: HomeTileImageService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }


  imageFile: any;
  imageFileId: any;;
  imageDescription: any
  fileURL: any;
  title:any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.imageFileId = params['fileid'];
      this.imageservice.getIamgeById(this.imageFileId).subscribe(data => {
        this.fileURL = URL.createObjectURL(data);
        this.imageFile = this.sanitizer.bypassSecurityTrustUrl(this.fileURL)
        this.imageservice.getImageDescription(this.imageFileId).subscribe(data => {
          this.imageDescription = data.newsDescription;
          this.title = data.title
        })
      })
    })

  }

}
