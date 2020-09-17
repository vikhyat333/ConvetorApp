import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  orderStatus:any;
  data:Observable<any>;

  constructor() { }

  ngOnInit(): void {

    this.data = new Observable(observer => {
      setTimeout(() =>{
        observer.next('In Progress');
       },2000);

    //business logic
    setTimeout(() =>{
      observer.next('Processing');
    },4000);

  setTimeout(() =>{
    observer.next('Completed');
  },6000);

  //Donont know why this is not working...
  //setTimeout(() =>{
    //observer.error();
  //}),8000;

   //complete 
   setTimeout(() =>{
     observer.complete();
  },10000);

  });

  this.data.subscribe(value =>{
  this.orderStatus=value;
  });
 } 
}  