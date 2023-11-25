import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PopupForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* can replace below with our own button element  */}
      <Button variant='primary' onClick={handleShow}>
        +
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          {/* popup title bar */}
          <Modal.Title>Create New Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => {
            e.preventDefault();
            {/* setCompany, etc? */}

          }}>
          {/* form elements below  */}
          <label>
            {' '}
            Company:
            <input
              id='company'
              placeholder='Codesmith'
              type='string'
              value={props.company}
            />
          </label>
          <label>
            {' '}
            Job Title:
            <input
              id='jobTitle'
              placeholder='Software Engineer'
              type='string'
              value={props.jobTitle}
            />
          </label>
          <label>
            {' '}
            Status:
            <select id="status" >
              {/* is there a way to dynamically show these based on the status array? */}
              <option value="interested">Interested</option>
              <option value="applied">Applied</option>
              <option value="interviewScheduled">Interview Scheduled</option>
              <option value="followUp">Follow Up Needed</option>
              <option value="noOffer">No Offer</option>
              <option value="offer">Offer</option>
            </select>
            {/* <input
              id='status'
              placeholder='Applied'
              type='string'
              value={props.status}
            /> */}
          </label>
          <label>
            {' '}
            Salary: $
            <input
              id='salary'
              placeholder='100,000'
              type='number'
              value={props.salary}
            />
          </label>
          <label>
            {' '}
            Link:
            <input
              id='link'
              placeholder='www.codesmith.io'
              type='string'
              value={props.link}
            />
          </label>
        </Modal.Body>
        <Modal.Footer>
          {/* do we need this secondary button? or remove the hide? */}
          <Button variant='secondary' onClick={handleClose}>
            Don't Save
          </Button>
          {/* when they click track button - send to database  */}
          <Button variant='primary'>Let's Track It!</Button>
        </Modal.Footer>
      </Modal>
    </>
    </form>
  );
};

export default PopupForm;

// default values - status -applied date created todays date
// company
// job title
// status
// salary
// job link
// const {
//     post: { company },
//     post: { jobTitle },
//     post: { dateCreated },
//     post: { lastUpdated },
//    } = props;
