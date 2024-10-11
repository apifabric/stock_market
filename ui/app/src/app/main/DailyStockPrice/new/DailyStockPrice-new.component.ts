import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DailyStockPrice-new',
  templateUrl: './DailyStockPrice-new.component.html',
  styleUrls: ['./DailyStockPrice-new.component.scss']
})
export class DailyStockPriceNewComponent {
  @ViewChild("DailyStockPriceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}