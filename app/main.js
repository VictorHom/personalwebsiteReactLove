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

  toggleNav() {
    const content = document.getElementsByClassName("application-content")[0];
    const nav = document.getElementsByClassName("nav-container")[0];
    if (nav.classList.contains("nav-container-show")) {
      nav.classList.remove("nav-container-show")
    } else {
      nav.classList.add("nav-container-show")
    }
    //gray out the text
    if (content.classList.contains("text-grayout")) {
      content.classList.remove("text-grayout");
    } else {
      content.classList.add("text-grayout");
    }
  }

  render(){
    return (
      <div className="container application fit clearfix">
        <nav className="nav-container">
        <ul className="full-menu" >
          <li><Link onClick={this.toggleNav} className="text-decoration-none menu-item" to="/">Home</Link></li>
          <li><Link onClick={this.toggleNav} className="text-decoration-none menu-item" to="/portfolio">Portfolio</Link></li>
          <li><Link onClick={this.toggleNav} className="text-decoration-none menu-item" to="/resume">Resume</Link></li>
          <li><Link onClick={this.toggleNav} className="text-decoration-none menu-item" to="/doodles">Doodles</Link></li>
          <li><Link onClick={this.toggleNav} className="text-decoration-none menu-item" to="/connect">Connect</Link></li>
        </ul>
        </nav>
        <div className="app-vhheader-wrap">
          <VHHeader toggleNav={this.toggleNav}></VHHeader>
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
