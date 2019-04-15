import React from 'react'
import { hot } from 'react-hot-loader/root'
import Child from './Child'

class App extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const currentCount = this.state.count
    this.setState({ count: currentCount + 1 })
  }

  render() {
    return (
      <div>
        <button
          style={{ width: 50, height: 20, background: 'orange' }}
          onClick={this.handleClick}
        >
          {this.state.count}
        </button>
        <Child />
      </div>
    )
  }
}

export default hot(App)
