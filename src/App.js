import React, { useState, Fragment } from 'react';
import './App.css';
import User from './components/Users/Users';
import NewUser from './components/NewUser/NewUser';
const App = () => {
  const [users, setUsers] = useState([]);

  const exportUserHandler = (userProps) => {
    setUsers((prevState) => {
      return [...prevState, userProps];
    });
  };

  return (
    <Fragment>
      <NewUser exportUserInfo={exportUserHandler} />
      <User values={users} />
    </Fragment>
  );
};

export default App;
