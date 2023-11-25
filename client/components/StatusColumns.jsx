import React from 'react';
import Post from './Post.jsx';

const StatusColumns = () => {
  return (
    <div className='outerBox'>
      <div id='column'>
        <label id='status'>Interested</label>
      </div>
      <div id='column'>
        <label id='status'>Applied</label>
      </div>
      <div id='column'>
        <label id='status'>Interview Scheduled</label>
      </div>
      <div id='column'>
        <label id='status'>Follow Up Needed</label>
      </div>
      <div id='column'>
        <label id='status'>No Offer</label>
      </div>
      <div id='column'>
        <label id='status'>Offer</label>
      </div>
    </div>
  );
};

export default StatusColumns;
