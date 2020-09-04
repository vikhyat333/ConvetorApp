import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  queryCountry = '';
  queryTag = '';
  queryTrending = 6;

  constructor(private acivateRoute:ActivatedRoute) { 
    this.acivateRoute.queryParams.subscribe(data=> {
      this.queryCountry = data.country;
      this.queryTag = data.tag;  
      this.queryTrending = data.trending;  
      
    });
  }

  ngOnInit(): void {
  }

}
