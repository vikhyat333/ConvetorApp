import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {

  paramQuery = '';
  paramQuery1 = '';
  constructor (private acivateRoute:ActivatedRoute) {
    this.acivateRoute.params.subscribe(data => {
      this.paramQuery = data.id;
      this.paramQuery1 = data.id1;
    })
   }

  ngOnInit(): void {
  }

}
