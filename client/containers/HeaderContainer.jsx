import React from 'react';
import PopupForm from '../components/PopupForm.jsx';

const HeaderContainer = () => {
  return (
    <div className='headerContainer'>
      <h1 id='header'>Job Application Tracker</h1>
      {/* button click opens popup form to add job application */}
      <button id='addPost' onClick>
        {' '}
        +{' '}
      </button>
    </div>
  );
};

export default HeaderContainer;
