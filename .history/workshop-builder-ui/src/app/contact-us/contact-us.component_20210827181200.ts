import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us', 
  templateUrl: 'contact-us.html',
  styleUrls: ['./contact-us.scss']
})
export class ContactUsComponent implements OnInit {
  
  contactUsForm = new FormGroup({
    firstName: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]")
    ]),
    lastName: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]")
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    });

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
  }

  onReset(){
    location.reload();
  }

}


