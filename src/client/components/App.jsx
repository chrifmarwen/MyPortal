import React, { Component } from 'react';
import  { Alert } from 'react-bootstrap'

class App extends Component {
  render() {
    return <Alert bsStyle="warning">
      <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
      good.
    </Alert>;
  }
}

export default App;