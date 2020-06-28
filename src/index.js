import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoTask from './components/todo-task';
import TodoTaskList from './components/todo-task-list';

ReactDOM.render(
  <React.StrictMode>
    <TodoTaskList items={[1, 2, 3 ,5]}/>
    <div>------</div>
    <TodoTaskList items={[1, 2, 3 ,5]}/>
    <div>------</div>
    <TodoTaskList items={[1, 3, 3 ,6]}/>


  </React.StrictMode>,
  document.getElementById('root')
);
