import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefs = [
    {
      headerName: '',
      field: 'machines',
      cellStyle: { 'font-size': 'large'},
      pinned: 'left',
      rowGroupIndex: 1,
      enableRowGroup: true,
      enablePivot: true,
    },
    {
      headerName: 'The most famous cars',
      children: [
        { field: 'model', columnGroupShow: 'open' },
        { field: '', columnGroupShow: 'closed' },
        { field: 'price', columnGroupShow: 'open', filter: 'agNumberColumnFilter' },
      ],
      enableValue: true,
    },
    {
      headerName: 'Model',
      field: 'model',
      enableRowGroup: true,
      enablePivot: true,
      headerValueGetter: this.carsHeaderValueGetter,
    },
    {
      headerName: 'Make',
      field: 'make',
      enableRowGroup: true,
    },
    {
      headerName: 'Ford',
      field: 'ford',
      enableRowGroup: true,
      enablePivot: true,
    },
    {
      headerName: 'Toyota',
      field: 'toyota',
      enableRowGroup: true,
      enablePivot: true,
    },
  ];

  gridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: {
      flex: 1,
      minWidth: 100,
      sortable: true,
      filter: true,
    },
    sideBar: 'columns',
    rowGroupPanelShow: 'always',
  };

  rowData: any;

  constructor() {}

  public ngOnInit(): void {
    this.rowData = [
      {make: "Ford", model: "Mondeo", price: 3300, machines: null, ford: "Ford", porsche: "---", toyota: "---"},
      {make: "Porsche", model: "Boxter", price: 72000, machines: null, porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Ford", model: "Mondeo", price: 75000, machines: null, ford: "Ford", porsche: "---", toyota: "---"},
      {make: "Toyota", model: "Celica", price: 35500, machines: "First car", toyota: "Toyota", porsche: "---", ford: "---"},
      {make: "Toyota", model: "Celica", price: 45000, machines: "First car", toyota: "Toyota", porsche: "---", ford: "---"},
      {make: "Porsche", model: "Boxter", price: 72003, machines: "Third car", porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Toyota", model: "Celica", price: 95050, machines: "First car", toyota: "Toyota", porsche: "---", ford: "---"},
      {make: "Toyota", model: "Celica", price: 45400, machines: "First car", toyota: "Toyota", porsche: "---", ford: "---"},
      {make: "Toyota", model: "Celica", price: 25001, machines: "First car", toyota: "Toyota", porsche: "---", ford: "---"},
      {make: "Porsche", model: "Boxter", price: 62050, machines: "Third car", porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Ford", model: "Mondeo", price: 4206, machines: "Second car", ford: "Ford", porsche: "---", toyota: "---"},
      {make: "Ford", model: "Mondeo", price: 32500, machines: "Second car", ford: "Ford", porsche: "---", toyota: "---"},
      {make: "Porsche", model: "Boxter", price: 820000, machines: "Third car", porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Porsche", model: "Boxter", price: 72020, machines: "Third car", porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Porsche", model: "Boxter", price: 72500, machines: "Third car", porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Ford", model: "Mondeo", price: 22800, machines: "Second car", ford: "Ford", porsche: "---", toyota: "---"},
      {make: "Toyota", model: "Celica", price: 9500, machines: "First car", toyota: "Toyota", porsche: "---", ford: "---"},
      {make: "Ford", model: "Mondeo", price: 22050, machines: "Second car", ford: "Ford", porsche: "---", toyota: "---"},
      {make: "Ford", model: "Mondeo", price: 52000, machines: "Second car", ford: "Ford", porsche: "---", toyota: "---"},
      {make: "Porsche", model: "Boxter", price: 72000, machines: "Third car", porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Toyota", model: "Celica", price: 4500, machines: "First car", toyota: "Toyota", porsche: "---", ford: "---"},
      {make: "Porsche", model: "Boxter", price: 7200, machines: "Third car", porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Porsche", model: "Boxter", price: 72000, machines: "Third car", porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Ford", model: "Mondeo", price: 2300, machines: "Second car", ford: "Ford", porsche: "---", toyota: "---"},
      {make: "Porsche", model: "Boxter", price: 72000, machines: "Third car", porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Toyota", model: "Celica", price: 35000, machines: "First car", toyota: "Toyota", porsche: "---", ford: "---"},
      {make: "Porsche", model: "Boxter", price: 72000, machines: "Third car", porsche: "Porsche", ford: "---", toyota: "---"},
      {make: "Toyota", model: "Celica", price: 35000, machines: "First car", toyota: "Toyota", porsche: "---", ford: "---"},
      {make: "Toyota", model: "Celica", price: 35000, machines: "First car", toyota: "Toyota", porsche: "---", ford: "---"},
      {make: "BMV", model: "---", price: 35000, machines: "Fourth car", bmv: "BMW", porsche: "---", ford: "---"},
      {make: "Audi", model: "---", price: 35000, machines: "Fifth car", audi: "Audi", porsche: "---", ford: "---"},
      {make: "Honda", model: "---", price: 35000, machines: "Sixth car", honda: "Honda", porsche: "---", ford: "---"},
      {make: "Volkswagen", model: "---", price: 35000, machines: "Seventh car", volkswagen: "Volkswagen", porsche: "---", ford: "---"},
      {make: "Subaru", model: "---", price: 35000, machines: "Eighth car", subaru: "Subaru", porsche: "---", ford: "---"},
      {make: "Suzuki", model: "---", price: 35000, machines: "Ninth car", suzuki: "Suzuki", porsche: "---", ford: "---"},
      {make: "KIA Motors", model: "---", price: 35000, machines: "Tenth car", KIA_Motors: "KIA Motors", porsche: "---", ford: "---"},
      {make: "Lada", model: "---", price: 2500, machines: "Eleventh car", lada: "Lada", porsche: "---", ford: "---"},
      {make: "Volvo", model: "---", price: 35000, machines: "Twelfth car", volvo: "Volvo", porsche: "---", ford: "---"},
      {make: "Koenigsegg", model: "---", price: 35000, machines: "Thirteenth car", koenigsegg: "Koenigsegg", porsche: "---", ford: "---"},
      {make: "Luxgen", model: "---", price: 95000, machines: "Fourteenth car", luxgen: "Luxgen", porsche: "---", ford: "---"},
      {make: "Vera", model: "---", price: 35000, machines: "Fifteenth car", vera: "Vera", porsche: "---", ford: "---"},
      {make: "Mine", model: "---", price: 65000, machines: "Sixteenth car", mine: "Mine", porsche: "---", ford: "---"},
      {make: "Farbio", model: "---", price: 35000, machines: "Seventeenth car", farbio: "Farbio", porsche: "---", ford: "---"},
      {make: "Alvis", model: "---", price: 35000, machines: "Eighteenth car", alvis: "Alvis", porsche: "---", ford: "---"},
      {make: "Fairthorpe", model: "---", price: 35000, machines: "Nineteenth car", fairthorpe: "Fairthorpe", porsche: "---", ford: "---"},
      {make: "Invicta", model: "---", price: 35000, machines: "Twentieth car", invicta: "Invicta", porsche: "---", ford: "---"},
      {make: "Sunbeam", model: "---", price: 35000, machines: "Twenty-first car", sunbeam: "Sunbeam", porsche: "---", ford: "---"},
      {make: "Trojan", model: "---", price: 35000, machines: "Twenty-second car", trojan: "Trojan", porsche: "---", ford: "---"},
      {make: "Dodge", model: "---", price: 35000, machines: "Twenty-third car", dodge: "Dodge", porsche: "---", ford: "---"},
      {make: "Opel", model: "---", price: 35000, machines: "Twenty-fourth car", opel: "Opel", porsche: "---", ford: "---"},
      {make: "Hummer", model: "---", price: 35000, machines: "Twenty-fifth car", hummer: "Hummer", porsche: "---", ford: "---"},
      {make: "Racefab", model: "---", price: 35000, machines: "Twenty-sixth car", racefab: "Racefab", porsche: "---", ford: "---"},
      {make: "Zimmer", model: "---", price: 35000, machines: "Twenty-seventh", zimmer: "Zimmer", porsche: "---", ford: "---"},
      {make: "Crosley", model: "---", price: 35000, machines: "Twenty-eights", crosley: "Crosley", porsche: "---", ford: "---"},
      {make: "Auburn", model: "---", price: 35000, machines: "Twenty-ninth", auburn: "Auburn", porsche: "---", ford: "---"},
      {make: "Ajax", model: "---", price: 35000, machines: "Thirtieth", ajax: "Ajax", porsche: "---", ford: "---"},
      {make: "Vector", model: "---", price: 35000, machines: "Thirty-first", vector: "Vector", porsche: "---", ford: "---"},
      {make: "Merkur", model: "---", price: 35000, machines: "Thirty-second", merkur: "Merkur", porsche: "---", ford: "---"},
      {make: "Ariel", model: "---", price: 35000, machines: "Thirty-third", ariel: "Ariel", porsche: "---", ford: "---"},
      {make: "Monteverdi", model: "---", price: 35000, machines: "Thirty-fourth", monteverdi: "Monteverdi", porsche: "---", ford: "---"},
      {make: "Revoz", model: "---", price: 35000, machines: "Thirty-fifth", revoz: "Revoz", porsche: "---", ford: "---"},
      {make: "Birkin", model: "---", price: 35000, machines: "Thirty-sixth", birkin: "Birkin", porsche: "---", ford: "---"},
      {make: "Melex", model: "---", price: 35000, machines: "Thirty-seventh", melex: "Melex", porsche: "---", ford: "---"},
      {make: "FSO", model: "---", price: 35000, machines: "Thirty-eighth", FSO: "FSO", porsche: "---", ford: "---"},
      {make: "Arrinera", model: "---", price: 35000, machines: "Thirty-ninth", arrinera: "Arrinera", porsche: "---", ford: "---"},
      {make: "Sazgar", model: "---", price: 35000, machines: "Fortieth", sazgar: "Sazgar", porsche: "---", ford: "---"},
      {make: "Master", model: "---", price: 35000, machines: "Forty-first", master: "Master", porsche: "---", ford: "---"},
      {make: "Cobra", model: "---", price: 35000, machines: "Forty-second", сobra: "Cobra", porsche: "---", ford: "---"},
      {make: "Naza", model: "---", price: 35000, machines: "Forty-third", naza: "Naza", porsche: "---", ford: "---"},
      {make: "Proton", model: "---", price: 35000, machines: "Forty-fourth", proton: "Proton", porsche: "---", ford: "---"},
      {make: "Lexus", model: "---", price: 35000, machines: "Forty-fifth", lexus: "Lexus", porsche: "---", ford: "---"},
      {make: "Infiniti", model: "---", price: 35000, machines: "Forty-sixth", infiniti: "Infiniti", porsche: "---", ford: "---"},
      {make: "Nissan", model: "---", price: 35000, machines: "Forty-seventh", nissan: "Nissan", porsche: "---", ford: "---"},
      {make: "Mazda", model: "---", price: 35000, machines: "Forty-eighth", mazda: "Mazda", porsche: "---", ford: "---"}
    ]

    // this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json').subscribe((res) => console.log(res));
  }

  public carsHeaderValueGetter(params: any) {
    switch (params.location) {
      case 'csv':
        return 'CSV Car';
      case 'clipboard':
        return 'CLIP Car';
      case 'toolPanel':
        return 'TP Car';
      case 'columnDrop':
        return 'Model';
      case 'header':
        return 'Model';
      default:
        return 'Should never happen!';
    }
  }
}
