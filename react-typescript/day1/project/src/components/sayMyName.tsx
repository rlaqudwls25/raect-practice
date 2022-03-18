import React, { ComponentProps } from 'react'

interface SayMyNameProps {
  name: string
}

function SayMyName(props: SayMyNameProps) {
  return (
    <h1>My name is {props.name}</h1>
  )
}

export default SayMyName