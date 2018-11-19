import { Component, OnInit, ViewChild } from '@angular/core';
import { Boxes } from 'src/app/models/boxes';
import { BoxModelEditComponent } from '../box-model-edit/box-model-edit.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { BoxesService } from 'src/app/services/boxes.service';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-box-model',
  templateUrl: './box-model.component.html',
  styleUrls: ['./box-model.component.scss']
})
export class BoxModelComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','boxmodel','quantity','retailerprice','wholesalerprice','edit'];
  public boxes: Array<Boxes> = [];
  editHidden:boolean=false;
  addHidden:boolean=false;
   dataSource : MatTableDataSource<Boxes>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private boxesService:BoxesService,private loginservice:LoginService,private router:Router,public dialog: MatDialog) {
    
  }

  ngOnInit(){ 
    this.loginservice.getUserName().subscribe((data:Admin)=>{
    if(data.Identifier==="employee"){
     this.editHidden=true;
     this.addHidden=true;
    }
    });
    this.boxesService.getallBoxes().subscribe(
      (data:Array<Boxes>)=>{
        this.boxes=data;
        this.dataSource = new MatTableDataSource(this.boxes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         }
      }
    }
    
    )
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editboxes(boxes:Boxes){
const dialogRef = this.dialog.open(BoxModelEditComponent,{
  width:"600px",
  data: boxes
});

dialogRef.afterClosed().subscribe(result => {
  // console.log(`Dialog result: ${result}`);
});
  }

}
