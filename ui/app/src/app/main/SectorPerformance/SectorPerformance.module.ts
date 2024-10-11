import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SECTORPERFORMANCE_MODULE_DECLARATIONS, SectorPerformanceRoutingModule} from  './SectorPerformance-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SectorPerformanceRoutingModule
  ],
  declarations: SECTORPERFORMANCE_MODULE_DECLARATIONS,
  exports: SECTORPERFORMANCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectorPerformanceModule { }