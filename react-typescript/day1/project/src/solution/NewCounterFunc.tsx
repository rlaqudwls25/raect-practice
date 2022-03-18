import React, { useState } from 'react'

function NewCounterFunc() {

  const [diff, setDiff] = useState(1)
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + diff)
  }

  const decrease = () => {
    setCount(count - diff)
  }

  return (
    <div>
      <div>count: {count}</div>
      <div>
        <input type="text" value={diff} onChange={(e) => setDiff(+e.target.value)} />
      </div>
      <button onClick={() => increase()}>increase</button>
      <button onClick={() => decrease()}>decrease</button>
    </div>
  )
}

export default NewCounterFunc
