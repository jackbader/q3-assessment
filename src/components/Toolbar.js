import React from 'react'

const Toolbar = ({toggleCompose, filterMessage, messages}) => {

  return (
    <div>
      <button onClick={toggleCompose}>Create Message</button>
      <form>
        <input onChange={(e) => filterMessage(e)}></input>
        <button>Search</button>
      </form>
      <p>{'Total Messages: ' + messages.length}</p>
    </div>
  )

}

export default Toolbar
