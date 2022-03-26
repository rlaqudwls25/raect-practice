import React, { Component } from 'react'

export class Ex4ClassLifecycleMount extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'myname'
    }

    console.log('Lifecycle Mount constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle Mount getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('Lifecycle Mount componentDidMount')
    // 데이터를 받아오는 곳
  }

  render() {
    console.log('Lifecycle Mount render')

    return (
      <div>
        {/* 데이터를 이용한 화면 구현 ~~~~~~ */}
      </div>
    )
  }
}

export default Ex4ClassLifecycleMount
