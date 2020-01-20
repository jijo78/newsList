import React from 'react';
import { useEffect, useState } from 'react';

import ContentList from './ContentList';
import Tabs from './Tabs';

import { getResponse } from '../utils.js';

const ContentView = () => {
  const [data, setData] = useState([]);

  const [tab, setActiveTab] = useState('UKnews');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const getData = type => {
    getResponse(type)
      .then(res => {
        const { results } = res.data.response;
        setData(results);
      })
      .catch(error => {
        setIsError(true);
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };

  const setTab = e => {
    const activeTab = e.currentTarget.dataset.section;
    setActiveTab(activeTab);
  };
  useEffect(() => {
    setIsLoading(true);
    getData(tab);
    setIsLoading(false);
  }, [tab]);

  if (isLoading || !data) return <p>Loading...</p>;
  if (isError) return <p>{errorMessage}</p>;

  const tabs = ['UKnews', 'Football', 'Travel'];
  let activeTab;
  return (
    <>
      <section className='news-content__tabs'>
        <ul>
          {tabs.map(type => {
            activeTab = type === tab ? `active-${type}` : '';
            return <Tabs tab={type} activeClass={activeTab} onClick={setTab} />;
          })}
        </ul>
      </section>
      <section className='news-content__list'>
        <ol>
          {data &&
            data.map(item => {
              return <ContentList item={item} sectionColor={tab} />;
            })}
        </ol>
      </section>
    </>
  );
};

export default ContentView;
