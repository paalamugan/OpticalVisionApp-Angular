import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatInput } from '@angular/material';
import { Brand } from 'src/app/models/brand';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.scss']
})
export class BrandAddComponent implements OnInit {
brand:Brand=new Brand('','','','');
@ViewChild('nameInput') nameInput: MatInput;
@ViewChild('nameSelect') nameSelect: ElementRef;
  constructor(private brandService:BrandService,private loginservice:LoginService,private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.loginservice.getUserName().subscribe((data:Admin)=>{
      if(data.Identifier==="employee"){
        this.router.navigateByUrl('login');
      }
      });
  }
  OnSubmit(form){
    
this.brandService.addBrand(this.brand).subscribe(
      (data)=>{
        this.snackBar.open("Brand Added","Success",{
          duration:4000
        });
        this.nameInput.focus();
        this.brand=new Brand('','','','');
        
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         
        }else if(err.status===300){
          this.snackBar.open(err.error.error,"Alert",{
            duration:3000
          });
          this.brand=err.error.data;
          this.nameInput.focus();
          const nameselect=<HTMLInputElement>this.nameSelect.nativeElement;
          setTimeout(function() {  nameselect.select(); }, 50);
         
         
        }
       
      }

    }
    );
  }
}
