import { Component, OnInit, Input, SimpleChanges, ChangeDetectorRef, ViewChild } from '@angular/core';
import { SortType, ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @Input() searchResult = [];
  
  tableColumnNames = [];
  tableColumnValues = [];
  tableColumnsDisplay = [];
  rows = [];
  columns = [];
  temp = [];
  ColumnMode = ColumnMode;
  SortType = SortType;

  ngOnInit() {
    /* this.dataSource.paginator = this.paginator; */
  }

  constructor() {


  }




  ngOnChanges() {

    this.dataMapTable();
  }

  dataMapTable() {
    this.rows = this.searchResult;
    this.temp=this.searchResult;
    this.tableColumnNames = [];
    this.tableColumnValues = [];
    this.tableColumnsDisplay = [];

    if (this.searchResult.length > 0) {
      this.tableColumnNames = Object.keys(this.searchResult[0]);

      for (let i = 0; i < this.tableColumnNames.length; i++) {
        var str='';
        var objColumn={};
        str = this.tableColumnNames[i];
        str = str.substring(str.indexOf("_") + 1);
        str = str.replace(/_/g, " ");
        console.log("str",str);
        objColumn = { prop: this.tableColumnNames[i], name:str.toUpperCase() };
        this.columns.push(objColumn);
      }
    }
    //this.columns=this.tableColumnsDisplay;

   


  }
  
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }



}
