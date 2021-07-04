import { useState } from 'react';
import ToggleForm from './ToggleForm';
import UserForm from './UserForm';

const NewUser = (props) => {
  const [isToggle, setIsToggle] = useState(true);

  const saveUserHandler = (userProps) => {
    props.exportUserInfo(userProps);
  };

  const showFormHandler = () => {
    setIsToggle(false);
  };

  const hideFormHandler = () => {
    setIsToggle(true);
  };

  return (
    <>
      {isToggle && <ToggleForm showForm={showFormHandler} />}
      {!isToggle && (
        <UserForm saveUserInfo={saveUserHandler} hideForm={hideFormHandler} />
      )}
    </>
  );
};

export default NewUser;
