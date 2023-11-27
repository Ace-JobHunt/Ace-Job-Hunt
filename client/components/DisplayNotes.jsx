import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post.jsx';

const DisplayNotes = ({ status }) => {
  const data = useSelector((state) => state.notes[status]);

  console.log(data);

  const postArray = [];
  data.forEach((ele) => {
    postArray.push(
      <Post
        key={ele._id}
        id={ele._id}
        dateApplied={ele.dateApplied}
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
