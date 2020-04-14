import React from 'react';
import * as moment from 'moment';

// Used to show the company news
const NewsBox = ({ news }) => {
  // format the timestamp to be readable
  let date = moment(news.timestamp);
  let formattedDate = date.format('LLLL');

  return (
    <>
      <div className="box">
        <article className="media">
          <div className="media-left">
            {news.image.length > 0 ? (
              <figure className="image is-128x128 is-hidden-mobile">
                <img src={news.image} alt="news" />
              </figure>
            ) : (
              ''
            )}
          </div>
          <div className="media-content">
            <div className="content">
              <p className="title is-3 is-size-4-mobile">{news.title}</p>
              <p className="subtitle is-7 has-text-grey">{formattedDate}</p>
              <p className="is-size-6">{news.summary}</p>
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button is-primary"
              >
                Read Full Article
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default NewsBox;
