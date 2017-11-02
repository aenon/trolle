import React from 'react'

export default ({task, onDelete}) => (
  <div>
    <span>{task}</span>
    <button onClick={() => console.log('delete note' + task)}> x </button>
  </div>
)