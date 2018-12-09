import React, { Component } from 'react'

import Welcome from './Welcome'

class App extends Component {
  render() {
    return [
        <Welcome key={1} />,
  ]
  }
}

export default App