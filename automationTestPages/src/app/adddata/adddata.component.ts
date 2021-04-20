import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
  form = new FormGroup({
    gender: new FormControl('', Validators.required),
    name:  new FormControl('', Validators.required),
    dob:new FormControl('', Validators.required),
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }
 
  changeGender(e) {
    console.log(e.target.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
