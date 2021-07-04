import Button from '../UI/Button';
const UserList = (props) => {
  const removeUserControlHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li>
      {props.name} ({props.age} years old)
      <Button onClick={removeUserControlHandler}>Delete</Button>
    </li>
  );
};

export default UserList;
