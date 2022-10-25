import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DashboardServiceService } from 'app/service/dashboard-service.service';
import {  uniq } from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'siren', 'CATEGORY'];

    constructor(private router: Router,private service:DashboardServiceService) {
    }
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  sectors:string[];
  sector:any;
  company:any;
  companys:string[];
  allData:any[];
  ngOnInit() {
    localStorage.setItem('test','0');
     this.service
      .users()
      .subscribe((response: any) => {
        this.allData=response;
        this.dataSource= new MatTableDataSource<any>(this.allData);
        this.sectors=uniq(response.map(x => x.sector));
        this.companys=uniq(response.map(x => x.name));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onSectorChange() {
    this.dataSource= new MatTableDataSource<any>(this.allData.filter((word => word.sector ==this.sector)))
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onCompanyChange() {
    this.dataSource= new MatTableDataSource<any>(this.allData.filter((word => word.name ==this.company)))
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};
Detail(ele){
  localStorage.setItem("idBus",ele.id)
  localStorage.setItem("siren",ele.siren)
  this.router.navigate(['/detail']);
}
}
