import React, { useState } from 'react';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const saveInfoHandler = (e) => {
    e.preventDefault();
    const userInfo = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };

    props.saveUserInfo(userInfo);
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={saveInfoHandler}>
      <label>Name</label>
      <input type='text' onChange={nameChangeHandler} />
      <label>Age</label>
      <input type='number' onChange={ageChangeHandler} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserForm;
