import React from 'react'
import uuid from 'uuid'
import Notes from './Notes'

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn Javascript'
  },
  {
    id: uuid.v4(),
    task: 'Learn more Javascript'
  }
]

export default () => (
  <div>
    <Notes notes={notes} />
    <button onClick={() => console.log('add note')}> + </button>
  </div>
)