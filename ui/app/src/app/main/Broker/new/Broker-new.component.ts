import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Broker-new',
  templateUrl: './Broker-new.component.html',
  styleUrls: ['./Broker-new.component.scss']
})
export class BrokerNewComponent {
  @ViewChild("BrokerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}