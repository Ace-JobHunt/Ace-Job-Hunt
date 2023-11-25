import React from 'react';
import HeaderContainer from './HeaderContainer.jsx';
import JobContainer from './JobContainer.jsx';

const MainContainer = () => {
  return (
    <div className='container'>
      <HeaderContainer className='headerContainer' />
      <JobContainer currentState={currentState} />
    </div>
  );
};

export default MainContainer;
