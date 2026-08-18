import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from '../../model/mobile.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Input() mobileObj!:Imobile;


}
