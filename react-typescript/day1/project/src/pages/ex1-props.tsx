import React, { Component } from 'react'
import SayMyName from '../components/sayMyName'

export class Ex1Props extends Component {
  render() {
    return (
      <>
        <SayMyName name="ex1"></SayMyName>
        <SayMyName name="ex2"></SayMyName>
        <SayMyName name="ex3"></SayMyName>
      </>
    )
  }
}

export default Ex1Props