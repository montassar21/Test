import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { EmployesService } from '../employes.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css'],
})
export class EmployesComponent implements OnInit,AfterViewInit{

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ELEMENT_DATA: PeriodicElement[] = [];
    displayedColumns: string[]=['id', 'firstName', 'lastName', 'age', 'dob', 'email', 'salary', 'address', 'contactNumber'];
  dataSource: any;
  term:any;
  constructor(private dataService: EmployesService) {

  }

  ngOnInit(): void {
    this.fetchData();
    this.dataSource.sort = this.sort;

  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;

  }



    fetchData(): void {
    this.dataService.fetchData().subscribe(
      (response) => {

        this.dataSource = new MatTableDataSource<PeriodicElement>(response); // Update the MatTableDataSource
       this.dataSource.sort = this.sort;       this.dataSource.paginator = this.paginator;


      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  dob: string;
  email: string;
  salary: number;
  address: string;
  contactNumber: string;
}

