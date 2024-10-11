import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeHomeComponent } from './home/Exchange-home.component';
import { ExchangeNewComponent } from './new/Exchange-new.component';
import { ExchangeDetailComponent } from './detail/Exchange-detail.component';

const routes: Routes = [
  {path: '', component: ExchangeHomeComponent},
  { path: 'new', component: ExchangeNewComponent },
  { path: ':id', component: ExchangeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Exchange-detail-permissions'
      }
    }
  }
];

export const EXCHANGE_MODULE_DECLARATIONS = [
    ExchangeHomeComponent,
    ExchangeNewComponent,
    ExchangeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRoutingModule { }