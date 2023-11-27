import React from 'react';
import { useDrag } from 'react-dnd';

const Post = ({ id, dateApplied, company, title, salary, status, link }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'post',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  let colorArray = {
    Interested: 'yellow',
    Applied: 'lightpink',
    Interviewed: 'lightblue',
    FollowedUp: 'lavender',
    Accepted: 'lightgreen',
    Rejected: 'lightsalmon',
  };

  function handleClick() {
    fetch(`/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    location.reload();
  }

  return (
    <div
      className='postBox'
      style={{ backgroundColor: colorArray[status] }}
      ref={drag}
    >
      <button className='postButton' onClick={handleClick}>
        X
      </button>
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
