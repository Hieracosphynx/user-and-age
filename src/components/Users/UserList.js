const UserList = (props) => {
  return (
    <li>
      {props.name} ({props.age} years old)
    </li>
  );
};

export default UserList;
