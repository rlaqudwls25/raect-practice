import React, { useState } from 'react'
import MouseMoveDetect from '../component/mouseMoveDetect'

function Ex8UseEffect() {

  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display ? <MouseMoveDetect></MouseMoveDetect> : <></>}
    </div>
  )
}

export default Ex8UseEffect
