import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to="">M.C. Portal</NavLink>
            <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                {/*<li className="nav-item">*/}
                {/*<NavLink className="nav-link" to="/aboutme">About Me</NavLink>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                {/*<a className="nav-link" href="#">Log In</a>*/}
                {/*</li>*/}
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navigation;
