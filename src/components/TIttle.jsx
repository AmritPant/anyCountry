import React from 'react';
import classes from './Tittle.module.css';

const Tittle = props => {
  const onClickBtnHandler = () => {
    props.setFormActive(true);
  };

  return (
    <div className={classes.headingContainer}>
      <h1>Any Country </h1>
      <button onClick={onClickBtnHandler}>Home</button>
    </div>
  );
};

export default Tittle;
