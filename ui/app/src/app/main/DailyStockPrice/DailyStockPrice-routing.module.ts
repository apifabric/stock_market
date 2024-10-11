import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyStockPriceHomeComponent } from './home/DailyStockPrice-home.component';
import { DailyStockPriceNewComponent } from './new/DailyStockPrice-new.component';
import { DailyStockPriceDetailComponent } from './detail/DailyStockPrice-detail.component';

const routes: Routes = [
  {path: '', component: DailyStockPriceHomeComponent},
  { path: 'new', component: DailyStockPriceNewComponent },
  { path: ':id', component: DailyStockPriceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DailyStockPrice-detail-permissions'
      }
    }
  }
];

export const DAILYSTOCKPRICE_MODULE_DECLARATIONS = [
    DailyStockPriceHomeComponent,
    DailyStockPriceNewComponent,
    DailyStockPriceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyStockPriceRoutingModule { }