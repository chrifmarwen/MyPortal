import React, { Component } from 'react'

import Navigation from './navigation.jsx'
import Footer from './footer.jsx'

class Layout extends Component {
  render() {
    let children = this.props.children;

    return [
      <Navigation key={1} />,
      children,
      <Footer key={2}/>
    ]
  }
}

export default Layout