import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTransactionHomeComponent } from './home/StockTransaction-home.component';
import { StockTransactionNewComponent } from './new/StockTransaction-new.component';
import { StockTransactionDetailComponent } from './detail/StockTransaction-detail.component';

const routes: Routes = [
  {path: '', component: StockTransactionHomeComponent},
  { path: 'new', component: StockTransactionNewComponent },
  { path: ':id', component: StockTransactionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'StockTransaction-detail-permissions'
      }
    }
  }
];

export const STOCKTRANSACTION_MODULE_DECLARATIONS = [
    StockTransactionHomeComponent,
    StockTransactionNewComponent,
    StockTransactionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTransactionRoutingModule { }