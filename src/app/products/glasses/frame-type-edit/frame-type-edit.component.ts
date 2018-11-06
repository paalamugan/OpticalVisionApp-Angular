import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FrameType } from 'src/app/models/frame-type';

@Component({
  selector: 'app-frame-type-edit',
  templateUrl: './frame-type-edit.component.html',
  styleUrls: ['./frame-type-edit.component.scss']
})
export class FrameTypeEditComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<FrameTypeEditComponent>,@Inject(MAT_DIALOG_DATA) public data: FrameType) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.data);
  }

}
