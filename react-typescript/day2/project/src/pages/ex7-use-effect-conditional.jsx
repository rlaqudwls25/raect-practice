import React, { useEffect, useState } from 'react'

function Ex7UseEffect() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    // after render
    console.log('useEffect - Updating document title')
    document.title = `You clicked ${count} times`
  }, [count, name])

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default Ex7UseEffect
