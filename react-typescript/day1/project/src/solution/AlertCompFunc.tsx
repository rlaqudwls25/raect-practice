import React from 'react'

interface Props {
  message: string
}

function AlertCompFunc(props: Props) {

  function myClick() {
    alert(`this is props message :: ${props.message}`)
  }

  return (
    <div>
      <button onClick={() => myClick()}>AlertPropsMessage</button>
    </div>
  )
}

export default AlertCompFunc
