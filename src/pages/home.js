import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions';

const Home = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const symbol = useSelector((state) => state.symbolReducer.symbol);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Sup</h1>

      <h1>Counter: {counter}</h1>
      <p>Here: {symbol}</p>
      <button onClick={() => dispatch(incrementCounter(counter))}>
        INCREMENT
      </button>
      <button onClick={() => dispatch(decrementCounter(counter))}>
        DECREMENT
      </button>
    </div>
  );
};

export default Home;
