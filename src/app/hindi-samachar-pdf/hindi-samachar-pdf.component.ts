import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UploadHindiSamacharPDFService } from '../upload-hindi-samachar-pdf.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-hindi-samachar-pdf',
  templateUrl: './hindi-samachar-pdf.component.html',
  styleUrls: ['./hindi-samachar-pdf.component.css']
})
export class HindiSamacharPDFComponent implements OnInit, AfterViewInit {

  constructor(private fb: FormBuilder,
    private uploadHindiSamacharPDF: UploadHindiSamacharPDFService,
    private router: Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator
  columnName: string[] = ['number', 'date', 'pdf'];
  dataSource = new MatTableDataSource<HindiPDF>(ELEMENT_DATA);

  //file operations
  uploadPDF: boolean = false;
  uploadPdfFile: FormGroup;
  file: File;


  ngOnInit(): void {
    this.uploadPdfFile = this.fb.group({
      fileName: [],

    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }



  validFile() {
    return this.uploadPdfFile.valid && this.uploadPdfFile.controls['fileName'].value


  }
  uploadFileToServer() {

    if (this.uploadPdfFile.controls['fileName'].value.files[0].type != 'application/pdf') {
      console.log("select valid file please !!!");
      return;
    }
    let fileToSendToServer: File = this.uploadPdfFile.controls['fileName']
      .value.files[0];
    if (fileToSendToServer != null) {
      var hindisamacharPDFFormData = new FormData();
      hindisamacharPDFFormData.append('hindiSamacharPdfFile', fileToSendToServer)
      this.uploadHindiSamacharPDF.uplaodHindiSamacharPDF(hindisamacharPDFFormData).subscribe(data => {
        console.log(data);
      })
    }
  }

  /* opening clicked row file */
  openfile(data: any) {
    console.log(data)
    sessionStorage.setItem(data, data);
    this.router.navigate(['/pdf/'+data])

  }

}
export interface HindiPDF {
  number: number;
  date: string;
  pdf: string;

}
const ELEMENT_DATA: HindiPDF[] = [
  { number: 1, date: '22/11/2020', pdf: 'demofile.pdf' },
  { number: 2, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 3, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 4, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 5, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 6, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 7, date: '22/11/2020', pdf: '22.11.2020.pdf' },

]
