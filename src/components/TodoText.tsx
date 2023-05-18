import { useContext } from 'react';
import styled from 'styled-components';

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

  return <Todo onClick={removeTodoHandler}>{text}</Todo>;
};

export default TodoText;

const Todo = styled.li`
  margin: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: #f7f5ef;
`;
