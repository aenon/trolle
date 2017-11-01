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
        {/*onClick = a function. () => : no args*/}
        <Notes notes={notes} />
        <button onClick={() => console.log('add note')}> + </button>
      </div>
    )
  }
}