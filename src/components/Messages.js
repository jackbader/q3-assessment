import React from 'react'
import Message from '../components/Message'

const Messages = ({messages, deleteMessage}) => {

  return (

    <div>
      <ul>{messages.map( (message, i) => <Message key={ i } message={ message } deleteMessage={deleteMessage}/> ) }</ul>

    </div>

  )

}

export default Messages
