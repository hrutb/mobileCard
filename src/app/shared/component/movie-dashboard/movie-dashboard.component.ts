import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../model/mobile.model';
import { mobileProducts } from '../../const/mobileArr';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

    mobileArr:Array<Imobile>=[]
  constructor() { }

  ngOnInit(): void {
   this.mobileArr = mobileProducts;


  }

}
