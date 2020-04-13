import React from 'react';
import { useSelector } from 'react-redux';

import SearchInput from '../components/SearchInput';

const About = () => {
  const tickerSymbol = useSelector((state) => state.searchReducer.symbol);

  return (
    <div>
      <h1>About {tickerSymbol}</h1>
      <SearchInput />
    </div>
  );
};

export default About;
