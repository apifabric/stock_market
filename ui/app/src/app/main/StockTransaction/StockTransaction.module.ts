import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {STOCKTRANSACTION_MODULE_DECLARATIONS, StockTransactionRoutingModule} from  './StockTransaction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    StockTransactionRoutingModule
  ],
  declarations: STOCKTRANSACTION_MODULE_DECLARATIONS,
  exports: STOCKTRANSACTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StockTransactionModule { }