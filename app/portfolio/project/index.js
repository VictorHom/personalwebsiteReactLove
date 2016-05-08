import React, { Component } from 'react';

export default class Project extends React.Component {
  render() {
    return (
      <div className="project">
      {/* make blurb display none if small screen*/}
        <p className="blurb">
          {this.props.blurb}
        </p>
        <div className="project-img">
        <a href={this.props.link} target="_blank"><img src={this.props.imgsrc}/></a>
        </div>

      </div>
    );
  }
}
