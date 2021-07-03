import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.errorModal} />;
  };

  const Overlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.errorModal}>O.K</Button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop errorModal={props.errorModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          errorModal={props.errorModal}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
