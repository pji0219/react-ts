import { useContext } from 'react';
import styled from 'styled-components';

import { TodoContext } from '../context/TodoContext';
import { Btn } from './NewTodo';

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
    <Todo>
      {text}
      <RemoveBtn primary={false} onClick={removeTodoHandler}>
        삭제
      </RemoveBtn>
    </Todo>
  );
};

export default TodoText;

const Todo = styled.li`
  margin: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: #f7f5ef;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveBtn = styled(Btn)`
  border-radius: 20px;
  color: #fff;

  &:hover,
  &:active {
    color: #222;
  }
`;
