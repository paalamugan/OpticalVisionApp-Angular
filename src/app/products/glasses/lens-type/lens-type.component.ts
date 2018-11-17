import { Component, OnInit, ViewChild } from '@angular/core';
import { LensType } from 'src/app/models/lens-type';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { LensTypeService } from 'src/app/services/lens-type.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LensTypeEditComponent } from '../lens-type-edit/lens-type-edit.component';

@Component({
  selector: 'app-lens-type',
  templateUrl: './lens-type.component.html',
  styleUrls: ['./lens-type.component.scss']
})
export class LensTypeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'index2','index3','index4','index5','index6','index7','edit'];
  // dataSource: MatTableDataSource<FrameMaterial>;
  public lenstypes: Array<LensType> = [];
  public dataSource = new MatTableDataSource<LensType>(this.lenstypes);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private lenstypeService:LensTypeService,private router:Router,public dialog: MatDialog) {
    
  }

  ngOnInit(){
    this.lenstypeService.getallLensType().subscribe(
      (data:Array<LensType>)=>{
        this.lenstypes=data;
        this.dataSource = new MatTableDataSource(this.lenstypes);
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
  editlensType(lenstype:LensType){
const dialogRef = this.dialog.open(LensTypeEditComponent,{
  width:"600px",
  data: lenstype
});

dialogRef.afterClosed().subscribe(result => {
  // console.log(`Dialog result: ${result}`);
});
  }


}
