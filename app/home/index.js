import React, { Component } from 'react';

export default class Home extends Component {
  render : () {
    return (
      <div className="hom">
        <h1 class="greetings">Hello!</h1>
        <section>
          My name is Victor and I enjoy understanding the learning process.
          I am pursuing continuous learning in my work.
          Previously, I was a product engineer, helping customers solve technology problems.
          Now, I am working on web apps and learning new technologies.
          This site is made with React!
        </section>
        <br/>
        <section>
          Javascript is cool. Angular and React are awesome. <br/>
          I have experience with Java and Python from my undergraduate studies.
        </section>
        <br/>
        <section>
          I was a clothing salesman for 10 years in the Lower
          East Side Bargain District.
        </section>
      </div>
    )
  }
}
