import React from 'react'

const Part = ({part}) => {
  return <li>{part.name} {part.exercises}</li>
}

export default Part