import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero';

import { getTickerDetails, getTickerNews } from '../data/api';

// Page variables
const config = {
  hero: {
    title: 'Dashboard',
    subtitle: 'Subtile',
  },
};

const Dashboard = () => {
  const tickerSymbol = useSelector((state) => state.searchReducer.symbol);

  useEffect(() => {
    getTickerDetails(tickerSymbol);
    getTickerNews(tickerSymbol);
  }, [tickerSymbol]);

  return (
    <div className="container">
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
