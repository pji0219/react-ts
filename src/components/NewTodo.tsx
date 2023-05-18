import { useContext, useRef } from 'react';
import styled from 'styled-components';

import { TodoContext } from '../context/TodoContext';

const NewTodo: React.FC = () => {
  const { onAddTodo } = useContext(TodoContext);

  // ref가 input 요소와 연결 될 것이기에 HTMLInputElement 타입을 지정해줘야 한다.
  // 시작 값은 null로 해주면 된다.
  const todoInputRef = useRef<HTMLInputElement>(null);

  // React.FormEvent은 리액트 패키지가 제공하는 타입으로 이벤트 객체가 form 이벤트 타입이라는 것을 명시하기 위해 사용
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // submit 이벤트가 호출되고 이 시점에서는 ref에 입력된 값이 저장 되어 있기에 !연산자를 통해 값이 100% 있다고 확신한다고 알린다.
    const enteredText = todoInputRef.current!.value;

    // 위의 코드에서 값이 100% 있다고 확신 했기 때문에 만약 사용자가 아무것도 입력 안했을 경우를 대비해 공백을 없애 주고
    // 입력된 텍스트의 길이가 0이라면 오류를 던져 주는 코드 작성
    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }

    onAddTodo(enteredText);
  };

  return (
    <TodoForm onSubmit={submitHandler}>
      <label htmlFor='text'>할 일 입력</label>
      <input type='text' id='text' ref={todoInputRef} />
      <Btn type='submit'>할 일 추가</Btn>
    </TodoForm>
  );
};

export default NewTodo;

const TodoForm = styled.form`
  width: 40rem;
  margin: 2rem auto;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    font: inherit;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #f7f5ef;
    border: none;
    border-bottom: 2px solid #494844;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 0.5rem;
  }
`;
export const Btn = styled.button`
  font: inherit;
  background-color: #ebb002;
  border: 1px solid #ebb002;
  color: #201d0f;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #ebc002;
    border-color: #ebc002;
  }
`;
