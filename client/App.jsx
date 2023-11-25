import React from 'react';
import MainContainer from './containers/MainContainer.jsx';

const App = () => {
  //add a state
  // const market = useSelector((state) => state.markets);

  return (
    <div>
      <h1 id='header'>Job Application Tracker</h1>
      <MainContainer />
    </div>
  );
};

export default App;
