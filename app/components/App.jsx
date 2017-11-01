import React from 'react'
import uuid from 'uuid'
import Notes from './Notes'

// use function (render) based solution here
// alternative: use class

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn JS'
        },
        {
          id: uuid.v4(),
          task: 'Learn more JS'
        }
      ]
    }
  }
  render() {
    const {notes} = this.state;

    return (
      <div>
        <Notes notes={notes} />
        {/*onClick = a function. () => : no args*/}
        {/*addNote defined below*/}
        <button onClick={this.addNote}> + </button>
      </div>
    )
  }
  addNote = () => {
    // using functional style
    // setState({new state here}, () => ... )
    this.setState({
      // add the new note after the existing notes
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task!'
      }])
    })
  }
}