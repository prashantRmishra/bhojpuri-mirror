import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadHindiSamacharPDFService } from '../service/upload-hindi-samachar-pdf.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private hindiSamacharService: UploadHindiSamacharPDFService) {
    this.route.params.subscribe(params => {
      this.fileId = params['fileid'];

    })
  }

  fileId: any;
  blob:Blob;
  fileURL:any;
  dateTime = new Date().toLocaleString('en-GB');
  ngOnInit(): void {
    console.log('fileid from params ' + this.fileId)
    this.hindiSamacharService.getHindiSamacharPdffile(this.fileId).
      subscribe(data => {
        console.log('from pdf component ' + data)
        if (data == null) {
          this.pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

        }
        else {
          this.blob = new Blob([data], { type: 'application/pdf' })
          this.fileURL = URL.createObjectURL(this.blob);
          //window.open(fileURL, '_blank');
          console.log(this.fileURL)
          this.pdfSrc = this.fileURL;
        }
      })
  }
  pdfSrc = "";
  goBack() {
    console.log('go back called')
    this.router.navigate(['/hindisamacharpdf'])
  }
  downloadHindiSamacharPdf(){
    saveAs(this.blob,'file_'+this.fileId+'_'+this.dateTime+'.pdf');
  }
  openInBrowser(){
    window.open(this.fileURL)
  }

}
