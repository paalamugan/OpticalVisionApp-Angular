import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FrameMaterial } from 'src/app/models/frame-material';
import { FrameMaterialModel } from 'src/app/models/enums/frame-material-model';
import { FrameMaterialService } from 'src/app/services/frame-material.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame-material-edit',
  templateUrl: './frame-material-edit.component.html',
  styleUrls: ['./frame-material-edit.component.scss']
})
export class FrameMaterialEditComponent implements OnInit {
  FrameMaterialModel : typeof FrameMaterialModel = FrameMaterialModel;
  models : string[];
  constructor( private dialogRef: MatDialogRef<FrameMaterialEditComponent>,private framematerialService:FrameMaterialService,private router:Router,private snackBar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: FrameMaterial) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    var x = FrameMaterialModel;
    var options = Object.keys(x);
    this.models = options.slice(options.length / 2);
  }
  onSubmit(){
    this.framematerialService.updateFrameMaterial(this.data).subscribe(
      ()=>{
        this.dialogRef.close();
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
              this.router.navigateByUrl('login');
        }else{
          this.snackBar.open("Updated Failed","Alert",{
            duration:4000
          });
        }
      }
    }
    );
  }
}
