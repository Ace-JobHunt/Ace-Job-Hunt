import React from 'react';
import DisplayNotes from '../components/DisplayNotes.jsx';

const JobContainer = () => {
  const statusArray = [
    'interested',
    'applied',
    'interviewed',
    'followedUp',
    'accepted',
    'rejected',
  ];
  let columnArray = [];
  statusArray.forEach((ele) => {
    columnArray.push(<DisplayNotes status={ele} />);
  });
  return <div className='column'>{columnArray}</div>;
};

export default JobContainer;
