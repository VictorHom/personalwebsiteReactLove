import React, { Component } from 'react';
import SocialMedia from '../socialmedia/';

export default class About extends React.Component {
  render() {
    return (
      <div className="hom col lg-col-12 md-col-8 sm-col-8 p4">
        <section className="col lg-col-12 mb1 profile-thought">
            <div className="thought-container">
            <p className="thought">
            homburgers or...<br />
            should I go for a run first?
            </p>
            </div>
            <div className="profile-container">
            <img src="/dist/profile.jpg" className="profile"></img>
            </div>
        </section>
        <div className="separator"></div>
        <br/><br/>
        <section className="col lg-col-12 mb1">
          My name is Victor and I enjoy understanding the learning process.
          I am pursuing continuous learning in my work.<br/>
        </section>
        <br/><br/>
        <section className="col lg-col-12 mb1">
          Previously, I was a product engineer, helping customers solve technology problems.
        </section>
        <br/><br/>
        <section className="col lg-col-12 mb1">
          Now, I am working on web apps and learning new technologies.
          This site is made with React!
        </section>
        <br/><br/>
        {/*<section className="col lg-col-12 mb1">
          This site is made with React!
        </section>
        <br/><br/>*/}
        <section className="col lg-col-12 mb1">
          Javascript is cool. Angular and React are awesome. <br/>
          {/*I have experience with Java from my undergraduate studies. I like to play with different technologies in my free time.*/}
        </section>
        <br/><br/>
        <section className="col lg-col-12 mb1">
          I was a clothing salesman for 10 years in the Lower
          East Side Bargain District.
        </section>
        <br/><br/>
        <section className="col lg-col-12 mb1">
          <SocialMedia />
        </section>
      </div>
    )
  }
}
