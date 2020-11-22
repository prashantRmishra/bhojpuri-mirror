import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hindi-samachar-pdf',
  templateUrl: './hindi-samachar-pdf.component.html',
  styleUrls: ['./hindi-samachar-pdf.component.css']
})
export class HindiSamacharPDFComponent implements OnInit,AfterViewInit {

  constructor() { }
   @ViewChild(MatPaginator) paginator:MatPaginator
  columnName: string[] = ['number', 'date', 'pdf'];
  dataSource = new MatTableDataSource<HindiPDF>(ELEMENT_DATA);

  //file operations
  
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator
  }

}
export interface HindiPDF {
  number: number;
  date: string;
  pdf: string;

}
const ELEMENT_DATA: HindiPDF[] = [
  { number: 1, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 2, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 3, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 4, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 5, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 6, date: '22/11/2020', pdf: '22.11.2020.pdf' },
  { number: 7, date: '22/11/2020', pdf: '22.11.2020.pdf'},
 
]
