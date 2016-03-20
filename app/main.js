// entry point for webpack
import './styles/index.scss';
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
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route component={Inbox}>
        <Route path="inbox" />
        <Route path="messages/:id" component={Message} />
      </Route>
      <Redirect from="/" to="/" />
      {/*<DefaultRoute handler={App} />*/}
      {/*<NotFoundRoute handler={Dashboard} />*/}
    </Route>
  </Router>
), document.getElementById('app'))
