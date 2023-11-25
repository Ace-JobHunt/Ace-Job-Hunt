import React from 'react';
import { deleteNote } from '../reducers/jobReducer.js';
import { useDispatch } from 'react-redux';

const Post = (props) => {
  const dispatch = useDispatch();
  function handleDelete(event) {
    event.preventDefault();
    dispatch(deleteNote(props.payload));
  }

  return (
    <div className='postBox'>
      <p>
        <b>Company:</b>
        {props.company}
      </p>
      <p>
        <b>Job Title:</b>
        {props.title}
      </p>
      <p>
        <b>Date Created:</b>
        {props.date}
      </p>
      <p>
        <b>Salary:</b>
        {props.salary}
      </p>
      <p>
        <b>Status:</b>
        {props.status}
      </p>
      <p>
        <b>Job Link:</b>
        <a href={props.link}>Click on Link</a>
      </p>
    </div>
  );
};

export default Post;
