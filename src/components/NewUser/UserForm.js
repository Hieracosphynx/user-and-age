import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import classes from './UserForm.module.css';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const saveInfoHandler = (e) => {
    e.preventDefault();

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
    setName('');
    setAge('');
  };

  const errorModalHandler = () => {
    setError(null);
  };

  return (
    <div>
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
          <input type='text' value={name} onChange={nameChangeHandler} />
          <label>Age</label>
          <input type='number' value={age} onChange={ageChangeHandler} />
          <Button type='submit'>Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
