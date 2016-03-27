import React from 'react';

export default class SocialMedia extends React.Component {
  render() {
    return (
      <div>
        <div className='social-media'>
          <ul>
            <li>
              <a target="_blank" href="https://github.com/VictorHom">
                <img src="dist/img/github.svg" alt="github"/>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/victor-hom-01017533">
                <img src="dist/img/linkedin.svg" alt="linkedin"/>
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:victor.hom16@gmail.com">
                <img src="dist/img/email.svg" alt="email at victor.hom16@gmail.com"/>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.tumblr.com/blog/heyvicter">
                <img src="dist/img/tumblr.svg" alt="tumblr blog"/>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://medium.com/@heyvictor">
                <img src="dist/img/medium.svg" alt="medium blog"/>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.pinterest.com/victorhom1/">
                <img src="dist/img/pinterest.svg" alt="pinterest"/>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/HeyVicter">
                <img src="dist/img/twitter.svg" alt="twitter"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};
