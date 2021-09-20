import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  list: any[] = [];
  startPage: number;
  paginationLimit: number;

  constructor() {
    this.list = [
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', title: 'Название товара очень-преочень длинное', price: '750'},
    ]
    this.startPage = 0;
    this.paginationLimit = 6;
  }

  ngOnInit(): void {
  }

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 6;
  }
}
