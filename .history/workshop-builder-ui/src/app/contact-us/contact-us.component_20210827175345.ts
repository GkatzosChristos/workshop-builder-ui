import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us', 
  templateUrl: 'contact-us.html',
  styleUrls: ['./contact-us.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() {
    contatUsForm = new FormGroup({

    });
   }

  ngOnInit(): void {
  }

  submitForm(){
    
  }

  onReset(){
    location.reload();
  }

}


