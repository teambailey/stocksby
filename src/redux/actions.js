//ACTION CREATOR HELPER FUNCTION
const action = (type, payload) => {
  return { type, payload };
};

// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_ACTIVE_STOCK = 'SET_ACTIVE_STOCK';

export const incrementCounter = (counter) => action(INCREMENT, counter);
export const decrementCounter = (counter) => action(DECREMENT, counter);
export const setActiveStock = (symbol) => action(SET_ACTIVE_STOCK, symbol);
