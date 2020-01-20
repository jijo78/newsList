import React from 'react';

import ContentView from './views/ContentView';
import Header from './views/Header';

import './App.css';

const App = () => {
  return (
    <main className='news-content'>
      <Header />
      <section className='news-content__wrapper'>
        <ContentView />
      </section>
    </main>
  );
};

export default App;
