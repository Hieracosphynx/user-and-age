import React, { useState } from 'react';
import './App.css';
import User from './components/Users/Users';
import NewUser from './components/NewUser/NewUser';
const App = () => {
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'sdsd',
      age: 'sdsd',
    },
  ]);

  const exportUserHandler = (userProps) => {
    setUsers((prevState) => {
      return [...prevState, userProps];
    });
  };

  return (
    <div className='App'>
      <div className='App-header'>
        <NewUser exportUserInfo={exportUserHandler} />
        <User values={users} />
      </div>
    </div>
  );
};

export default App;
