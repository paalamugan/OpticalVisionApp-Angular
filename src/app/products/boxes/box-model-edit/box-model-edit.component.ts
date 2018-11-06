import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Boxes } from 'src/app/models/boxes';

@Component({
  selector: 'app-box-model-edit',
  templateUrl: './box-model-edit.component.html',
  styleUrls: ['./box-model-edit.component.scss']
})
export class BoxModelEditComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<BoxModelEditComponent>,@Inject(MAT_DIALOG_DATA) public data: Boxes) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.data);
  }

}
