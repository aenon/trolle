import React from 'react'
import uuid from 'uuid'

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

export default () => {
  console.log(notes)
  return (
    <ul>{
      notes.map(
        note => <li key={note.id}>{note.task}</li> 
      )
    }</ul>
  )
}