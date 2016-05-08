import React, { Component } from 'react';
import Doodle from './doodle/';
import Canvas from './canvas/';
import zollner from './zollner/';
import plant from './plant/';

export default class Doodles extends React.Component {
 render() {
   return (
    <div className="hom col lg-col-12 md-col-8 sm-col-8 p4 doodles">
      <Canvas func={zollner} name="Zollner" drawing="zollner" width={400} height={200} />
      <Canvas func={plant} name="Plant" drawing="plant" width={400} height={200} />
    </div>
    );
 }
}
