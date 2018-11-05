import { Component, OnInit } from '@angular/core';
import { FrameMaterial } from 'src/app/models/frame-material';
import { FrameMaterialService } from 'src/app/services/frame-material.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-frame-material-add',
  templateUrl: './frame-material-add.component.html',
  styleUrls: ['./frame-material-add.component.scss']
})
export class FrameMaterialAddComponent implements OnInit {
framematerial:FrameMaterial=new FrameMaterial('','',1,1,1,1,'');
  constructor(private frameMaterialService:FrameMaterialService,private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit() {
  }
  OnSubmit(){
    console.log(this.framematerial);
    this.frameMaterialService.addFrameMaterial(this.framematerial).subscribe(
      (data)=>{
        console.log(data);
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         
        }else if(err.status===300){
          this.snackBar.open(err.error,"Alert",{
            duration:3000
          });
        }
       
      }

    }
    );
  }

}
