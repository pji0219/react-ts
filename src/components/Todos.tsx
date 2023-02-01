import React from 'react';

type Props = {
  title: string;
};

// React.FC는 이미 제네릭 타입이기에 내부적으로 <>를 사용해 이미 구현되어 있다.
// 그래서 이것의 뒤에 오는 <>에는 우리가 구체적으로 타입을 정해주는 것이다.
const Todos: React.FC<Props> = (props) => {
  return (
    <ul>
      <li>{props.title}</li>
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
