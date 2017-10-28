import React from 'react'
import Notes from './Notes'

export default () => (
  <div>
    <Notes />
    <button onClick={() => console.log('add note')}> + </button>
  </div>
)