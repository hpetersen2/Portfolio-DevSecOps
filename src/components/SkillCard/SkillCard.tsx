import type { Skill } from '../../data/skills';
import './SkillCard.scss';

interface SkillCardProps {
  skill: Skill;
}

// Desktop: Karte mit Icon und Label. Bei Hover/Fokus zeigt dieselbe Karte
// "How I used this skill" mit den Stichpunkten.
function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="skill-card" tabIndex={0}>
      <div className="skill-card__face">
        {/* alt leer: Das Label direkt darunter benennt den Skill bereits */}
        <img src={skill.icon} alt="" />
        <span className="skill-card__label">{skill.cardLabel}</span>
      </div>

      <div className="skill-card__details">
        <h3 className="skill-card__details-title">How I used this skill</h3>
        <ul className="skill-card__details-list">
          {skill.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;
