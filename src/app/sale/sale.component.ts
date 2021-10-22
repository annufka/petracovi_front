import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  list: any[] = [];
  startPage: number;
  paginationLimit: number;

  constructor() {
    this.list = [
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '1'
      },
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '2'
      },
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '3'
      },
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '4'
      },
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '5'
      },
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '6'
      },
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '7'
      },
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '8'
      },
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '9'
      },
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '10'
      },
      {
        img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp',
        title: 'Название товара очень-преочень длинное',
        price: '750',
        id: '11'
      },
    ]
    this.startPage = 0;
    this.paginationLimit = 6;
  }

  ngOnInit(): void {
  }

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 6;
  }

  // showLessItems() {
  //   this.paginationLimit = Number(this.paginationLimit) - 5;
  // }
}
