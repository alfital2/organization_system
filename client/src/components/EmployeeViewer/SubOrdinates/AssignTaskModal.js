import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    window.location.reload();
    setOpen(false);
  };

  const [enteredTask, setEnteredTask] = useState('');
  const [enteredDate,setEnteredDate] =useState('');


  const taskChangeHandler = event => {
    setEnteredTask(event.target.value);
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  }

  const fetchPostReq = (taskData) => {
    console.log("date is: " , enteredDate);
    console.log("date type is : " ,typeof(enteredDate));
    const data = {
      text: taskData,
      dueDate: enteredDate
    };

    fetch("http://localhost:8080/" + props.emp.id + "/assignTask", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  const handleSendReport = () => {
    const data = enteredTask;
    setEnteredTask("");
    fetchPostReq(data);
    handleClose();
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <center>
        <h2 id="simple-modal-title">Write Task</h2>
        <input type='text' required value={enteredTask} onChange={taskChangeHandler} />
        <br />
        <input type='date' value={enteredDate} onChange={dateChangeHandler} />
        <br />
        <button onClick={handleSendReport}>send</button><button onClick={handleClose}>close</button>
      </center>
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen}>
        assign task
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
