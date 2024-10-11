import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EXCHANGE_MODULE_DECLARATIONS, ExchangeRoutingModule} from  './Exchange-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ExchangeRoutingModule
  ],
  declarations: EXCHANGE_MODULE_DECLARATIONS,
  exports: EXCHANGE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExchangeModule { }