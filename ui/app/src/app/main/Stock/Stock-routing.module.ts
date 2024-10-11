import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockHomeComponent } from './home/Stock-home.component';
import { StockNewComponent } from './new/Stock-new.component';
import { StockDetailComponent } from './detail/Stock-detail.component';

const routes: Routes = [
  {path: '', component: StockHomeComponent},
  { path: 'new', component: StockNewComponent },
  { path: ':id', component: StockDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Stock-detail-permissions'
      }
    }
  },{
    path: ':stock_id/DailyStockPrice', loadChildren: () => import('../DailyStockPrice/DailyStockPrice.module').then(m => m.DailyStockPriceModule),
    data: {
        oPermission: {
            permissionId: 'DailyStockPrice-detail-permissions'
        }
    }
},{
    path: ':stock_id/Dividend', loadChildren: () => import('../Dividend/Dividend.module').then(m => m.DividendModule),
    data: {
        oPermission: {
            permissionId: 'Dividend-detail-permissions'
        }
    }
},{
    path: ':stock_id/StockTransaction', loadChildren: () => import('../StockTransaction/StockTransaction.module').then(m => m.StockTransactionModule),
    data: {
        oPermission: {
            permissionId: 'StockTransaction-detail-permissions'
        }
    }
}
];

export const STOCK_MODULE_DECLARATIONS = [
    StockHomeComponent,
    StockNewComponent,
    StockDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }