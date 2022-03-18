import React, { useState } from 'react'

function Ex5SetstateMultipleFunc() {

  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // 이건 안된다는걸 이미 알고있음
      // setCount(count + 1)

      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => incrementFive()}>Increment 5</button>
    </div>
  )
}

export default Ex5SetstateMultipleFunc