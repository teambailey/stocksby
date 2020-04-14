import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStockDetails } from '../redux/actions';
import {
  getTickerDetails,
  getTickerNews,
  getLastTrade,
  getPreviousClose,
  getLastQuote,
} from '../data/api';
import Hero from '../components/Hero';
import NotFoundHero from '../components/NotFoundHero';
import CurrentInfoBox from '../components/CurrentinfoBox';
import NewsBox from '../components/NewsBox';

const Dashboard = () => {
  const dispatch = useDispatch();
  const symbol = useSelector((state) => state.searchReducer.symbol);
  const isValidSymbol = useSelector(
    (state) => state.validateSymbol.isValidSymbol
  );

  const [details, setDetails] = useState({});
  const [news, setNews] = useState([]);
  const [lastTrade, setLastTrade] = useState();
  const [lastClose, setLastClose] = useState();
  const [lastQuote, setLastQuote] = useState();

  const buildDetails = (res) => {
    setDetails({
      logo: res.data.logo,
      url: res.data.url,
      desc: res.data.description,
      name: res.data.name,
      symbol: res.data.symbol,
      industry: res.data.industry,
      employees: res.data.employees,
    });
  };

  const buildNews = (res) => setNews(res.data);
  const buildLastTrade = (res) => setLastTrade(res.data.last.price);
  const buildPreviousClose = (res) => setLastClose(res.data.results[0].c);
  const buildLastQuote = (res) => setLastQuote(res.data.last.askprice);

  useEffect(() => {
    getTickerDetails(symbol, buildDetails);
    getTickerNews(symbol, buildNews);
    getLastTrade(symbol, buildLastTrade);
    getPreviousClose(symbol, buildPreviousClose);
    getLastQuote(symbol, buildLastQuote);
  }, [symbol]);

  useEffect(() => {
    dispatch(setActiveStockDetails(details));
  }, [dispatch, details]);

  return (
    <>
      {isValidSymbol ? (
        <div className="container">
          <Hero
            image={details.logo}
            title={details.symbol}
            subtitle={details.name}
            lastTrade={lastTrade}
            lastClose={lastClose}
          />

          <div className="section has-background-grey-lighter">
            <div className="columns">
              <div className="column">
                <CurrentInfoBox heading="Last Trade" title={lastTrade} />
              </div>
              <div className="column">
                <CurrentInfoBox heading="Open" title="280" />
              </div>
              <div className="column">
                <CurrentInfoBox heading="Close" title={lastClose} />
              </div>
              <div className="column">
                <CurrentInfoBox heading="Last Quote" title={lastQuote} />
              </div>
            </div>
          </div>

          {news.length > 0 ? (
            <>
              <hr className="has-background-grey-lighter	" />
              <div className="section has-background-grey-lighter">
                {news.map((item, i) => (
                  <NewsBox key={i} news={item} />
                ))}
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      ) : (
        <NotFoundHero />
      )}
    </>
  );
};

export default Dashboard;
