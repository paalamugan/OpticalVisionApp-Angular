import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FrameModel } from 'src/app/models/frame-model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FrameType } from 'src/app/models/enums/frame-type';
import { MatSnackBar, MatInput } from '@angular/material';
import { FrameModelService } from 'src/app/services/frame-model.service';
import { Admin } from 'src/app/models/admin';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-frame-model-add',
  templateUrl: './frame-model-add.component.html',
  styleUrls: ['./frame-model-add.component.scss']
})
export class FrameModelAddComponent implements OnInit {
 brands: Array<Brand> = [];
 brand:Brand;
 FrameType : typeof FrameType = FrameType;
 framemodel:FrameModel=new FrameModel('',this.brand,'','',1,1,1,1,'');
 myControl = new FormControl();
 frametypes : string[];
 brandhidden:boolean=true;
 @ViewChild('nameInput') nameInput: MatInput;
@ViewChild('nameSelect') nameSelect: ElementRef;
//  options: string[] = ['One', 'Two', 'Three'];
 filteredOptions: Observable<Brand[]>;
  constructor(private brandService:BrandService,private loginservice:LoginService,private framemodelService:FrameModelService,private router:Router,private snackBar:MatSnackBar ) { }

  ngOnInit() {
    this.loginservice.getUserName().subscribe((data:Admin)=>{
      if(data.Identifier==="employee"){
        this.router.navigateByUrl('login');
      }
      });
    var x = FrameType;
    var options = Object.keys(x);
    this.frametypes = options.slice(options.length / 2);
    this.framemodel.frametype=this.frametypes[0];
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
  }
  private _filter(value: string): Brand[] {
    const filterValue = value.toLowerCase();
      return this.brands.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  onSelectionChange(event,brand:Brand){
    if(event.isUserInput){
      this.framemodel.brand=brand;
      this.brandhidden=false;
    }
     
    
  }
  findmodel(){
    // var x =(<HTMLInputElement>(document.getElementById("findModel")));
    // x.value =x.value,
    this.framemodelService.findByModel(this.framemodel.model,this.framemodel.brand.uuid)
    .subscribe((framemodel: FrameModel) => {
      if (framemodel != null) {
        this.framemodel=framemodel;
        this.framemodel.fk_companyid="";
        this.framemodel.uuid="";
         // this.framemodel = new FrameModel('',this.brand,'','',1,1,1,1,'');
      }
    });
   }
  OnSubmit(myControl){
this.framemodelService.addFrameModel(this.framemodel).subscribe(
      (data)=>{
        this.snackBar.open("Frame Model Added","Success",{
          duration:4000
        });
        this.nameInput.focus();
        this.brandhidden=true;
        this.framemodel=new FrameModel('',this.brand,'','',1,1,1,1,'');
        var x = FrameType;
        var options = Object.keys(x);
        this.frametypes = options.slice(options.length / 2);
        this.framemodel.frametype=this.frametypes[0];
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         
        }else if(err.status===300){
          this.snackBar.open(err.error.error,"Alert",{
            duration:3000
          });
          this.framemodel=err.error.data;
          this.myControl.setValue(this.framemodel.brand.name);
          this.nameInput.focus();
          const nameselect=<HTMLInputElement>this.nameSelect.nativeElement;
          setTimeout(function() {  nameselect.select(); }, 50);
         
         
        }
       
      }

    }
    );
  }
}
