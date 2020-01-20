import React from 'react';
import logo from '../images/the-guardian-logo.png';

const Header = () => {
  return (
    <header className='news-content__header'>
      <picture className='news-content__header-logo'>
        <img src={logo} alt='The Guardian logo' className='news-content__header-logo-img' />
      </picture>
    </header>
  );
};

export default Header;
