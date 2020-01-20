import React from 'react';
import moment from 'moment';

import { DAY_MONTH_FORMAT } from '../const/date-formats';

const ContentList = ({ item, sectionColor }) => {
  if (!item || item === 'undefined') {
    return <p role='alert'>Sorry not data available at the moment. Try to refresh the browser.</p>;
  }
  return (
    <li key={item.id} data-testid='newsContentList' className={sectionColor}>
      <h3>{item.sectionName}</h3>
      <time className='small'>
        <span className='news-content__date'>
          {moment(item.webPublicationDate).format(DAY_MONTH_FORMAT)}
        </span>
      </time>

      <p>
        <a
          className='news-content__title'
          href={item.webUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          {item.webTitle}
        </a>{' '}
      </p>
    </li>
  );
};

export default ContentList;
