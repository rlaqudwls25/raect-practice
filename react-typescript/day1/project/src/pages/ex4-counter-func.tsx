import React, { useState } from 'react'

function Ex4CounterFunc() {

  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => increase()}>increase</button>
    </div>
  )
}

export default Ex4CounterFunc