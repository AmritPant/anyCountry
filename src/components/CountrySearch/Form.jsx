import React, { useState } from 'react';
import classes from './Form.module.css';

const Form = props => {
  const [curInputValue, setInputValue] = useState('');

  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };

  const onClickBtnHandler = function () {};

  const onSubmitHandler = event => {
    event.preventDefault();
    props.setFormActive(false);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <input type="text" onChange={onChangeHandler} autoFocus />
      <button onClick={onClickBtnHandler}>Search</button>
    </form>
  );
};

export default Form;
