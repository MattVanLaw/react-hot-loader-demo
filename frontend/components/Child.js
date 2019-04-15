import React from 'react'

class Child extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOption: 'hello'
    }
  }

  render() {
    return (
      <div>
        {this.state.selectedOption}
        <button
          onClick={() => this.setState({ selectedOption: 'goodbye'})}
        >
          Change text to my left
        </button>
      </div>
    )
  }
}

export default Child
