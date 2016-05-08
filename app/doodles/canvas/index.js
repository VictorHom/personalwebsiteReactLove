import React, { Component } from 'react';

export default class Canvas extends React.Component {
  componentDidMount() {
    this.props.func(this.props.drawing, this.props.width, this.props.height);
  }

  render() {
    return (
      <div className="canvas">
        <div>{ this.props.name }</div>
        <svg className= { this.props.drawing } >
        </svg>
      </div>
    )
  }
}
