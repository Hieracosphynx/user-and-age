import UserForm from './UserForm';

const NewUser = (props) => {
  const saveUserHandler = (userProps) => {
    props.exportUserInfo(userProps);
  };

  return <UserForm saveUserInfo={saveUserHandler} />;
};

export default NewUser;
