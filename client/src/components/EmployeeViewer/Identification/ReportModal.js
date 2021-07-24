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
    setOpen(false);
  };

  const [enteredReport, setEnteredReport] = useState('');
  const reportChangeHandler = event => {
    setEnteredReport(event.target.value);
  }

  const fetchPostReq = (reportData) => {

    const data = {
      text: reportData,
      date: Date.now()
    };

    fetch("http://localhost:8080/" + props.data.id + "/sendReport", {
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
    const data = enteredReport;
    setEnteredReport("");
    fetchPostReq(data)
    handleClose();
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <center>
        <h2 id="simple-modal-title">write report</h2>
        <input type='text' value={enteredReport} onChange={reportChangeHandler}>
        </input>
        <br />
        <button onClick={handleSendReport}>send</button><button onClick={handleClose}>close</button>
      </center>
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen}>
        Report
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
