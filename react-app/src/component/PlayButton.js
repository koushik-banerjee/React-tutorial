import React from 'react'

function PlayButton({message,name}) {

  function handleClick() {
    alert(message)
  }

  return (
    <button onClick={handleClick}>{name}</button>   // event and event-handler function
     
    
  )
}

export default PlayButton
