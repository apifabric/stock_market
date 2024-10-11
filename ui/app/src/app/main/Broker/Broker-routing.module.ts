import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerHomeComponent } from './home/Broker-home.component';
import { BrokerNewComponent } from './new/Broker-new.component';
import { BrokerDetailComponent } from './detail/Broker-detail.component';

const routes: Routes = [
  {path: '', component: BrokerHomeComponent},
  { path: 'new', component: BrokerNewComponent },
  { path: ':id', component: BrokerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Broker-detail-permissions'
      }
    }
  }
];

export const BROKER_MODULE_DECLARATIONS = [
    BrokerHomeComponent,
    BrokerNewComponent,
    BrokerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokerRoutingModule { }