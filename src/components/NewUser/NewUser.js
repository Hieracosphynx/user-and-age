import UserForm from './UserForm';
import Card from '../UI/Card';

const NewUser = (props) => {
  const saveUserHandler = (userProps) => {
    props.exportUserInfo(userProps);
  };

  return (
    <Card>
      <div>
        <UserForm saveUserInfo={saveUserHandler} />
      </div>
    </Card>
  );
};

export default NewUser;
