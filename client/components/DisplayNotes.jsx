import { useSelector } from 'react-redux';

const DisplayNotes = ({ status }) => {
  const data = useSelector((state) => {
    return state.notes.status;
  });
  console.log('data', data);
  const postArray = [];
  data.forEach((ele) => {
    postArray.push(
      <Post
        key={ele.id}
        company={ele.company}
        jobTitle={ele.jobTitle}
        date={ele.date}
        salary={ele.salary}
        status={ele.status}
        jobLink={ele.jobLink}
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
