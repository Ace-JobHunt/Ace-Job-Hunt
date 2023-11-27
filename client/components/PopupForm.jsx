import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PopupForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dateApplied, setdateApplied] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [status, setStatus] = useState('');
  const [link, setLink] = useState('');

  function handleClick() {
    let formObj = {
      dateApplied: dateApplied,
      company: company,
      title: jobTitle,
      salary: salary,
      status: status,
      link: link,
    };

    fetch('/', {
      method: 'POST',
      body: JSON.stringify(formObj),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    handleClose();
    location.reload();
  }

  return (
    <>
      {/* can replace below with our own button element  */}
      <Button variant='primary' className='formButton' onClick={handleShow}>
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
          <form
            className='formInput'
            onSubmit={(e) => {
              e.preventDefault();
              {
                /* setCompany, etc? */
              }
              setCompany('');
              setJobTitle('');
              setSalary('');
              setStatus('');
              setLink('');
              {
                /*props.newPost(company, jobTitle, etc*/
              }
            }}
          >
            {/* form elements below  */}
            <label>
              {' '}
              Date Applied:
              <input
                id='dateApplied'
                type='date'
                value={dateApplied}
                onChange={(e) => {
                  setdateApplied(e.target.value);
                }}
              />
            </label>
            <label>
              {' '}
              Company:
              <input
                id='company'
                placeholder='Codesmith'
                type='string'
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </label>
            <label>
              {' '}
              Job Title:
              <input
                id='jobTitle'
                placeholder='Software Engineer'
                type='string'
                value={jobTitle}
                onChange={(e) => {
                  setJobTitle(e.target.value);
                }}
              />
            </label>
            <label>
              {' '}
              Status:
              <select
                id='status'
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                {/* is there a way to dynamically show these based on the status array? */}
                <option value='blank'>Select Status</option>
                <option value='interested'>Interested</option>
                <option value='applied'>Applied</option>
                <option value='interviewScheduled'>Interviewed</option>
                <option value='followUp'>Followed Up</option>
                <option value='offer'>Accepted</option>
                <option value='noOffer'>Rejected</option>
              </select>
            </label>
            <label>
              {' '}
              Salary: $
              <input
                id='salary'
                placeholder='100,000'
                type='number'
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
            </label>
            <label>
              {' '}
              Link:
              <input
                id='link'
                placeholder='www.codesmith.io'
                type='string'
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* do we need this secondary button? or remove the hide? */}
          <Button variant='secondary' onClick={handleClose}>
            Don't Save
          </Button>
          {/* when they click track button - send to database  */}
          <Button variant='primary' onClick={handleClick}>
            Let's Track It!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopupForm;
