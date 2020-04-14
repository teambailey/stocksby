import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStockDetails } from '../redux/actions';
import {
  getTickerDetails,
  getTickerNews,
  getLastTrade,
  getLastQuote,
  // getOpenClose,
} from '../data/api';
import Hero from '../components/Hero';
import CurrentInfoBox from '../components/CurrentinfoBox';
import NewsBox from '../components/NewsBox';

const Dashboard = () => {
  const dispatch = useDispatch();
  const tickerSymbol = useSelector((state) => state.searchReducer.symbol);

  const [details, setDetails] = useState({});
  const [news, setNews] = useState([]);
  const [lastTrade, setLastTrade] = useState();
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
  const buildLastQuote = (res) => setLastQuote(res.data.last.askprice);
  // const buildOpenClose = (res) => setOpenClose(res.data);

  useEffect(() => {
    getTickerDetails(tickerSymbol, buildDetails);
    getTickerNews(tickerSymbol, buildNews);
    getLastTrade(tickerSymbol, buildLastTrade);
    getLastQuote(tickerSymbol, buildLastQuote);
    // getOpenClose(tickerSymbol, buildOpenClose); // THIS IS NOT RETURNING FROM THE ENDPOINT
  }, [tickerSymbol]);

  useEffect(() => {
    dispatch(setActiveStockDetails(details));
  }, [dispatch, details]);

  return (
    <div className="container">
      {/* <p>{news.length > 0 ? news[0].url : ''}</p> */}
      <Hero
        image={details.logo}
        title={details.symbol}
        subtitle={details.name}
        lastTrade={lastTrade}
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
            <CurrentInfoBox heading="Close" title="273.25" />
          </div>
          <div className="column">
            <CurrentInfoBox heading="Last Quote" title={lastQuote} />
          </div>
        </div>
      </div>

      <hr className="has-background-grey-lighter	" />

      <div className="section has-background-grey-lighter">
        {news.map((item, i) => (
          <NewsBox key={i} news={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
