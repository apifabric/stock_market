import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Exchange-card.component.html',
  styleUrls: ['./Exchange-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Exchange-card]': 'true'
  }
})

export class ExchangeCardComponent {


}