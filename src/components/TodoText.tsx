import classes from './TodoText.module.css';

type Props = {
  id: string;
  text: string;
  onRemoveTodo: (todoId: string) => void;
};

const TodoText: React.FC<Props> = ({ text, id, onRemoveTodo }) => {
  const removeTodoHandler = () => {
    onRemoveTodo(id);
  };

  return (
    <li className={classes.item} onClick={removeTodoHandler}>
      {text}
    </li>
  );
};

export default TodoText;
