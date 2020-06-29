import React from 'react'
import TodoTask from './todo';
import AddTodo from './add-todo';



class TodoTaskList extends React.Component {   
  constructor(props) {
    super(props);
    this.state = {
      todoTasks: []
    };
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text) { 
    if (text.length === 0) {
      return;
    }
    
    const newTodoTasks = this.state.todoTasks
    newTodoTasks.push(text)
    this.setState({
      todoTasks: newTodoTasks
    });
  }

  render() {
    const todoTaskList = this.state.todoTasks.map((todoTask, index) => {
        return <TodoTask key={index} content={todoTask}/>;
    });

    return (
      <div>
          {todoTaskList}
          <AddTodo onSave={this.handleSave}/>
      </div>
    );
  }
}

export default TodoTaskList;