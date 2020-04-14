import React from 'react';

// Used to show live trade data
const CurrentInfoBox = ({ heading, title }) => {
  return (
    <>
      <div className="box">
        <div className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{heading}</p>
              <p className="title">${title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CurrentInfoBox;
