import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement, reset } from '../../redux/actions/actions'

class Counter extends Component {

  render () {
    const { count } = this.props
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.props.increment}>+1</button>
        <button onClick={this.props.decrement}>-1</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (props) => {
  const {count} = props
  return ({ count })
}

function mapDispatchToProps(dispatch) {
  return({
      increment: () => {dispatch(increment())},
      decrement: () => {dispatch(decrement())},
      reset: () => {dispatch(reset())}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
