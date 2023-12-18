function SkillCard({ skill }) {
  return (
    <div className="m-1">
      <div className="skill-card">
        <div className="skill-icon">{skill.icon}</div>
      </div>
    </div>
  );
}

export default SkillCard;
