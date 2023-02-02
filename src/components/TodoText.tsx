type Props = {
  text: string;
};

const TodoText: React.FC<Props> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoText;
