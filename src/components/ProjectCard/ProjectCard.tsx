import { skills } from '../../data/skills';
import type { Project } from '../../data/projects';
import Button from '../Button/Button';
import SkillChip from '../SkillChip/SkillChip';
import './ProjectCard.scss';

interface ProjectCardProps {
  project: Project;
  // Desktop: "Project Minecraft", Mobile: "1.Minecraft"
  heading: string;
}

function ProjectCard({ project, heading }: ProjectCardProps) {
  // Tag-Namen aus projects.ts -> vollständige Skills aus skills.ts
  const projectSkills = project.tags
    .map((tag) => skills.find((skill) => skill.name === tag))
    .filter((skill) => skill !== undefined);

  return (
    <article className="project-card">
      <h3 className="project-card__title">{heading}</h3>

      <ul className="project-card__chips">
        {projectSkills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </ul>

      <img
        className="project-card__image"
        src={project.image}
        alt={`Screenshot of ${project.title}`}
      />

      <div className="project-card__body">
        <p className="project-card__text">{project.description}</p>
        <div className="project-card__actions">
          <Button href={project.docsUrl} variant="primary">
            Documentation
          </Button>
          <Button href={project.githubUrl} variant="outline">
            GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
