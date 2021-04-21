import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit , AfterViewInit {
  @ViewChild('search', { static: false }) search: any;
  
  countries: any = ['India', 'britan', 'japan', 'india','russia',  'USA'];
  
  gender: any = ['Male','Female'];
  country = new FormGroup({ 
    'countryname':new FormControl(),
 
    'gender':new FormControl(),
    
  })
  public temp: Array<object> = [];
  public rows: Array<object> = [];
  public columns: Array<object>;
  public nameselected:string=" ";
  public countryelected:string="choose country";
  public genderelected:string="choose gender";
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
  
      if (
        (item[keys[0]] &&
          item[keys[0]]
            .toString()
            .toLowerCase()
            .indexOf(value) == 0) ||
        !value
      ) {
        // found match, return true to add to result set
        return true;
      }
      // iterate through each row's column data
      
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
        "country": "USA"
      },
      {
        "name": "Lynda Mendoza",
        "gender": "female",
        "country": "india"
      },
      {
        "name": "Sarah Massey",
        "gender": "female",
        "country": "India"
      },
      {
        "name": "Robles Boyle",
        "gender": "male",
        "country": "japan"
      },
      {
        "name": "Evans Hickman",
        "gender": "male",
        "country": "japan"
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
  onChangeg(e)
  {
   
    let value=e.target.value.toLowerCase();

    const keys = Object.keys(this.temp[0]);

    this.genderelected=value
    // assign filtered matches to the active datatable
    this.rows = this.temp.filter(item => {
  
      
      if (
        ((item[keys[1]] &&
          item[keys[1]]
            .toString()
            .toLowerCase()
            .indexOf(value) == 0) ||
        !value ||value == 'choose gender') && (this.nameselected==" " ||(item[keys[0]] &&
          item[keys[0]]
            .toString()
            .toLowerCase()
            .indexOf(this.nameselected) == 0)) &&( this.countryelected=="choose country" ||(item[keys[2]] &&
              item[keys[2]]
                .toString()
                .toLowerCase()
                .indexOf(this.countryelected) == 0))
      ) {
        // found match, return true to add to result set
        return true;
      }
      // iterate through each row's column data
      
    });
  }
  onKeyUp(x) { // appending the updated value to the variable

let value = x.target.value.toLowerCase().trim();
    // get the amount of columns in the table
    const count = this.columns.length;
    this.nameselected=value
    // get the key names of each column in the dataset
    const keys = Object.keys(this.temp[0]);
  
    // assign filtered matches to the active datatable
    this.rows = this.temp.filter(item => {
      
  
      if ((
        (item[keys[0]] &&
          item[keys[0]]
            .toString()
            .toLowerCase()
            .indexOf(value) == 0) ||
        !value) && ( this.countryelected=="choose country" ||(item[keys[2]] &&
          item[keys[2]]
            .toString()
            .toLowerCase()
            .indexOf(this.countryelected) == 0)) && ( this.genderelected=="choose gender" ||(item[keys[1]] &&
              item[keys[1]]
                .toString()
                .toLowerCase()
                .indexOf(this.genderelected) == 0))
      ) {
        // found match, return true to add to result set
        return true;
      }
      // iterate through each row's column data
      
    });

  }
  onChangec(c)
  {
    let value=c.target.value.toLowerCase();

    const keys = Object.keys(this.temp[0]);
    this.countryelected=value;
    // assign filtered matches to the active datatable
    this.rows = this.temp.filter(item => {
     // console.log(item[keys[2]])
      if (
        ((item[keys[2]] &&
          item[keys[2]]
            .toString()
            .toLowerCase()
            .indexOf(value) == 0) ||
        !value ||value == 'choose country')&&(this.genderelected=="choose gender" ||(item[keys[1]] &&
          item[keys[1]]
            .toString()
            .toLowerCase()
            .indexOf(this.genderelected) == 0)) && (this.nameselected==" " ||(item[keys[0]] &&
              item[keys[0]]
                .toString()
                .toLowerCase()
                .indexOf(this.nameselected) == 0))
      ) {
        // found match, return true to add to result set
        return true;
      }
      // iterate through each row's column data
      
    });
  }

}
