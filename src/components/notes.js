import React from 'react'
import Note from './note';



class Notes extends React.Component {

    constructor(props) {
        super(props);
        this.state = { notes: [0] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const newNotes = this.state.notes;
        newNotes.push(newNotes.length);
        this.setState({
            notes: newNotes
        });
    }

    render() {
        const notes = this.state.notes.map((note) => {
            return <Note key={note}/>
        });

        return (
            <div>
                {notes}
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Add notes" />
                </form>
            </div>
        );
    }
}


export default Notes;