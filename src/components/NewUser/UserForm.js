import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

import classes from './UserForm.module.css';

/**
 * Don't use ref when directly editing / changing DOM
 */

const UserForm = (props) => {
  let enteredName = useRef();
  let enteredAge = useRef();

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  const [error, setError] = useState();

  // const nameChangeHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const ageChangeHandler = (e) => {
  //   setAge(e.target.value);
  // };

  const saveInfoHandler = (e) => {
    e.preventDefault();

    const name = enteredName.current.value;
    const age = enteredAge.current.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Empty values',
        message: 'Name and/or age should not be blank.',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Age value',
        message: 'Age should not be less than 1.',
      });
      return;
    }

    const userInfo = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };

    props.saveUserInfo(userInfo);
    // setName('');
    // setAge('');
    enteredName.current.value = '';
    enteredAge.current.value = '';
  };

  const errorModalHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          errorModal={errorModalHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={saveInfoHandler}>
          <label>Name</label>
          <input
            id='name'
            type='text'
            // value={name}
            // onChange={nameChangeHandler}
            ref={enteredName}
          />
          <label>Age</label>
          <input
            id='age'
            type='number'
            // value={age}
            // onChange={ageChangeHandler}
            ref={enteredAge}
          />
          <Button type='submit'>Submit</Button>
          <Button onClick={props.hideForm}>Cancel</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
