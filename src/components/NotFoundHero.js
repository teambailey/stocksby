import React from 'react';

// Used as feedback when user enters an invalid ticker symbol
const NotFoundHero = ({ image, title, subtitle, lastTrade, lastClose }) => {
  return (
    <div className="hero is-danger">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Oh no! Looks like that ticker symbol is not found. Please use the
            search bar above to try again.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFoundHero;
