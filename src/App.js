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

  const removeUserHandler = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => id !== user.id);
    });
  };

  let content = null;

  if (users.length > 0) {
    content = <User values={users} onDelete={removeUserHandler} />;
  }

  return (
    <Fragment>
      <NewUser exportUserInfo={exportUserHandler} />
      {content}
    </Fragment>
  );
};

export default App;
