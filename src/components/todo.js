import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            done: !this.state.done
        })
    }

    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.toggle}/>
                { this.state.done ? <del>{this.props.content}</del> : <span>{this.props.content}</span> }
            </div>
        );
    }
}

export default Todo;