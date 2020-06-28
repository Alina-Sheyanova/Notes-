import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoTask from './components/todo-task';
import TodoTaskList from './components/todo-task-list';

ReactDOM.render(
  <React.StrictMode>
    <TodoTaskList />
   


  </React.StrictMode>,
  document.getElementById('root')
);
