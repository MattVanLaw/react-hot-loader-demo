import React from 'react'

class GrandChild extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOption: 'grandchillen'
    }
  }

  render() {
    return (
      <div>
        {this.state.selectedOption}
        <button
          onClick={() => this.setState({ selectedOption: 'born!' })}
        >
          Mother, change my dd.
        </button>
      </div>
    )
  }
}

export default GrandChild
