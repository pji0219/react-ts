import { ThemeProvider } from 'styled-components';

import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import { TodoContextProvider } from './context/TodoContext';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoContextProvider>
        <NewTodo />
        <Todos />
      </TodoContextProvider>
    </ThemeProvider>
  );
}

export default App;
