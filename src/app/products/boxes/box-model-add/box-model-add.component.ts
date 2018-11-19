import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar, MatInput } from '@angular/material';
import { Router } from '@angular/router';
import { Boxes } from 'src/app/models/boxes';
import { BoxesService } from 'src/app/services/boxes.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-box-model-add',
  templateUrl: './box-model-add.component.html',
  styleUrls: ['./box-model-add.component.scss']
})
export class BoxModelAddComponent implements OnInit {

  boxes:Boxes=new Boxes('','','',1,1,1,'');
@ViewChild('nameInput') nameInput: MatInput;
@ViewChild('nameSelect') nameSelect: ElementRef;
  constructor(private boxesService:BoxesService,private loginservice:LoginService,private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.loginservice.getUserName().subscribe((data:Admin)=>{
      if(data.Identifier==="employee"){
        this.router.navigateByUrl('login');
      }
      });
  }
  OnSubmit(){
    this.boxesService.addBoxes(this.boxes).subscribe(
      (data)=>{
      this.snackBar.open("Box Added","Success",{
        duration:4000
      });
this.nameInput.focus();
this.boxes=new Boxes('','','',1,1,1,'');

    },
    
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         
        }else if(err.status===300){
          this.snackBar.open(err.error.error,"Alert",{
            duration:3000
          });
          this.boxes=err.error.data;
          this.nameInput.focus();
          const nameselect=<HTMLInputElement>this.nameSelect.nativeElement;
          setTimeout(function() {  nameselect.select(); }, 50);
         
         
        }
       
      }
    });
  }
}
