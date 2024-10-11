import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DAILYSTOCKPRICE_MODULE_DECLARATIONS, DailyStockPriceRoutingModule} from  './DailyStockPrice-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DailyStockPriceRoutingModule
  ],
  declarations: DAILYSTOCKPRICE_MODULE_DECLARATIONS,
  exports: DAILYSTOCKPRICE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DailyStockPriceModule { }