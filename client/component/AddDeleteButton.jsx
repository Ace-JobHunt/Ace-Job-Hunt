import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addJob, deleteJob } from '../reducers/jobReducer.jsx';

export function AddDeleteJob() {
  const count = useSelector((state) => state.status.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label='Add Job' onClick={() => dispatch(addJob())}>
          Add Job
        </button>
        <span>{count}</span>
        <button aria-label='Delete Job' onClick={() => dispatch(deleteJob())}>
          Delete Job
        </button>
      </div>
    </div>
  );
}
