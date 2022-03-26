import React, { useEffect, useState } from 'react'

function Ex6UseEffect() {

  const [count, setCount] = useState(0)

  useEffect(
    () => {
      // after render
      document.title = `You clicked ${count} times`
    }
  )

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default Ex6UseEffect
