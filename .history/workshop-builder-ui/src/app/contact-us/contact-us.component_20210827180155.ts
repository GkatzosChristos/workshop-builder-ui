import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us', 
  templateUrl: 'contact-us.html',
  styleUrls: ['./contact-us.scss']
})
export class ContactUsComponent implements OnInit {
  
  contactUsForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    });

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    console.warn(this.contactUsForm.value);
  }

  onReset(){
    location.reload();
  }

}


