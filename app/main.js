// entry point for webpack
import './styles/index.scss';
import {Doodles} from './doodles/';
import Home from './home/';
import {Portfolio} from './portfolio/';
import {Resume} from './resume/';
import {SocialMedia} from './socialmedia/';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route,
  Link, browserHistory, hashHistory,
  IndexRoute, Redirect,
  DefaultRoute, NotFoundRoute
  } from 'react-router';

// ReactDOM.render(<App />, document.getElementById('root'));
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/doodles">Doodles</Link></li>
          <li><Link to="/connect">Connect</Link></li>
          <li><Link to="/aboutTest">aboutTest</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const AboutTest = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

// const Inbox = React.createClass({
//   render() {
//     return (
//       <div>
//         <h2>Inbox</h2>
//         {this.props.children || "Welcome to your Inbox"}
//       </div>
//     )
//   }
// })

// const Message = React.createClass({
//   render() {
//     return <h3>Message {this.props.params.id}</h3>
//   }
// })

// const Dashboard = React.createClass({
//   render() {
//     return <div>Welcome to the app!</div>
//   }
// })

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={Home} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="resume" component={Resume} />
      <Route path="doodles" component={Doodles} />
      <Route path="connect" component={SocialMedia} />
      <Route path="aboutTest" component={AboutTest} />
      {/*AboutTest*/}
      {/*<Redirect from="/" to="/home" />*/}
      {/*<Route path="*" component={Home} />*/}
      {/*<DefaultRoute component={App} />
      <NotFoundRoute component={Home} />*/}
    </Route>
  </Router>
), document.getElementById('app'))
