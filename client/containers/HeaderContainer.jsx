import React from 'react';
import PopupForm from '../components/PopupForm.jsx';

const HeaderContainer = () => {
  return (
    <div className='headerContainer'>
      <div></div>
      <h1 id='header'>Job Application Tracker</h1>
      <PopupForm />
    </div>
  );
};

export default HeaderContainer;
