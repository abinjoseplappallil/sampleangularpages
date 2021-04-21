import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';

import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit  {
  @ViewChild('search', { static: false }) search: any;
  
  countries: any = ['India', 'Britan', 'Japan','Italy','Russia', 'USA','China', 'Brazil','Canada','Germany'];
  
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
  constructor() { }


  

  getDataJson() {
    this.rows = this.temp = [
      {
        "name": "Ethel Price",
        "gender": "Female",
        "country": "China"
      },
      {
        "name": "Claudine Neal",
        "gender": "Female",
        "country": "USA"
  
      },
      {
        "name": "Beryl Rice",
        "gender": "Female",
        "country": "USA"
    
      },
      {
        "name": "Wilder Gonzales",
        "gender": "Male",
        "country": "China"
      },
      {
        "name": "Georgina Schultz",
        "gender": "Female",
        "country": "Japan"
      },
      {
        "name": "Carroll Buchanan",
        "gender": "Male",
        "country": "India"
      },
      {
        "name": "Valarie Atkinson",
        "gender": "Female",
        "country": "Canada"
      },
      {
        "name": "Schroeder Mathews",
        "gender": "Male",
        "country": "USA"
      },
      {
        "name": "Lynda Mendoza",
        "gender": "Female",
        "country": "India"
      },
      {
        "name": "Sarah Massey",
        "gender": "Female",
        "country": "India"
      },
      {
        "name": "Robles Boyle",
        "gender": "Male",
        "country": "Japan"
      },
      {
        "name": "Evans Hickman",
        "gender": "Male",
        "country": "Japan"
      },
      {
        "name": "Garrett Brennan",
        "gender": "Male",
        "country": "Italy"
      },
      {
        "name": "Betsy Horton",
        "gender": "Female",
        "country": "Germany"
      },
      
      {
        "name": "Vincent Hernandez",
        "gender": "Male",
        "country": "Italy"
      },
      {
        "name": "Baird Ryan",
        "gender": "Male",
        "country": "Germany"
      },
      {
        "name": "Georgia Mercer",
        "gender": "Female",
        "country": "Germany"
      },
      {
        "name": "Francesca Elliott",
        "gender": "Female",
        "country": "Italy"
      },
      {
        "name": "Lyons Peters",
        "gender": "Male",
        "country": "Italy"
      },
      {
        "name": "Kristi Brewer",
        "gender": "Female",
        "country": "Brazil"
      },
      {
        "name": "Tonya Bray",
        "gender": "Female",
        "country": "Germany"
      },
      {
        "name": "Valenzuela Huff",
        "gender": "Male",
        "country": "Germany"
      },
      {
        "name": "Tiffany Anderson",
        "gender": "Female",
        "country": "Brazil"
      },
      {
        "name": "Jerri King",
        "gender": "Female",
        "country": "Brazil"
      },
      {
        "name": "Rocha Meadows",
        "gender": "Male",
        "country": "Russia"
      },
      {
        "name": "Marcy Green",
        "gender": "Female",
        "country": "Russia"
      },
      {
        "name": "Kirk Cross",
        "gender": "Male",
        "country": "Brazil"
      },
      {
        "name": "Hattie Mullen",
        "gender": "Female",
        "country": "Britan"
      },
      {
        "name": "Deann Bridges",
        "gender": "Female",
        "country": "Russia"
      },
      {
        "name": "Chaney Roach",
        "gender": "Male",
        "country": "Brazil"
      },
      {
        "name": "Consuelo Dickson",
        "gender": "Female",
        "country": "India"
      },
      {
        "name": "Billie Rowe",
        "gender": "Female",
        "country": "India"
      },
      {
        "name": "Bean Donovan",
        "gender": "Male",
        "country": "India"
      },
      {
        "name": "Lancaster Patel",
        "gender": "Male",
        "country": "Canada"
      },
      {
        "name": "Rosa Dyer",
        "gender": "Female",
        "country": "Russia"
      },
      {
        "name": "Christine Compton",
        "gender": "Female",
        "country": "China"
      },
      {
        "name": "Milagros Finch",
        "gender": "Female",
        "country": "China"
      },
      {
        "name": "Ericka Alvarado",
        "gender": "Female",
        "country": "Canada"
      },
      {
        "name": "Sylvia Sosa",
        "gender": "Female",
        "country": "India"
      },
      {
        "name": "Humphrey Curtis",
        "gender": "Male",
        "country": "Canada"
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
