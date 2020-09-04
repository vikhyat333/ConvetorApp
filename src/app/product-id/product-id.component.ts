import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})
export class ProductIdComponent implements OnInit {

  paramQuery3 = '';
  paramQuery4 = '';
  constructor (private acivateRoute:ActivatedRoute) {
    this.acivateRoute.params.subscribe(data => {
      this.paramQuery3 = data.id3;
      this.paramQuery4 = data.id4;
    })
   }

  ngOnInit(): void {
  }

}
