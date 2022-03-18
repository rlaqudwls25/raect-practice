import React, { Component } from 'react'

interface Props {

}

interface State {
  count: number
}

export class Ex3CounterClass extends Component<Props, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increase() {
    // setState 를 사용하지 않았을 때
    // this.state.count = this.state.count + 1
    // console.log('this.state.count: ', this.state.count);

    // setState 는 비동기로 동작됨
    this.setState({ count: this.state.count + 1 })
    console.log('this.state.count: ', this.state.count);
  }

  increaseSync() {
    // setState의 이전 결과를 받기위해선 callback function을 사용해야 함
    this.setState(
      (prevState, props) => { return { count: prevState.count + 1 } },
      () => { console.log('Callback value :: ', this.state.count) }
    )
  }

  increaseFive() {
    // this.increase()
    // this.increase()
    // this.increase()
    // this.increase()
    // this.increase()

    // this.increaseSync()
    // this.increaseSync()
    // this.increaseSync()
    // this.increaseSync()
    // this.increaseSync()
  }


  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={() => this.increase()}>increase</button>
        <button onClick={() => this.increaseFive()}>increaseFive</button>
      </div>
    )
  }
}

export default Ex3CounterClass