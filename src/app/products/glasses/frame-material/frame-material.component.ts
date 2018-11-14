import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { FrameMaterialService } from 'src/app/services/frame-material.service';
import { Router } from '@angular/router';
import { FrameMaterial } from 'src/app/models/frame-material';
import { HttpErrorResponse } from '@angular/common/http';
import { FrameMaterialEditComponent } from '../frame-material-edit/frame-material-edit.component';
@Component({
  selector: 'app-frame-material',
  templateUrl: './frame-material.component.html',
  styleUrls: ['./frame-material.component.scss']
})
export class FrameMaterialComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','model', 'size', 'quantity','retailerPrice','wholesalerPrice','edit'];
  // dataSource: MatTableDataSource<FrameMaterial>;
  public framematerials: Array<FrameMaterial> = [];
  public dataSource = new MatTableDataSource<FrameMaterial>(this.framematerials);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private frameMaterialService:FrameMaterialService,private router:Router,public dialog: MatDialog) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    
  }

  ngOnInit() {
    this.frameMaterialService.getallFrameMaterial().subscribe(
      (data:Array<FrameMaterial>)=>{
        this.framematerials=data;
        this.dataSource = new MatTableDataSource(this.framematerials);
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
  editFrameMaterial(framematerial:FrameMaterial){
// console.log(framematerial);

const dialogRef = this.dialog.open(FrameMaterialEditComponent,{
  width:"600px",
  data: framematerial
});

dialogRef.afterClosed().subscribe(result => {
  // console.log(`Dialog result: ${result}`);
});
  }
}

