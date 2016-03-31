import React from 'react';
import {Link} from 'react-router';

export default class VHHeader extends React.Component {
  render() {
    return (
      <div className="vhheader header-wrapper">
        <header className="vh-header"><Link className="text-decoration-none menu-item header-link h1 center block mx-auto" to="/">Victor Hom</Link></header>
      </div>
    )
  }
}
