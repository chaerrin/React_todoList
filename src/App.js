import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
  h2 {
    font-size: 30px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: -90px;
  }
`;
function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <h2>To-do list</h2>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
