import React, { Component } from 'react'
import { sayMyName } from './util/util'


export class Ex5ClassLifecycleUpdate extends Component {

  isLoading = false


  constructor(props) {
    super(props)

    this.state = {
      name: 'username'
    }
  }


  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle Update getDerivedStateFromProps')
    return null
  }

  shouldComponentUpdate() {
    console.log('Lifecycle Update shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('Lifecycle Update componentDidUpdate');
  }

  changeState = () => {
    this.setState({ name: "username1" })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}>update</button>
      </div>
    )
  }
}

export default Ex5ClassLifecycleUpdate
