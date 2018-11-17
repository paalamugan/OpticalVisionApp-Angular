import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { LensType } from 'src/app/models/lens-type';
import { PowerLensType } from 'src/app/models/enums/power-lens-type';
import { LensTypeService } from 'src/app/services/lens-type.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lens-type-edit',
  templateUrl: './lens-type-edit.component.html',
  styleUrls: ['./lens-type-edit.component.scss']
})
export class LensTypeEditComponent implements OnInit {
  PowerLensType : typeof PowerLensType = PowerLensType;
  powerlenstypes : string[];
  constructor( private dialogRef: MatDialogRef<LensTypeEditComponent>, private lenstypeService:LensTypeService,private router:Router,private snackBar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: LensType) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    var x = PowerLensType;
    var options = Object.keys(x);
    this.powerlenstypes = options.slice(options.length / 2);
  }
  onSubmit(){
    this.lenstypeService.updateLensType(this.data).subscribe(
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
