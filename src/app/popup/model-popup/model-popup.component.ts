import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
  selector: 'app-model-popup',
  templateUrl: './model-popup.component.html',
  styleUrls: ['./model-popup.component.css']
})
export class ModelPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ModelPopupComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.file=data['filename'];
      console.log(data)
    }

    file:any;
  ngOnInit(): void {
    console.log(MAT_DIALOG_DATA)
  }
  onDialogClose(result) {
    this.dialogRef.close(result);
  }

}
