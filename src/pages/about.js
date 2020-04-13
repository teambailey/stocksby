import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStock } from '../redux/actions';

const About = () => {
  const stockSymbol = useSelector((state) => state.symbolReducer.symbol);
  const dispatch = useDispatch();

  const [symbol, setSymbol] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (symbol === '') return;
    dispatch(setActiveStock(symbol));
    setSymbol('');
  };

  const onChange = (e) => setSymbol(e.target.value);

  return (
    <div>
      <h1>About {stockSymbol}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="stock-symbol"
          placeholder="Enter Stock Symbol"
          value={symbol}
          onChange={onChange}
        />
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
};

export default About;
