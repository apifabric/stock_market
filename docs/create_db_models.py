import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, DateTime, Float, ForeignKey, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

# Define database connection
DATABASE_URL = "sqlite:///system/genai/temp/create_db_models.sqlite"

# Create engine and base
engine = create_engine(DATABASE_URL, echo=True)
Base = declarative_base()

class Company(Base):
    """
    description: A table to store company information in the stock market.
    """
    __tablename__ = 'companies'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    industry = Column(String, nullable=True)
    headquarters = Column(String, nullable=True)

class Stock(Base):
    """
    description: A table to store stock information of companies.
    """
    __tablename__ = 'stocks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    symbol = Column(String, nullable=False)
    company_id = Column(Integer, ForeignKey('companies.id'), nullable=False)
    listing_date = Column(DateTime, default=datetime.datetime.utcnow)

class Investor(Base):
    """
    description: A table to store information about investors.
    """
    __tablename__ = 'investors'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=True)

class Portfolio(Base):
    """
    description: A table to store information about investor portfolios.
    """
    __tablename__ = 'portfolios'
    id = Column(Integer, primary_key=True, autoincrement=True)
    investor_id = Column(Integer, ForeignKey('investors.id'), nullable=False)
    created_date = Column(DateTime, default=datetime.datetime.utcnow)

class StockTransaction(Base):
    """
    description: A table to store buy/sell stock transactions associated with portfolios.
    """
    __tablename__ = 'stock_transactions'
    id = Column(Integer, primary_key=True, autoincrement=True)
    portfolio_id = Column(Integer, ForeignKey('portfolios.id'), nullable=False)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    transaction_type = Column(String, nullable=False)  # e.g., Buy or Sell
    quantity = Column(Integer, nullable=False)
    transaction_date = Column(DateTime, default=datetime.datetime.utcnow)

class MarketIndex(Base):
    """
    description: A table to store market indices information.
    """
    __tablename__ = 'market_indices'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    symbol = Column(String, nullable=False)
    last_updated = Column(DateTime, default=datetime.datetime.utcnow)

class SectorPerformance(Base):
    """
    description: A table to store performance information by sector.
    """
    __tablename__ = 'sector_performance'
    id = Column(Integer, primary_key=True, autoincrement=True)
    sector_name = Column(String, nullable=False)
    performance_date = Column(DateTime, nullable=False)
    performance_score = Column(Float, nullable=True)

class DailyStockPrice(Base):
    """
    description: A table to store daily price history of stocks.
    """
    __tablename__ = 'daily_stock_prices'
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    open_price = Column(Float, nullable=False)
    close_price = Column(Float, nullable=False)

class Dividend(Base):
    """
    description: A table to store dividend records issued by companies.
    """
    __tablename__ = 'dividends'
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    dividend_date = Column(DateTime, nullable=False)
    amount = Column(Float, nullable=False)

class Exchange(Base):
    """
    description: A table to store stock exchange information.
    """
    __tablename__ = 'exchanges'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    country = Column(String, nullable=True)

class MarketNews(Base):
    """
    description: A table to store news related to the stock market.
    """
    __tablename__ = 'market_news'
    id = Column(Integer, primary_key=True, autoincrement=True)
    headline = Column(String, nullable=False)
    date_posted = Column(DateTime, default=datetime.datetime.utcnow)
    content = Column(Text, nullable=True)

class Broker(Base):
    """
    description: A table to store stock brokers' information.
    """
    __tablename__ = 'brokers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    website = Column(String, nullable=True)

# Create all tables
Base.metadata.create_all(engine)

# Create a Session
Session = sessionmaker(bind=engine)
session = Session()

# Populate tables with example data
companies = [
    Company(name="TechCorp", industry="Technology", headquarters="New York"),
    Company(name="HealthPlus", industry="Healthcare", headquarters="San Francisco")
]

stocks = [
    Stock(symbol="TCO", company_id=1, listing_date=datetime.datetime(2020, 5, 15)),
    Stock(symbol="HPL", company_id=2, listing_date=datetime.datetime(2021, 8, 20))
]

investors = [
    Investor(name="Alice Johnson", email="alice@example.com"),
    Investor(name="Bob Smith", email="bob@example.com")
]

portfolios = [
    Portfolio(investor_id=1, created_date=datetime.datetime(2022, 10, 5)),
    Portfolio(investor_id=2, created_date=datetime.datetime(2023, 3, 12))
]

stock_transactions = [
    StockTransaction(portfolio_id=1, stock_id=1, transaction_type="Buy", quantity=100),
    StockTransaction(portfolio_id=1, stock_id=2, transaction_type="Buy", quantity=50),
    StockTransaction(portfolio_id=2, stock_id=1, transaction_type="Sell", quantity=20)
]

market_indices = [
    MarketIndex(name="Tech Index", symbol="TIX", last_updated=datetime.datetime(2023, 1, 31)),
    MarketIndex(name="Health Index", symbol="HIX", last_updated=datetime.datetime(2023, 1, 31))
]

sector_performance = [
    SectorPerformance(sector_name="Technology", performance_date=datetime.datetime(2023, 2, 1), performance_score=7.5),
    SectorPerformance(sector_name="Healthcare", performance_date=datetime.datetime(2023, 2, 1), performance_score=8.2)
]

daily_stock_prices = [
    DailyStockPrice(stock_id=1, date=datetime.datetime(2023, 2, 1), open_price=150.0, close_price=155.0),
    DailyStockPrice(stock_id=2, date=datetime.datetime(2023, 2, 1), open_price=280.0, close_price=275.0)
]

dividends = [
    Dividend(stock_id=1, dividend_date=datetime.datetime(2023, 3, 1), amount=1.5),
    Dividend(stock_id=2, dividend_date=datetime.datetime(2023, 3, 1), amount=2.0)
]

exchanges = [
    Exchange(name="New York Stock Exchange", country="USA"),
    Exchange(name="Nasdaq", country="USA")
]

market_news = [
    MarketNews(headline="Tech Stocks Rise", date_posted=datetime.datetime(2023, 2, 5), content="A surge in tech stocks trade."),
    MarketNews(headline="Healthcare Sees Steady Growth", date_posted=datetime.datetime(2023, 2, 6), content="Healthcare stocks continue to perform well.")
]

brokers = [
    Broker(name="Global Traders", website="www.globaltraders.com"),
    Broker(name="Secure Trade", website="www.securetrade.com")
]

# Add and commit sample data
session.add_all(companies)
session.add_all(stocks)
session.add_all(investors)
session.add_all(portfolios)
session.add_all(stock_transactions)
session.add_all(market_indices)
session.add_all(sector_performance)
session.add_all(daily_stock_prices)
session.add_all(dividends)
session.add_all(exchanges)
session.add_all(market_news)
session.add_all(brokers)

session.commit()
