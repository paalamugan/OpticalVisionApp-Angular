import { Component, OnInit, ViewChild } from '@angular/core';
import { PowerLensType } from 'src/app/models/enums/power-lens-type';
import { LensTypeService } from 'src/app/services/lens-type.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatInput } from '@angular/material';
import { LensType } from 'src/app/models/lens-type';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lens-type-add',
  templateUrl: './lens-type-add.component.html',
  styleUrls: ['./lens-type-add.component.scss']
})
export class LensTypeAddComponent implements OnInit {
  PowerLensType : typeof PowerLensType = PowerLensType;
  powerlenstypes : string[];
  lenstype:LensType=new LensType('','','','',1,1,1,'');
  @ViewChild('powerlensInput') powerlensInput: MatInput;
  constructor(private lenstypeService:LensTypeService,private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit() {
    var x = PowerLensType;
    var options = Object.keys(x);
    this.powerlenstypes = options.slice(options.length / 2);
    this.lenstype.powerlenstype=this.powerlenstypes[0];
    this.lenstype.lensmaterial="Fiber";
  }
  findname(){
    this.lenstypeService.findByName(this.lenstype.powerlenstype,this.lenstype.name)
    .subscribe((lenstype: LensType) => {
      if (lenstype != null) {
        this.lenstype=lenstype;
        this.lenstype.fk_companyid="";
        this.lenstype.uuid="";
      }
    });
  }
  OnSubmit(){
    this.lenstypeService.addLensType(this.lenstype).subscribe(
      (data)=>{
this.snackBar.open("LensType Added","Success",{
  duration:4000
});
this.powerlensInput.focus();
this.lenstype=new LensType('','','','',1,1,1,'');
var x = PowerLensType;
var options = Object.keys(x);
this.powerlenstypes = options.slice(options.length / 2);
this.lenstype.powerlenstype=this.powerlenstypes[0];
this.lenstype.lensmaterial="Fiber";
    },
    
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         
        }else if(err.status===300){
          this.snackBar.open(err.error.error,"Alert",{
            duration:3000
          });
          this.lenstype=err.error.data;
          this.powerlensInput.focus();
          // const nameselect=<HTMLInputElement>this.nameSelect.nativeElement;
          // setTimeout(function() {  nameselect.select(); }, 50);
         
         
        }
       
      }
    });
  }
}
