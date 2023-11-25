import React from 'react';
import PopupForm from '../components/PopupForm.jsx';
import { addNote } from '../reducers/jobReducer.js';
import { useDispatch } from 'react-redux';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  //addNewNote need to fetch data from database
  const addNewNote = (payload) => {
    dispatch(addNote(payload));
  };
  return (
    <div className='headerContainer'>
      <h1 id='header'>Job Application Tracker</h1>
      {/* button click opens popup form to add job application */}
      <PopupForm />
      {/* data from popup form goes into addNewNote() */}
      {/* <button className='addButton' id='addPost' onClick={() => addNewNote()}>
        Add New Note
      </button> */}
    </div>
  );
};

export default HeaderContainer;
