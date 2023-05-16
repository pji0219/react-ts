import React, { useContext } from 'react';

import TodoText from './TodoText';
import classes from './Todos.module.css';
import { TodoContext } from '../context/TodoContext';

/* type Props = {
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}; */

// React.FC는 이미 제네릭 타입이기에 내부적으로 <>를 사용해 이미 구현되어 있다.
// 그래서 이것의 뒤에 오는 <>에는 우리가 구체적으로 타입을 정해주는 것이다.
// 그리고 여기에서는(리액트에서는?) 타입스크립트가 제네릭 타입을 추론하게 둘 수 없기 때문이다.
// <Props> 이게 제네릭인 이유는 함수형 컴포넌트마다 props에 대한 정의가 다를 것이기 때문이다.

// 제네릭을 사용하는 구문인<>를 씀으로써 FC타입 내부에 있는 제네릭 기능을 밖으로 꺼낸 것이다.
const Todos: React.FC = () => {
  const { items } = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoText key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;

// props children

// 아래 코드는 더이상 안됨

// const Todos: React.FC = (props) => {
//   return (
//     <ul>
//       {props.children}
//     </ul>
//   );
// }

// export default Todos;

export const Todos1: React.FC<React.PropsWithChildren> = (props) => {
  return <ul>{props.children}</ul>;
};

// 다른 방법
export const Todos2 = (props: React.PropsWithChildren) => {
  return <ul>{props.children}</ul>;
};

export const Todos3 = ({ children }: React.PropsWithChildren) => {
  return <ul>{children}</ul>;
};

// 이렇게 하면 내가 정의한 props도 쓸수 있고 children도 쓸 수 있다.
/* export const Todos4: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <ul>
      <li>
        {props.items.map((item) => (
          <li>{item.text}</li>
        ))}
      </li>
      <li>{props.children}</li>
    </ul>
  );
}; */

// 다른 방법
/* export const Todos5 = (props: React.PropsWithChildren<Props>) => {
  return (
    <ul>
      <li>
        {props.items.map((item) => (
          <li>{item.text}</li>
        ))}
      </li>
      <li>{props.children}</li>
    </ul>
  );
}; */

/* export const Todos6 = ({ items, children }: React.PropsWithChildren<Props>) => {
  return (
    <ul>
      <li>
        {items.map((item) => (
          <li>{item.text}</li>
        ))}
      </li>
      <li>{children}</li>
    </ul>
  );
}; */
