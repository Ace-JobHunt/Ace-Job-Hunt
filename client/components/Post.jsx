import React from 'react';

const Post = ({ company, title, salary, status, link }) => {
  return (
    <div className='postBox'>
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
        <a href={link}>Click on Link</a>
      </p>
    </div>
  );
};

export default Post;
