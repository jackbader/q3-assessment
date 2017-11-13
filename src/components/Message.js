import React from 'react'

const Message = ({message, deleteMessage}) => {

  return (
    <div>
      <li>{'Name: ' + message.name + ' Message: ' + message.message}</li>
      <button onClick={() => deleteMessage(message)}>x</button>
    </div>
  )
}

export default Message
