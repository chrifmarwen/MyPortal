import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import {
  HomePage,
  AboutMePage,
  MyPortfolioPage
} from './pages.jsx'

import Whoops404 from './components/Layout/Whoop404'

import styles from './scss/application.scss';

window.React = React;
render(
    <HashRouter>
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Router path="/my-portfolio" component={MyPortfolioPage} />
          <Route path="/aboutme" component={AboutMePage} />
          <Route component={Whoops404} />
        </Switch>
      </div>
    </HashRouter>,
    document.getElementById('root')
);