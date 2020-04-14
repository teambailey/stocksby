import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveStock } from '../redux/actions';

// Used to drive the api call by setting the ticker symbol value to the store
const SearchInput = ({ border = false }) => {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (symbol === '') return;
    // save to symbol to store
    dispatch(setActiveStock(symbol));
    // reset local state
    setSymbol('');
  };

  const onChange = (e) => {
    let val = e.target.value;
    // simple forced formating b/c of light validation
    val = val.toUpperCase();
    setSymbol(val);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="field has-addons">
        <div className="control">
          {/* validation needed for this after requirements are specified */}
          <input
            type="text"
            name="stock-symbol"
            placeholder="Enter Stock Symbol"
            maxLength="4"
            className={`input ${border ? 'is-primary' : ''}`}
            value={symbol}
            onChange={onChange}
          />
        </div>
        <div className="control">
          <input type="submit" value="Enter" className="button is-primary" />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
