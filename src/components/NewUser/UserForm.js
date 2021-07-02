import React, { useState } from 'react';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  return (
    <form>
      <label>Name</label>
      <input type='text' />
      <label>Age</label>
      <input type='number' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserForm;
