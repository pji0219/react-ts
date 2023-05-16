import React, { useState, PropsWithChildren } from 'react';

import Todo from '../models/todos';

type TdosContextObj = {
  items: Todo[];
  onAddTodo: (text: string) => void;
  onRemoveTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TdosContextObj>({
  items: [],
  onAddTodo: (text: string) => {},
  onRemoveTodo: (id: string) => {},
});

export const TodoContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };

  const onRemoveTodo = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <TodoContext.Provider value={{ items: todos, onAddTodo, onRemoveTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
