import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DailyStockPrice-card.component.html',
  styleUrls: ['./DailyStockPrice-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DailyStockPrice-card]': 'true'
  }
})

export class DailyStockPriceCardComponent {


}