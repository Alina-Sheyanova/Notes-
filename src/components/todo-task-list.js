import React from 'react'
import TodoTask from './todo-task';
import ReactDOM from 'react-dom';


class TodoTaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [1, 2, 3 ,5]
        };
    
    }

    render() {
        const list = this.state.items.map((item, index) => {
            return <TodoTask key={index} content={item}/>;
        });

        return (
        <div>
            {list}
            <button>+</button>
            <input type="text"></input>
        </div>);
    }
}

export default TodoTaskList;