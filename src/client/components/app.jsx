import React, { Component } from 'react'
import Welcome from './Home'

class App extends Component {
  render() {
    return [
        <Welcome key={1} />,
  ]
  }
}

export default App