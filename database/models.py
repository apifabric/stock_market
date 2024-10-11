# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 11, 2024 14:57:10
# Database: sqlite:////tmp/tmp.AUgonoqdrn/stock_market/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Broker(SAFRSBaseX, Base):
    """
    description: A table to store stock brokers' information.
    """
    __tablename__ = 'brokers'
    _s_collection_name = 'Broker'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    website = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Company(SAFRSBaseX, Base):
    """
    description: A table to store company information in the stock market.
    """
    __tablename__ = 'companies'
    _s_collection_name = 'Company'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    industry = Column(String)
    headquarters = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    StockList : Mapped[List["Stock"]] = relationship(back_populates="company")



class Exchange(SAFRSBaseX, Base):
    """
    description: A table to store stock exchange information.
    """
    __tablename__ = 'exchanges'
    _s_collection_name = 'Exchange'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    country = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Investor(SAFRSBaseX, Base):
    """
    description: A table to store information about investors.
    """
    __tablename__ = 'investors'
    _s_collection_name = 'Investor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    PortfolioList : Mapped[List["Portfolio"]] = relationship(back_populates="investor")



class MarketIndice(SAFRSBaseX, Base):
    """
    description: A table to store market indices information.
    """
    __tablename__ = 'market_indices'
    _s_collection_name = 'MarketIndice'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    symbol = Column(String, nullable=False)
    last_updated = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)



class MarketNew(SAFRSBaseX, Base):
    """
    description: A table to store news related to the stock market.
    """
    __tablename__ = 'market_news'
    _s_collection_name = 'MarketNew'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    headline = Column(String, nullable=False)
    date_posted = Column(DateTime)
    content = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)



class SectorPerformance(SAFRSBaseX, Base):
    """
    description: A table to store performance information by sector.
    """
    __tablename__ = 'sector_performance'
    _s_collection_name = 'SectorPerformance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    sector_name = Column(String, nullable=False)
    performance_date = Column(DateTime, nullable=False)
    performance_score = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)



class Portfolio(SAFRSBaseX, Base):
    """
    description: A table to store information about investor portfolios.
    """
    __tablename__ = 'portfolios'
    _s_collection_name = 'Portfolio'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    investor_id = Column(ForeignKey('investors.id'), nullable=False)
    created_date = Column(DateTime)

    # parent relationships (access parent)
    investor : Mapped["Investor"] = relationship(back_populates=("PortfolioList"))

    # child relationships (access children)
    StockTransactionList : Mapped[List["StockTransaction"]] = relationship(back_populates="portfolio")



class Stock(SAFRSBaseX, Base):
    """
    description: A table to store stock information of companies.
    """
    __tablename__ = 'stocks'
    _s_collection_name = 'Stock'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    symbol = Column(String, nullable=False)
    company_id = Column(ForeignKey('companies.id'), nullable=False)
    listing_date = Column(DateTime)

    # parent relationships (access parent)
    company : Mapped["Company"] = relationship(back_populates=("StockList"))

    # child relationships (access children)
    DailyStockPriceList : Mapped[List["DailyStockPrice"]] = relationship(back_populates="stock")
    DividendList : Mapped[List["Dividend"]] = relationship(back_populates="stock")
    StockTransactionList : Mapped[List["StockTransaction"]] = relationship(back_populates="stock")



class DailyStockPrice(SAFRSBaseX, Base):
    """
    description: A table to store daily price history of stocks.
    """
    __tablename__ = 'daily_stock_prices'
    _s_collection_name = 'DailyStockPrice'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    open_price = Column(Float, nullable=False)
    close_price = Column(Float, nullable=False)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("DailyStockPriceList"))

    # child relationships (access children)



class Dividend(SAFRSBaseX, Base):
    """
    description: A table to store dividend records issued by companies.
    """
    __tablename__ = 'dividends'
    _s_collection_name = 'Dividend'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)
    dividend_date = Column(DateTime, nullable=False)
    amount = Column(Float, nullable=False)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("DividendList"))

    # child relationships (access children)



class StockTransaction(SAFRSBaseX, Base):
    """
    description: A table to store buy/sell stock transactions associated with portfolios.
    """
    __tablename__ = 'stock_transactions'
    _s_collection_name = 'StockTransaction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    portfolio_id = Column(ForeignKey('portfolios.id'), nullable=False)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)
    transaction_type = Column(String, nullable=False)
    quantity = Column(Integer, nullable=False)
    transaction_date = Column(DateTime)

    # parent relationships (access parent)
    portfolio : Mapped["Portfolio"] = relationship(back_populates=("StockTransactionList"))
    stock : Mapped["Stock"] = relationship(back_populates=("StockTransactionList"))

    # child relationships (access children)
