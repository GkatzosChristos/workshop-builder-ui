import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us', 
  templateUrl: 'contact-us.html',
  styleUrls: ['./contact-us.scss']
})
export class ContactUsComponent implements OnInit {
  name: string='';
  username: string='';
  email: string='';
  subject: string='';
  message: string='';
  

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    const result = `${this.name}, your submission was successful! We will contact you at ${this.email} as soon as possible!`;
    alert(result);
  }

  onReset(){
    location.reload();
  }

}


