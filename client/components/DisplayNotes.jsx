import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post.jsx';

const DisplayNotes = ({ status }) => {
  const data = useSelector((state) => {
    return state.notes[status];
  });
  console.log('data', data);
  const postArray = [];
  data.forEach((ele) => {
    postArray.push(
      <Post
        key={ele.id}
        company={ele.company}
        title={ele.title}
        date={ele.date}
        salary={ele.salary}
        status={ele.status}
        link={ele.link}
      />
    );
  });
  return (
    <div>
      <label id='status'>{status}</label>
      {postArray}
    </div>
  );
};

export default DisplayNotes;
