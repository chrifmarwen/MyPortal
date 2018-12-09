import React, { Component } from 'react'

import Navigation from './Navigation.jsx'
import Header from './Header.jsx'
import Section from './Section.jsx'
import Footer from './Footer.jsx'

class App extends Component {
  render() {
    return [
      <Navigation key={1} />,
      <Header key={2} />,
      <Section key={3}/>,
      <Footer key={4}/>
    ]
  }
}

export default App