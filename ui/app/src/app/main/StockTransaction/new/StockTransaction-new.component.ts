import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'StockTransaction-new',
  templateUrl: './StockTransaction-new.component.html',
  styleUrls: ['./StockTransaction-new.component.scss']
})
export class StockTransactionNewComponent {
  @ViewChild("StockTransactionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}