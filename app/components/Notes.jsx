import React from 'react'

const notes = [
  {
    id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
    task: 'Learn Javascript'
  },
  {
    id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
    task: 'Learn more Javascript'
  }
]

export default () => (
  <ul>{notes.map(note => 
    <li key={note.id}>{note.task}</li>
  )}</ul>
)