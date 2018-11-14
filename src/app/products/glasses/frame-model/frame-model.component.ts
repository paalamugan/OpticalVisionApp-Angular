import { Component, OnInit, ViewChild } from '@angular/core';
import { FrameModel } from 'src/app/models/frame-model';
import { FrameModelEditComponent } from '../frame-model-edit/frame-model-edit.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FrameModelService } from 'src/app/services/frame-model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame-model',
  templateUrl: './frame-model.component.html',
  styleUrls: ['./frame-model.component.scss']
})
export class FrameModelComponent implements OnInit {

  displayedColumns: string[] = ['id', 'brand','model','frametype', 'quantity','retailerPrice','wholesalerPrice','edit'];
  // dataSource: MatTableDataSource<FrameMaterial>;
  public framemodels: Array<FrameModel> = [];
  public dataSource = new MatTableDataSource<FrameModel>(this.framemodels);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private frameModelService:FrameModelService,private router:Router,public dialog: MatDialog) {
    
    
  }

  ngOnInit() {
    this.frameModelService.getallFrameModel().subscribe(
      (data:Array<FrameModel>)=>{
        this.framemodels=data;
        this.dataSource = new MatTableDataSource(this.framemodels);
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
  editFrameModel(framemodel:FrameModel){
 console.log(framemodel);

const dialogRef = this.dialog.open(FrameModelEditComponent,{
  width:"600px",
  data: framemodel
});

dialogRef.afterClosed().subscribe(result => {
  // console.log(`Dialog result: ${result}`);
});
  }

}
