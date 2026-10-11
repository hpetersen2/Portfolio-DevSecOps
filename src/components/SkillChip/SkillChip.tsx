import type { Skill } from '../../data/skills';
import './SkillChip.scss';

interface SkillChipProps {
  skill: Skill;
}

// Weißes Tag mit Icon und Name (Projekt-Detailkarte)
function SkillChip({ skill }: SkillChipProps) {
  return (
    <li className="skill-chip">
      <img src={skill.icon} alt="" />
      <span>{skill.chipLabel}</span>
    </li>
  );
}

export default SkillChip;
