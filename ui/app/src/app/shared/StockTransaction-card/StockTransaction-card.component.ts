import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './StockTransaction-card.component.html',
  styleUrls: ['./StockTransaction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.StockTransaction-card]': 'true'
  }
})

export class StockTransactionCardComponent {


}