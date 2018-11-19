import { Component, OnInit, ViewChild } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandEditComponent } from '../brand-edit/brand-edit.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { Admin } from 'src/app/models/admin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','code','edit','delete'];
  editHidden:boolean=false;
  addHidden:boolean=false;
  deleteHidden:boolean=false;
  public brands: Array<Brand> = [];
  public dataSource = new MatTableDataSource<Brand>(this.brands);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private brandService:BrandService,private loginservice:LoginService,private router:Router,public dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.onload();
    // this.brandService.getallBrand().subscribe(
    //   (data:Array<Brand>)=>{
    //     this.brands=data;
    //     this.dataSource = new MatTableDataSource(this.brands);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    // },
    // (err)=>{
    //   if(err instanceof HttpErrorResponse){
    //     if(err.status===401){
    //       this.router.navigateByUrl('login');
    //      }
    //   }
    // }
    
    // )
    }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editBrand(brand:Brand){
const dialogRef = this.dialog.open(BrandEditComponent,{
  width:"600px",
  data: brand
});

dialogRef.afterClosed().subscribe(result => {
  // console.log(`Dialog result: ${result}`);
});
  }
  deleteBrand(brand:Brand){
    if(confirm('Are You Sure to Delete this Brand ?') === true){
    this.brandService.deleteBrand(brand.uuid).subscribe((response:any)=>{
     this.onload();
    })
  }
}
onload():void{
  this.loginservice.getUserName().subscribe((data:Admin)=>{
    if(data.Identifier==="employee"){
      this.editHidden=true;
      this.addHidden=true;
      this.deleteHidden=true;
    }
   this.brandService.getallBrand().subscribe(
    (data:Array<Brand>)=>{
      this.brands=data;
      this.dataSource = new MatTableDataSource(this.brands);
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
  
  );
});
}
}
