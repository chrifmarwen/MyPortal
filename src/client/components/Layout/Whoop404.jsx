import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

import Navigation from './navigation.jsx'
import Footer from './footer.jsx'

class Whoops404 extends Component {
  render() {
    return [
      <Navigation key={1} />,
      <header key={2} className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container">
            <Alert bsStyle="warning">
              <strong>Oups !</strong> we're not able to get the requested page.
            </Alert>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>,
      <Footer key={3}/>
    ]
  }
}

export default Whoops404;