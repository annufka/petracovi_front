import {Component, OnInit} from '@angular/core';
import {CarouselConfig} from "ngx-bootstrap/carousel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [
    {provide: CarouselConfig, useValue: {interval: 5000, noPause: true, showIndicators: true}}
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


}
