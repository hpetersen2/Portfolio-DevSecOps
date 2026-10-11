import SkillCard from '../SkillCard/SkillCard';
import SkillCarousel from '../SkillCarousel/SkillCarousel';
import { skills } from '../../data/skills';
import './Skills.scss';

function Skills() {
  return (
    <section id="skills" className="skills section--dark">
      <div className="skills__inner container">
        <h2 className="section-title">My skills</h2>

        <div className="skills__grid only-desktop">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        <div className="skills__carousel only-mobile">
          <SkillCarousel />
        </div>
      </div>
    </section>
  );
}

export default Skills;
