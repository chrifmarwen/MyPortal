import React, { Component } from 'react'

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return <footer className="py-5 bg-black">
      <div className="container">
        <p className="m-0 text-center text-white small">Copyright &copy; MC Portal {currentYear}</p>
      </div>
    </footer>
  }
}

export default Footer;