import React from 'react'
import Note from './note';
import { v4 as uuidv4 } from 'uuid';
import './style.css';



class Notes extends React.Component {

    constructor(props) {
        super(props);
        this.state = { notes: [0] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDelete(note){
        const newNotes = this.state.notes;
        const index = newNotes.indexOf(note);
        newNotes.splice(index, 1);
        this.setState({
            notes: newNotes
        });
     }


    handleSubmit(event) {
        event.preventDefault();
        const newNotes = this.state.notes;
        newNotes.push(uuidv4());
        this.setState({
            notes: newNotes
        });
    }

    render() {
        const notes = this.state.notes.map((note) => {
            return <div class="Note" key={note}><Note /> <button class="Delete" onClick={() => this.handleDelete(note)}>Delete note</button></div>
        });

        return (
            <div>
                {notes}
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Add notes" class="AddNotes" />
                </form>
            </div>
        );
    }
}


export default Notes;