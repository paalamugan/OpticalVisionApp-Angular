import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FrameMaterial } from 'src/app/models/frame-material';
import { FrameMaterialService } from 'src/app/services/frame-material.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar, MatInput } from '@angular/material';
import { FrameMaterialModel } from 'src/app/models/enums/frame-material-model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-frame-material-add',
  templateUrl: './frame-material-add.component.html',
  styleUrls: ['./frame-material-add.component.scss']
})
export class FrameMaterialAddComponent implements OnInit {
  selected:string="";
  FrameMaterialModel : typeof FrameMaterialModel = FrameMaterialModel;
framematerial:FrameMaterial=new FrameMaterial('','',1,this.selected,1,1,1,'');
models : string[];
@ViewChild('quantityInput') Quantity: MatInput;
@ViewChild('retailerpriceInput') RetailerPrice: MatInput;
@ViewChild('nameInput') nameInput: MatInput;
@ViewChild('nameSelect') nameSelect: ElementRef;
@ViewChild('QuantitySelect') QuantitySelect: ElementRef;
@ViewChild('retailerpriceSelect') retailerpriceSelect: ElementRef;

  constructor(private frameMaterialService:FrameMaterialService,private router:Router,private snackBar:MatSnackBar) { }
 
  ngOnInit() {
    var x = FrameMaterialModel;
    var options = Object.keys(x);
    this.models = options.slice(options.length / 2);
    this.selected=this.models[0];
    this.nameInput.focus();
    this.framematerial.model=this.models[0];
  }
  OnSubmit(form){
    // if(this.framematerial.quantity <= 0){
    // this.frameMaterialService.getDummuyValue(this.framematerial).subscribe(
    //   (data:FrameMaterial)=>{
    //     this.framematerial=data;
    //     this.Quantity.focus();
    //     const select=<HTMLInputElement>this.QuantitySelect.nativeElement;
    //     setTimeout(function() {  select.select(); }, 50);
    //     this.snackBar.open("Quantity is Greater Zero","Alert",{
    //      duration:3000
    //    });
    // })
    //   }else if(this.framematerial.retailerPrice <= 0){
    //     this.frameMaterialService.getDummuyValue(this.framematerial).subscribe(
    //       (data:FrameMaterial)=>{
    //         this.framematerial=data;
    //         this.RetailerPrice.focus();
    //         const select=<HTMLInputElement>this.retailerpriceSelect.nativeElement;
    //         setTimeout(function() {  select.select(); }, 50);
    //         this.snackBar.open("RetailerPrice is Greater Zero","Alert",{
    //          duration:3000
    //        });
    //     })
    //   }
    //   else{
this.frameMaterialService.addFrameMaterial(this.framematerial).subscribe(
      (data)=>{
        this.snackBar.open("Frame Material Added","Success",{
          duration:4000
        });
        this.nameInput.focus();
        this.framematerial=new FrameMaterial('','',1,this.selected,1,1,1,'');
        
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         
        }else if(err.status===300){
          this.snackBar.open(err.error.error,"Alert",{
            duration:3000
          });
          this.framematerial=err.error.data;
          this.nameInput.focus();
          const nameselect=<HTMLInputElement>this.nameSelect.nativeElement;
          setTimeout(function() {  nameselect.select(); }, 50);
         
         
        }
       
      }

    }
    );
 // }
  }
}
