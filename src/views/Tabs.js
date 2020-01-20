import React from 'react';

const Tabs = ({ tab, activeClass, onClick }) => (
  <li key={tab}>
    <button data-section={tab} onClick={onClick} className={activeClass} data-testid='tabList'>
      {tab}
    </button>
  </li>
);

export default Tabs;
