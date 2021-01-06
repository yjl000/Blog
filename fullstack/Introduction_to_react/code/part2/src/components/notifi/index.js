import React from 'react'

const Notification = ({message, className}) => {
  if (!message) {
    return null
  }

  return (
    <div className={className}>
      {message}
    </div>
  )
}

export default Notification