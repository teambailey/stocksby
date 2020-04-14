import React from 'react';

const Hero = ({ image, title, subtitle, lastTrade }) => {
  return (
    <div className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="level">
            <div className="box">
              <div className="level" style={{ textAlign: 'center' }}>
                <div className="level-left">
                  {image ? <img src={image} alt="Logo" /> : ''}
                </div>
                <div className="level-right" style={{ paddingLeft: '1rem' }}>
                  <div>
                    <h1 className="title has-text-primary is-size-1">
                      {title}
                    </h1>
                    <h2
                      className="subtitle has-text-primary is-size-4"
                      style={{ marginBottom: '2rem' }}
                    >
                      {subtitle}
                    </h2>
                    <p className="title has-text-primary is-size-5">
                      {(lastTrade - 273.25).toFixed(2)} /{' '}
                      {(((lastTrade - 273.25) / 273.25) * 100).toFixed(2)}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
