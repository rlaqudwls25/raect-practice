import React, { Component } from 'react'

interface Props {
  message: string
}

interface State {

}

export class AlertCompClass extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  myClick() {
    alert(`this is props message :: ${this.props.message}`)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.myClick()}>AlertPropsMessage</button>
      </div>
    )
  }
}

export default AlertCompClass