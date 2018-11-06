import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LensType } from 'src/app/models/lens-type';

@Component({
  selector: 'app-lens-type-edit',
  templateUrl: './lens-type-edit.component.html',
  styleUrls: ['./lens-type-edit.component.scss']
})
export class LensTypeEditComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<LensTypeEditComponent>,@Inject(MAT_DIALOG_DATA) public data: LensType) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.data);
  }

}
