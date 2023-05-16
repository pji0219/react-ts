import { useContext } from 'react';

import classes from './TodoText.module.css';
import { TodoContext } from '../context/TodoContext';

type Props = {
  id: string;
  text: string;
};

const TodoText: React.FC<Props> = ({ text, id }) => {
  const { onRemoveTodo } = useContext(TodoContext);

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
