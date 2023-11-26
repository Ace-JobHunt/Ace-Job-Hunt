import React from 'react';
import DisplayNotes from '../components/DisplayNotes.jsx';

const JobContainer = () => {
  const statusArray = [
    'Interested',
    'Applied',
    'Interviewed',
    'FollowedUp',
    'Accepted',
    'Rejected',
  ];

  let columnArray = [];
  statusArray.forEach((ele) => {
    columnArray.push(<DisplayNotes key={ele} status={ele} />);
  });
  return <div className='jobContainer'>{columnArray}</div>;
};

export default JobContainer;
