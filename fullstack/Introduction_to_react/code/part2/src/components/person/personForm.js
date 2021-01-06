import React from 'react'

const PersonForm = (props) => {
  return (
      <form onSubmit={props.addName}>
        name: <input value={props.newPerson} placeholder="please input you name" onChange={props.handleValueChange} /><br />
        number: <input value={props.newNumber} placeholder="please input you number" onChange={props.handleNumberChange} /><br />
        <button type="submit">add</button>
      </form>
  )
}

export default PersonForm