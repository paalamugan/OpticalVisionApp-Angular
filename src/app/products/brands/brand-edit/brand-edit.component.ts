import { Component, OnInit, Inject } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.scss']
})
export class BrandEditComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<BrandEditComponent>,private brandService:BrandService,private router:Router,private snackBar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: Brand) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  onSubmit(){
    this.brandService.updateBrand(this.data).subscribe(
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
