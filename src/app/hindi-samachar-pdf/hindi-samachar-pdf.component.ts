import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UploadHindiSamacharPDFService } from '../service/upload-hindi-samachar-pdf.service'
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog'
import { ModelPopupComponent } from '../popup/model-popup/model-popup.component';
import { CompCommunicationService } from '../service/componentCommunication/comp-communication.service';
@Component({
  selector: 'app-hindi-samachar-pdf',
  templateUrl: './hindi-samachar-pdf.component.html',
  styleUrls: ['./hindi-samachar-pdf.component.css']
})
export class HindiSamacharPDFComponent implements OnInit, AfterViewInit {

  constructor(private fb: FormBuilder,
    private uploadHindiSamacharPDF: UploadHindiSamacharPDFService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private comCommunication:CompCommunicationService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort;
  columnName: string[] = ['number', 'date', 'pdf', 'delete'];
  dataSource = new MatTableDataSource<HindiPDF>(ELEMENT_DATA);

  //file operations
  uploadPDF: boolean = false;
  uploadPdfFile: FormGroup;
  file: File;
  loggedIn='';

  ngOnInit(): void {
    /* Admin user code */
    this.loggedIn = sessionStorage.getItem('jwtToken');
   
    if(this.loggedIn==undefined || this.loggedIn==null)
    this.comCommunication.loggedInuser.subscribe(data=>{
      this.loggedIn=data;
     
    })
    /* Admin user code finish */

    this.uploadPdfFile = this.fb.group({
      fileName: [],

    })
    this.getHidiSamacharPdfFileDetailsForTable();
  }
  ngAfterViewInit() {
    // setTimeout(() => this.dataSource.paginator = this.paginator);
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
        this.uploadPdfFile.controls['fileName'].setValue('');
        if (data != null) {
          this.toastr.success("File uploaded successfully")
          this.dataSource.data.length = 0;
          this.getHidiSamacharPdfFileDetailsForTable();
          

        }
        else {
          this.toastr.error("Couldn't upload file for some reason")
        }
      })
    }
  }

  /* opening clicked row file */
  openfile(data: any) {
    console.log(data)
    sessionStorage.setItem(data, data);
    this.dataSource.data.length = 0;
    this.router.navigate(['/pdf/' + data])

  }
  getHidiSamacharPdfFileDetailsForTable() {
    this.uploadHindiSamacharPDF.getHidiSamacharPdfFileDetailsForTableService().
      subscribe(data => {
        this.dataSource.data.length=0;
        console.log(data);
        if(data!=null)
        for (let index = 0; index < data.length; index++) {
          ELEMENT_DATA.push({
            date: data[index]['date'],
            number: data[index]['id'],
            pdf: data[index]['filename']
          })
          console.log(data[index]['filename'])


        }
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        document.getElementById('hindisamacharpdf').style.display='block';
        document.getElementById('spinner').style.display='none';
        setTimeout(() => {this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort});

      })
  }

  deleteDailogReturnValue: any;
  deleteFile(fileid,filename) {
    const dialogRef = this.dialog.open(ModelPopupComponent, {
      data: {
        filename: filename
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log('dialog after close says ' + data);
      this.deleteDailogReturnValue = data;
      //as it is asyc or rather promis so rest of the code
      //to send file to server should be here only
      /* function block for deleting file  */
      if (this.deleteDailogReturnValue == 'yes') {
        this.uploadHindiSamacharPDF.deleteHindiSamacharFileDetails(fileid).subscribe(data => {
          if (data) {
            this.toastr.success("File deleted successfully")
            this.dataSource.data.length = 0;
            this.getHidiSamacharPdfFileDetailsForTable();
          }
          else {
            this.toastr.info(data)
          }
        })
      }
    })
   
  }

}
export interface HindiPDF {
  number: number;
  date: string;
  pdf: string;

}
const ELEMENT_DATA: HindiPDF[] = [



]
