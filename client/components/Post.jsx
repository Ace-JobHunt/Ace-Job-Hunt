import React from 'react';


const Post = (props) => {
    const {
     post: { company },
     post: { jobTitle },
     post: { dateCreated },
     post: { lastUpdated },
    } = props;
  
    return (
      <div className='postBox'>
        <label htmlFor='company'> Company: </label>
        <span id='Company'>{company}</span>
        <p>
          <label htmlFor='jobTitle'>Job Title: </label>
          <span id='jobTitle'>{jobTitle}</span>
        </p>
        <p>
          <label htmlFor='dateCreated'>Date Created: </label>
          <span id='dateCreated'>{dateCreated}</span>
        </p>
        <label htmlFor='lastUpdated'> Last Updated: </label>
          <span id='lastUpdated'>{lastUpdated}</span>
        </p>
      </div>
    );
  };
  
  export default Post;