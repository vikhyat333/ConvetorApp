import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup; //step 3 adding same name as html form

  constructor(private formBuilder:FormBuilder) { //inject form
    this.checkoutForm = formBuilder.group({ //building form using form builder
      emailAddr:new FormControl(), // in form builder - creating a group of form elements
      quantity:new FormControl(), //these should be exacttly same as your form element
      terms:new FormControl()    //can also be dynamic

    });
    
  }
  ngOnInit(): void {
  }
  postData(){
    console.log(this.checkoutForm);
    //console.log(this.checkoutForm.value);
    //console.log(this.checkoutForm.value.emailAddr);
  }
  

}
