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
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
      {img: 'https://1-m.com.ua/image/cache/catalog/p/39/39417/1598238989394170-240x240.webp', sale: '33', title: 'Название товара очень-преочень длинное', old: '750', new: '500'},
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
