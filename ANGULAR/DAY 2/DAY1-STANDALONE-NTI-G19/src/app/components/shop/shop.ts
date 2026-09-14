import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { NgStyle, NgClass, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProdCard } from './prod-card/prod-card';

@Component({
  imports: [ProdCard],
  selector: 'app-shop',
  styleUrl: './shop.css',
  templateUrl: './shop.html',
})
export class Shop {
  products: Iproduct[] = [
    {
      id: '1',
      img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg',
      title: 'Microsoft Xbox Series X 1TB Gaming Console',
      discount: 10,
      rating: 4.8,
      category: 'Best Seller',
      price: 499,
      stock: 9,
    },
    {
      id: '2',
      img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg',
      title: 'Apple MacBook PRO Laptop with M2 chip',
      discount: 35,
      rating: 3.5,
      category: 'Fast Delivery',
      price: 1600,
      stock: 0,
    },
    {
      id: '3',
      img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg',
      title: 'Apple iPhone 15 Pro Max, 256GB, Blue Titanium',
      discount: 15,
      rating: 3,
      category: ' Seller',
      price: 1190,
      stock: 100,
    },
  ];
}
