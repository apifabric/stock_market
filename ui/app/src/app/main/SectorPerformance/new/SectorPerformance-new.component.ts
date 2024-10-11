import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SectorPerformance-new',
  templateUrl: './SectorPerformance-new.component.html',
  styleUrls: ['./SectorPerformance-new.component.scss']
})
export class SectorPerformanceNewComponent {
  @ViewChild("SectorPerformanceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}