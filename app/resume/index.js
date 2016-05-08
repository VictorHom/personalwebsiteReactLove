import React, { Component } from 'react';

export default class Resume extends React.Component {
 render() {
   return (
     <div className="col lg-col-12 md-col-8 sm-col-8 p4 resume">
      <div className="resume-link">
        <a href="dist/Victor_Hom_Resume.pdf" target="_blank">
          Download
        </a>
      </div>
      <div className ="resume-container">
      <embed className="embed" src="dist/Victor_Hom_Resume.pdf" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">
      </embed>
      </div>
      </div>

    );
 }
}
