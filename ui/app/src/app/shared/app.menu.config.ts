import { MenuRootItem } from 'ontimize-web-ngx';

import { BrokerCardComponent } from './Broker-card/Broker-card.component';

import { CompanyCardComponent } from './Company-card/Company-card.component';

import { DailyStockPriceCardComponent } from './DailyStockPrice-card/DailyStockPrice-card.component';

import { DividendCardComponent } from './Dividend-card/Dividend-card.component';

import { ExchangeCardComponent } from './Exchange-card/Exchange-card.component';

import { InvestorCardComponent } from './Investor-card/Investor-card.component';

import { MarketIndiceCardComponent } from './MarketIndice-card/MarketIndice-card.component';

import { MarketNewCardComponent } from './MarketNew-card/MarketNew-card.component';

import { PortfolioCardComponent } from './Portfolio-card/Portfolio-card.component';

import { SectorPerformanceCardComponent } from './SectorPerformance-card/SectorPerformance-card.component';

import { StockCardComponent } from './Stock-card/Stock-card.component';

import { StockTransactionCardComponent } from './StockTransaction-card/StockTransaction-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Broker', name: 'BROKER', icon: 'view_list', route: '/main/Broker' }
    
        ,{ id: 'Company', name: 'COMPANY', icon: 'view_list', route: '/main/Company' }
    
        ,{ id: 'DailyStockPrice', name: 'DAILYSTOCKPRICE', icon: 'view_list', route: '/main/DailyStockPrice' }
    
        ,{ id: 'Dividend', name: 'DIVIDEND', icon: 'view_list', route: '/main/Dividend' }
    
        ,{ id: 'Exchange', name: 'EXCHANGE', icon: 'view_list', route: '/main/Exchange' }
    
        ,{ id: 'Investor', name: 'INVESTOR', icon: 'view_list', route: '/main/Investor' }
    
        ,{ id: 'MarketIndice', name: 'MARKETINDICE', icon: 'view_list', route: '/main/MarketIndice' }
    
        ,{ id: 'MarketNew', name: 'MARKETNEW', icon: 'view_list', route: '/main/MarketNew' }
    
        ,{ id: 'Portfolio', name: 'PORTFOLIO', icon: 'view_list', route: '/main/Portfolio' }
    
        ,{ id: 'SectorPerformance', name: 'SECTORPERFORMANCE', icon: 'view_list', route: '/main/SectorPerformance' }
    
        ,{ id: 'Stock', name: 'STOCK', icon: 'view_list', route: '/main/Stock' }
    
        ,{ id: 'StockTransaction', name: 'STOCKTRANSACTION', icon: 'view_list', route: '/main/StockTransaction' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    BrokerCardComponent

    ,CompanyCardComponent

    ,DailyStockPriceCardComponent

    ,DividendCardComponent

    ,ExchangeCardComponent

    ,InvestorCardComponent

    ,MarketIndiceCardComponent

    ,MarketNewCardComponent

    ,PortfolioCardComponent

    ,SectorPerformanceCardComponent

    ,StockCardComponent

    ,StockTransactionCardComponent

];