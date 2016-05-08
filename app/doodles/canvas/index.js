import React from 'react';

var Canvas = React.createClass({
  componentDidMount : function() {
    this.props.func(this.props.drawing, this.props.width, this.props.height);
  },
  render : function() {
    return (
      <div className="canvas">
        <div>{ this.props.name }</div>
        <svg className= { this.props.drawing } >
        </svg>
      </div>
    )
  }
});

module.exports = Canvas;
