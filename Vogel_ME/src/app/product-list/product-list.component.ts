import { Component, Input, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MOVIE } from '../movie-list';

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductsListComponent implements OnInit {

  movies = MOVIE;
  @Input() movie?: Movie;
  selectedMovie?: Movie;
  
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  constructor() { }

  ngOnInit(): void {
  }

}