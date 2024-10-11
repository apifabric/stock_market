import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Broker', loadChildren: () => import('./Broker/Broker.module').then(m => m.BrokerModule) },
    
        { path: 'Company', loadChildren: () => import('./Company/Company.module').then(m => m.CompanyModule) },
    
        { path: 'DailyStockPrice', loadChildren: () => import('./DailyStockPrice/DailyStockPrice.module').then(m => m.DailyStockPriceModule) },
    
        { path: 'Dividend', loadChildren: () => import('./Dividend/Dividend.module').then(m => m.DividendModule) },
    
        { path: 'Exchange', loadChildren: () => import('./Exchange/Exchange.module').then(m => m.ExchangeModule) },
    
        { path: 'Investor', loadChildren: () => import('./Investor/Investor.module').then(m => m.InvestorModule) },
    
        { path: 'MarketIndice', loadChildren: () => import('./MarketIndice/MarketIndice.module').then(m => m.MarketIndiceModule) },
    
        { path: 'MarketNew', loadChildren: () => import('./MarketNew/MarketNew.module').then(m => m.MarketNewModule) },
    
        { path: 'Portfolio', loadChildren: () => import('./Portfolio/Portfolio.module').then(m => m.PortfolioModule) },
    
        { path: 'SectorPerformance', loadChildren: () => import('./SectorPerformance/SectorPerformance.module').then(m => m.SectorPerformanceModule) },
    
        { path: 'Stock', loadChildren: () => import('./Stock/Stock.module').then(m => m.StockModule) },
    
        { path: 'StockTransaction', loadChildren: () => import('./StockTransaction/StockTransaction.module').then(m => m.StockTransactionModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }