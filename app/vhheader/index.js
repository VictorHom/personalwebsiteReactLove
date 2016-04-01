import React from 'react';
import {Link} from 'react-router';

export default class VHHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos : 0,
      topNav : true
    };
  }

  handleScroll() {

  }

  showLeft() {
    console.log("This is to make sure you show")
  }

  render() {
    return (
      <div className="vhheader header-wrapper">
        <header className="clearfix vh-header">
          <div className="col col-1 burger-nav">
            <img onClick={this.showLeft} src="../dist/img/navbutton.svg" alt="burger nav button"/>
          </div>
          <Link className="col col-11 text-decoration-none menu-item header-link h1 center block mx-auto" to="/">VH</Link>
        </header>
      </div>
    )
  }
}
