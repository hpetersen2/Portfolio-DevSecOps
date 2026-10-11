import { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.scss';

// TODO: Ziel der "see more projects"-Links eintragen (z. B. GitHub-Profil)
const MORE_PROJECTS_URL = '#';

function SeeMoreLink() {
  return (
    <a className="projects__more" href={MORE_PROJECTS_URL}>
      <svg
        aria-hidden="true"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 2v10a3 3 0 0 0 3 3h16" />
        <path d="m17 10 5 5-5 5" transform="translate(0 -1)" />
      </svg>
      <span>see more projects</span>
    </a>
  );
}

function Projects() {
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const selected = projects.find((project) => project.id === selectedId) ?? projects[0];

  return (
    <section id="projects" className="projects section--blue">
      <div className="projects__inner container">
        <h2 className="section-title">My project highlights</h2>

        {/* Desktop: Liste links, Detailkarte rechts */}
        <div className="projects__desktop only-desktop">
          <div className="projects__list-wrap">
            <ol className="projects__list">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className={project.id === selected.id ? 'is-active' : ''}
                >
                  <button
                    type="button"
                    aria-pressed={project.id === selected.id}
                    onClick={() => setSelectedId(project.id)}
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ol>
            <SeeMoreLink />
          </div>

          <ProjectCard project={selected} heading={`Project ${selected.title}`} />
        </div>

        {/* Mobile: alle Projekte untereinander */}
        <div className="projects__mobile only-mobile">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              heading={`${index + 1}.${project.title}`}
            />
          ))}
          <p className="projects__more-text">
            Write some information about your other projects. What other projects
            have you been working on so far?
          </p>
          <SeeMoreLink />
        </div>
      </div>
    </section>
  );
}

export default Projects;
