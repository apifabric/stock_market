import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SectorPerformance-card.component.html',
  styleUrls: ['./SectorPerformance-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SectorPerformance-card]': 'true'
  }
})

export class SectorPerformanceCardComponent {


}