import Card from '../UI/Card';
import UserList from './UserList';
import classes from './Users.module.css';

const User = (props) => {
  console.log(props.values);

  const userList = props.values.map((prop) => {
    return <UserList key={prop.id} name={prop.name} age={prop.age} />;
  });

  return (
    <Card className={classes.users}>
      <ul>{userList}</ul>
    </Card>
  );
};

export default User;
