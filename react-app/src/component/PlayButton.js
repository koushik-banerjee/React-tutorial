import React from 'react'

function PlayButton({message,children,onSmash}) {

  function handleClick() {
    onSmash();
  }

  return (
    <button onClick={handleClick}>{children}</button>   // event and event-handler function
  )
}

export default PlayButton
