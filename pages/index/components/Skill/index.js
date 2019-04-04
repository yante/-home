import React from "react";
import { skills } from "../../../../src/data";

export default function Skill({ id }) {
  const skill = skills[id];
  return (
    <div className="skill">
      <style jsx>{`
        .skill {
          cursor: pointer;
          margin-right: 5px;
        }
        .skill:hover {
          border-bottom: 3px solid #000;
        }
      `}</style>
      {skill.name}
    </div>
  );
}
