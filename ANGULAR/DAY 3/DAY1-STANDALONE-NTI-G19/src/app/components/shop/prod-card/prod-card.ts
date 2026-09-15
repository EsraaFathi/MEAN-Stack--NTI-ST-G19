import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../models/iproduct';
import { CurrencyPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  imports: [NgStyle, NgClass, CurrencyPipe, UpperCasePipe],
  selector: 'app-prod-card',
  styleUrl: './prod-card.css',
  templateUrl: './prod-card.html',
})
export class ProdCard {
  @Input()
  product!: Iproduct;
}
