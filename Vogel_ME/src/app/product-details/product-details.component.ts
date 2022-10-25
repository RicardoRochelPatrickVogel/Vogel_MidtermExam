import { Component, Input, OnInit } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  @Input() movie?: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}