import { Component, OnInit } from '@angular/core';
import { HomeTileImageService } from '../service/home-tile-image.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private imageTileService: HomeTileImageService,
    private sanitizer: DomSanitizer,
    private fireStore: AngularFirestore,
    private fireStorage: AngularFireStorage) { }

  imageList: Tile[] = [];
  sportImageMap = new Map();
 
  worldImageMap = new Map();

  entertainmentImageMap = new Map();



  url: any;

  ngOnInit(): void {

    this.imageTileService.getAllImages().subscribe(data => {
      if(data!=null || data!=undefined)
      for (let i = 0; i < data.length; i++) {
        this.getImageBlobDataById(data[i].id, data[i].section, data[i].shortDescription,data[i].date,data[i].title);

      }
    });
  }

  url1: any;
  getImageBlobDataById(imgid: any, section: any, des: any,date:any,title:any): string {
    let imgFile: any
    let imgURL: any;
    let imageElelemmt: any;
    this.imageTileService.getIamgeById(imgid).subscribe(data => {
      imgURL = URL.createObjectURL(data);
      imgFile = this.sanitizer.bypassSecurityTrustUrl(imgURL);
      this.url1 = imgFile;

      if (section == 'Sports') {
        this.sportImageMap.set(imgid, [{ 'url': this.url1, 'description': des, 'date': date, 'section': section,'title':title }])

      }
      else if (section == 'World') {
        this.worldImageMap.set(imgid, [{ 'url': this.url1, 'description': des, 'date': date, 'section': section,'title':title  }]);



      }
      else if (section == 'Entertainment')
        this.entertainmentImageMap.set(imgid, [{ 'url': this.url1, 'description': des, 'date': date, 'section': section,'title':title  }])

    })
    return imgFile;
  }

  getImageFromFirebaseStorage(filename: any): string {
    let url: any
    url = this.fireStorage.ref('homepageimaages/' + filename).getDownloadURL().subscribe(data => {

      return data;
    })
    return url;
  }


}
export interface Tile {
  id: String;
  color: string;
  cols: number;
  rows: number;
  text: string;
  imgSrc: any;
  section: string;
  filename: any;
}
export interface card {
  title: any;
  subtitle_date: any;
  imageUrl: any;
  content: any;
}