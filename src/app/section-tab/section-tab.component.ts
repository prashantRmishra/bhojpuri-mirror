import { Component, OnInit } from '@angular/core';
import {SectionTabService} from '../service/sectiontab/section-tab.service'
import { ActivatedRoute } from '@angular/router';
import { HomeTileImageService } from '../service/home-tile-image.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-section-tab',
  templateUrl: './section-tab.component.html',
  styleUrls: ['./section-tab.component.css']
})
export class SectionTabComponent implements OnInit {

  constructor(private sectionService : SectionTabService,
    private router:ActivatedRoute,
    private sanitize:DomSanitizer,
    private imageTileService:HomeTileImageService) { }

  section:any;
  sectionMap = new Map();
  url:any;
  ngOnInit(): void {
    this.router.params.subscribe(data=>{
      this.section  = data['sectionname'];
      this.sectionService.getAllImagesForSection(this.section).subscribe(data=>{
        for(let i=0;i<data.length; i++ ){
          let imgFile:any;
          this.imageTileService.getIamgeById(data[i].id).subscribe(response=>{
            imgFile = URL.createObjectURL(response);
            this.url  = this.sanitize.bypassSecurityTrustUrl(imgFile)
            this.sectionMap.set(data[i].id,[{'url':this.url,'title':data[i].title,
            'date':data[i].date,'shortDes':data[i].shortDescription}])
          })
        }
      })
    })
  }



}
