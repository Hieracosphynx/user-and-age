import './Card.css';

const Card = (props) => {
  let style = 'card ' + props.className;
  return <div className={style}>{props.children}</div>;
};

export default Card;
