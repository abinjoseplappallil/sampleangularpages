import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit , AfterViewInit {
  @ViewChild('search', { static: false }) search: any;

  name = 'Ngx Datatables Filter All Columns';
  public temp: Array<object> = [];
  public rows: Array<object> = [];
  public columns: Array<object>;
  constructor(private httpClient: HttpClient) { }
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    fromEvent(this.search.nativeElement, 'keydown')
      .pipe(
        debounceTime(550),
        map(x => x['target']['value'])
      )
      .subscribe(value => {
        this.updateFilter(value);
      });
  }

  updateFilter(val: any) {
    const value = val.toString().toLowerCase().trim();
    // get the amount of columns in the table
    const count = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys(this.temp[0]);
    // assign filtered matches to the active datatable
    this.rows = this.temp.filter(item => {
      // iterate through each row's column data
      for (let i = 0; i < count; i++) {
        // check for a match
        if (
          (item[keys[i]] &&
            item[keys[i]]
              .toString()
              .toLowerCase()
              .indexOf(value) !== -1) ||
          !value
        ) {
          // found match, return true to add to result set
          return true;
        }
      }
    });

    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  findAll() {
   this.httpClient.get('./assets/data/employee.json').subscribe(
      (data: any) => {
        // cache our list
        this.temp = data;

        // push our inital complete list
        this.rows = [...this.temp];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  getDataJson() {
    this.rows = this.temp = [
      {
        "name": "Ethel Price",
        "gender": "female",
        "country": "india"
      },
      {
        "name": "Claudine Neal",
        "gender": "female",
        "country": "USA"
  
      },
      {
        "name": "Beryl Rice",
        "gender": "female",
        "country": "USA"
    
      },
      {
        "name": "Wilder Gonzales",
        "gender": "male",
        "country": "britan"
      },
      {
        "name": "Georgina Schultz",
        "gender": "female",
        "country": "japan"
      },
      {
        "name": "Carroll Buchanan",
        "gender": "male",
        "country": "india"
      },
      {
        "name": "Valarie Atkinson",
        "gender": "female",
        "country": "russia"
      },
      {
        "name": "Schroeder Mathews",
        "gender": "male",
        "country": "bhutan"
      },
      {
        "name": "Lynda Mendoza",
        "gender": "female",
        "country": "kazhakistan"
      },
      {
        "name": "Sarah Massey",
        "gender": "female",
        "country": "kuridistan"
      },
      {
        "name": "Robles Boyle",
        "gender": "male",
        "country": "oman"
      },
      {
        "name": "Evans Hickman",
        "gender": "male",
        "country": "urugyay"
      }
    ];
  }
 

  ngOnInit(): void {
    this.columns = [
      { prop: 'name' }, 
      { prop: 'country', name: 'country' }, 
      { prop: 'gender', name: 'Gender' }
     
    ];

    this.getDataJson();
    // this.findAll();
  }

}
