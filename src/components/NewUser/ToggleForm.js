import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './UserForm.module.css';
import toggleFormClasses from './ToggleForm.module.css';
const ToggleForm = (props) => {
  return (
    <Card className={`${classes.input} ${toggleFormClasses.container}`}>
      <Button onClick={props.showForm}>Toggle</Button>
    </Card>
  );
};

export default ToggleForm;
