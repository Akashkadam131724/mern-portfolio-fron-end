import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";

function Skills() {
  const data = SkillsData;
  return (
    <div className="bg-body-secondary">
      <div className="container section section-pad">
        <h1 className="section-title text-center">Skills</h1>
        <div className="d-flex justify-content-between flex-wrap">
          {data.map((item, indx) => {
            return <SkillCard key={indx} skill={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
