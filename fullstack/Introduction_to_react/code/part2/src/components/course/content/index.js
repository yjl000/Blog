import React from 'react'
import Part from './part/index'
const Content = ({parts}) => {
 
  return (
    <div>
      <ul>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </ul>
      <h3>Total of {parts.reduce((total, part) => { return total + part.exercises}, 0)} exercises</h3>
    </div>
  )
}

export default Content