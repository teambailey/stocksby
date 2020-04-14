import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickerDetails, getTickerNews } from '../data/api';
import { setActiveStockDetails, setActiveStockNews } from '../redux/actions';
import Hero from '../components/Hero';

// Page variables
const config = {
  hero: {
    title: 'Dashboard',
    subtitle: 'Subtile',
  },
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const tickerSymbol = useSelector((state) => state.searchReducer.symbol);
  const [details, setDetails] = useState({});
  const [news, setNews] = useState([]);

  const getDetails = (res) => {
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

  const getNews = (res) => setNews(res.data);

  useEffect(() => {
    getTickerDetails(tickerSymbol, getDetails);
    getTickerNews(tickerSymbol, getNews);
  }, [tickerSymbol]);

  useEffect(() => {
    dispatch(setActiveStockDetails(details));
  }, [dispatch, details]);

  useEffect(() => {
    dispatch(setActiveStockNews(news));
    if (news[0]) console.log(news[0].url);
  }, [dispatch, news]);

  return (
    <div className="container">
      <p>Here: {details.logo}</p>
      <p>Here: {details.url}</p>
      <p>Here: {details.desc}</p>
      <p>Here: {details.name}</p>
      <p>Here: {details.symbol}</p>
      <p>Here: {details.industry}</p>
      <p>Here: {details.employees}</p>
      <hr />
      <p>Here: {news.length > 0 ? news[0].url : ''}</p>
      <Hero title={tickerSymbol} subtitle={config.hero.subtitle} />

      {/* <div className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">TICKER SYMBOL</p>
            <p className="title">{tickerSymbol || 'N/A'}</p>
          </div>
        </div>
      </div> */}

      {/* <div className="section">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column">1</div>
            <div className="column">2</div>
            <div className="column">3</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
