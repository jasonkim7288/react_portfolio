import React from 'react';

import projectList from '../data/projectList';
import '../stylesheets/Projects.scss';

function Projects() {
  return (
    <div className="container">
      <h1 className="text-title">Projects</h1>
      <br />
      <div className="project-list">
      {projectList.map((project, index) => {
        return (
          <div className="project">
            <h1 className="text-center">{project.title}</h1>
            <img className="project-picture" src={project.picture} alt={`${project.title}`}/>
            <p className="project-content">{project.desc}</p>
            <br />
            <p className="project-content"><strong>Tech Stack : </strong> {` ${project.techStack}`}</p>
            <p className="project-content">Source link : <a href={project.git} rel="noopener noreferrer" className="links-icon links-icon-background" target="_blank"><i className="fab fa-github"></i></a></p>
            <p className="project-content">Live site : <a href={project.deploy} rel="noopener noreferrer" className="links-icon links-icon-background" target="_blank"><i class="far fa-play-circle"></i></a></p>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Projects;
