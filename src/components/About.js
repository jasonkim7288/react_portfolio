import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = "About | Jason's Portfolio";
  }, []);

  return (
    <div className="container-sm">
      <h1 className="text-title">About me</h1>
      <p className = "text-explain">I am a full stack developer who loves coding, problem solving, and communicating.</p>
      <p className = "text-explain">I am currently studying web development and agile methodology at Coder Academy. Previousely I had
        worked at LG Electronics as an IOT software developer and mobile phone software developer.</p>

      <h1 className="text-title">Skills</h1>
      <div className="tech-icons">
        <i className="fab fa-html5" data-toggle="tooltip" title="HTML5"></i>
        <i className="fab fa-css3-alt" data-toggle="tooltip" title="CSS3"></i>
        <i className="fab fa-js-square" data-toggle="tooltip" title="JavaScript"></i>
        <i className="fab fa-java" data-toggle="tooltip" title="Java"></i>
      </div>
      <div className="tech-icons">
        <i className="fab fa-react" data-toggle="tooltip" title="ReactJS"></i>
        <i className="fab fa-node-js" data-toggle="tooltip" title="NodeJS"></i>
        <i className="fas fa-database" data-toggle="tooltip" title="PostgreSQL & MongoDB"></i>
        <i className="fas fa-gem" data-toggle="tooltip" title="Ruby On Rails"></i>
      </div>

      <h1 className="text-title">Download CV</h1>

      <div className="tech-icons">
        <a href='https://whereever-s3-bucket.s3-ap-southeast-2.amazonaws.com/Jason+Kim+Resume.pdf' rel="noopener noreferrer" target="_blank" >
          <i className="far fa-file-pdf"></i>
        </a>
      </div>
    </div>
  );
}

export default About;