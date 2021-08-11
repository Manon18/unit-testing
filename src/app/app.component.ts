import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CarsService } from './services/cars.service';
import { Car } from "./interfaces/car";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  // @ViewChild('agGrid') agGrid: AgGridAngular;
  //
  // public appTitle: string;
  // public rowData: Car[];
  // public succeedMessage: string;
  //
  // public gridOptions = {
  //   columnDefs: [
  //     {
  //       headerName: '',
  //       field: 'machines',
  //       cellStyle: { 'font-size': 'large'},
  //       pinned: 'left',
  //       // rowGroupIndex: 1,
  //       // enableRowGroup: true,
  //       // enablePivot: true,
  //     },
  //     {
  //       headerName: 'The most famous cars',
  //       children: [
  //         { field: 'model', columnGroupShow: 'open' },
  //         { field: '', columnGroupShow: 'closed' },
  //         { field: 'price', columnGroupShow: 'open', filter: 'agNumberColumnFilter' },
  //       ],
  //       enableValue: true,
  //     },
  //     {
  //       headerName: 'Model',
  //       field: 'model',
  //       // enableRowGroup: true,
  //       // enablePivot: true,
  //       headerValueGetter: this.carsHeaderValueGetter,
  //     },
  //     {
  //       headerName: 'Make',
  //       field: 'make',
  //       // enableRowGroup: true,
  //     },
  //     {
  //       headerName: 'Ford',
  //       field: 'ford',
  //       // enableRowGroup: true,
  //       // enablePivot: true,
  //     },
  //     {
  //       headerName: 'Toyota',
  //       field: 'toyota',
  //       // enableRowGroup: true,
  //       // enablePivot: true,
  //     },
  //   ],
  //   defaultColDef: {
  //     flex: 1,
  //     minWidth: 100,
  //     sortable: true,
  //     filter: true,
  //   },
  //   sideBar: 'columns',
  //   rowGroupPanelShow: 'always',
  // };

  constructor(
    // private carsService: CarsService
  ) {
    // this.appTitle = "Welcome to Angular App";
    //
    // this.rowData = this.carsService.getCars();
    // this.succeedMessage = 'Something went wrong';
  }

  public ngOnInit(): void {
    // this.checkIfCarsDataExist();
  }

  // public carsHeaderValueGetter(params: any) {
  //   switch (params.location) {
  //     case 'csv':
  //       return 'CSV Car';
  //     case 'clipboard':
  //       return 'CLIP Car';
  //     case 'toolPanel':
  //       return 'TP Car';
  //     case 'columnDrop':
  //       return 'Model';
  //     case 'header':
  //       return 'Model';
  //     default:
  //       return 'Should never happen!';
  //   }
  // }
  //
  // public checkIfCarsDataExist(): void {
  //   if (this.rowData) {
  //     this.succeedMessage = 'All data is retrieved!';
  //   }
  // }
}
