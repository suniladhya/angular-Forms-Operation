import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";



import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
  customer: Customer = new Customer();
  customerForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group(
      {
        firstName: ['',[Validators.required, Validators.minLength(3)]],
        lastName: ['',[Validators.required, Validators.minLength(50)]],
        email: ['',[Validators.required, Validators.email]],
        sendCatalogue : true
      }
    )
  }

  PopulateTestData():void {
    this.customerForm.setValue({
      firstName : 'jack',
      lastName : 'Earmes',
      email: 'suniladhya@live.com',
      sendCatalogue: false
    })
  }

  PopulatePartialTestData():void {
    this.customerForm.patchValue({

    })
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
