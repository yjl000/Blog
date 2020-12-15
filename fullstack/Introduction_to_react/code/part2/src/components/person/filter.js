import React from 'react'

const Filter = (props) => {
  return <div>filter shown with <input value={props.searchName} onChange={props.handleSearchChange} />  </div>
}

export default Filter