import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { FrameModel } from 'src/app/models/frame-model';
import { Router } from '@angular/router';
import { FrameModelService } from 'src/app/services/frame-model.service';
import { Brand } from 'src/app/models/brand';
import { FrameType } from 'src/app/models/enums/frame-type';
import { FormControl } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-frame-model-edit',
  templateUrl: './frame-model-edit.component.html',
  styleUrls: ['./frame-model-edit.component.scss']
})
export class FrameModelEditComponent implements OnInit {
  brands: Array<Brand> = [];
  brand:Brand;
  FrameType : typeof FrameType = FrameType;
  myControl = new FormControl();
  frametypes : string[];
  filteredOptions: Observable<Brand[]>;
  constructor( private dialogRef: MatDialogRef<FrameModelEditComponent>,private framemodelService:FrameModelService,private brandService:BrandService,private router:Router,private snackBar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: FrameModel) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    var x = FrameType;
    var options = Object.keys(x);
    this.frametypes = options.slice(options.length / 2);
    this.brandService.getallBrand().subscribe(
      (data:Array<Brand>)=>{
        this.brands=data;
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         }
      }
    }
  );
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  );
  this.myControl.setValue(this.data.brand.name);
  }
  private _filter(value: string): Brand[] {
    const filterValue = value.toLowerCase();
      return this.brands.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  onSelectionChange(event,brand:Brand){
    if(event.isUserInput){
      this.data.brand=brand;
    }
     }
    
     onSubmit(){
      this.framemodelService.updateFrameModel(this.data).subscribe(
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
