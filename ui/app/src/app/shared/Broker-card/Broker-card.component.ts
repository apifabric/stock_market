import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Broker-card.component.html',
  styleUrls: ['./Broker-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Broker-card]': 'true'
  }
})

export class BrokerCardComponent {


}