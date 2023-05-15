import { useRef } from 'react';

type Props = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<Props> = ({ onAddTodo }) => {
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
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>할 일 입력</label>
      <input type='text' id='text' ref={todoInputRef} />
      <button type='submit'>할 일 추가</button>
    </form>
  );
};

export default NewTodo;
