import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectorPerformanceHomeComponent } from './home/SectorPerformance-home.component';
import { SectorPerformanceNewComponent } from './new/SectorPerformance-new.component';
import { SectorPerformanceDetailComponent } from './detail/SectorPerformance-detail.component';

const routes: Routes = [
  {path: '', component: SectorPerformanceHomeComponent},
  { path: 'new', component: SectorPerformanceNewComponent },
  { path: ':id', component: SectorPerformanceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SectorPerformance-detail-permissions'
      }
    }
  }
];

export const SECTORPERFORMANCE_MODULE_DECLARATIONS = [
    SectorPerformanceHomeComponent,
    SectorPerformanceNewComponent,
    SectorPerformanceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectorPerformanceRoutingModule { }