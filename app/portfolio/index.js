import React, { Component } from 'react';
import Project from './project/'

export default class Portfolio extends React.Component {
 render() {
   let outbreak = `Outbreak is a online web game of the popular collaborative board game 'Pandemic'`;
   let citibike = `My first javascript project was a visualization of Citi Bike data in NYC`
   return (
     <div className="col lg-col-12 md-col-8 sm-col-8 p4 portfolio">
      <Project imgsrc="/dist/outbreakproject.png" link="https://github.com/ajpz/outbreak" blurb={outbreak}/>
      <Project imgsrc="/dist/citibikeproject.png" link="https://github.com/VictorHom/CitiBike" blurb={citibike}/>
     </div>
   );
 }
}
