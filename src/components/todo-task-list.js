import React from 'react'
import TodoTask from './todo-task';
import ReactDOM from 'react-dom';


class TodoTaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.items.map((item, index) => {
            return <TodoTask key={index} content={item}/>;
        });

        return <div>{list}</div>;
    }
}

export default TodoTaskList;