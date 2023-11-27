import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post.jsx';

const DisplayNotes = ({ status }) => {
  const data = useSelector((state) => state.notes[status]);

  const postArray = [];
  data.forEach((ele) => {
    postArray.push(
      <Post
        key={ele.id}
        company={ele.company}
        title={ele.title}
        salary={ele.salary}
        status={ele.status}
        link={ele.link}
      />
    );
  });
  return (
    <div className='statusColumn'>
      <label id='status'>{status}</label>
      <div className='postContainer'>{postArray}</div>
    </div>
  );
};

export default DisplayNotes;
