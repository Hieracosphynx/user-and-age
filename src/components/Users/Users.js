import Card from '../UI/Card';
import UserList from './UserList';
import './Users.css';

const User = (props) => {
  console.log(props.values);

  const userList = props.values.map((prop) => {
    return (
      <Card key={prop.id}>
        <UserList key={prop.id} name={prop.name} age={prop.age} />
      </Card>
    );
  });

  return <div className='user-controls'>{userList}</div>;
};

export default User;
