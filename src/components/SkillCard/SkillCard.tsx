import type { Skill } from '../../data/skills';
import './SkillCard.scss';

interface SkillCardProps {
  skill: Skill;
}

// Desktop: Karte mit Label. Bei Hover/Fokus erscheint darunter "How I used this skills".
function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="skill-card" tabIndex={0}>
      <div className="skill-card__box">
        {/* alt leer: Das Label direkt darunter benennt den Skill bereits */}
        <img src={skill.icon} alt="" />
        <span className="skill-card__label">{skill.cardLabel}</span>
      </div>

      <div className="skill-card__details">
        <h3 className="skill-card__details-title">How I used this skills</h3>
        <ul className="skill-card__details-list">
          {skill.uses.map((use) => (
            <li key={use}>{use}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;
