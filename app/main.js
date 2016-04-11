// entry point for webpack
import './styles/index.scss';
import Home from './home/';
import Doodles from './doodles/';
import About from './about/';
import Portfolio from './portfolio/';
import Resume from './resume/';
import SocialMedia from './socialmedia/';
import VHHeader from './vhheader/'
import React from 'react';
import { render } from 'react-dom';
import { Router, Route,
  Link, browserHistory, hashHistory,
  IndexRoute, Redirect,
  DefaultRoute
  } from 'react-router';

class App extends React.Component {

  showNav() {
    // var myNav = document.getElementsByClassName("nav-container")[0]
    // myNav.classList.add("nav-container-show")
    const navigationComponent = document.getElementsByClassName("nav-container")[0];

  }

  render(){
    return (
      <div className="container application fit clearfix">
        <nav className="nav-container">
        <ul className="full-menu">
          <li><Link className="text-decoration-none menu-item" to="/">Home</Link></li>
          <li><Link className="text-decoration-none menu-item" to="/about">About</Link></li>
          <li><Link className="text-decoration-none menu-item" to="/portfolio">Portfolio</Link></li>
          <li><Link className="text-decoration-none menu-item" to="/resume">Resume</Link></li>
          <li><Link className="text-decoration-none menu-item" to="/doodles">Doodles</Link></li>
          <li><Link className="text-decoration-none menu-item" to="/connect">Connect</Link></li>
        </ul>
        </nav>
        <div className="app-vhheader-wrap">
          <VHHeader></VHHeader>
        </div>
        <div className="application-content pl3">
          <div className=".clearfix main-surround">
            {this.props.children}
          </div>
        </div>
      </div>

    )
  }
}
// history={browserHistory}
render((
  <Router history={hashHistory}>
    <Route  path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="resume" component={Resume} />
      <Route path="doodles" component={Doodles} />
      <Route path="connect" component={SocialMedia} />
      <Route path="/*" component={Home} />
      <IndexRoute component={Home} />
    </Route>
    <Route path="*" component={App} />
    <Redirect from="/" to="/" />
</Router>
), document.getElementById('app'))
