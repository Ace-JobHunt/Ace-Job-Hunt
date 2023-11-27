import React from 'react';

const Post = ({ dateApplied, company, title, salary, status, link }) => {
  let colorArray = {
    interested: 'yellow',
    applied: 'lightpink',
    interviewScheduled: 'lightblue',
    followUp: 'lavender',
    offer: 'lightgreen',
    noOffer: 'lightsalmon',
  };

  return (
    <div className='postBox' style={{ backgroundColor: colorArray[status] }}>
      <p>
        <b>Date Applied: </b>
        {dateApplied.substring(0, 10)}
      </p>
      <p>
        <b>Company: </b>
        {company}
      </p>
      <p>
        <b>Job Title: </b>
        {title}
      </p>
      <p>
        <b>Salary: </b>
        {salary}
      </p>
      <p>
        <b>Status: </b>
        {status}
      </p>
      <p>
        <b>Job Link: </b>
        <a href={`http://${link}`}>Click on Link</a>
      </p>
    </div>
  );
};

export default Post;
